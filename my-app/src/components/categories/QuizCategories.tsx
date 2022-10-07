import { Dispatch, SetStateAction } from "react";

type QuizCatType = {
 
  startQuiz: (categories: number, category: string)=> Promise<void>;
};

const QuizCategories = ({  startQuiz }: QuizCatType) => {
  const quizCatTypes = [
    { catName: "General Knowledge", catNum: 9 },
    { catName: "Sports", catNum: 21 },
    { catName: "Flims", catNum: 11 },
    { catName: "Computers", catNum: 18 },
  ];
  return (
    <div>

      {quizCatTypes.map(({catName,catNum})=>{
        return(
          <div key={catNum}>
            <h3>{catName}</h3>
            <button onClick={() => startQuiz(catNum ,catName)}>Play Now</button>
          </div>
        )
      })}
    
    </div>
  );
};
export { QuizCategories };
// array - map - view
