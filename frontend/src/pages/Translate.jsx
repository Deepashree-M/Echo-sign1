import React, { useState } from "react";
import { Volume2, Camera, Hand, RotateCcw, Mic } from "lucide-react";

export default function Translate() {
  const [mode, setMode] = useState("sign-to-text");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 font-sans min-h-screen bg-transparent text-slate-800 dark:text-[#F1F1EE] sm:px-6 lg:px-8 pt-28 transition-colors duration-200">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Echo Translate</h1>
        <p className="mt-2 text-slate-500 dark:text-gray-400">Real-time sign language translation</p>
      </div>

      {/* Custom Mode Switcher Toggles */}
      <div className="mb-8 flex justify-center">
        <div className="h-12 rounded-xl bg-white dark:bg-[#111827] p-1 flex border border-slate-200 dark:border-white/5 gap-1 shadow-sm">
          <button
            onClick={() => setMode("sign-to-text")}
            className={`rounded-lg px-6 text-sm font-semibold transition-all ${mode === "sign-to-text" ? "bg-violet-600 dark:bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white"}`}
          >
            ✋ Sign ➔ Text
          </button>
          <button
            onClick={() => setMode("speech-to-sign")}
            className={`rounded-lg px-6 text-sm font-semibold transition-all ${mode === "speech-to-sign" ? "bg-violet-600 dark:bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white"}`}
          >
            🎙 Speech ➔ Sign
          </button>
        </div>
      </div>

      {/* Dual Pane split view */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Viewport Frame Container — Camera */}
        <div className="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 shadow-sm">
          {/* Mock Grid bounding overlay box wireframes */}
          <div className="absolute inset-8 rounded-xl border-2 border-dashed border-violet-500/20 dark:border-[#AAFF00]/20" />
          <div className="absolute left-10 top-10 h-16 w-16 rounded-lg border-2 border-violet-500/40 dark:border-[#AAFF00]/40" />
          <div className="absolute bottom-12 right-12 h-20 w-14 rounded-lg border-2 border-violet-500/40 dark:border-[#AAFF00]/40" />

          {mode === "sign-to-text" ? (
            <Camera className="mb-4 h-12 w-12 text-slate-700 dark:text-gray-600" />
          ) : (
            <Mic className="mb-4 h-12 w-12 text-slate-700 dark:text-gray-600" />
          )}
          <p className="text-sm font-medium text-slate-400 dark:text-gray-400">
            {mode === "sign-to-text" ? "Camera Feed — Hand Tracking Active" : "Speech Input Active"}
          </p>
          <p className="mt-1 text-xs text-slate-600 dark:text-gray-500 font-mono">Voice input</p>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 dark:border-transparent dark:bg-[#AAFF00]/15 px-3 py-1.5 text-xs font-semibold text-violet-600 dark:text-[#AAFF00]">
            <span className="h-2 w-2 rounded-full bg-violet-600 dark:bg-[#AAFF00] animate-pulse" />
            Live
          </div>
        </div>

        {/* Right Pane Layer Container — Output Stream */}
        <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white dark:border-white/5 dark:bg-[#111827] p-6 justify-between shadow-sm">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                {mode === "sign-to-text" ? "Recognized Text" : "Sign Animation"}
              </h2>
              <button onClick={() => alert("Stream Reset")} className="p-2 text-slate-400 hover:text-violet-600 dark:hover:text-[#AAFF00] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-xl bg-slate-50 dark:bg-black/40 p-6 min-h-[160px] border border-slate-200 dark:border-white/5">
              {mode === "sign-to-text" ? (
                <div className="space-y-3 font-mono">
                  <p className="text-2xl font-bold leading-relaxed text-violet-600 dark:text-[#AAFF00]">
                    Hello, welcome to the presentation.
                  </p>
                  <p className="text-xl font-semibold text-slate-800 dark:text-white/80">
                    We will discuss accessibility today.
                  </p>
                  <p className="text-lg text-violet-600 dark:text-[#AAFF00] animate-pulse">▎</p>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center p-6">
                  <Hand className="h-24 w-24 text-violet-500/20 dark:text-[#AAFF00]/20 animate-bounce" />
                </div>
              )}
            </div>
          </div>

          {mode === "sign-to-text" && (
            <button
              onClick={() => {
                const talk = new SpeechSynthesisUtterance("Hello, welcome to the presentation. We will discuss accessibility today.");
                window.speechSynthesis.speak(talk);
              }}
              className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-violet-600 text-white dark:bg-[#AAFF00] py-3.5 dark:text-black font-bold text-sm tracking-wide hover:opacity-90 transition-all shadow-lg shadow-violet-500/20 dark:shadow-[#AAFF00]/10"
            >
              <Volume2 className="h-5 w-5" />
              Speak Text Aloud
            </button>
          )}
        </div>
      </div>
    </div>
  );
}