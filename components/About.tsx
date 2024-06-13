import React from "react";
import { teams } from "@/data";
import { PinContainer } from "./ui/Pin";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import LinkedIn and Gmail icons

const About = () => {
  return (
    <div className="py-20" id="about">
      <h1 className="heading">
        Meet <span className="text-purple">Our Team!</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {teams.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title="Team Suranimala">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-[-20px]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute w-[400px] h-[500px] top-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                <br></br>
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm text-purple"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des2}
              </p>

              <h1 className="lg:text-xl lg:font-normal font-light text-sm text-purple">
                Department
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.depart}
              </p>
              <hr />

              <div className="flex justify-between items-center mt-4">
                <a
                  href={`mailto:${item.email}`}
                  className="flex items-center text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="mr-2 text-purple" />
                  <span style={{ color: "#CBACF9" }}>Gmail</span>
                </a>
                <a
                  href={item.linkedin}
                  className="flex items-center text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2 text-purple" />
                  <span style={{ color: "#CBACF9" }}>LinkedIn</span>
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
