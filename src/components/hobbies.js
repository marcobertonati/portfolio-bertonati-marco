import * as React from "react";
import HobbyCrossfit from "../images/hobbie-crossfit.jpg";

export default function Hobbies() {
  return (
    <article className="contact-form container mx-auto text-white flex flex-col justify-center items-center m-4">
      <h3 className="flex justify-center items-center font-bold text-3xl text-white">
        {" "}
        <span className="text-[#63B8EA]"> {"{ "}</span>HOBBIES
        <span className="text-[#63B8EA]"> {" }"}</span>
      </h3>

      <div className="mx-16 mt-8 h-full width-full object-contain">
        <img
          alt="People doing Crossfit"
          className="shadow-transparent"
          src={HobbyCrossfit}
        />
      </div>
    </article>
  );
}
