import React from "React";

export default function UnderContruction() {
  return (
    <div className="h-full">
      <div className="absolute inset-0 bg-[#16182C]">
        <div className=" h-full flex flex-col mx-auto justify-center items-center">
          <p className="text-[#63b8ea] font-bold">UNDER CONTRUCTION 🛠️</p>
          <p className="text-white flex justify-content items-center">
            <a href="https://www.figma.com/proto/EMymcRRF6McQIhvjEPJfY4/Portfolio-Web-Marco-Bertonati?node-id=1%3A195&scaling=scale-down&page-id=0%3A1">
              👉 Check Figma project!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
