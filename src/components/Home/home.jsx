import React, { useState } from "react";
import { Button, Title, P } from "../index";

const Home = ({ subjects, setSubject, levels, setLevel }) => {
  const [instruction, setInstruction] = useState(
    "Pick a subject to get started:"
  );
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <section className="w-full flex flex-col gap-6 max-[1120px]:text-center max-[1120px]:gap-4 max-[1120px]:m-auto max-[530px]:gap-2.5">
        <Title desc={"Welcome to the"} semi={"Frontend Quiz!"} />
        <P desc={instruction} />
      </section>

      <section
        className="flex flex-col gap-6 max-[1120px]:m-auto max-[530px]:gap-4"
        onClick={(e) => {
          const elem = e.target;
          if (
            elem.tagName === "BUTTON" ||
            elem.parentElement.tagName === "BUTTON" ||
            elem.parentElement.parentElement.tagName === "BUTTON"
          )
            setInstruction("Pick a level to get started:");
        }}
      >
        {instruction.includes("subject")
          ? subjects.map((subject) => (
              <Button
                key={subject.toLowerCase()}
                category={"subject"}
                description={subject}
                setSubject={setSubject}
              />
            ))
          : levels.map((level, index) => (
              <Button
                key={level.toLowerCase()}
                category={"option"}
                index={index}
                description={level}
                selected={index === selectedIndex}
                setSelectedIndex={(index) => setSelectedIndex(index)}
              />
            ))}
        {instruction.includes("level") && (
          <Button
            key={"start"}
            category={"start"}
            selected={selectedIndex !== -1}
            startQuiz={() => setLevel(levels[selectedIndex].toLowerCase())}
          />
        )}
      </section>
    </>
  );
};

export default Home;
