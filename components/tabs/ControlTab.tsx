"use client";

import React from "react";
import {
  Power,
  Volume2,
  VolumeX,
  RotateCcw,
  MonitorOff,
  Camera,
  Video,
  Keyboard,
  MousePointer2,
} from "lucide-react";

export function ControlTab() {
  const controls = [
    {
      icon: Power,
      label: "Power",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
    {
      icon: Volume2,
      label: "Vol Up",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: VolumeX,
      label: "Vol Down",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: RotateCcw,
      label: "Rotate",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      icon: MonitorOff,
      label: "Screen Off",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Camera,
      label: "Screenshot",
      color: "text-sky-500",
      bg: "bg-sky-500/10",
    },
    {
      icon: Video,
      label: "Record",
      color: "text-fuchsia-500",
      bg: "bg-fuchsia-500/10",
    },
  ];

  const settings = [
    { icon: Keyboard, label: "Forward Keyboard", active: true },
    { icon: MousePointer2, label: "Forward Mouse", active: true },
    { icon: MonitorOff, label: "Turn Screen Off on Start", active: false },
    { icon: RotateCcw, label: "Lock Orientation", active: false },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {controls.map((ctrl, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800 transition-colors group"
            >
              <div
                className={`p-3 rounded-full ${ctrl.bg} ${ctrl.color} group-hover:scale-110 transition-transform`}
              >
                <ctrl.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-neutral-300">
                {ctrl.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Device Settings
        </h2>
        <div className="space-y-3">
          {settings.map((setting, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/30"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800 text-neutral-400">
                  <setting.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-neutral-200">
                  {setting.label}
                </span>
              </div>
              <button
                className={`w-10 h-6 rounded-full transition-colors relative ${
                  setting.active ? "bg-indigo-500" : "bg-neutral-700"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    setting.active ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
