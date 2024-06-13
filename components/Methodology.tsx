import React from "react";
import Image from "next/image"; // Import Image from next/image
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
        <div className="relative h-auto w-full lg:w-auto rounded-lg shadow-xl lg:mr-4 mb-4 lg:mb-0">
          <Image
            src="/overall_diagram.png"
            alt="Overall Diagram"
            layout="responsive"
            width={800}
            height={600}
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="relative h-auto w-full lg:w-auto rounded-lg shadow-xl lg:ml-4">
          <Image
            src="/system_dia.png"
            alt="System Diagram"
            layout="responsive"
            width={800}
            height={600}
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                <div className="relative md:w-20 w-10">
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={80}
                    height={40}
                    objectFit="contain"
                  />
                </div>
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
