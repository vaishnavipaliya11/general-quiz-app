import "../../styles.css";
type QuizCatType = {
  startQuiz: (categories: number, category: string) => Promise<void>;
};

const QuizCategories = ({ startQuiz }: QuizCatType) => {
  const quizCatlist = [
    { catName: "General Knowledge", catNum: 9, catImg: "asset/gk.jpg" },

    { catName: "Flims", catNum: 11, catImg: "asset/flims.jpg" },
    { catName: "Computers", catNum: 18, catImg: "asset/computer.jpg" },
    { catName: "Sports", catNum: 21, catImg: "asset/sports.jpg" },
  ];
  return (
    <div className="common-flex-row">
      {quizCatlist.map(({ catName, catNum, catImg }) => {
        return (
          <div className="common-flex-column" key={catNum}>
            <img src={catImg} />
            <h3>{catName}</h3>
            <button onClick={() => startQuiz(catNum, catName)} id="start-btn">
              Play Now
            </button>
          </div>
        );
      })}
    </div>
  );
};
export { QuizCategories };
// array - map - view
