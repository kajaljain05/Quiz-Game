const QuestionCard = ({ question, handleAnswer }) => {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{question.question}</h2>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.isCorrect)} style={{ display: "block", margin: "10px auto" }}>
            {option.text}
          </button>
        ))}
      </div>
    );
  };
  
  export default QuestionCard;
  