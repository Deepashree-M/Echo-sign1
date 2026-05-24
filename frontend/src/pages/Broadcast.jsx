import React, { useState } from "react";
import { Copy, Check, Camera, Monitor, Smartphone, LogIn } from "lucide-react";

const sampleLines = [
  "Welcome everyone to today's session.",
  "We'll start with introductions.",
  "Please feel free to ask questions anytime.",
  "Accessibility is a right, not a privilege.",
  "Let's build bridges, not walls.",
];

export default function Broadcast() {
  const [view, setView] = useState("signer");
  const [roomInput, setRoomInput] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleJoin = () => {
    if (roomInput.trim()) {
      setJoinedRoom(roomInput.trim());
      setRoomInput("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("7892");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 font-sans min-h-screen bg-transparent text-slate-800 dark:text-[#F1F1EE] sm:px-6 lg:px-8 pt-28 transition-colors duration-200">
      {/* Join Room Widget Layer */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-5 sm:flex-row sm:items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/10 dark:border-blue-500/10">
            <LogIn className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">Join a Room</p>
            <p className="text-xs text-slate-500 dark:text-gray-500">Enter a room code to join as audience</p>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Code..."
            value={roomInput}
            onChange={(e) => setRoomInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleJoin()}
            className="w-36 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-xl px-4 text-sm font-mono focus:outline-none focus:border-violet-500 dark:focus:border-[#AAFF00]"
          />
          <button onClick={handleJoin} className="rounded-xl bg-violet-600 dark:bg-blue-600 px-5 text-xs font-bold text-white hover:bg-violet-500 dark:hover:bg-blue-500 transition-colors shadow-md shadow-violet-500/10 dark:shadow-none">
            Join
          </button>
        </div>
      </div>

      {joinedRoom && (
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/5 dark:border-[#AAFF00]/20 dark:bg-[#AAFF00]/5 px-4 py-2.5 text-xs font-mono text-violet-600 dark:text-[#AAFF00]">
          <LogIn className="h-3.5 w-3.5" />
          Joined room <span className="font-bold">#{joinedRoom}</span> as audience listener
        </div>
      )}

      {/* Metadata ID banner panel */}
      <div className="mb-8 flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-6 sm:flex-row sm:justify-between shadow-sm">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-500">Active Session</p>
          <p className="mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
            Room <span className="text-violet-600 dark:text-[#AAFF00]">#7892</span>
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-5 py-2.5 text-xs font-bold bg-slate-50 dark:bg-black/20 text-violet-600 dark:text-[#AAFF00] hover:bg-violet-50 dark:hover:bg-[#AAFF00]/10 transition-all border-dashed"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Room ID"}
        </button>
      </div>

      {/* Presentation view controllers switcher toggles */}
      <div className="mb-10 flex justify-center gap-2 bg-slate-100 dark:bg-black/30 p-1 rounded-xl w-72 mx-auto border border-slate-200 dark:border-white/5 shadow-inner">
        <button
          onClick={() => setView("signer")}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all w-32 justify-center ${view === "signer" ? "bg-white dark:bg-[#111827] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 shadow-sm" : "text-slate-400 dark:text-gray-500"}`}
        >
          <Smartphone className="h-3.5 w-3.5" />
          Signer View
        </button>
        <button
          onClick={() => setView("audience")}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all w-32 justify-center ${view === "audience" ? "bg-white dark:bg-[#111827] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 shadow-sm" : "text-slate-400 dark:text-gray-500"}`}
        >
          <Monitor className="h-3.5 w-3.5" />
          Audience View
        </button>
      </div>

      {/* Screen Conditional renderer sandboxes */}
      {view === "signer" ? (
        <div className="mx-auto grid max-w-sm gap-4">
          <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 relative shadow-sm">
            <div className="text-center">
              <Camera className="mx-auto mb-3 h-10 w-10 text-slate-600 dark:text-gray-600" />
              <p className="text-xs font-mono text-slate-400 dark:text-gray-400">Signer Camera Mock</p>
              <div className="mx-auto mt-4 flex items-center justify-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1 text-[10px] font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-500 animate-pulse" />
                Broadcasting
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-5 shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500">Live Text Log Ticker</p>
            <div className="space-y-2 font-mono text-xs">
              {sampleLines.map((line, i) => (
                <p key={i} className={i === sampleLines.length - 1 ? "font-bold text-violet-600 dark:text-[#AAFF00]" : "text-slate-500 dark:text-gray-400"}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-black/40 p-8 text-center relative shadow-sm">
          <div className="w-full max-w-3xl space-y-4">
            {sampleLines.map((line, i) => {
              const opacity = 0.2 + (i / sampleLines.length) * 0.8;
              const size = i === sampleLines.length - 1 ? "text-3xl sm:text-4xl font-black text-violet-600 dark:text-[#AAFF00]" : "text-sm sm:text-lg text-slate-800 dark:text-white font-medium";
              return (
                <p key={i} className={`${size} tracking-wide font-mono transition-all`} style={{ opacity }}>
                  "{line}"
                </p>
              );
            })}
          </div>
          <div className="mt-10 flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 dark:border-[#AAFF00]/20 dark:bg-[#AAFF00]/10 px-4 py-1.5 text-xs font-mono text-violet-600 dark:text-[#AAFF00]">
            <span className="h-2 w-2 rounded-full bg-violet-600 dark:bg-[#AAFF00] animate-ping" />
            Live Display — Sync Active
          </div>
        </div>
      )}
    </div>
  );
}