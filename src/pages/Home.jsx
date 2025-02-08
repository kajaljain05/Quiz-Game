import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz App</h1>
      <button onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};

export default Home;
