import * as React from "react";

export default function CurrentlyInfo() {
  return (
    <article className="container mx-auto flex gap-x-4 justify-center p-4 mb-6 text-white">
      <div className="flex flex-col justify-end sm:text-2xl">
        <p className="text-right">attending 📚</p>
        <p className="font-bold text-[#63B8EA] text-right">
          React JS on Platzi.com
        </p>
      </div>
      <div className="flex flex-col justify-start sm:text-2xl">
        <p>🕹️ working in</p>
        <p className="font-bold text-[#63B8EA]">Universidad Nacional de Cuyo</p>
      </div>
    </article>
  );
}
