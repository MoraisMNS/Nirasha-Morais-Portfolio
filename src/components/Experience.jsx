import React from "react";

const Experience = () => {
  const roles = [
    {
      emoji: "🛠️",
      title: "Associate Software Engineer",
      company: "Soft Gallery (Pvt) Ltd",
      link: "https://softgallery.io/",
      period: "Jan 2025 – Dec 2025",
      summary:
"Worked as an Associate Software Engineer delivering enterprise-grade web application features using ASP.NET MVC, C#, and SQL Server. Contributed to the GalleryHR system by resolving critical bugs, optimizing database performance, and collaborating with cross-functional teams to improve system stability and user experience.",
      badges: [ 
      "ASP.NET MVC",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "JavaScript / jQuery",
      "Agile",
    ],
    bullets: [
      "Developed and maintained ASP.NET MVC components using C#, Razor Views, and JavaScript/jQuery.",
      "Optimized data access using Entity Framework Core and SQL Server, improving query performance and responsiveness.",
      "Resolved 40+ production bugs in the GalleryHR system, significantly improving stability and reducing downtime.",
      "Fine-tuned LINQ queries and SQL Server operations to enhance application performance.",
      "Collaborated with QA, DevOps, and product teams to deliver secure authentication flows and smooth deployments.",
      "Actively participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives using Jira.",
    ],
    },
    {
      emoji: "👩‍💻",
      title: "Software Engineer Intern",
      company: "Soft Gallery (Pvt) Ltd",
      link: "https://softgallery.io/",
      period: "Jul 2024 – Dec 2024",
      summary:
        "Completed a 6-month software engineering internship focused on ASP.NET MVC development, enterprise design patterns, and database-driven web applications with added exposure to AI development. Gained hands-on experience in building scalable backend logic and dynamic frontend components.",
      badges: [
      "ASP.NET MVC",
      "C#",
      "SQL Server",
      "LINQ",
      "RAG Pipeline",
      "AI Development",
      "JavaScript / jQuery",
      "Agile",
    ],
      bullets: [
      "Built production-ready LLM applications using LangChain, OpenAI GPT models, and RAG architectures for intelligent document processing.",
      "Developed AI-powered chatbots with semantic search capabilities using Pinecone, MongoDB Atlas Vector Search, and FAISS.",
      "Implemented RAG pipelines for PDF question-answering systems with context-aware retrieval and response generation.",
      "Developed ASP.NET MVC features including controller logic, partial views, DTOs, pagination, and secure API integration.",
      "Implemented dynamic frontend features using JavaScript, jQuery, AJAX, and DataTables, enhancing filtering, searching, and data presentation in HR modules.",
       "Implemented dynamic frontend features using JavaScript, jQuery, AJAX, and DataTables for HR modules.",
      "Worked with SQL Server to design tables and write queries supporting application workflows.",
      "Tracked tasks, updates, and progress using Jira and participated in daily Agile stand-ups.",
    ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-screen-lg p-6 sm:p-10 mx-auto w-full">
        <div className="pb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300">
              Experience 💼
            </span>
          </h2>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            A quick timeline of roles, responsibilities, and impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical line */}
          <div className="absolute top-0 left-3 sm:left-5 h-full w-1 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-indigo-500 rounded-full" />

          <div className="space-y-10">
            {roles.map((r, idx) => (
              <article
                key={idx}
                className="relative group"
              >
                {/* Emoji pin */}
                <div className="absolute -left-1.5 sm:-left-0.5 -top-1 text-2xl select-none">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 backdrop-blur-sm">
                    {r.emoji}
                  </span>
                </div>

                {/* Card */}
                <div className="ml-6 sm:ml-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:-translate-y-0.5">
                  <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-2xl sm:text-3xl font-semibold">
                      {r.title} <span className="text-white/50">•</span>{" "}
                      {r.link ? (
                        <a
                          href={r.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-dotted underline-offset-4 text-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                          {r.company} ↗
                        </a>
                      ) : (
                        <span className="text-gray-300">{r.company}</span>
                      )}
                    </h3>
                    <div className="mt-1 sm:mt-0 text-sm sm:text-base text-gray-300 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10">
                        <span role="img" aria-hidden>📅</span> {r.period}
                      </span>
                    </div>
                  </header>

                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-gray-200">
                    {r.summary}
                  </p>

                  {/* Badges */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.badges.map((b, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-600/30 to-fuchsia-600/30 ring-1 ring-white/10"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-100">
                    {r.bullets.map((li, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="pt-1.5 text-cyan-300" aria-hidden>
                          ✅
                        </span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
