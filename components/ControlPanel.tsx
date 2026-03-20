"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Phone,
  MessageSquare,
  Folder,
  Settings,
} from "lucide-react";
import { ControlTab } from "./tabs/ControlTab";
import { CallsTab } from "./tabs/CallsTab";
import { MessagesTab } from "./tabs/MessagesTab";
import { FilesTab } from "./tabs/FilesTab";

const TABS = [
  { id: "control", label: "Control", icon: Smartphone },
  { id: "calls", label: "Calls", icon: Phone },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "files", label: "Files", icon: Folder },
];

export function ControlPanel() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <div className="flex flex-col h-full bg-neutral-900">
      {/* Header / Tabs */}
      <div className="h-16 border-b border-neutral-800 flex items-center px-6 gap-6 bg-neutral-950/50">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 h-full px-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-t-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
        <div className="ml-auto flex items-center">
          <button className="p-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-800">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 overflow-y-auto p-6"
          >
            {activeTab === "control" && <ControlTab />}
            {activeTab === "calls" && <CallsTab />}
            {activeTab === "messages" && <MessagesTab />}
            {activeTab === "files" && <FilesTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
