import { QuizCardProps } from "./QuizCardProps";
import { ANSWER_OBJECT } from "../../App";
import "../../styles.css";
import "./QuizCard.css";
import { useState } from "react";
const QuizCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}: QuizCardProps) => {
  return (
    <div className="quiz-container">
      <h3>
        Questions {questionNo}/{totalQuestions}
      </h3>
      <h4>
        {questionNo}.<span> {question} </span>
      </h4>
      <div>
        {answers?.map((answer) => {
          return (
            <div className="ans-options">
              <button className="ans-btn" value={answer} onClick={callback}>
                {answer}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { QuizCard };
