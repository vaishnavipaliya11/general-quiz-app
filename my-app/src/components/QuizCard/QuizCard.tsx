import { QuizCardProps } from "./QuizCardProps";
import { ANSWER_OBJECT } from "../../App";
const QuizCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}: QuizCardProps) => {
  return (
    <div>
      <h3>
        Questions {questionNo}/{totalQuestions}
      </h3>
      <h4>{question}</h4>
      <div>
        {answers?.map((answer) => {
          return (
            <div>
              <button className="ans-btn"
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
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
