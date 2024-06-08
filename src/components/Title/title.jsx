import React from "react";

const Title = ({ desc, semi, type = "" }) => {
  return (
    <h1
      className={`text-primary dark:text-darkPrimary ${
        type === "question"
          ? "text-3xl font-medium !leading-[1.2] max-[530px]:text-2xl max-[430px]:text-[1.35rem]"
          : type === "score"
          ? "text-8xl leading-none font-semibold max-[530px]:text-6xl max-[430px]:text-5xl"
          : "text-6xl max-[530px]:text-5xl max-[430px]:text-4xl"
      } tracking-wide`}
    >
      {desc} <br />
      <span className="font-semibold">{semi}</span>
    </h1>
  );
};

export default Title;
