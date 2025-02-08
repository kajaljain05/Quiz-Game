import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.jsonserve.com/Uw5CrX")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch(() => alert("Error fetching quiz data"));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/results", { state: { score, total: questions.length } });
    }
  };

  if (questions.length === 0) return <p>Loading...</p>;

  return <QuestionCard question={questions[currentIndex]} handleAnswer={handleAnswer} />;
};

export default Quiz;
