export type QuizCardProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent) => void;
    userAnswer: any;
    questionNo: number;
    totalQuestions: number;
};
