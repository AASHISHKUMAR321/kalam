import React from "react";

const Intro = () => {
  return (
    <div className="w-full h-[550px] bg-yellow-400 text-white pt-32 flex justify-center gap-32">
      <div className="flex flex-col gap-10 text-black">
        <header className="text-8xl"> Stay curious.</header>
        <div className="text-2xl w-[450px]">
          Discover stories, thinking, and expertise from writers on any topic.
        </div>
        <div>
          <button className="p-4 bg-black rounded-full px-10 text-white">
            Start reading
          </button>
        </div>
      </div>
      <div>
        <iframe
          src="https://lottie.host/embed/d2c56a4c-241d-4d09-a2d8-1e4283320195/MuocBhGlU2.json"
          width={"100px"}
          height={"300px"}
        ></iframe>
      </div>
    </div>
  );
};

export default Intro;
