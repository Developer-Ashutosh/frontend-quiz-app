import React from "react";

const button = ({
  category,
  description,
  index,
  state = "pending",
  setSubject,
  selected,
  currentState,
  setSelectedIndex = () => {},
  startQuiz = () => {},
  isSubmitted = () => {},
}) => {
  return (
    <button
      onClick={() => {
        setSelectedIndex(index);
        selected && startQuiz();
        category === "subject" && setSubject(description);
        isSubmitted();
      }}
      className={`group flex items-center h-[5.5rem] w-[32rem] min-w-96 m-auto px-[.9rem] rounded-xl relative shadow-lg transition-transform max-[1350px]:w-[30rem] max-[690px]:w-[28rem] ${
        currentState !== "next" &&
        "lg:hover:shadow-black/20 lg:hover:scale-[.98]"
      } ${
        ["submit", "next", "start", "playAgain"].includes(category)
          ? `justify-center bg-purple ${
              selected ? "opacity-100" : "opacity-60"
            } h-[4.5rem] max-[1120px]:h-16`
          : "justify-start bg-secondary dark:bg-darkSecondary"
      } ${
        category === "option" &&
        `border-2 ${currentState !== "next" && "lg:hover:border-purple "} ${
          selected
            ? state === "correct"
              ? `border-green`
              : state === "incorrect"
              ? `border-red`
              : `border-purple`
            : "border-transparent"
        } outline-none`
      }`}
      disabled={currentState === "next"}
    >
      {["submit", "next", "start", "playAgain"].includes(category) ? (
        <span className="text-2xl tracking-wider text-darkPrimary font-medium">
          {category === "submit"
            ? "Submit Answer"
            : category === "next"
            ? "Next Question"
            : category === "playAgain"
            ? "Play Again"
            : "Start Quiz!"}
        </span>
      ) : (
        <>
          <span
            className={`rounded-lg mr-6 ${
              category === "subject"
                ? "p-2 bg-primary"
                : `py-[.35rem] px-4 ${
                    selected
                      ? state === "correct"
                        ? `bg-green`
                        : state === "incorrect"
                        ? `bg-red`
                        : `bg-purple`
                      : "bg-primary lg:group-hover:bg-[#F6E7FF]"
                  }`
            }`}
          >
            {category === "subject" ? (
              <img
                src={`./icon-${description.toLowerCase()}.svg`}
                alt={`${description} Icon`}
              />
            ) : (
              <span
                className={`text-[1.75rem] font-semibold  ${
                  selected
                    ? "text-darkPrimary"
                    : "text-secondary lg:group-hover:text-purple "
                }`}
              >
                {["A", "B", "C", "D"][index]}
              </span>
            )}
          </span>
          <h1
            className={`text-primary dark:text-darkPrimary font-medium text-left flex-1  ${
              category === "subject"
                ? "text-2xl tracking-wider"
                : "text-xl tracking-wide leading-6"
            }`}
          >
            {description}
          </h1>
          {category === "option" && state !== "pending" && (
            <span className="h-7 w-7 flex-shrink-0">
              <img
                src={`./icon-${state}.svg`}
                alt={`${state.charAt(0).toUpperCase() + state.slice(1)} Icon`}
                className="h-full w-full"
              />
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default button;
