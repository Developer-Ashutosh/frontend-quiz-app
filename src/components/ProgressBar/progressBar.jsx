import React from "react";

const ProgressBar = ({ width, length }) => {
  return (
    <div className="w-full max-w-2xl px-[.3rem] py-1 rounded-xl bg-secondary dark:bg-darkSecondary shadow max-[1120px]:m-auto">
      <div
        className="h-2 rounded-xl bg-purple transition-all max-[530px]:h-1.5"
        style={{ width: `${(width * 100) / length}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
