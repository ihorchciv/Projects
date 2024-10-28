import { useState } from "react";
import "./index.scss";
import Result from "./components/Result";
import { Game } from "./components/Game";
import data from "./Data/data.json";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState([]);

  const question = data[step];

  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }

    let newStep;
    do {
      newStep = Math.floor(Math.random() * data.length);
    } while (
      usedQuestions.includes(newStep) &&
      usedQuestions.length < data.length
    );

    setUsedQuestions((prev) => [...prev, newStep]);
    setStep(newStep);
  };

  const isGameOver = usedQuestions.length === data.length;

  return (
    <div className="App">
      {!isGameOver ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          data={data}
          usedQuestions={usedQuestions}
        />
      ) : (
        <Result correct={correct} data={data} />
      )}
    </div>
  );
}

export default App;
