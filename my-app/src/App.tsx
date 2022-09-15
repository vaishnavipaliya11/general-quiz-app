import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { QuizCard } from "./components/QuizCard/QuizCard";
import { fetchApi } from "./data/QuizApi";
import { ApiResponseState } from "./data/QuizApi";

function App() {
  type ANSWER_OBJECT = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };
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
    setNumber((num) => num + 1);
    setScore(0);
  };
  console.log("questions", questions);

  const checkUserAnswer = () => {};
  const Total_Questions = 5;
  return (
    <div className="App">
      <Header username="orange" score={0} />
      <button onClick={startQuiz}>Start</button>
      <p>Loading.....</p>
      <QuizCard
        questionNo={number + 1}
        totalQuestions={Total_Questions}
        question={questions[number]?.question}
        answers={questions[number]?.answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkUserAnswer}
      />
      <button>Next</button>
    </div>
  );
}

export default App;
