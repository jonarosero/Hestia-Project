export interface Question {
    answers: Array<{
        answerText: string;
        correct: true;
    }>;
    defaultWrongAnswerMessage: string;
    difficulty: 'HARD' | 'NORMAL' | 'EASY';
    id: string;
    questionText: string;
    time: number;
}

export interface SoloGame {
    created: Date;
    questions: Array<Question>;
    status: 'STARTING' | 'ON_GOING' | 'ENDED';
    user: any;
}