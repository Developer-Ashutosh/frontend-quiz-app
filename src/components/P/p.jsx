import React from "react";

const P = ({ desc }) => {
  return (
    <p className="text-secondary dark:text-darkSecondary text-[1.2rem] italic tracking-wider max-[530px]:text-[1.1rem]">
      {desc}
    </p>
  );
};

export default P;
