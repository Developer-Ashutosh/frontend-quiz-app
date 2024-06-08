import React from "react";
import { Button, P, Title } from "../index";

const ScorePage = ({ subject, score, highScore, playAgain }) => {
  return (
    <>
      <section className="w-full flex flex-col gap-6 max-[1120px]:text-center max-[1120px]:gap-4 max-[1120px]:m-auto">
        <Title desc={"Quiz completed"} semi={"You scored..."} />
      </section>

      <section className="flex flex-col gap-6 max-[1120px]:m-auto">
        <div className="flex items-center justify-center flex-col gap-4 px-4 h-96 w-[32rem] rounded-xl transition-transform shadow-lg lg:hover:shadow-black/20 max-[1350px]:w-[30rem] max-[1120px]:w-[35rem] max-[690px]:w-[28rem] max-[530px]:h-80 max-[530px]:w-[25rem] max-[530px]:gap-1 max-[430px]:w-[22rem] max-[385px]:w-80 max-[350px]:w-72 bg-secondary dark:bg-darkSecondary">
          {subject !== "" && (
            <div className="flex items-center justify-center flex-col gap-4 max-[530px]:gap-2.5">
              <span className="rounded-lg bg-primary p-3.5">
                <img
                  src={`./icon-${subject.toLowerCase()}.svg`}
                  alt={`${subject} Icon`}
                />
              </span>
              <h1 className="text-primary dark:text-darkPrimary font-medium text-4xl tracking-wider">
                {subject}
              </h1>
            </div>
          )}
          <Title desc={score} type="score" />
          <P desc={`out of ${highScore}`} />
        </div>
        <Button
          key={"playAgain"}
          category={"playAgain"}
          selected={true}
          startQuiz={() => playAgain()}
        />
      </section>
    </>
  );
};

export default ScorePage;
