import React from "react";
import { HeroImage } from "./images.js";

function Home() {
  return (
      <div className="w-full h-[300px] lg:h-[340px] xl:h-[500px] mt-36 sm:mt-52 flex justify-center md:pl-[100px] lg:pl-[112px] xl:pl-[180px] text-white">
        <div className="sm:w-[50%] max-sm:absolute z-10 h-64 max-sm:pl-8">
          <h1 className="text-[1.8rem] md:text-[2rem] xl:text-[2.625rem] font-bold mb-3">Frontend Developer</h1>
          <p className="text-xs md:text-sm xl:text-base text-[#ffffff]/80 mb-6 max-sm:pr-16">
            Who love building cool stuff on the internet using HTML, CSS,
            Tailwind, JavaScript, and ReactJs. I'm all about turning designs
            into responsive web applications and leveling up my game with
            React.js!
          </p>

          <a
            href="https://drive.google.com/file/d/1mSEeAwtjr5wACs6sKxv3Pufwyd8knxAk/view?usp=sharing"
            target="_blank"
            className="w-[7rem] md:w-[7rem] lg:w-[8rem] xl:w-[9.37rem] h-[2.2rem] md:h-[2.4rem] lg:h-[2.5rem] xl:h-[3.12rem] flex justify-center items-center cursor-pointer rounded-[5rem] text-[0.75em] md:text-[0.75rem] lg:text-[0.8rem] xl:text-[0.88rem] font-bold text-[#090912] bg-gradient-to-br from-[#0bcaff] to-[#ffffff] hover:bg-none hover:text-white hover:border-2 border-white"
          >
            View Resume
          </a>
        </div>

        <div className="max-sm:w-[70%] max-sm:absolute right-0 sm:w-[50%]">
          <img
            className="lg:w-[100rem] xl:w-[92rem] lg:pl-[5rem] xl:pl-[7rem]"
            src={HeroImage}
            alt="Hero Image"
          />
        </div>
    </div>
  );
}

export default Home;
