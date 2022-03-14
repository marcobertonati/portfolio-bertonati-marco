import React from "React";
import GithubIcon from "../images/Icon-github.png";
import LinkedinIcon from "../images/Icon-linkedin.png";

export default function Contact() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="font-bold text-3xl
      ">CONTACT</h3>
      <p className="mt-4">📬 marko.bertonati@gmail.com 📲 +54 9 261 617 1509</p>
      <div className="flex mt-4">
        <div className="flex justify-end">
          <img src={GithubIcon} className="max-w-full h-2/6	justify-center" />
        </div>
        <div className="flex justify-start">
          <img src={LinkedinIcon} className="max-w-full h-2/6 justify-center" />
        </div>
      </div>
    </article>
  );
}
