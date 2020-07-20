
export type SoloGameStatus = 'STARTING' | 'ON_GOING' | 'ENDED';

export interface Answer {
    answerText: string;
    correct: true;
}

export interface Question {
    answers: Array<Answer>;
    defaultWrongAnswerMessage: string;
    difficulty: 'HARD' | 'NORMAL' | 'EASY';
    id: string;
    questionText: string;
    time: number;
    selected?: 'NONE' | Answer;
}

export interface SoloGame {
    id: string;
    created: Date;
    currentQuestion: number;
    questions: Array<Question>;
    status: SoloGameStatus;
    user: any;
}