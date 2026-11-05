import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Database, Layers, Sparkles, MapPin, Activity, ShieldCheck, Terminal, Compass, RefreshCw, Cpu, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const InteractiveEcosystem: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'nexus' | 'ticket99' | 'izmap'>('nexus');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tokenCounter, setTokenCounter] = useState(15);
  const [scannedCount, setScannedCount] = useState(1489);

  // Simulate rotating token countdown for Ticket99
  useEffect(() => {
    const timer = setInterval(() => {
      setTokenCounter((prev) => {
        if (prev <= 1) {
          setScannedCount((c) => c + 1);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-[4/3] max-w-[640px] mx-auto rounded-3xl bg-gradient-to-b from-[#0F172A]/95 via-[#0A0F1D]/95 to-[#050811]/98 border border-slate-700/80 p-5 sm:p-6 overflow-hidden shadow-2xl backdrop-blur-2xl group select-none flex flex-col justify-between"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Ambient Depth Glow */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700 ease-out"
        style={{
          background: activeTab === 'nexus'
            ? 'radial-gradient(circle, #38BDF8 0%, transparent 70%)'
            : activeTab === 'ticket99'
            ? 'radial-gradient(circle, #22D3EE 0%, transparent 70%)'
            : 'radial-gradient(circle, #10B981 0%, transparent 70%)',
          left: `calc(50% + ${mousePos.x * 2}px - 12rem)`,
          top: `calc(50% + ${mousePos.y * 2}px - 12rem)`,
        }}
      />

      {/* Top Engineering Mode Switcher */}
      <div className="relative z-30 flex items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('nexus')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'nexus'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Digital Nexus</span>
          </button>
          <button
            onClick={() => setActiveTab('ticket99')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'ticket99'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Ticket99 HUD</span>
          </button>
          <button
            onClick={() => setActiveTab('izmap')}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'izmap'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>izMap GIS</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive Preview</span>
        </div>
      </div>

      {/* Main Viewport Area */}
      <div className="relative flex-1 my-3 overflow-hidden rounded-2xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeTab === 'nexus' && (
            <motion.div
              key="nexus"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Backplate render asset */}
              <img
                src="/src/assets/images/hero_digital_ecosystem_1793900282776.jpg"
                alt="Digital Architecture"
                className="absolute inset-0 w-full h-full object-cover opacity-20 filter saturate-150 mix-blend-screen pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Connecting laser lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="50%" y1="50%" x2="22%" y2="28%" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <line x1="50%" y1="50%" x2="78%" y2="25%" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <line x1="50%" y1="50%" x2="20%" y2="76%" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <line x1="50%" y1="50%" x2="80%" y2="74%" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              </svg>

              {/* Central Nucleus */}
              <motion.div
                animate={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                className="relative z-20 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#0B1528] border border-cyan-400/80 shadow-xl shadow-cyan-500/20 flex flex-col items-center justify-center p-2 text-center backdrop-blur-xl">
                  <span className="text-[10px] font-mono text-cyan-400">CORE</span>
                  <span className="text-lg font-black text-white tracking-tight">IOT</span>
                  <div className="w-3 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-0.5" />
                </div>
              </motion.div>

              {/* Satellite Node 1: Custom Software */}
              <motion.div
                animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
                className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg text-left"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Software Engine</div>
                    <div className="text-[10px] font-mono text-cyan-400">REST / GraphQL API</div>
                  </div>
                </div>
              </motion.div>

              {/* Satellite Node 2: Ticket99 Engine */}
              <motion.div
                animate={{ x: mousePos.x * 0.6, y: mousePos.y * -0.6 }}
                className="absolute top-3 right-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg text-left"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Ticket99 Platform</div>
                    <div className="text-[10px] font-mono text-cyan-400">&lt; 0.5s Gate Ingress</div>
                  </div>
                </div>
              </motion.div>

              {/* Satellite Node 3: izMap GIS */}
              <motion.div
                animate={{ x: mousePos.x * -0.6, y: mousePos.y * 0.6 }}
                className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg text-left"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">izMap Spatial GIS</div>
                    <div className="text-[10px] font-mono text-emerald-400">Vector Tiles 60fps</div>
                  </div>
                </div>
              </motion.div>

              {/* Satellite Node 4: Creative & Stage Tech */}
              <motion.div
                animate={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
                className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg text-left"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Event Production</div>
                    <div className="text-[10px] font-mono text-purple-400">4K Spatial Visuals</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'ticket99' && (
            <motion.div
              key="ticket99"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full bg-slate-950/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GATE SCANNER TERMINAL · ENCRYPTED</span>
                </span>
                <span className="text-slate-400">STATUS: ACTIVE</span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-auto items-center">
                {/* QR Code Simulator */}
                <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-white p-2 rounded-lg shadow-inner flex flex-col items-center justify-center">
                    {/* Simplified QR geometry representation */}
                    <div className="w-full h-full bg-slate-950 rounded p-1 grid grid-cols-4 gap-0.5">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-[1px] ${
                            [0, 1, 3, 4, 7, 8, 10, 12, 14, 15].includes(i)
                              ? 'bg-white'
                              : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mt-2">
                    <RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />
                    <span>Rotates in {tokenCounter}s</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">TOTP-TOKEN-SECURE</span>
                </div>

                {/* Gate Telemetry Stream */}
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">TOTAL INGRESS SCANNED</div>
                    <div className="text-lg font-bold text-white tabular-nums">
                      {scannedCount} <span className="text-xs text-emerald-400 font-normal">/ 5,000</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">INGRESS VERIFICATION SPEED</div>
                    <div className="text-sm font-bold text-cyan-400 tabular-nums">
                      0.38s <span className="text-[10px] text-slate-400 font-normal">(Sub-second cache)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-2 flex items-center justify-between">
                <span>Mesh Offline-First Protocol</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Gate Synchronized</span>
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === 'izmap' && (
            <motion.div
              key="izmap"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full bg-slate-950/90 border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Map Canvas Background */}
              <div className="absolute inset-0">
                <img
                  src="/src/assets/images/project_izmap_1793900285032.jpg"
                  alt="GIS Map Interface"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              {/* Map HUD Overlay */}
              <div className="relative z-10 p-3 flex items-center justify-between bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>PROVINCIAL GIS CONTROLLER · VN-2000</span>
                </span>
                <span className="text-slate-300">22.6657° N, 106.2625° E</span>
              </div>

              <div className="relative z-10 p-4 mt-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-xs font-mono text-white backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive 3D Elevation & Heritage Trail</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800">Contours: ON</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800">POI Density: 1,452</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800">Tiles: Vector 60fps</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Architectural Spec Footer */}
      <div className="relative z-30 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>IOT Digital Engineering Sandbox</span>
        </div>
        <span className="text-cyan-400 text-[11px]">Clean Architecture · SLA 99.9%</span>
      </div>
    </div>
  );
};
