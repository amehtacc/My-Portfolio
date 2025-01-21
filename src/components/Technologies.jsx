import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import {
  HTML,
  CSS,
  TailwindLogo,
  Javascript,
  ReactLogo,
  Npm,
  Git,
  Github,
  Figma,
  Netlify,
  Wordpress,
  Vscode,
  Photoshop,
  Chatgpt,
} from "./images.js";

function Technologies() {
  const Skills = [
    { imageUrl: HTML, title: "HTML" },
    { imageUrl: CSS, title: "CSS" },
    { imageUrl: TailwindLogo, title: "Tailwind" },
    { imageUrl: Javascript, title: "JavaScript" },
    { imageUrl: ReactLogo, title: "React" },
    { imageUrl: Npm, title: "npm" },
    { imageUrl: Git, title: "Git" },
    { imageUrl: Github, title: "GitHub" },
    { imageUrl: Figma, title: "Figma" },
    { imageUrl: Netlify, title: "Netlify" },
    { imageUrl: Wordpress, title: "Wordpress" },
    { imageUrl: Vscode, title: "VScode" },
    { imageUrl: Photoshop, title: "Photoshop" },
    { imageUrl: Chatgpt, title: "ChatGPT" },
  ];

  return (
    <div id="technologies" className="w-full py-[80px]">
      <div className="mb-[5rem]">
        <h2 className="text-center text-white text-[1.75rem] sm:text-[1.875rem] font-bold mb-1">
          Technologies
        </h2>
        <p className="text-xs max-sm:px-8 sm:text-sm text-center text-[#ffffff]/80">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay]}
        className="flex items-center justify-center"
      >
        {Skills.map((skill) => (
          <SwiperSlide
          key={skill.title}
          style={{
            width: window.innerWidth <= 640 ? "110px" : "150px",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="h-10 sm:h-12 text-white/40"
              src={skill.imageUrl}
              alt={skill.title}
            />
            <p className="text-sm text-[#ffffff]/80">{skill.title}</p>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </div>
  );
}

export default Technologies;
