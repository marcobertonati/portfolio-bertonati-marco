import * as React from "react";

/*

LINEA DE TIEMPO TUTORIAL:

https://webdesign.tutsplus.com/es/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528

*/
export default function Academy() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="font-bold text-3xl">ACADEMY</h3>

      <div className="timeline">
        <ul>
          <li className="triangle-timeline"></li>
          <li>
            <time>What's next? 😯 </time>
          </li>
          <li>
            <time>February 2022</time>
            <div>Full Stack MERN</div>
          </li>

          <li>
            <time>May 2021</time>
            <div>Reactjs</div>
          </li>

          <li>
            <time>December 2020</time>
            <div>Fullstack Web</div>
          </li>

          <li>
            <time>November 2020</time>
            <div>Aprendiendo a programar</div>
          </li>

          <li>
            <time>November 1989</time>
            <div>What's up world!? 🐣</div>
          </li>
        </ul>
      </div>
    </article>
  );
}
