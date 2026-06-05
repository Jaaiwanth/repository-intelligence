import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container text-on-background font-mono min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-24 bg-background border-b-8 border-outline shadow-[8px_8px_0px_0px_rgba(121,255,91,1)]">
        <div className="font-heading text-4xl font-bold text-primary uppercase tracking-widest">
            REPOAUDIT_AI
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a className="font-heading text-2xl uppercase tracking-widest text-on-background border-b-4 border-primary" href="#">REPOS</a>
            <a className="font-heading text-2xl uppercase tracking-widest text-outline hover:bg-primary hover:text-black transition-colors duration-75" href="#">ANALYSIS</a>
            <a className="font-heading text-2xl uppercase tracking-widest text-outline hover:bg-primary hover:text-black transition-colors duration-75" href="#">SYSTEM</a>
          </div>
          <div className="flex gap-4">
            <button className="text-primary hover:bg-primary hover:text-black transition-colors duration-75 active:translate-x-1 active:translate-y-1">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>terminal</span>
            </button>
            <button className="text-primary hover:bg-primary hover:text-black transition-colors duration-75 active:translate-x-1 active:translate-y-1">
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>settings</span>
            </button>
          </div>
        </div>
      </nav>

      <aside className="hidden md:flex fixed left-0 top-24 h-[calc(100vh-6rem)] w-64 flex-col z-40 bg-surface border-r-4 border-outline">
        <div className="p-6 border-b-4 border-outline">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 border-2 border-outline grayscale hover:grayscale-0 transition-all duration-200 overflow-hidden bg-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <div>
              <div className="font-heading text-xl text-secondary">0x00451_CORE</div>
              <div className="font-mono text-xs text-primary flex items-center gap-2 mt-1">
                <div className="w-3 h-3 bg-primary status-pulse"></div>
                SYSTEM_STATUS_ACTIVE
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col pt-8 gap-2 px-4">
          <a className="flex items-center gap-4 p-4 font-mono font-bold text-sm uppercase tracking-tighter bg-primary text-black transition-all duration-75 active:translate-x-2" href="#">
            <span className="material-symbols-outlined">admin_panel_settings</span>
            ROOT_USER
          </a>
          <a className="flex items-center gap-4 p-4 font-mono font-bold text-sm uppercase tracking-tighter text-gray-400 hover:bg-primary hover:text-black transition-all duration-75 active:translate-x-2" href="#">
            <span className="material-symbols-outlined">terminal</span>
            LOGS
          </a>
        </div>
        <div className="p-4 border-t-4 border-outline mt-auto">
          <a className="flex items-center gap-4 p-4 font-mono font-bold text-sm uppercase tracking-tighter text-gray-400 hover:bg-primary hover:text-black transition-all duration-75 active:translate-x-2" href="#">
            <span className="material-symbols-outlined">logout</span>
            LOGOUT
          </a>
        </div>
      </aside>

      <main className="pt-32 pb-24 px-6 md:pl-72 md:pr-6 max-w-[1600px] mx-auto min-h-screen flex flex-col gap-8 justify-center">
        <section className="border-8 border-outline bg-background p-6 relative shadow-[8px_8px_0px_0px_#444841]">
          <div className="absolute top-0 right-0 bg-primary text-black font-mono text-xs px-2 py-1 border-b-4 border-l-4 border-outline">
            SEQ_ID: 0x8F9A
          </div>
          <div className="flex flex-col items-center justify-center py-16 gap-8">
            <h1 className="font-heading text-6xl uppercase text-primary text-center leading-none">
                TARGET_ACQUISITION
            </h1>
            <div className="w-full max-w-2xl relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-3xl">code</span>
              <input 
                className="w-full bg-black border-2 border-primary text-primary font-mono text-lg p-6 pl-16 focus:outline-none focus:border-primary placeholder-gray-500" 
                placeholder="ENTER_REPOSITORY_URL_OR_ID..." 
                type="text" 
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-6 bg-primary caret-blink"></div>
            </div>
            <button className="bg-primary text-black border-4 border-black font-heading text-2xl uppercase px-12 py-4 neon-shadow glitch-hover flex items-center gap-4 mt-8">
              <span className="material-symbols-outlined text-4xl">play_circle</span>
              INITIATE_AUDIT_SEQUENCE
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
