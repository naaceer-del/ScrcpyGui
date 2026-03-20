"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { X, Terminal, Smartphone, Wifi, RefreshCw, Power, Settings2 } from "lucide-react";

export function SettingsModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("scrcpy");
  const [isAdvanced, setIsAdvanced] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full h-[80vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-950/50">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-white">Settings</h2>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700/50">
              <span className="text-xs font-medium text-neutral-400">Advanced Mode</span>
              <button
                onClick={() => setIsAdvanced(!isAdvanced)}
                className={`w-8 h-4 rounded-full transition-colors relative ${
                  isAdvanced ? "bg-indigo-500" : "bg-neutral-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                    isAdvanced ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 border-r border-neutral-800 bg-neutral-950/30 p-4 space-y-2 flex-shrink-0 overflow-y-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab("scrcpy")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === "scrcpy" ? "bg-indigo-500/10 text-indigo-400" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"}`}
            >
              <Smartphone className="w-4 h-4" />
              Scrcpy
            </button>
            <button
              onClick={() => setActiveTab("adb")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === "adb" ? "bg-indigo-500/10 text-indigo-400" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"}`}
            >
              <Terminal className="w-4 h-4" />
              ADB
            </button>
            {isAdvanced && (
              <>
                <div className="pt-4 pb-1">
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-3">Advanced</div>
                </div>
                <button
                  onClick={() => setActiveTab("adv-general")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === "adv-general" ? "bg-indigo-500/10 text-indigo-400" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"}`}
                >
                  <Settings2 className="w-4 h-4" />
                  General
                </button>
                <button
                  onClick={() => setActiveTab("adv-connection")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === "adv-connection" ? "bg-indigo-500/10 text-indigo-400" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"}`}
                >
                  <Wifi className="w-4 h-4" />
                  Connection
                </button>
                <button
                  onClick={() => setActiveTab("adv-input")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === "adv-input" ? "bg-indigo-500/10 text-indigo-400" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"}`}
                >
                  <Terminal className="w-4 h-4" />
                  Input
                </button>
                <button
                  onClick={() => setActiveTab("adv-audio")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === "adv-audio" ? "bg-indigo-500/10 text-indigo-400" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"}`}
                >
                  <Smartphone className="w-4 h-4" />
                  Audio
                </button>
                <button
                  onClick={() => setActiveTab("adv-video")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTab === "adv-video" ? "bg-indigo-500/10 text-indigo-400" : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"}`}
                >
                  <Smartphone className="w-4 h-4" />
                  Video
                </button>
              </>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
            {activeTab === "scrcpy" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                  Display & Video
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-neutral-200">
                        Video Bitrate
                      </div>
                      <div className="text-xs text-neutral-500">
                        Target bitrate for video stream
                      </div>
                    </div>
                    <select className="bg-neutral-950 border border-neutral-800 text-sm text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500">
                      <option>4 Mbps</option>
                      <option>8 Mbps</option>
                      <option>16 Mbps</option>
                      <option>24 Mbps</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-neutral-200">
                        Max FPS
                      </div>
                      <div className="text-xs text-neutral-500">
                        Limit framerate
                      </div>
                    </div>
                    <select className="bg-neutral-950 border border-neutral-800 text-sm text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500">
                      <option>30 FPS</option>
                      <option>60 FPS</option>
                      <option>120 FPS</option>
                      <option>Unlimited</option>
                    </select>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider pt-4 border-t border-neutral-800">
                  Device Control
                </h3>

                <div className="space-y-4">
                  <ToggleRow
                    label="Turn screen off"
                    description="Turn device screen off while mirroring"
                    defaultChecked={true}
                  />
                  <ToggleRow
                    label="Stay awake"
                    description="Prevent device from sleeping"
                    defaultChecked={true}
                  />
                  <ToggleRow
                    label="Show touches"
                    description="Show physical touches on screen"
                    defaultChecked={false}
                  />
                </div>
              </div>
            )}

            {activeTab === "adb" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                  Connection
                </h3>

                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-indigo-300">
                      Enable WiFi Mode (TCP/IP)
                    </div>
                    <div className="text-xs text-indigo-400/70 mt-1 mb-3">
                      Connect to your device wirelessly over the local network.
                      Requires initial USB connection.
                    </div>
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors">
                      Enable TCP/IP on Port 5555
                    </button>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider pt-4 border-t border-neutral-800">
                  Server & Power
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center gap-3 p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 transition-colors text-left group">
                    <RefreshCw className="w-5 h-5 text-sky-400 group-hover:rotate-180 transition-transform duration-500" />
                    <div>
                      <div className="text-sm font-medium text-neutral-200">
                        Restart Server
                      </div>
                      <div className="text-xs text-neutral-500">
                        Kill and start ADB
                      </div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 transition-colors text-left group">
                    <Power className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-medium text-neutral-200">
                        Reboot Device
                      </div>
                      <div className="text-xs text-neutral-500">
                        Normal reboot
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Advanced Tabs */}
            {activeTab === "adv-general" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">General / Window</h3>
                <div className="space-y-4">
                  <ToggleRow label="Always on top (--always-on-top)" description="Keep window above other windows" defaultChecked={false} />
                  <ToggleRow label="Fullscreen (-f, --fullscreen)" description="Start in fullscreen mode" defaultChecked={false} />
                  <ToggleRow label="Window borderless (--window-borderless)" description="Remove window decorations" defaultChecked={false} />
                  <ToggleRow label="Disable screensaver (--disable-screensaver)" description="Disable screensaver while running" defaultChecked={false} />
                  <ToggleRow label="Print FPS (--print-fps)" description="Print FPS to console" defaultChecked={false} />
                  <ToggleRow label="No mipmaps (--no-mipmaps)" description="Disable mipmap generation" defaultChecked={false} />
                  
                  <SelectRow label="Pause on exit (--pause-on-exit)" options={['true', 'false', 'if-error']} />
                  <SelectRow label="Verbosity (-V, --verbosity)" options={['info', 'debug', 'warn', 'error']} />
                  <SelectRow label="Render driver (--render-driver)" options={['auto', 'direct3d', 'opengl', 'opengles2', 'opengles', 'metal', 'software']} />
                  
                  <InputRow label="Window title (--window-title)" placeholder="Custom title" />
                  <InputRow label="Window X (--window-x)" placeholder="X position" />
                  <InputRow label="Window Y (--window-y)" placeholder="Y position" />
                  <InputRow label="Window width (--window-width)" placeholder="Width" />
                  <InputRow label="Window height (--window-height)" placeholder="Height" />
                  <InputRow label="Angle (--angle)" placeholder="Rotation angle" />
                  <InputRow label="Shortcut mod (--shortcut-mod)" placeholder="e.g. lalt,lsuper" />
                  <InputRow label="Time limit (--time-limit)" placeholder="Seconds" />
                </div>
              </div>
            )}

            {activeTab === "adv-connection" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Connection / Device / Display</h3>
                <div className="space-y-4">
                  <ToggleRow label="Select USB (-d, --select-usb)" description="Force USB connection" defaultChecked={false} />
                  <ToggleRow label="Select TCP/IP (-e, --select-tcpip)" description="Force TCP/IP connection" defaultChecked={false} />
                  <ToggleRow label="Force ADB forward (--force-adb-forward)" description="Use adb forward instead of reverse" defaultChecked={false} />
                  <ToggleRow label="Kill ADB on close (--kill-adb-on-close)" description="Kill adb daemon when scrcpy closes" defaultChecked={false} />
                  <ToggleRow label="No VD destroy content (--no-vd-destroy-content)" description="Keep virtual display content" defaultChecked={false} />
                  <ToggleRow label="No VD system decorations (--no-vd-system-decorations)" description="Remove virtual display decorations" defaultChecked={false} />
                  <ToggleRow label="Stay awake (-w, --stay-awake)" description="Keep device awake" defaultChecked={false} />
                  <ToggleRow label="Turn screen off (-S, --turn-screen-off)" description="Turn off device screen" defaultChecked={false} />
                  <ToggleRow label="Power off on close (--power-off-on-close)" description="Turn off device when scrcpy closes" defaultChecked={false} />
                  <ToggleRow label="No power on (--no-power-on)" description="Do not power on device on start" defaultChecked={false} />
                  <ToggleRow label="No cleanup (--no-cleanup)" description="Do not remove scrcpy server from device" defaultChecked={false} />
                  <ToggleRow label="Show touches (-t, --show-touches)" description="Show physical touches" defaultChecked={false} />
                  <ToggleRow label="OTG mode (--otg)" description="Run in OTG mode" defaultChecked={false} />

                  <SelectRow label="Display orientation (--display-orientation)" options={['0', '90', '180', '270', 'flip0', 'flip90', 'flip180', 'flip270']} />
                  
                  <InputRow label="Serial (-s, --serial)" placeholder="Device serial" />
                  <InputRow label="TCP/IP (--tcpip)" placeholder="ip:port" />
                  <InputRow label="Port (-p, --port)" placeholder="Port range" />
                  <InputRow label="Tunnel host (--tunnel-host)" placeholder="Host" />
                  <InputRow label="Tunnel port (--tunnel-port)" placeholder="Port" />
                  <InputRow label="Display ID (--display-id)" placeholder="ID" />
                  <InputRow label="Display IME policy (--display-ime-policy)" placeholder="Policy" />
                  <InputRow label="New display (--new-display)" placeholder="Dimensions" />
                  <InputRow label="Start app (--start-app)" placeholder="Package name" />
                  <InputRow label="Screen off timeout (--screen-off-timeout)" placeholder="Milliseconds" />
                </div>
              </div>
            )}

            {activeTab === "adv-input" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Input / Control</h3>
                <div className="space-y-4">
                  <ToggleRow label="No control (-n, --no-control)" description="Read-only mode" defaultChecked={false} />
                  <ToggleRow label="No playback (-N, --no-playback)" description="Disable video and audio playback" defaultChecked={false} />
                  <ToggleRow label="Legacy paste (--legacy-paste)" description="Inject text as key events" defaultChecked={false} />
                  <ToggleRow label="Prefer text (--prefer-text)" description="Inject text instead of key events" defaultChecked={false} />
                  <ToggleRow label="Raw key events (--raw-key-events)" description="Inject raw key events" defaultChecked={false} />
                  <ToggleRow label="No key repeat (--no-key-repeat)" description="Do not forward repeated keys" defaultChecked={false} />
                  <ToggleRow label="No mouse hover (--no-mouse-hover)" description="Do not forward mouse hover" defaultChecked={false} />
                  <ToggleRow label="No clipboard autosync (--no-clipboard-autosync)" description="Disable clipboard sync" defaultChecked={false} />

                  <SelectRow label="Keyboard (--keyboard)" options={['disabled', 'sdk', 'uhid', 'aoa']} />
                  <SelectRow label="Mouse (--mouse)" options={['disabled', 'sdk', 'uhid', 'aoa']} />
                  <SelectRow label="Gamepad (--gamepad)" options={['disabled', 'uhid', 'aoa']} />
                  
                  <InputRow label="Mouse bind (--mouse-bind)" placeholder="e.g. +:b" />
                  <InputRow label="Push target (--push-target)" placeholder="Path on device" />
                </div>
              </div>
            )}

            {activeTab === "adv-audio" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Audio</h3>
                <div className="space-y-4">
                  <ToggleRow label="Audio dup (--audio-dup)" description="Duplicate audio" defaultChecked={false} />
                  <ToggleRow label="No audio (--no-audio)" description="Disable audio forwarding" defaultChecked={false} />
                  <ToggleRow label="No audio playback (--no-audio-playback)" description="Disable audio playback" defaultChecked={false} />
                  <ToggleRow label="Require audio (--require-audio)" description="Fail if audio cannot be forwarded" defaultChecked={false} />

                  <SelectRow label="Audio codec (--audio-codec)" options={['opus', 'aac', 'flac', 'raw']} />
                  <SelectRow label="Audio source (--audio-source)" options={['output', 'playback', 'mic', 'mic-unprocessed', 'mic-camcorder', 'mic-voice-recognition', 'mic-voice-communication', 'voice-call', 'voice-call-uplink', 'voice-call-downlink', 'voice-performance']} />
                  
                  <InputRow label="Audio bit rate (--audio-bit-rate)" placeholder="e.g. 128K" />
                  <InputRow label="Audio buffer (--audio-buffer)" placeholder="Milliseconds" />
                  <InputRow label="Audio codec options (--audio-codec-options)" placeholder="Options" />
                  <InputRow label="Audio encoder (--audio-encoder)" placeholder="Encoder name" />
                  <InputRow label="Audio output buffer (--audio-output-buffer)" placeholder="Milliseconds" />
                </div>
              </div>
            )}

            {activeTab === "adv-video" && (
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Video / Camera / Recording / V4L2</h3>
                <div className="space-y-4">
                  <ToggleRow label="No video (--no-video)" description="Disable video forwarding" defaultChecked={false} />
                  <ToggleRow label="No video playback (--no-video-playback)" description="Disable video playback" defaultChecked={false} />
                  <ToggleRow label="No downsize on error (--no-downsize-on-error)" description="Do not downsize if encoder fails" defaultChecked={false} />
                  <ToggleRow label="Camera high speed (--camera-high-speed)" description="Enable high speed camera" defaultChecked={false} />

                  <SelectRow label="Video codec (--video-codec)" options={['h264', 'h265', 'av1']} />
                  <SelectRow label="Video source (--video-source)" options={['display', 'camera']} />
                  <SelectRow label="Capture orientation (--capture-orientation)" options={['0', '90', '180', '270', 'flip0', 'flip90', 'flip180', 'flip270', '@0', '@90', '@180', '@270', '@flip0', '@flip90', '@flip180', '@flip270']} />
                  <SelectRow label="Orientation (--orientation)" options={['0', '90', '180', '270', 'flip0', 'flip90', 'flip180', 'flip270']} />
                  <SelectRow label="Record format (--record-format)" options={['mp4', 'mkv', 'm4a', 'mka', 'opus', 'aac', 'flac', 'wav']} />
                  <SelectRow label="Record orientation (--record-orientation)" options={['0', '90', '180', '270']} />
                  <SelectRow label="Camera facing (--camera-facing)" options={['front', 'back', 'external']} />
                  
                  <InputRow label="Video bit rate (-b, --video-bit-rate)" placeholder="e.g. 8M" />
                  <InputRow label="Video buffer (--video-buffer)" placeholder="Milliseconds" />
                  <InputRow label="Video codec options (--video-codec-options)" placeholder="Options" />
                  <InputRow label="Video encoder (--video-encoder)" placeholder="Encoder name" />
                  <InputRow label="Max size (-m, --max-size)" placeholder="Pixels" />
                  <InputRow label="Max FPS (--max-fps)" placeholder="FPS" />
                  <InputRow label="Crop (--crop)" placeholder="width:height:x:y" />
                  <InputRow label="Record (-r, --record)" placeholder="File path" />
                  <InputRow label="Camera AR (--camera-ar)" placeholder="Aspect ratio" />
                  <InputRow label="Camera ID (--camera-id)" placeholder="ID" />
                  <InputRow label="Camera FPS (--camera-fps)" placeholder="FPS" />
                  <InputRow label="Camera size (--camera-size)" placeholder="Dimensions" />
                  <InputRow label="V4L2 buffer (--v4l2-buffer)" placeholder="Milliseconds" />
                  <InputRow label="V4L2 sink (--v4l2-sink)" placeholder="/dev/videoN" />
                </div>
              </div>
            )}

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ToggleRow({
  label,
  description,
  defaultChecked,
}: {
  label: string;
  description: string;
  defaultChecked: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm font-medium text-neutral-200">{label}</div>
        <div className="text-xs text-neutral-500">{description}</div>
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={`w-10 h-6 rounded-full transition-colors relative flex-shrink-0 ${
          checked ? "bg-indigo-500" : "bg-neutral-700"
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

function SelectRow({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium text-neutral-200">{label}</div>
      <select className="bg-neutral-950 border border-neutral-800 text-sm text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500 min-w-[120px]">
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function InputRow({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium text-neutral-200">{label}</div>
      <input 
        type="text" 
        placeholder={placeholder}
        className="bg-neutral-950 border border-neutral-800 text-sm text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500 w-48"
      />
    </div>
  );
}

