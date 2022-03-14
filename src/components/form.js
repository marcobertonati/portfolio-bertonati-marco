import React from "React";

export default function Form() {
  return (
    <article className="container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8">
      <h3 className="font-bold text-3xl">Thanks for your visit!</h3>

      <form className="bg-white mx-6 w-full flex flex-col">
        <textarea
          className="pb-6 text-black"
          placeholder="Blah blah blah blah ... 💬"
        />
        <button className="font-bold text-white bg-[#63b8ea] px-5 rounded-b-sm">
          Send me the messagge!
        </button>
      </form>
    </article>
  );
}
