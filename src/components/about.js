import * as React from "react";
import ImageAbout from "../images/about-marco-bertonati.jpg";

export default function About() {
  return (
    <article className="container mx-auto md:gap-x-4 mb-12 rounded-3xl text-white">
      <div className="mx-4 rounded-3xl bg-[#2B2C6E] shadow-xl">
        <div className="hidden md:flex h-full width-full object-contain">
          <img
            alt="Foto de la sección 'acerca de' Marco Bertonati."
            src={ImageAbout}
          />
        </div>

        <div className="p-4 rounded-lg">
          <h2
            id="about-me"
            className="text-center text-xl mb-2 text-[#63B8EA] font-bold"
          >
            ABOUT ME
          </h2>
          <p className="flex justify-center items-center rounded-lg">
            I'm Marco Bertonati from Mendoza (Argentina). Since kid (07/11/1989)
            I've been interested in technology, comunication & design. I got a
            bachelor degree in Social Comunication (Unidversidad Nacional de
            Cuyo) and currently I'm expading my knowledge area to web
            development.
          </p>
        </div>
      </div>
    </article>
  );
}
