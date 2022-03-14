import React from "React";

export default function ContactForm() {
  return (
    <footer className="bg-slate-100">
      <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center ">
        <form classname="mt-16 text-center">
          <label
            for="contact-content"
            className="block text-gray-700 text-sm font-bold mb-2"
          />
          <div className="flex shadow rounded bg-white border p-2"> 
            <textarea
              id="contact-content"
              name="contact-content"
              placeholder="Dejame tu mensaje 😀"
            ></textarea>
            <button>¡Enviar!</button>
          </div>
        </form>
      </div>
    </footer>
  );
}
