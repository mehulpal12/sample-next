"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* Floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute animate-pulse-slow bg-purple-700 opacity-20 rounded-full w-80 h-80 -top-24 -left-24 blur-3xl" />
        <div className="absolute animate-pulse-mid bg-pink-500 opacity-20 rounded-full w-96 h-96 -bottom-32 right-0 blur-3xl" />
        <div className="absolute animate-spin-slow bg-blue-400 opacity-10 rounded-full w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      </div>
      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center gap-8 py-24 w-full max-w-3xl">
        <Image
          className="dark:invert animate-fade-in-up"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white text-center animate-fade-in-up">
          Welcome to{" "}
          <span className="text-purple-400 animate-color">Sample Site</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 text-center max-w-xl animate-fade-in delay-200">
          This is a modern, animated sample website built with Next.js and Tailwind
          CSS. Enjoy beautiful motion, responsive design, and a clean, elegant
          layout.
        </p>
        <div className="flex gap-4 mt-6 animate-fade-in delay-400">
          <a
            href="#features"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore Features
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white/10 text-purple-200 font-semibold shadow-lg hover:bg-white/20 hover:text-white transition-all duration-300 border border-purple-400"
          >
            Contact
          </a>
        </div>
      </main>
      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 w-full max-w-5xl mt-20 flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 animate-fade-in-up">
          Features
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 min-w-[600px] sm:min-w-0">
            {[
              {
                icon: "/globe.svg",
                title: "Fully Responsive",
                desc: "Looks great on all devices, from mobile to desktop.",
              },
              {
                icon: "/vercel.svg",
                title: "Lightning Fast",
                desc: "Optimized for speed and performance.",
              },
              {
                icon: "/file.svg",
                title: "Modern UI/UX",
                desc: "Beautiful, animated, and easy to use.",
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className="flex flex-col items-center bg-black/60 rounded-2xl p-8 shadow-xl border border-white/10 backdrop-blur-md animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={48}
                  height={48}
                  className="mb-4 animate-bounce-skill"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-300 text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 w-full max-w-2xl mt-24 mb-12 flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up">
          Contact Us
        </h2>
        <form className="w-full flex flex-col gap-4 bg-black/60 rounded-2xl p-8 shadow-lg backdrop-blur-md animate-fade-in-up">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-purple-400 focus:outline-none transition-all"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-blue-400 focus:outline-none transition-all"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:border-pink-400 focus:outline-none transition-all resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes bounce-skill {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-skill {
          animation: bounce-skill 1.5s infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        @keyframes pulse-mid {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-mid {
          animation: pulse-mid 4s infinite;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }
        @keyframes color {
          0% {
            color: #a78bfa;
          }
          25% {
            color: #f472b6;
          }
          50% {
            color: #38bdf8;
          }
          75% {
            color: #facc15;
          }
          100% {
            color: #a78bfa;
          }
        }
        .animate-color {
          animation: color 4s infinite;
        }
      `}</style>
    </div>
  );
}
