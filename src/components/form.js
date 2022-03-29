import * as React from "react";

export default function Form() {
  return (
    <article
      id="form-message"
      className="container contact-form  mx-auto text-white flex flex-col justify-center items-center m-4"
    >
      <h3 className="font-bold text-3xl">Thanks for your visit!</h3>

      <form
        className="bg-white rounded-lg p-4 w-4/5 md:w-full lg:w-2/3 flex flex-col mt-4"
        action="https://formspree.io/f/mrgjakyb"
        method="POST"
      >
        <input
          name="email"
          type="email"
          className="p-2 text-[#63b8ea] text-bold"
          placeholder="Type your email "
          required
        ></input>

        <textarea
          name="message"
          id="textarea-form-message"
          className="p-2 pb-8 text-black"
          placeholder="Leave your message! 💬"
          required
        />
        <button
          type="submit"
          className="font-bold text-white bg-[#63b8ea] px-5 rounded-b-sm"
        >
          SEND!
        </button>
      </form>
    </article>
  );
}
