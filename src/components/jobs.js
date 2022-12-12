import * as React from "react";
import ImageIgnite from "../images/ignite-globals.jpg";

export default function Jobs() {
  return (
    <article className="container mx-auto lg:max-w-3xl mb-12 rounded-3xl text-white">
        <h3 className="flex justify-center items-center font-bold text-3xl">
        {" "}
        <span className="text-[#63B8EA]"> {"{ "}</span>JOBS
        <span className="text-[#63B8EA]"> {" }"}</span>
      </h3>
      <div className="mx-4 rounded-3xl md:flex  bg-[#2B2C6E] shadow-xl mt-8">
        <div className="hidden md:flex lg:flex-none ">
          <img
            className="lg:max-h-96 rounded-l-3xl max-w-[150px]"
            alt="About Marco Bertonati."
            src={ImageIgnite}
          />
        </div>

        <div className="p-4 rounded-lg">
          <h2
            id="jobs"
            className=" text-xl mb-2 text-[#63B8EA] font-bold"
          >
            Ignite Globals
          </h2>
          <h3
            id="jobs"
            className=" text-xl mb-2 text-[#FDFDFD] font-bold"
          >
            Since October 2022 - Present
          </h3>
          <p className="flex justify-center items-center rounded-lg">
            I'm working as a Frontend Developer using technologies as NextJs, ReactJs, Styled-Components, Scss, Bablic, Classnames, Git, Github.
          </p>
        </div>
      </div>
    </article>
  );
}
