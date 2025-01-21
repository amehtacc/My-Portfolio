import React from "react";

function ProjectCard({ imageUrl, title, description, techStack, sourceCodeUrl, projectUrl }) {
  return (
    <div className="w-64 sm:w-72 bg-[#090912] h-auto rounded-tr-[30px] rounded-bl-[30px] text-center p-4 z-10">
      <img
        className="h-[150px] sm:h-44 rounded-[0.625rem] outline outline-2 outline-white"
        src={imageUrl}
        alt={title}
      />
      <h3 className="text-lg sm:text-xl text-white font-bold mx-1 mt-2 text-left">
        {title}
      </h3>
      <p className="text-[0.7rem] sm:text-[0.85rem] text-[#ffffff]/80 text-left m-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 text-left m-1 py-[10px] text-white">
        {techStack.map((skill) => (
          <span
            key={skill}
            className="bg-[#37373caf] rounded-[0.625rem] text-[0.55rem] sm:text-[0.65rem] py-1 px-2"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="text-left flex gap-2 mx-1">
        <a
          href={sourceCodeUrl}
          target="_blank"
          className="w-[5rem] sm:w-[6.25rem] h-[1.9rem] sm:h-[2.187rem] mt-[0.625rem] flex justify-center items-center cursor-pointer rounded-[5rem] text-[0.6rem] sm:text-[0.75rem] font-bold text-[#090912] bg-gradient-to-br from-[#0bcaff] to-[#ffffff] hover:bg-none hover:text-white hover:border-2 border-white"
        >
          {"Source Code"}
        </a>
        <a
          href={projectUrl}
          target="_blank"
          className="w-[5rem] sm:w-[6.25rem] h-[1.9rem] sm:h-[2.187rem] mt-[0.625rem] flex justify-center items-center cursor-pointer rounded-[5rem] text-[0.6rem] sm:text-[0.75rem] font-bold text-[#090912] bg-gradient-to-br from-[#0bcaff] to-[#ffffff] hover:bg-none hover:text-white hover:border-2 border-white"
        >
          {"<Run/>"}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
