"use client";

import React, { useState } from "react";
import {
  Search,
  Edit,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Check,
  CheckCheck,
  MessageSquare,
} from "lucide-react";

export function MessagesTab() {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Alice Smith",
      preview: "See you at 5! ð",
      time: "10:42 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Bob Johnson",
      preview: "Can you send the files?",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      name: "Mom",
      preview: "Call me when you get home.",
      time: "Mon",
      unread: 0,
    },
    {
      id: 4,
      name: "Work Group",
      preview: "Charlie: The meeting is moved to 3 PM.",
      time: "Sun",
      unread: 5,
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Hey, are we still on for today?",
      sender: "them",
      time: "10:30 AM",
    },
    {
      id: 2,
      text: "Yes! I'll be there around 5.",
      sender: "me",
      time: "10:35 AM",
      status: "read",
    },
    {
      id: 3,
      text: "Awesome, see you at 5! ð",
      sender: "them",
      time: "10:42 AM",
    },
  ];

  return (
    <div className="flex h-full gap-6">
      {/* Sidebar */}
      <div className="w-1/3 min-w-[250px] flex flex-col border-r border-neutral-800 pr-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Messages</h2>
          <button className="p-2 rounded-full bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors">
            <Edit className="w-4 h-4" />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-neutral-800/50 border border-neutral-700/50 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`w-full text-left p-3 rounded-xl transition-all ${
                activeChat === chat.id
                  ? "bg-indigo-500/10 border border-indigo-500/20"
                  : "hover:bg-neutral-800/50 border border-transparent"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`font-medium text-sm ${activeChat === chat.id ? "text-indigo-300" : "text-neutral-200"}`}
                >
                  {chat.name}
                </span>
                <span className="text-xs text-neutral-500">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400 truncate pr-4">
                  {chat.preview}
                </span>
                {chat.unread > 0 && (
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                    {chat.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="h-16 border-b border-neutral-800 flex items-center justify-between px-6 bg-neutral-950/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {chats.find((c) => c.id === activeChat)?.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-neutral-200">
                    {chats.find((c) => c.id === activeChat)?.name}
                  </h3>
                  <p className="text-xs text-emerald-400">Online</p>
                </div>
              </div>
              <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.sender === "me"
                        ? "bg-indigo-600 text-white rounded-br-sm"
                        : "bg-neutral-800 text-neutral-200 rounded-bl-sm border border-neutral-700/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div className="flex items-center gap-1 mt-1.5 px-1">
                    <span className="text-[10px] text-neutral-500">
                      {msg.time}
                    </span>
                    {msg.sender === "me" &&
                      (msg.status === "read" ? (
                        <CheckCheck className="w-3 h-3 text-sky-400" />
                      ) : (
                        <Check className="w-3 h-3 text-neutral-500" />
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-neutral-950/50 border-t border-neutral-800">
              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700/50 rounded-full p-1.5 pr-2">
                <button className="p-2 text-neutral-400 hover:text-indigo-400 transition-colors rounded-full hover:bg-neutral-800">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none px-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && message.trim()) {
                      setMessage("");
                    }
                  }}
                />
                <button className="p-2 text-neutral-400 hover:text-amber-400 transition-colors rounded-full hover:bg-neutral-800">
                  <Smile className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setMessage("")}
                  disabled={!message.trim()}
                  className={`p-2 rounded-full transition-all ${
                    message.trim()
                      ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/25"
                      : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-neutral-500 flex-col gap-4">
            <MessageSquare className="w-12 h-12 opacity-20" />
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}
