import React from "react";
import ThemeBtn from "../ThemeBtn/themeBtn";

const Header = ({ subject }) => {
  return (
    <header
      className={`w-full flex ${
        subject !== "" ? "justify-between" : "justify-end"
      } h-28 pt-12 px-14 max-[1120px]:px-8 max-[1120px]:pt-5 max-[530px]:px-5 max-[530px]:pt-0`}
    >
      {subject !== "" && (
        <div className="flex items-center gap-4 max-[430px]:gap-2">
          <span className="rounded-lg bg-secondary p-[.35rem] max-[530px]:p-1">
            <img
              src={`./icon-${subject.toLowerCase()}.svg`}
              alt={`${subject} Icon`}
              className="h-full w-full"
            />
          </span>
          <h1 className="text-primary dark:text-darkPrimary font-medium text-[1.7rem] tracking-wider max-[530px]:text-2xl max-[430px]:text-xl">
            {subject}
          </h1>
        </div>
      )}
      <ThemeBtn />
    </header>
  );
};

export default Header;
