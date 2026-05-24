import React from "react";
import { Link } from "react-router-dom";
import { Languages, Radio, BookOpen, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Echo Translate",
    description: "Real-time sign language recognition powered by AI. Translate between sign and spoken language instantly.",
    icon: Languages,
    to: "/translate",
    color: "from-blue-600 to-blue-500"
  },
  {
    title: "Broadcast Mode",
    description: "Live multi-device sessions for classrooms, meetings, and events. Share translations across screens.",
    icon: Radio,
    to: "/broadcast",
    color: "from-lime-500 to-lime-400"
  },
  {
    title: "Sign School",
    description: "Interactive lessons to learn sign language at your own pace. Track progress and build fluency.",
    icon: BookOpen,
    to: "/learn",
    color: "from-violet-600 to-indigo-500"
  }
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-transparent overflow-x-hidden transition-colors duration-200">
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/5 dark:bg-[#AAFF00]/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 dark:border-[#AAFF00]/30 dark:bg-[#AAFF00]/10 px-4 py-1.5 text-sm font-medium text-violet-600 dark:text-[#AAFF00]">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-[#AAFF00] animate-pulse" />
            Open & Accessible Communication
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            Bridging the{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-[#AAFF00] dark:to-lime-400 bg-clip-text text-transparent">Sound Gap</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-gray-400 sm:text-xl">
            Echo-Sign uses real-time AI translation to connect deaf and hearing
            communities — making every conversation inclusive, every classroom accessible, every moment understood.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/translate"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 dark:bg-blue-600 dark:hover:bg-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 dark:shadow-blue-600/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Translating
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/broadcast"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-800 hover:border-violet-500/50 hover:bg-slate-50 dark:border-white/10 dark:bg-[#111827] dark:text-white dark:hover:border-[#AAFF00]/50 dark:hover:bg-slate-900 px-8 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              Launch Broadcast
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-white/5 dark:bg-[#111827] p-8 transition-all hover:border-violet-500/40 hover:shadow-lg dark:hover:border-[#AAFF00]/40 hover:-translate-y-1"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} shadow-lg`}>
                <f.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-[#AAFF00] transition-colors">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">{f.description}</p>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-[#AAFF00] opacity-0 transition-opacity group-hover:opacity-100">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}