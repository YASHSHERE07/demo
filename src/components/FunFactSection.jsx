import React from "react";
import { Fade } from "react-reveal";

const FunFactSection = () => {
  const facts = [
    { count: 1100, label: "Happy clients", delay: "200ms" },
    { count: 300, label: "Study visa", delay: "200ms" },
    { count: 200, label: "Permanent Residence", delay: "400ms" },
    { count: 600, label: "Visitor Visa", delay: "400ms" },
  ];

  return (
    <section className="funfact-section centred py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {facts.map((fact, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <Fade bottom delay={parseInt(fact.delay)}>
                <div className="counter-block-one bg-white p-6 rounded shadow-lg text-center">
                  <div className="inner-box">
                    <div className="count-outer count-box text-4xl font-bold text-blue-600">
                      <span className="count-text">{fact.count}</span>
                    </div>
                    <h3 className="headingtwo mt-2 text-lg">{fact.label}</h3>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
