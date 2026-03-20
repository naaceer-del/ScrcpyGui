"use client";

import React, { useState } from "react";
import {
  Folder,
  File,
  Image as ImageIcon,
  Music,
  Video,
  Download,
  Upload,
  Trash2,
  MoreHorizontal,
  ChevronRight,
  HardDrive,
} from "lucide-react";

export function FilesTab() {
  const [currentPath, setCurrentPath] = useState([
    "Internal Storage",
    "DCIM",
    "Camera",
  ]);

  const files = [
    {
      id: 1,
      name: "IMG_20231024_104201.jpg",
      type: "image",
      size: "3.2 MB",
      date: "Oct 24, 2023",
    },
    {
      id: 2,
      name: "VID_20231023_153022.mp4",
      type: "video",
      size: "124.5 MB",
      date: "Oct 23, 2023",
    },
    {
      id: 3,
      name: "Screenshots",
      type: "folder",
      items: 12,
      date: "Oct 20, 2023",
    },
    {
      id: 4,
      name: "Document.pdf",
      type: "document",
      size: "1.1 MB",
      date: "Oct 19, 2023",
    },
    {
      id: 5,
      name: "Audio_Recording.m4a",
      type: "audio",
      size: "5.4 MB",
      date: "Oct 18, 2023",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "folder":
        return <Folder className="w-5 h-5 text-amber-400 fill-amber-400/20" />;
      case "image":
        return <ImageIcon className="w-5 h-5 text-emerald-400" />;
      case "video":
        return <Video className="w-5 h-5 text-rose-400" />;
      case "audio":
        return <Music className="w-5 h-5 text-purple-400" />;
      default:
        return <File className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Header & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-400 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700/50">
          <HardDrive className="w-4 h-4 text-indigo-400" />
          {currentPath.map((part, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-neutral-600" />
              <button className="hover:text-white transition-colors">
                {part}
              </button>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
            <Upload className="w-4 h-4" />
            Push File
          </button>
        </div>
      </div>

      {/* File List */}
      <div className="flex-1 bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden flex flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-neutral-800 bg-neutral-950/30 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          <div className="col-span-6">Name</div>
          <div className="col-span-3">Date Modified</div>
          <div className="col-span-2 text-right">Size</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* Table Body */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {files.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-12 gap-4 px-4 py-3 items-center rounded-xl hover:bg-neutral-800/50 transition-colors group cursor-pointer border border-transparent hover:border-neutral-700/50"
            >
              <div className="col-span-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800/50 group-hover:bg-neutral-800 transition-colors">
                  {getIcon(file.type)}
                </div>
                <span className="text-sm font-medium text-neutral-200 truncate">
                  {file.name}
                </span>
              </div>
              <div className="col-span-3 text-xs text-neutral-500">
                {file.date}
              </div>
              <div className="col-span-2 text-xs text-neutral-500 text-right">
                {file.type === "folder" ? `${file.items} items` : file.size}
              </div>
              <div className="col-span-1 flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {file.type !== "folder" && (
                  <button className="p-1.5 text-neutral-400 hover:text-emerald-400 transition-colors rounded-md hover:bg-neutral-800">
                    <Download className="w-4 h-4" />
                  </button>
                )}
                <button className="p-1.5 text-neutral-400 hover:text-rose-400 transition-colors rounded-md hover:bg-neutral-800">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-neutral-400 hover:text-white transition-colors rounded-md hover:bg-neutral-800">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
