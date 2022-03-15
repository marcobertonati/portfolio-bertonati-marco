import * as React from "react";
import HobbyCrossfit from "../images/hobbie-crossfit.jpg";

export default function Hobbies() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="font-bold text-3xl">HOBBIES</h3>

      <div className="mx-16 mt-8 h-full width-full object-contain">
        <img className="shadow-transparent" src={HobbyCrossfit} />
      </div>
    </article>
  );
}
