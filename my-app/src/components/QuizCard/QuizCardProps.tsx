import { ANSWER_OBJECT } from "../../App";

export type QuizCardProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent) => void;
    userAnswer: ANSWER_OBJECT | undefined;
    questionNo: number;
    totalQuestions: number;
};
