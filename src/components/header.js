import * as React from "react";
import illustration from "../images/profile-marco-bertonati-square-02.png";

export default function Header() {
  return (
    <header
      id="hi-header"
      className="container mx-auto flex justify-center items-center pt-16 flex-col"
    >
      <div>
        <p className="font-light text-white text-2xl flex justify-center">
          hi there! <div className="animate-bounce">👋</div>
        </p>
        <h1 className="font-bold text-white text-2xl sm:text-4xl flex justify-center">
          I'm @marcobertonati
        </h1>
        <p className="font-bold text-[#63B8EA] text-xl sm:text-3xl flex justify-center">
          Fullstack Dev
        </p>
      </div>
      <div className="rounded-full bg-white w-1/2 my-5">
        <img
          className="rounded-full"
          src={illustration}
          alt="Imagen de header que representa Marketing, Comunicación y Desarrollo Web. Marco Bertonati."
        ></img>
      </div>
    </header>
  );
}
