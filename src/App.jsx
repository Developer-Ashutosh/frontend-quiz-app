import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Home, Battleground, ScorePage } from "./components";
import data from "./data";

const subjects = Object.keys(data);

const App = () => {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  return (
    <>
      <Header subject={subject} />
      <main className="w-full flex items-start justify-between gap-14 px-28 max-[1350px]:px-16 max-[1120px]:flex-col max-[1120px]:gap-8 max-[580px]:px-10 max-[530px]:px-4">
        {level === null ? (
          <Home
            subjects={subjects}
            setSubject={(subject) => setSubject(subject)}
            levels={
              subject != "" &&
              Object.keys(data[subject]).map(
                (level) =>
                  level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()
              )
            }
            setLevel={(level) => setLevel(level)}
          />
        ) : quizEnd !== true ? (
          <Battleground
            questions={data[subject][level]}
            updateScore={() => setScore((score) => score + 1)}
            endQuiz={() => setQuizEnd(true)}
          />
        ) : (
          <ScorePage
            subject={subject}
            score={score}
            highScore={data[subject][level].length}
            playAgain={() => {
              setSubject("");
              setLevel(null);
              setScore(0);
              setQuizEnd(false);
            }}
          />
        )}
      </main>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
