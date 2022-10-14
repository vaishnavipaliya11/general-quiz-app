import { useState } from "react";
import "./App.css";
import { QuizCategories } from "./components/categories/QuizCategories";
import { Header } from "./components/header/Header";
import { QuizCard } from "./components/QuizCard/QuizCard";
import { fetchQuizQuestions } from "./data/QuizApi";
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
  const [category, setCategory] = useState("");
  const [submit, setSubmit] = useState(false);

  console.log(userAnswer.length);
  console.log(number);
  
  
  const checkUserAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      if (questions[number].correct_answer === answer) {
        setScore((score) => score + 1);
      }
      setUserAnswer((prev) => [...prev, answer]);
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

  const startQuiz = async (categories: number, category: string) => {
    setLoading(true);
    setGameOver(false);
    const quizQuest = await fetchQuizQuestions(categories);
    setQuestions(quizQuest);
    setLoading(false);
    setScore(0);
    setCategory(category);
  };

  const resetHandler = () =>{
    setGameOver(true)
    setScore(0)
    setNumber(0)
    setSubmit(false)
 
  }

  return (
    <div className="App">
      <div className="quiz-app-container">
        <Header text={category ? category : "Unlocking knowledge at the speed of thought."} />
        {gameOver ? (
          <>
            <QuizCategories startQuiz={startQuiz}  />
          </>
        ) : null}

        {loading ? <p>Loading.....</p> : null}
        {!loading && !gameOver && !submit ? (
          <QuizCard
            questionNo={number + 1}
            totalQuestions={Total_Questions}
            question={questions[number]?.question}
            answers={questions[number]?.answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkUserAnswer}
          />
        ) : null}

        {!gameOver && !loading && number + 1 < Total_Questions ? (
          <button id="start-btn" onClick={nextBtnHandler} 
          disabled= {userAnswer.length > number ? false :true}>
            Next
          </button>
        ) : null}

        {!gameOver && !submit && number + 1 === Total_Questions ? (
          <button id="start-btn" onClick={() => setSubmit(true)}>submit</button>
        ) : null}

        
        {submit ? <div> <p>Your score is {score}</p> 
        <button id="start-btn" onClick={resetHandler}>Play Another Quiz </button></div> : null}
      </div>
    </div>
  );
}

export default App;
