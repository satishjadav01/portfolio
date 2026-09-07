import React from "react";

function Heading({ FWord, LWord }) {
  return (
    <h1 className="text-text-main text-center lg:text-left font-extrabold text-[54px] md:text-[80px] lg:text-[94px] font-inter leading-tight m-0 p-0">
      {FWord} <span className="text-text-main/20">{LWord}</span>
    </h1>
  );
}

export default Heading;
