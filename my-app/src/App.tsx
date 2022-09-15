import './App.css';
import { Header } from './components/header/Header';
import { QuizCard } from './components/QuizCard/QuizCard';

function App() {
  const startQuiz = () =>{

  }

  return (
    <div className="App">
    Quiz
    <Header username='orange' score={0}/>
    <button onClick={startQuiz}>Start</button>
    <p>Loading.....</p>
    <QuizCard  />
    <button>Next</button>
    
    </div>
  );
}

export default App;
