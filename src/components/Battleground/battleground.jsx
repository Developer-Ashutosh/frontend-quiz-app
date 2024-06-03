import React, { useState } from "react";
import { Button, Title, P, ProgressBar } from "../index";
let qn = 0;

const Battleground = ({ questions, updateScore, endQuiz }) => {
  const { question, options, answer } = questions[qn];
  const [type, setType] = useState("submit");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [state, setState] = useState(options.map(() => "pending"));

  return (
    <>
      <section className="w-full flex flex-col gap-6 max-[1120px]:text-center max-[1120px]:gap-4 max-[1120px]:m-auto">
        <P desc={`question ${qn + 1} of ${questions.length}`} />
        <Title desc={question} type="question" />
        <ProgressBar width={qn + 1} length={questions.length} />
      </section>

      <section className="flex flex-col gap-6 max-[1120px]:m-auto">
        {options.map((option, i) => (
          <Button
            key={`#${qn}${i}`}
            category={"option"}
            index={i}
            description={option}
            state={state[i]}
            selected={i === selectedIndex}
            setSelectedIndex={(index) => setSelectedIndex(index)}
            currentState={type}
          />
        ))}
        <Button
          key={type}
          category={type}
          selected={selectedIndex !== -1}
          isSubmitted={() => {
            if (selectedIndex !== -1) {
              if (type === "submit") {
                setType("next");
                setState(
                  options.map((_, i) =>
                    i === selectedIndex
                      ? answer === selectedIndex
                        ? ("correct", updateScore())
                        : "incorrect"
                      : "pending"
                  )
                );
                if (!state.includes("correct"))
                  setState((state) =>
                    state.map((s, i) => (i === answer ? "correct" : s))
                  );
              }
              if (type === "next") {
                setType("submit");
                setSelectedIndex(-1);
                setState(options.map(() => "pending"));
                qn === questions.length - 1 && ((qn = -1), endQuiz());
                qn < questions.length - 1 && qn++;
              }
            }
          }}
        />
      </section>
    </>
  );
};

export default Battleground;
