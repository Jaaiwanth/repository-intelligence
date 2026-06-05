import React from 'react';
import './ReportViewer.css';

export default function ReportViewer() {
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
              <button className="w-full bg-primary text-black border-4 border-black font-mono font-bold text-sm uppercase py-4 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] glitch-hover transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                DOWNLOAD_PDF
              </button>
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
            <div className="flex-grow p-8 overflow-y-auto bg-[#0e0e0e] relative">
              {/* Faux PDF Content Page */}
              <div className="bg-white text-black p-12 min-h-full border-2 border-outline shadow-[4px_4px_0px_0px_rgba(142,146,137,1)] max-w-3xl mx-auto font-mono text-sm">
                <div className="border-b-4 border-black pb-6 mb-8 flex justify-between items-end">
                  <div>
                    <h1 className="font-heading text-4xl text-black uppercase mb-2">Automated Security Analysis Report</h1>
                    <div className="font-mono font-bold">TARGET: core-auth-service-v2</div>
                  </div>
                  <div className="font-mono text-xs text-right">
                    DATE: 2023-10-27<br />
                    ID: SA-9942-X
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="font-heading text-2xl text-black uppercase mb-4">1. Executive Summary</h2>
                  <p className="mb-4">The automated scan identified <span className="bg-[#ffb4ab] px-1 font-bold">12 critical vulnerabilities</span> primarily concentrated within the JWT validation routines and database query sanitization layers. Immediate remediation is required to prevent potential privilege escalation attacks.</p>
                </div>
                <div className="mb-8">
                  <h2 className="font-heading text-2xl text-black uppercase mb-4">2. Critical Findings</h2>
                  <div className="border-2 border-black p-4 mb-4">
                    <div className="flex justify-between items-center mb-2 border-b-2 border-black pb-2">
                      <span className="font-mono font-bold">CVE-2023-XXXX: SQL Injection</span>
                      <span className="bg-[#ffb4ab] text-black font-bold px-2 py-1 text-xs">CRITICAL</span>
                    </div>
                    <p className="mb-2">Improper sanitization of user input in `src/db/auth_query.go` line 142.</p>
                    <pre className="bg-gray-200 text-black p-4 font-mono text-xs overflow-x-auto border-2 border-black"><code>{`func GetUser(id string) {
  // VULNERABLE: Direct string concatenation
  query := "SELECT * FROM users WHERE id = '" + id + "'"
  db.Execute(query)
}`}</code></pre>
                  </div>
                  <div className="border-2 border-black p-4 mb-4">
                    <div className="flex justify-between items-center mb-2 border-b-2 border-black pb-2">
                      <span className="font-mono font-bold">VULN-002: Hardcoded Secret</span>
                      <span className="bg-[#ffabf3] text-black font-bold px-2 py-1 text-xs">HIGH</span>
                    </div>
                    <p className="mb-2">API key detected in plaintext within configuration initialization.</p>
                    <pre className="bg-gray-200 text-black p-4 font-mono text-xs overflow-x-auto border-2 border-black"><code>{`const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE"`}</code></pre>
                  </div>
                </div>
              </div>
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
