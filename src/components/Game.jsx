import { useEffect, useState } from "react";

export function Game({ question, onClickVariant, step, data, usedQuestions }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const newPercentage = Math.round(
      (usedQuestions.length / data.length) * 100
    );
    setPercentage(newPercentage);
  }, [usedQuestions.length]);
  console.log(step);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, indx) => (
          <li key={text} onClick={() => onClickVariant(indx)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
