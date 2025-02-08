import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 1 };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
};

export default Results;
