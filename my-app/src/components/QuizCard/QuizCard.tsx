import { QuizCardProps } from "./QuizCardProps";

const QuizCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,}: QuizCardProps) => {

  return (
    <div>
      Quiz Card
      <h3>
        Questions {questionNo}/{totalQuestions}
      </h3>
      <h4>{question}</h4>
      <div>
        {answers?.map((ans) => {
          return (
            <div>
              <button disabled={userAnswer} onClick={callback}>
                {ans}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { QuizCard };
