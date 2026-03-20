"use client";

import React, { useState } from "react";
import {
  Phone,
  PhoneCall,
  PhoneMissed,
  PhoneIncoming,
  PhoneOutgoing,
  User,
  Search,
  Delete,
} from "lucide-react";

export function CallsTab() {
  const [number, setNumber] = useState("");

  const recentCalls = [
    {
      name: "Alice Smith",
      type: "incoming",
      time: "10:42 AM",
      duration: "5m 23s",
    },
    { name: "Bob Johnson", type: "missed", time: "Yesterday", duration: "" },
    {
      name: "+1 (555) 123-4567",
      type: "outgoing",
      time: "Mon",
      duration: "12m 01s",
    },
    {
      name: "Charlie Davis",
      type: "incoming",
      time: "Sun",
      duration: "1m 15s",
    },
  ];

  const handleDial = (digit: string) => {
    setNumber((prev) => prev + digit);
  };

  const handleDelete = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="flex items-center justify-between bg-neutral-800/50 p-4 rounded-2xl border border-neutral-700/50">
        <div className="flex-1">
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter number..."
            className="w-full bg-transparent text-2xl font-mono text-white placeholder-neutral-600 focus:outline-none tracking-wider"
          />
        </div>
        <button
          onClick={handleDelete}
          className="p-3 text-neutral-400 hover:text-rose-400 transition-colors"
        >
          <Delete className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-[300px] mx-auto w-full">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
          (digit) => (
            <button
              key={digit}
              onClick={() => handleDial(digit)}
              className="aspect-square rounded-full bg-neutral-800/30 border border-neutral-700/30 hover:bg-neutral-800 flex items-center justify-center text-2xl font-medium text-neutral-200 transition-colors active:scale-95"
            >
              {digit}
            </button>
          ),
        )}
        <div className="col-span-3 flex justify-center mt-4">
          <button className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
            <Phone className="w-7 h-7 fill-current" />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            Recent Calls
          </h3>
          <button className="text-xs text-indigo-400 hover:text-indigo-300">
            See All
          </button>
        </div>
        <div className="space-y-2">
          {recentCalls.map((call, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-800/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-200">
                    {call.name}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-0.5">
                    {call.type === "incoming" && (
                      <PhoneIncoming className="w-3 h-3 text-emerald-500" />
                    )}
                    {call.type === "outgoing" && (
                      <PhoneOutgoing className="w-3 h-3 text-sky-500" />
                    )}
                    {call.type === "missed" && (
                      <PhoneMissed className="w-3 h-3 text-rose-500" />
                    )}
                    <span>{call.time}</span>
                    {call.duration && <span>• {call.duration}</span>}
                  </div>
                </div>
              </div>
              <button className="p-2 text-neutral-500 hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all">
                <PhoneCall className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
