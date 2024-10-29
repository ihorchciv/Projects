import { useEffect, useState } from "react";

export function Game({ question, onClickVariant, data, usedQuestions }) {
  const [percentage, setPercentage] = useState(0);
  const [shuffledVariants, setShuffledVariants] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    };

    setShuffledVariants(shuffleArray(question.variants));
  }, [question]);

  useEffect(() => {
    const newPercentage = Math.round(
      (usedQuestions.length / data.length) * 100
    );
    setPercentage(newPercentage);
  }, [usedQuestions.length, data.length]);

  return (
    <>
      <h4>
        {usedQuestions.length}/{data.length}
      </h4>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {shuffledVariants.map((text, indx) => (
          <li key={text} onClick={() => onClickVariant(indx)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
