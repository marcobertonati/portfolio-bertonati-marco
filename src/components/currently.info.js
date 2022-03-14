import * as React from "react";

export default function CurrentlyInfo() {
  return (
    <article className="container mx-auto text-white flex gap-x-4 justify-center items-center pb-8">
      <div className="flex flex-col justify-end">
        <p className="flex justify-end">attending 📚</p>
        <p className="flex justify-end font-bold text-[#63B8EA]">
          React JS on Platzi.com
        </p>
      </div>
      <div className="flex flex-col justify-start">
        <p>🕹️ working in</p>
        <p className="font-bold text-[#63B8EA]">Universidad Nacional de Cuyo</p>
      </div>
    </article>
  );
}
