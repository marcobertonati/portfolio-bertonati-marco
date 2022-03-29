import * as React from "react";

export default function Form() {
  return (
    <article
      id="form-message"
      className="contact-form container mx-auto text-white flex flex-col justify-center items-center m-4"
    >
      <h3 className="font-bold text-3xl">Thanks for your visit!</h3>

      <form
        className="bg-white rounded-lg p-4 mx-6 w-full flex flex-col mt-2"
        action="https://formspree.io/f/mrgjakyb"
        method="POST"
      >
        <input
          name="email"
          type="email"
          className="p-2 text-[#63b8ea] text-bold"
          placeholder="Put our email"
          required
        ></input>

        <textarea
          name="message"
          id="textarea-form-message"
          className="p-2 pb-8 text-black"
          placeholder="Let me your message! 💬"
          required
        />
        <button
          type="submit"
          className="font-bold text-white bg-[#63b8ea] px-5 rounded-b-sm"
        >
          Send me the message!
        </button>
      </form>
    </article>
  );
}
