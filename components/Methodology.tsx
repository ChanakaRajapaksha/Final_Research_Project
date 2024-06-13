import React from 'react';

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Methodology = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        Project
        <span className="text-purple"> Methodology</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-20">
        <img
          src="./overall_diagram.png"
          alt="Overall Diagram"
          className="h-[30vh] lg:h-[60vh] w-full lg:w-auto rounded-lg shadow-xl lg:mr-4 mb-4 lg:mb-0"
        />
        <img
          src="./system_dia.png"
          alt="Overall Diagram"
          className="h-[30vh] lg:h-[60vh] w-full lg:w-auto rounded-lg shadow-xl lg:ml-4"
        />
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-20 w-10"
                />
                <h2>{company.name}</h2>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;