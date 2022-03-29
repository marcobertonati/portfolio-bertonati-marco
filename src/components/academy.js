import * as React from "react";

/*

LINEA DE TIEMPO TUTORIAL:

https://webdesign.tutsplus.com/es/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528

*/
export default function Academy() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="flex justify-center items-center font-bold text-3xl">
        {" "}
        <span className="text-[#63B8EA]"> {"{ "}</span>ACADEMY
        <span className="text-[#63B8EA]"> {" }"}</span>
      </h3>
      <div className="timeline">
        <ul>
          <li className="li-triangle">
            <div className="triangle"></div>
          </li>
          <li>
            <time>What's next? 😯</time>
            <div className="line"></div>
          </li>
          <li>
            <time>February 2022</time>
            <div className="line"></div>
            <p>I finished a FULL STACK MERN course in Coderhouse institute.</p>
          </li>

          <li>
            <time>May 2021</time>
            <div className="line"></div>
            <p>I finished a ReactJs course in Coderhouse institute.</p>
          </li>

          <li>
            <time>December 2020</time>
            <div className="line"></div>
            <p>
              I finished a FULL STACK WEB course in Programá desde tu Casa
              institute.
            </p>
          </li>

          <li>
            <time>November 2020</time>
            <div className="line"></div>

            <p>I finished a introduction course to Java in UTN Mendoza.</p>
          </li>

          <li>
            <time>November 1989</time>
            <div className="line"></div>

            <p>What's up world!? I'm here!</p>
          </li>
        </ul>
      </div>
    </article>
  );
}
