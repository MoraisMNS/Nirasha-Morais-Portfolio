import React from "react";

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 ring-1 ring-white/10 backdrop-blur-md">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] ${className}`}>
    {children}
  </div>
);

const About = () => {
  return (
    <div
      name="about"
      className="w-full relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-screen-lg mx-auto w-full px-6 sm:px-10 py-12 sm:py-16">
        {/* Header */}
        <div className="pb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300">
              About ✨
            </span>
          </h2>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            A quick intro, strengths, and what I’m building right now.
          </p>
        </div>

        {/* Intro Card */}
        <Card>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100">
          An Associate Software Engineer with 1.5+ years of professional experience
          building scalable, production-ready web applications.
          Strong experience in <strong>ASP.NET MVC</strong>, <strong>C#</strong>, and <strong>SQL Server</strong>, with hands-on exposure to
          <strong> React</strong>, <strong>Next.js (TypeScript)</strong>, and modern frontend development.
          Proven ability to optimize databases, resolve critical issues, and deliver reliable enterprise solutions.
          Passionate about full-stack development, AI-driven applications, and continuous learning in fast-paced environments.
          </p>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>📊 CGPA 3.32</Badge>
            <Badge>⚛️ React • TypeScript</Badge>
            <Badge>🔷 ASP.NET MVC</Badge>
            <Badge>💾 SQL Server</Badge>
            <Badge>🧠 AI / ML Exposure</Badge>
            <Badge>🧩 Agile</Badge>
          </div>
        </Card>

        {/* Quick facts + Current work */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-2xl font-semibold">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-base text-gray-100">
              <li className="flex gap-2">
                <span aria-hidden className="pt-1.5">💼</span>
                <span>
                  Former <strong>Associate Software Engineer</strong> at Soft Gallery (Pvt) Ltd; previously a <strong>Software Engineer Intern</strong>.
                </span>

              </li>
              {/* <li className="flex gap-2">
                <span aria-hidden className="pt-1.5">📝</span>
                <span>
                  Earlier experience as <strong>Document Specialist</strong> at RR Donnelley — sharpened quality, consistency, and teamwork.
                </span>
              </li> */}
              <li className="flex gap-2">
                <span aria-hidden className="pt-1.5">🚀</span>
                <span>
                  Enjoy building end-to-end features: UI/UX, REST APIs, data models, and reporting.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="pt-1.5">🤝</span>
                <span>
                  Thrive in Agile teams — daily stand-ups, Azure workflows, and clear communication.
                </span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-2xl font-semibold">Major Undergraduate Projects</h3>
            <ul className="mt-3 space-y-3 text-base text-gray-100">
              <li className="flex gap-3">
                <span aria-hidden className="pt-1.5">🏍️</span>
                <div>
                  <strong>Motorbike Service Reservation System</strong> — lead/PM and backend owner for a multi-shop booking platform
                  with web + mobile experiences, real-time updates, and admin/shop tools.
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge>React</Badge><Badge>Spring Boot</Badge><Badge>MySQL</Badge><Badge>Redux</Badge><Badge>Flutter</Badge><Badge>Firebase</Badge>
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="pt-1.5">🌺</span>
                <div>
                  <strong>Using Computers via Gaze tracking Technology</strong> — end-to-end app exploring CNN/transformer models for real time Human Computer Interaction for disability persons.
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge>CNN</Badge><Badge>TensorFlow</Badge><Badge>OpenCV</Badge>
                  </div>
                </div>
              </li>
            </ul>
          </Card>
        </div>

        {/* Interests / Closing */}
        <Card className="mt-8">
          <h3 className="text-2xl font-semibold">Interests & Goals</h3>
          <p className="mt-3 text-base sm:text-lg text-gray-100">
            📱 Mobile-friendly web apps and hosting 
            <br /> 🤖 AI & ML features in production 
            <br /> 🔒 Secure, reliable systems 
            <br /> 🧪 Clean code and testing.
            <br className="hidden sm:block" />
            <span className="block mt-2">
              🌟 Let’s connect — I’m excited to contribute to impactful products and collaborate with teams that value learning and craftsmanship.
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
