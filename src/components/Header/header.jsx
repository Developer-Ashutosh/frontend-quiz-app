import React from "react";
import ThemeBtn from "../ThemeBtn/themeBtn";

const Header = ({ subject }) => {
  return (
    <header
      className={`w-full flex ${
        subject !== "" ? "justify-between" : "justify-end"
      } h-28 pt-12 px-14 max-[1120px]:px-8 max-[1120px]:pt-5`}
    >
      {subject !== "" && (
        <div className="flex items-center gap-4">
          <span className="rounded-lg bg-secondary p-[.35rem]">
            <img
              src={`./icon-${subject.toLowerCase()}.svg`}
              alt={`${subject} Icon`}
              className="h-full w-full"
            />
          </span>
          <h1 className="text-primary dark:text-darkPrimary font-medium text-[1.7rem] tracking-wider">
            {subject}
          </h1>
        </div>
      )}
      <ThemeBtn />
    </header>
  );
};

export default Header;
