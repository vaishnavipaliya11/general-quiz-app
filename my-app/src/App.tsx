import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { QuizCard } from "./components/QuizCard/QuizCard";
import { fetchApi } from "./data/QuizApi";
import { ApiResponseState } from "./data/QuizApi";
import "./styles.css";
export type ANSWER_OBJECT = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
function App() {
  const [questions, setQuestions] = useState<ApiResponseState[]>([]);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<ANSWER_OBJECT[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const quizQuest = await fetchApi();
    setQuestions(quizQuest);
    setLoading(false);
    setScore(0);
  };

  const checkUserAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      if (questions[number].correct_answer === answer) {
        setScore((score) => score + 1);
      }

      // setUserAnswer((prev) => [...prev, answer]);
    }
  };
  const Total_Questions = 5;
  const nextBtnHandler = () => {
    {
      number + 1 === Total_Questions
        ? setGameOver(true)
        : setNumber((num) => num + 1);
    }
  };

  return (
    <div className="App">
      <div className="quiz-app-container">
        <Header username="Vaishnavi" />
        {gameOver || userAnswer.length === Total_Questions ? (
          <button id="start-btn" onClick={startQuiz}>
            Start
          </button>
        ) : null}

        {loading ? <p>Loading.....</p> : null}
        {!loading && !gameOver ? (
          <QuizCard
            questionNo={number + 1}
            totalQuestions={Total_Questions}
            question={questions[number]?.question}
            answers={questions[number]?.answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkUserAnswer}
          />
        ) : null}

        {!gameOver && !loading && number !== Total_Questions + 1 ? (
          <button id="start-btn" onClick={nextBtnHandler}>
            Next
          </button>
        ) : null}

        <p>Your score is {score}</p>
      </div>
    </div>
  );
}

export default App;
