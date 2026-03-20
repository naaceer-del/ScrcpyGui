"use client";

import React, { useState } from "react";
import { PhoneScreen } from "./PhoneScreen";
import { ControlPanel } from "./ControlPanel";

export function ScrcpyGui() {
  return (
    <div className="w-full max-w-6xl h-[800px] max-h-[90vh] bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex border border-neutral-800">
      {/* Left side: Phone Screen */}
      <div className="w-[400px] min-w-[320px] bg-black flex-shrink-0 border-r border-neutral-800 flex flex-col">
        <div className="h-12 border-b border-neutral-800 flex items-center px-4 justify-between bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-medium text-neutral-400">
              Pixel 7 Pro (Connected)
            </span>
          </div>
          <div className="text-xs text-neutral-500 font-mono">
            1920x1080 @ 60fps
          </div>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center bg-neutral-950">
          <PhoneScreen />
        </div>
      </div>

      {/* Right side: Control Panel */}
      <div className="flex-1 flex flex-col bg-neutral-900 min-w-0">
        <ControlPanel />
      </div>
    </div>
  );
}
