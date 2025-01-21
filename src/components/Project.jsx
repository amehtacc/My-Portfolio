import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import "../index.css";
import ProjectCard from "./ProjectCard.jsx";
import { Project1, Project2, Project3, Project4, Project5 } from "./images.js";

function Project() {
  return (
    <div id="project" className="w-full overflow-hidden h-auto py-[80px] lg:px-[112px] xl:px-[180px] bg-[#111827]">
      <h2 className="text-center text-white text-[1.75rem] sm:text-[1.875rem] font-bold mb-[6rem]">
        Projects
      </h2>

      <div className="w-full flex justify-center items-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="myProjectSwiper"
        >
          <SwiperSlide>
            <ProjectCard
              imageUrl={Project5}
              title="Jhanm Media"
              description="Responsive landing page for a video editing agency, showcasing services with smooth animations and modern design."
              techStack={[
                "HTML",
                "TailwindCSS",
                "JavaScript",
                "ReactJS",
                "SwiperJS",
              ]}
              sourceCodeUrl="https://github.com/amehtacc/Jhanm-Media"
              projectUrl="https://jhanm-media.netlify.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              imageUrl={Project4}
              title="Moonex"
              description="Modern crypto landing page featuring sleek design, informative content, and responsive layouts for laptop & mobile to captivate users."
              techStack={["HTML", "TailwindCSS", "JavaScript", "ReactJS"]}
              sourceCodeUrl="https://github.com/amehtacc/Moonex"
              projectUrl="https://moonex-crypto.netlify.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              imageUrl={Project3}
              title="Currency Converter"
              description="Interactive currency converter app with real-time exchange rates, sleek design, and responsive user interface."
              techStack={["HTML", "TailwindCSS", "JavaScript", "ReactJS"]}
              sourceCodeUrl="https://github.com/amehtacc/Phase-1-Building-Confidence/tree/main/07_currency_converter"
              projectUrl="https://merry-kringle-141124f.netlify.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              imageUrl={Project2}
              title="Weather App"
              description="Dynamic weather app displaying real-time forecasts, intuitive design, and responsive functionality for all devices."
              techStack={[
                "HTML",
                "TailwindCSS",
                "JavaScript",
                "ReactJS",
                "API Integration",
              ]}
              sourceCodeUrl="https://github.com/amehtacc/Phase-1-Building-Confidence/tree/main/05_weather_app"
              projectUrl="https://stirring-gecko-0824d.netlify.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              imageUrl={Project1}
              title="Tic Tac Toe Game"
              description="Created an interactive Tic Tac Toe game. It includes a sleek, user-friendly interface, ensuring an engaging and fun experience for players."
              techStack={["HTML", "CSS", "JavaScript"]}
              sourceCodeUrl="https://github.com/amehtacc/TicTacToe-Game"
              projectUrl="https://tic-tac-toe-gamebyaryan.netlify.app/"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
