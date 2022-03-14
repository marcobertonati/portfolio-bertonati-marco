import React from "React";
import ProyectReact from "../images/project-reactjs.png";

export default function Projects() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="font-bold text-3xl">PROJECTS</h3>

      <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white my-10">
        <img
          class="w-full"
          src={ProyectReact}
          alt="Proyecto de Reactjs de e-commerce"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-[#63b8ea]">
            Proyect Ecommerce
          </div>
          <p class="text-gray-700 text-base">
            Proyecto de Reactjs de e-commerce
          </p>
        </div>
      </div>
    </article>
  );
}
