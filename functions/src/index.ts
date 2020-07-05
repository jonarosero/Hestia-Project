import { initializeApp } from 'firebase-admin';
import * as functions from 'firebase-functions';

const admin = initializeApp();
const firestore = admin.firestore();
const database = admin.database();

export const createSoloGame = functions.https.onCall(async (data, context) => {
    console.log(data);
    const questionsRef = '/knowledge-areas/ingenieria-web/questions-blocks/MtsLtUc7Ecdr9IRZRyNp/questions';

    const { docs, empty } = await firestore.collection(questionsRef).get();

    if (empty) {
        return null;
    }

    const questions = docs.map(d => {
        const { answers, defaultWrongAnswerMessage, difficulty, id, image, questionText, time } = d.data();

        return { answers, defaultWrongAnswerMessage, difficulty, id, image, questionText, time };
    });
    const user = context.auth?.uid;

    const ref = await database.ref('single-player').push({ user, questions, status: 'STARTING', created: Date.now() });

    return ref.key;
});
