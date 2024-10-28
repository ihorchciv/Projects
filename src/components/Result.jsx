function Result({ correct, data }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You guessed {correct} out of {data.length}
      </h2>
      <a href="">
        <button>Try again</button>
      </a>
    </div>
  );
}
export default Result;
