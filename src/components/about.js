import * as React from "react";
import ImageAbout from "../images/about-marco-bertonati.jpg";

export default function About() {
  return (
    <article className="container mx-auto text-white flex gap-x-4 justify-center items-center mb-8 bg-[#2B2C6E]">
      <div className="">
        <img className="" src={ImageAbout} />
      </div>

      <div className="">
        <p className="text-[#63B8EA] font-bold">ABOUT ME 🤟</p>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printing.
        </h2>
      </div>
    </article>
  );
}
