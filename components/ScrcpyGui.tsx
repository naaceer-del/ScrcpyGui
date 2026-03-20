"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Search, Wifi, Usb, Pin } from "lucide-react";
import { PhoneScreen } from "./PhoneScreen";
import { ControlPanel } from "./ControlPanel";
import { SettingsModal } from "./SettingsModal";

const MOCK_DEVICES = [
  { id: "1", name: "Pixel 7 Pro", type: "usb", status: "Connected" },
  { id: "2", name: "Galaxy S23", type: "wifi", status: "Available" },
  { id: "3", name: "OnePlus 11", type: "usb", status: "Unauthorized" },
];

export function ScrcpyGui() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDeviceMenuOpen, setIsDeviceMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDevice, setSelectedDevice] = useState(MOCK_DEVICES[0]);

  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);

  const filteredDevices = MOCK_DEVICES.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-fit max-w-full h-[800px] max-h-[90vh] bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex border border-neutral-800 relative">
      {/* Left side: Phone Screen */}
      <div className="w-[400px] min-w-[320px] bg-black flex-shrink-0 flex flex-col z-10 relative">
        <div className="h-12 border-b border-neutral-800 flex items-center px-4 justify-between bg-neutral-900/50 relative">
          <div className="relative">
            <button
              onClick={() => setIsDeviceMenuOpen(!isDeviceMenuOpen)}
              className="flex items-center gap-2 hover:bg-neutral-800 px-2 py-1.5 rounded-lg transition-colors"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  selectedDevice.status === "Connected"
                    ? "bg-emerald-500 animate-pulse"
                    : selectedDevice.status === "Available"
                      ? "bg-amber-500"
                      : "bg-rose-500"
                }`}
              ></div>
              <span className="text-xs font-medium text-neutral-200">
                {selectedDevice.name}
              </span>
              <span className="text-[10px] text-neutral-500 bg-neutral-800 px-1.5 py-0.5 rounded uppercase">
                {selectedDevice.type}
              </span>
            </button>

            <AnimatePresence>
              {isDeviceMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsDeviceMenuOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl z-40 overflow-hidden"
                  >
                    <div className="p-2 border-b border-neutral-800">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                        <input
                          autoFocus
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search devices..."
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="max-h-48 overflow-y-auto p-1 custom-scrollbar">
                      {filteredDevices.map((device) => (
                        <button
                          key={device.id}
                          onClick={() => {
                            setSelectedDevice(device);
                            setIsDeviceMenuOpen(false);
                          }}
                          className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-neutral-800 transition-colors text-left"
                        >
                          <div className="flex items-center gap-2">
                            {device.type === "wifi" ? (
                              <Wifi className="w-3.5 h-3.5 text-neutral-400" />
                            ) : (
                              <Usb className="w-3.5 h-3.5 text-neutral-400" />
                            )}
                            <span className="text-xs font-medium text-neutral-200">
                              {device.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-neutral-500">
                              {device.status}
                            </span>
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                device.status === "Connected"
                                  ? "bg-emerald-500"
                                  : device.status === "Available"
                                    ? "bg-amber-500"
                                    : "bg-rose-500"
                              }`}
                            ></div>
                          </div>
                        </button>
                      ))}
                      {filteredDevices.length === 0 && (
                        <div className="p-4 text-center text-xs text-neutral-500">
                          No devices found
                        </div>
                      )}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsAlwaysOnTop(!isAlwaysOnTop)}
              className={`p-1.5 rounded-lg transition-colors ${isAlwaysOnTop ? 'bg-indigo-500/20 text-indigo-400' : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800'}`}
              title="Always on top"
            >
              <Pin className="w-3.5 h-3.5" />
            </button>
            <div className="text-xs text-neutral-500 font-mono">
              1920x1080 @ 60fps
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center bg-neutral-950">
          <PhoneScreen />
        </div>
      </div>

      {/* Collapse Toggle Bar */}
      <div
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="w-4 bg-neutral-950 hover:bg-neutral-800 border-l border-r border-neutral-800 flex flex-col items-center justify-center cursor-pointer group transition-colors z-20 flex-shrink-0"
      >
        <div className="h-16 w-1 rounded-full bg-neutral-700 group-hover:bg-indigo-500 transition-colors flex items-center justify-center">
          {isPanelOpen ? (
            <ChevronRight className="w-3 h-3 text-neutral-900 group-hover:text-white opacity-0 group-hover:opacity-100 -ml-0.5" />
          ) : (
            <ChevronLeft className="w-3 h-3 text-neutral-900 group-hover:text-white opacity-0 group-hover:opacity-100 -ml-0.5" />
          )}
        </div>
      </div>

      {/* Right side: Control Panel */}
      <motion.div
        initial={false}
        animate={{ width: isPanelOpen ? 600 : 0, opacity: isPanelOpen ? 1 : 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="flex flex-col bg-neutral-900 overflow-hidden max-w-[calc(100vw-420px)]"
      >
        <div className="w-[600px] max-w-full h-full">
          <ControlPanel onOpenSettings={() => setIsSettingsOpen(true)} />
        </div>
      </motion.div>

      {/* Settings Modal */}
      <AnimatePresence>
        {isSettingsOpen && (
          <SettingsModal onClose={() => setIsSettingsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
