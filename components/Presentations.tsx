import React from 'react';

import { projectPresentations } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaDownload } from "react-icons/fa"; // Import the download icon

const Presentations = () => {
  return (
    <div className="py-20 w-full" id="presentations">
      <h1 className="heading">
        Project <span className="text-purple">Presentations</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {projectPresentations.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.status}
                </p>
                <a
                  href={card.slideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple mt-3"
                >
                  <FaDownload className="mr-2" />
                  Download Presentation
                </a>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Presentations;