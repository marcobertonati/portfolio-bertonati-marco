import * as React from "react";
import ImageAbout from "../images/about-marco-bertonati.jpg";

export default function About() {
  return (
    <article className="container mx-auto md:gap-x-4 rounded-3xl text-white bg-[#2B2C6E]">
      <div className="hidden md:flex h-full width-full object-contain">
        <img className="" src={ImageAbout} />
      </div>

      <div className="p-4 rounded-lg">
        <p className="text-center text-xl mb-2 text-[#63B8EA] font-bold">
          ABOUT ME 🤟
        </p>
        <h2 className="flex justify-center items-center rounded-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printing.
        </h2>
      </div>
    </article>
  );
}
