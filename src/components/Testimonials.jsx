// src/pages/Testimonials.jsx
import React from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Jane Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Alice Johnson",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Bob Brown",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Charlie Davis",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Diana Evans",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Eve Foster",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Frank Green",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Grace Hill",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
  {
    name: "Henry Irving",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus enim neque vitae autem ea voluptate, error id deserunt eius odio a repudiandae beatae non pariatur consequatur facilis adipisci ipsum!",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
