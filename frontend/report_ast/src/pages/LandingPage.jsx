import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface font-mono min-h-screen flex flex-col overflow-x-hidden uppercase tracking-widest bg-grid-pattern">
      <header className="bg-black brutal-border border-b-8 border-r-0 border-l-0 border-t-0 flex justify-between items-center w-full px-6 h-20 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="font-heading text-4xl text-primary transform -skew-x-12 bg-black px-2 py-1 brutal-border">RepoAudit AI</div>
          <nav className="hidden md:flex gap-6 border-l-4 border-primary pl-6">
            <a className="text-on-surface hover:text-secondary hover:bg-white transition-colors font-bold text-sm" href="#">Documentation</a>
            <a className="text-on-surface hover:text-secondary hover:bg-white transition-colors font-bold text-sm" href="#">Pricing</a>
            <a className="text-on-surface hover:text-secondary hover:bg-white transition-colors font-bold text-sm" href="#">API</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <button aria-label="Notifications" className="text-primary hover:text-secondary hover:bg-white border-2 border-primary p-1">
              <span className="material-symbols-outlined block" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
            </button>
            <button aria-label="Settings" className="text-primary hover:text-secondary hover:bg-white border-2 border-primary p-1">
              <span className="material-symbols-outlined block" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
            </button>
          </div>
          <button className="bg-primary text-black px-6 py-2 font-bold text-sm brutal-border hover:bg-secondary hover:text-white hover:border-secondary transition-colors shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2">
            Analyze New Repo
          </button>
          <div className="w-10 h-10 bg-black brutal-border border-secondary flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
            <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGnYOYNfhHYFZGOlWQK-9doW2gqtrS0b3IUL3enJDVrJHMz_RFlRSvrEyRhfbNV4PDWTxFCazSFFcTrf69MTHzK1nmHQF_5vPx_DTfwaacG7hune7z9EZSlCoCSpiaIl8j9E9fV1DwYuGoUQgO6z_cATlTFBsmRA0LwlqDoGvUwm9lEatQ1wQmZk4cgtDbg0yqMt9GtkADzdIOJfNlzjojG70wwK045-3Hd0EmsPU1r-3d-3aiHSRd7KmFusr77ufuGW3IypUQe_s1" />
          </div>
        </div>
      </header>
      <main className="flex-grow relative flex flex-col pt-12">
        <section className="relative min-h-[800px] flex items-center justify-center py-20">
          <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="hidden lg:flex col-span-1 flex-col items-center justify-center">
              <div className="text-secondary font-bold text-xl writing-vertical-rl transform rotate-180 tracking-[0.5em] whitespace-nowrap brutal-border-pink p-2 bg-black" style={{ writingMode: 'vertical-rl' }}>
                SYSTEM.INIT()
              </div>
            </div>
            <div className="w-full lg:col-span-5 flex flex-col items-start gap-8 bg-black p-8 brutal-border shadow-neo relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black brutal-border-pink text-secondary font-bold text-xs uppercase">
                <span className="w-3 h-3 bg-secondary animate-pulse block"></span>
                Deep AST Analysis
              </div>
              <h1 className="font-heading text-6xl md:text-8xl text-white m-0 leading-none">
                AI-Powered<br />
                <span className="text-primary">Code Intelligence</span>
              </h1>
              <p className="font-mono text-sm text-gray-400 max-w-xl leading-relaxed border-l-4 border-primary pl-4">
                Audit your entire repository in seconds. Deep AST analysis meets LLM synthesis for comprehensive PDF reports. Uncover vulnerabilities, technical debt, and architectural flaws before they become production incidents.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full">
                <Link to="/dashboard" className="bg-primary text-black px-8 py-4 font-bold text-lg brutal-border hover:bg-secondary hover:text-white hover:border-secondary transition-colors shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 w-full sm:w-auto">
                  Get Started
                  <span className="material-symbols-outlined text-2xl font-bold block">arrow_forward</span>
                </Link>
                <button className="bg-black border-4 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_#ffffff] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 w-full sm:w-auto">
                  <span className="material-symbols-outlined text-2xl block">terminal</span>
                  View Documentation
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-primary font-bold text-xs">
                <span className="flex items-center gap-2 bg-black px-2 py-1 brutal-border"><span className="material-symbols-outlined text-lg block">check_box</span> Node.js</span>
                <span className="flex items-center gap-2 bg-black px-2 py-1 brutal-border"><span className="material-symbols-outlined text-lg block">check_box</span> Python</span>
                <span className="flex items-center gap-2 bg-black px-2 py-1 brutal-border"><span className="material-symbols-outlined text-lg block">check_box</span> Go</span>
                <span className="flex items-center gap-2 bg-black px-2 py-1 brutal-border"><span className="material-symbols-outlined text-lg block">check_box</span> Rust</span>
              </div>
            </div>
            <div className="w-full lg:col-span-6 relative mt-12 lg:mt-0 lg:-ml-12 z-10 flex items-center">
              <div className="w-full h-full min-h-[500px] bg-black brutal-border-pink shadow-neo-pink relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-150 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-secondary mix-blend-overlay opacity-30"></div>
                <div className="relative z-10 text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[120px] drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] animate-pulse block">account_tree</span>
                  <div className="mt-4 bg-black px-4 py-2 brutal-border text-primary font-bold text-xl">VISUALIZING_AST_DATA</div>
                </div>
                <div className="absolute top-4 left-4 text-secondary font-bold text-xs">SYS_MEM: 0x48FA9</div>
                <div className="absolute bottom-4 right-4 text-primary font-bold text-xs">STATUS: ONLINE</div>
              </div>
              <div className="absolute -right-6 top-1/4 bg-black brutal-border p-4 shadow-neo flex flex-col gap-2 z-30 transform rotate-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-3xl block" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                  <div>
                    <div className="font-bold text-sm text-white">Report.pdf</div>
                    <div className="text-[10px] text-primary">Generated 2s ago</div>
                  </div>
                </div>
                <div className="h-2 w-full bg-secondary"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-24 relative z-20">
          <div className="text-center mb-16 bg-black p-8 brutal-border shadow-neo inline-block mx-auto transform -rotate-1">
            <h2 className="font-heading text-5xl md:text-6xl text-primary m-0">Architectural Insights at Scale</h2>
            <p className="font-mono text-sm text-white mt-4 max-w-2xl mx-auto border-t-2 border-secondary pt-4">Beyond simple linting. We map your entire codebase architecture to provide deep contextual analysis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black brutal-border p-8 flex flex-col gap-6 shadow-neo hover:translate-y-2 hover:shadow-none transition-all group">
              <div className="bg-primary w-16 h-16 flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined text-black text-4xl block" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
              </div>
              <h3 className="font-heading text-3xl text-white">AST Dependency Mapping</h3>
              <p className="font-mono text-xs text-gray-400 leading-relaxed border-l-2 border-secondary pl-4">Visualizes complex inter-module dependencies to identify coupling and structural bottlenecks.</p>
            </div>
            <div className="bg-black brutal-border-pink p-8 flex flex-col gap-6 shadow-neo-pink hover:translate-y-2 hover:shadow-none transition-all group mt-0 md:mt-12">
              <div className="bg-secondary w-16 h-16 flex items-center justify-center transform group-hover:-rotate-12 transition-transform">
                <span className="material-symbols-outlined text-black text-4xl block" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
              </div>
              <h3 className="font-heading text-3xl text-white">LLM Context Engine</h3>
              <p className="font-mono text-xs text-gray-400 leading-relaxed border-l-2 border-primary pl-4">Feeds structured AST data into advanced language models for highly accurate, hallucination-free code analysis.</p>
            </div>
            <div className="bg-black border-4 border-white p-8 flex flex-col gap-6 shadow-[8px_8px_0px_0px_#ffffff] hover:translate-y-2 hover:shadow-none transition-all group mt-0 md:mt-24">
              <div className="bg-white w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-black text-4xl block" style={{ fontVariationSettings: "'FILL' 1" }}>picture_as_pdf</span>
              </div>
              <h3 className="font-heading text-3xl text-primary">Executive Briefings</h3>
              <p className="font-mono text-xs text-gray-400 leading-relaxed border-l-2 border-white pl-4">Compiles findings into actionable, C-level ready PDF reports detailing risk, tech debt, and remediation steps.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
