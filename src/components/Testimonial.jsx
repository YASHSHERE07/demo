// src/components/Testimonial.jsx
import React from "react";

const Testimonial = ({ name, text }) => {
  return (
    <div className="rounded shadow-2xl p-5 mb-4">
      <p className="text-2xl font-bold pb-3">{name}</p>
      <div className="mb-2 flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-6 w-6 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Testimonial;
