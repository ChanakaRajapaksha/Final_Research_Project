import React from "react";

const Suranimala = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        The Story of the <span className="text-purple">Suranimala Service</span>
      </h1>

      <div className="flex justify-center py-20">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/CEFMRlhl3MI?si=v7Rt668CsueBtfaC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="max-w-full md:max-w-2xl"
        ></iframe>
      </div>

    </div>
  );
};

export default Suranimala;
