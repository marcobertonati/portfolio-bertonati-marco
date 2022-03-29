import * as React from "react";

export default function Skills() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="flex justify-center items-center font-bold text-3xl">
        {" "}
        <span className="text-[#63B8EA]"> {"{ "}</span>SKILLS
        <span className="text-[#63B8EA]"> {" }"}</span>
      </h3>
      <div className="skills-grid mt-4 p-2 rounded-3xl">
        <div className="table-grid grid grid-cols-4 gap-4 p-4 text-center bg-[#16182c]">
          <div>Javascript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>ReactJs</div>
          <div>NodeJs</div>
          <div>Gatsby</div>
          <div>Tailwind</div>
          <div>Bootstrap</div>
          <div>SQL</div>
          <div>MongoDB</div>
          <div>Express</div>
        </div>
      </div>

      <p className="mt-8 text-center p-4">
        🔊 <span className="text-[#63B8EA] font-bold ">English B1+ </span>{" "}
        certificated 2020 by Instituto Intercultural de Mendoza
      </p>
    </article>
  );
}
