import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink, type }) {
  const isReport = type === "report";
  const isWeb = type === "web";

  return (
    <article className="group mt-10 flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Title & Description */}
        <h1 className="text-xl font-bold tracking-tight text-dark-heading dark:text-light-heading">
          {title}
        </h1>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-content">
          {description}
        </p>

        {/* Tech Stack - Modern Tag Style */}
        <div className="mt-auto pt-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
            Tech Stack
          </p>
          <p className="mt-1 text-sm font-medium text-dark-heading dark:text-zinc-300">
            {techstack}
          </p>
        </div>

        {/* Links Section */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-zinc-800">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-yellow-500 dark:text-light-heading dark:hover:text-yellow-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {isReport ? "Read PDF" : "Live Demo"}
          </a>

          {isWeb && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-dark-heading dark:text-zinc-400 dark:hover:text-white"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;