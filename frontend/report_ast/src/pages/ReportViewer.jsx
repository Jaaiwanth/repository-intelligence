import React from 'react';
import { useLocation } from 'react-router-dom';
import './ReportViewer.css';

export default function ReportViewer() {
  const location = useLocation();
  const pdfUrl = location.state?.pdfUrl || "/project_report.pdf";

  return (
    <div className="report-viewer-body bg-background text-on-background min-h-screen pt-24 pl-0 md:pl-64">
      {/* TopNavBar */}
      <nav className="bg-background fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-24 border-b-8 border-outline shadow-[8px_8px_0px_0px_rgba(121,255,91,1)]">
        <div className="font-heading text-4xl font-bold text-primary">
          REPOAUDIT_AI
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a className="font-heading text-2xl uppercase tracking-widest text-outline hover:bg-primary hover:text-black transition-colors duration-75 px-2 py-2" href="#">REPOS</a>
          <a className="font-heading text-2xl uppercase tracking-widest text-on-background border-b-4 border-primary px-2 py-2 active:translate-x-1 active:translate-y-1 active:shadow-none" href="#">ANALYSIS</a>
          <a className="font-heading text-2xl uppercase tracking-widest text-outline hover:bg-primary hover:text-black transition-colors duration-75 px-2 py-2" href="#">SYSTEM</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 border-2 border-outline hover:bg-primary hover:text-black transition-colors">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <button className="p-2 border-2 border-outline hover:bg-primary hover:text-black transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="bg-surface fixed left-0 top-24 h-[calc(100vh-6rem)] flex flex-col z-40 w-64 border-r-4 border-outline">
        <div className="p-6 border-b-4 border-outline flex items-center space-x-4">
          <div className="w-12 h-12 border-2 border-primary grayscale hover:grayscale-0 transition-all overflow-hidden bg-[#353534]">
            <span className="material-symbols-outlined text-4xl text-outline flex items-center justify-center h-full w-full">account_circle</span>
          </div>
          <div>
            <div className="font-heading text-xl text-[#ffabf3] truncate w-32">0x00451_CORE</div>
            <div className="font-mono text-xs text-primary flex items-center mt-1">
              <div className="w-2 h-2 bg-primary mr-2 pulse-status"></div>
              SYSTEM_STATUS_ACTIVE
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col pt-4">
          <a className="flex items-center px-6 py-4 font-mono font-bold text-xs uppercase tracking-tighter text-gray-400 hover:bg-primary hover:text-black transition-all duration-75 active:translate-x-2" href="#">
            <span className="material-symbols-outlined mr-4">admin_panel_settings</span>
            ROOT_USER
          </a>
          <a className="flex items-center px-6 py-4 font-mono font-bold text-xs uppercase tracking-tighter bg-primary text-black transition-all duration-75 active:translate-x-2" href="#">
            <span className="material-symbols-outlined mr-4">terminal</span>
            LOGS
          </a>
        </div>
        <div className="border-t-4 border-outline p-4">
          <a className="flex items-center px-2 py-4 font-mono font-bold text-xs uppercase tracking-tighter hover:bg-[#ffb4ab] hover:text-black transition-all duration-75 active:translate-x-2 text-primary" href="#">
            <span className="material-symbols-outlined mr-4">logout</span>
            LOGOUT
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-8 h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-8">
        {/* Left Panel: AUDIT_STATS */}
        <section className="w-full md:w-1/3 flex flex-col gap-8 h-full">
          <div className="bg-[#131313] border-4 border-primary relative h-full flex flex-col">
            <div className="p-6 border-t-2 border-outline flex flex-col gap-4 mt-auto">
              <a href={pdfUrl} download className="w-full bg-primary text-black border-4 border-black font-mono font-bold text-sm uppercase py-4 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] glitch-hover transition-all flex items-center justify-center gap-2 block text-center cursor-pointer">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                DOWNLOAD_PDF
              </a>
            </div>
          </div>
        </section>

        {/* Right Panel: SECURITY_AUDIT Viewer */}
        <section className="w-full md:w-2/3 h-full">
          <div className="bg-[#131313] border-4 border-[#ffabf3] relative h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(255,171,243,1)]">
            <div className="absolute top-0 right-0 bg-[#ffabf3] text-black font-mono text-xs px-2 py-1 uppercase font-bold border-l-4 border-b-4 border-[#ffabf3]">
              0x00B2_VIEWER
            </div>
            <div className="border-b-2 border-outline p-4 flex justify-between items-center bg-[#1c1b1b]">
              <h3 className="font-heading text-2xl text-[#ffabf3] uppercase m-0">SECURITY_AUDIT.PDF</h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 border-2 border-outline flex items-center justify-center hover:bg-outline transition-colors text-primary">
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <div className="h-8 border-2 border-outline px-4 flex items-center justify-center font-mono font-bold text-sm text-primary">
                  100%
                </div>
                <button className="w-8 h-8 border-2 border-outline flex items-center justify-center hover:bg-outline transition-colors text-primary">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
            <div className="flex-grow p-8 overflow-y-auto bg-[#0e0e0e] relative h-full">
              <iframe src={pdfUrl} className="w-full h-full min-h-[600px] border-2 border-outline shadow-[4px_4px_0px_0px_rgba(142,146,137,1)] max-w-4xl mx-auto block bg-white" />
            </div>
            <div className="border-t-2 border-outline p-4 bg-[#1c1b1b] flex justify-between items-center font-mono text-xs text-outline">
              <div>PAGE 1 OF 42</div>
              <div className="flex gap-4">
                <button className="hover:text-primary uppercase transition-colors">PREV_PAGE</button>
                <button className="hover:text-primary uppercase transition-colors">NEXT_PAGE</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
