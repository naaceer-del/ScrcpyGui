"use client";

import React from "react";
import { motion } from "motion/react";
import { Battery, Wifi, Signal, Clock } from "lucide-react";

export function PhoneScreen() {
  return (
    <div className="relative w-[320px] h-[680px] bg-neutral-900 rounded-[2.5rem] border-[8px] border-neutral-800 overflow-hidden shadow-2xl ring-1 ring-white/10">
      {/* Status Bar */}
      <div className="absolute top-0 inset-x-0 h-7 flex items-center justify-between px-6 z-20 text-white text-[10px] font-medium">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>10:00</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Screen Content (Simulated) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/scrcpy/600/1200')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

        {/* Fake Apps Grid */}
        <div className="absolute bottom-24 inset-x-4 grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
              </div>
              <div className="w-8 h-1.5 rounded-full bg-white/20"></div>
            </div>
          ))}
        </div>

        {/* Dock */}
        <div className="absolute bottom-6 inset-x-4 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-around px-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"
            >
              <div className="w-5 h-5 rounded-full bg-white/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Camera Hole */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black z-30 ring-1 ring-white/10"></div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/50 z-30"></div>
    </div>
  );
}
