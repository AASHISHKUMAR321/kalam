import React from "react";

const Intro = () => {
  return (
    <div className="w-full h-[550px] bg-yellow-400 text-white pt-32 flex justify-around">
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
          src="https://lottie.host/embed/4c987256-0955-43f0-b85f-3704779c34f7/dq8MWm3xk1.json"
          width={"400px"}
          height={"350px"}
        ></iframe>
      </div>
    </div>
  );
};

export default Intro;
