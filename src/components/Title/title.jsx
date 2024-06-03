import React from "react";

const Title = ({ desc, semi, type = "" }) => {
  return (
    <h1
      className={`text-primary dark:text-darkPrimary ${
        type === "question"
          ? "text-3xl font-medium leading-[1.2]"
          : type === "score"
          ? "text-8xl leading-none font-semibold"
          : "text-6xl"
      } tracking-wide`}
    >
      {desc} <br />
      <span className="font-semibold">{semi}</span>
    </h1>
  );
};

export default Title;
