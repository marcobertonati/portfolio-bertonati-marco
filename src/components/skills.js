import * as React from "react";

export default function Skills() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="font-bold text-3xl">SKILLS</h3>

      <div className="grid grid-cols-3 gap-4 mt-8">
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

      <p className="flex justify-center text-center mt-8">
        🔊 English B1+ certificated 2020 by Instituto Intercultural de Mendoza
      </p>
    </article>
  );
}
