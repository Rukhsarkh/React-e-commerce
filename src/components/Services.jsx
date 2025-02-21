import React from "react";
import { ServicesObj } from "../constants";

const Services = () => {
  return (
    <div className="max-container mx-auto flex justify-center items-center">
      <div className="flex flex-col sm:flex-row mb-10">
        {ServicesObj.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 items-center relative before:content-[''] before:absolute before:w-24 before:h-24 before:rounded-full before:border-8 before:border-gray-400 before:-z-10 before:pointer-events-none before:-top-2 mx-4 sm:mx-14 mb-8 sm:mb-0"
          >
            <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center">
              <img
                src={item.img}
                className="p-3"
                alt={item.title}
                aria-label={item.title}
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="font-bold text-lg uppercase">{item.title}</h1>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
