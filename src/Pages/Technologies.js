import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    js,
    react,
    tailwind,
    laravel,
    vscode,
    python,
    git,
    java,
    github,
    express,
    npm,
    csharp,
    cpp,
    opengl,
    docker,
    vs,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 px-4">
  {/* Tech Stack Header */}
  <section className="border-l-4 border-yellow-400 pl-6 mb-12">
    <h1 className="text-3xl md:text-5xl text-dark-heading dark:text-light-heading font-bold">
      Tech Stack
    </h1>
    <p className="text-content py-2 lg:max-w-3xl text-lg">
      Technologies I've been working with recently
    </p>
  </section>

  {/* Tech Stack Icons */}
  <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 mb-20">
    {[
      { src: js, title: "JavaScript" },
      { src: express, title: "Express" },
      { src: react, title: "React" },
      { src: tailwind, title: "Tailwind CSS" },
      { src: laravel, title: "Laravel" },
      { src: python, title: "Python" },
      { src: java, title: "Java" },
      { src: cpp, title: "C++" },
      { src: csharp, title: "C#" },
      { src: docker, title: "Docker" },
      { src: opengl, title: "OpenGL" },
    ].map((tech, index) => (
      <div 
        key={index} 
        className="group relative flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] border border-transparent hover:border-yellow-400/50"
      >
        <img src={tech.src} title={tech.title} alt={tech.title} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
        <span className="mt-3 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-dark-heading dark:text-light-heading">
          {tech.title}
        </span>
      </div>
    ))}
  </section>

  {/* Tools Header */}
  <section className="border-l-4 border-yellow-400 pl-6 mb-12">
    <h1 className="text-3xl md:text-5xl text-dark-heading dark:text-light-heading font-bold">
      Tools
    </h1>
    <p className="text-content py-2 lg:max-w-3xl text-lg">
      My daily driver software and utilities
    </p>
  </section>

  {/* Tools Icons */}
  <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
    {[
      { src: vscode, title: "VS Code" },
      { src: git, title: "Git" },
      { src: github, title: "Github" },
      { src: figma, title: "Figma" },
      { src: npm, title: "NPM" },
      { src: vs, title: "Visual Studio" },
    ].map((tool, index) => (
      <div 
        key={index} 
        className="group flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] border border-transparent hover:border-yellow-400/50"
      >
        <img src={tool.src} title={tool.title} alt={tool.title} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
        <span className="mt-3 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-dark-heading dark:text-light-heading">
          {tool.title}
        </span>
      </div>
    ))}
  </section>
</main>
  );
}

export default Technologies;
