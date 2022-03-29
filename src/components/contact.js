import * as React from "react";
import GithubIcon from "../images/Icon-github.png";
import LinkedinIcon from "../images/Icon-linkedin.png";

export default function Contact() {
  return (
    <article className="container mx-auto flex flex-col gap-x-4 justify-center items-center mb-8 text-white">
      <div className="mb-4">
        <h3 className="flex justify-center items-center font-bold text-3xl">
          {" "}
          <span className="text-[#63B8EA]"> {"{ "}</span>CONTACT
          <span className="text-[#63B8EA]"> {" }"}</span>
        </h3>
        <div className="flex flex-col justify-center items-center text-xl gap-y-1">
          <p className="mt-4">📬 marko.bertonati@gmail.com</p>
          <p>📲 +54 9 261 617 1509</p>
        </div>
      </div>
      <div>
        <div className="flex h-full object-contain max-h-16	">
          <div className="flex justify-end">
            <a
              className="flex justify-end"
              href="https://github.com/marcobertonati"
            >
              <img
                alt="Github de Marco Bertonati."
                src={GithubIcon}
                className="max-w-full	justify-center"
              />
            </a>
          </div>
          <div className="flex justify-start">
            <a
              className="flex justify-start"
              href="https://www.linkedin.com/in/marcobertonati/"
            >
              <img
                alt="Linkedin de Marco Bertonati."
                src={LinkedinIcon}
                className="max-w-full justify-center"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
