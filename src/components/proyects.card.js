import * as React from "react";
import "../styles/global.css";

export default function Card({ title, description, thumbnail, link }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white my-10 mx-4">
      <img src={thumbnail} class="w-full" alt={title} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-[#63b8ea] px-4">{title}</div>
        <p class="text-gray-700 text-base px-4">{description} </p>
        <div class="flex j px-4 mt-4">
          <a href={link} class="rounded-full text-white bg-[#63b8ea] py-2 px-4">
            Go to the project!
          </a>
        </div>
      </div>
    </div>
  );
}
