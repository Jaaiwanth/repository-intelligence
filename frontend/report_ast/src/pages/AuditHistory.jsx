import React from 'react';
import './AuditHistory.css';

export default function AuditHistory() {
  return (
    <div className="audit-history-body text-on-background min-h-screen pt-24 pl-0 md:pl-64 overflow-x-hidden">
      {/* TopNavBar Web */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-between items-center px-6 h-24 bg-[#131313] text-primary font-heading text-2xl uppercase tracking-widest border-b-8 border-outline shadow-[8px_8px_0px_0px_rgba(121,255,91,1)]">
        <div className="font-heading font-bold text-primary">REPOAUDIT_AI</div>
        <div className="flex space-x-8 items-center h-full">
          <a className="text-outline hover:bg-primary hover:text-black transition-colors duration-75 h-full flex items-center px-4" href="#">REPOS</a>
          <a className="text-white border-b-4 border-primary hover:bg-primary hover:text-black transition-colors duration-75 h-full flex items-center px-4" href="#">ANALYSIS</a>
          <a className="text-outline hover:bg-primary hover:text-black transition-colors duration-75 h-full flex items-center px-4" href="#">SYSTEM</a>
          <div className="flex space-x-4 pl-8 border-l-4 border-outline h-12 items-center">
            <button className="p-2 border-2 border-outline hover:bg-primary hover:text-black transition-colors duration-75 active:translate-x-1 active:translate-y-1 active:shadow-none cyber-shadow-primary">
              <span className="material-symbols-outlined">terminal</span>
            </button>
            <button className="p-2 border-2 border-outline hover:bg-primary hover:text-black transition-colors duration-75 active:translate-x-1 active:translate-y-1 active:shadow-none cyber-shadow-primary">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </nav>

      {/* SideNavBar Web */}
      <aside className="hidden md:flex fixed left-0 top-24 h-[calc(100vh-6rem)] flex-col z-40 bg-[#0e0e0e] text-primary font-mono font-bold text-sm uppercase tracking-tighter w-64 border-r-4 border-outline">
        <div className="p-6 border-b-4 border-outline flex items-center space-x-4">
          <div className="w-12 h-12 border-2 border-outline bg-[#353534] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
            <img alt="ROOT_USER_AVATAR" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFJPzaRgAHXDQ3cx96R6ZaxjfrOb-ModCaQBH6y_TAiCyTJQntCCefoSGgcfksVuyKdGFjy07ihj27QIvHsAwmOgDxCbq8pUnlI24CdkISdr0h2u3I60FANIJlRJPfYWn06MnMT4VhZo6L65JII74n4vO3qb_-86EENekDLRIHnfAoAeOM1YVX4k0nMgNlnalTyFNsKFbIL39d9qp8gpOq9CBL8k0RJsubyKnpB5AQu6AJ_qwdnGqUv-Nexn_r2VYLEhwic758f3Dp" />
          </div>
          <div>
            <div className="font-heading text-xl text-[#ffabf3]">0x00451_CORE</div>
            <div className="text-[10px] text-[#79ff5b] mt-1 animate-pulse">SYSTEM_STATUS_ACTIVE</div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col py-4">
          <a className="px-6 py-4 border-b border-[#3c4b35] text-gray-400 hover:bg-primary hover:text-black transition-all duration-75 active:translate-x-2 flex items-center space-x-4" href="#">
            <span className="material-symbols-outlined">admin_panel_settings</span>
            <span>ROOT_USER</span>
          </a>
          <a className="px-6 py-4 border-b border-[#3c4b35] bg-primary text-black font-bold hover:bg-primary hover:text-black transition-all duration-75 active:translate-x-2 flex items-center space-x-4" href="#">
            <span className="material-symbols-outlined">terminal</span>
            <span>LOGS</span>
          </a>
        </nav>
        <div className="mt-auto border-t-4 border-outline">
          <a className="px-6 py-4 text-[#ffb4ab] hover:bg-[#ffb4ab] hover:text-black transition-all duration-75 active:translate-x-2 flex items-center space-x-4 font-bold" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span>LOGOUT</span>
          </a>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="p-6 max-w-[1600px] mx-auto min-h-screen">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-8 border-outline pb-6 relative">
          <div className="absolute top-0 right-0 p-2 bg-primary text-black font-mono font-bold text-xs border-2 border-black">
            [ MEMORY_ADDR: 0x7FFA ]
          </div>
          <div>
            <h1 className="font-heading text-6xl text-primary uppercase tracking-widest drop-shadow-[4px_4px_0_rgba(121,255,91,0.5)]">AUDIT_LOGS</h1>
            <p className="font-mono text-sm text-outline mt-2 uppercase flex items-center">
              <span className="w-3 h-3 bg-[#79ff5b] inline-block mr-2 animate-pulse"></span>
              <strong>Transforming codebases into concise intelligent summaries</strong>
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-4">
            <div className="relative">
              <input className="bg-black border-2 border-primary text-primary font-mono text-sm p-3 w-64 focus:outline-none focus:ring-0 placeholder-gray-500 caret-[#79ff5b]" placeholder="GREP LOGS..." type="text" />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-[#79ff5b] animate-pulse"></div>
            </div>
            <button className="bg-[#79ff5b] text-black border-4 border-black px-6 py-3 font-mono font-bold text-xs uppercase cyber-shadow-primary hover:bg-primary hover:text-black transition-colors btn-press flex items-center space-x-2">
              <span className="material-symbols-outlined">filter_alt</span>
              <span>FILTER</span>
            </button>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-max">
          {/* Log Card 1: Critical */}
          <article className="bg-black border-4 border-[#ffabf3] p-6 relative flex flex-col justify-between cyber-shadow-secondary hover:-translate-y-1 hover:-translate-x-1 transition-transform group">
            <div className="absolute bottom-2 right-2 text-gray-500 font-mono text-xs">0xA1B2</div>
            <div className="mb-6 mt-4">
              <h3 className="font-heading text-2xl text-primary uppercase break-words leading-tight group-hover:text-[#ffabf3] transition-colors">auth-service-v2</h3>
            </div>
            <button className="mt-6 w-full bg-[#ffabf3] text-black border-4 border-black py-3 font-mono font-bold text-xs uppercase hover:bg-white transition-colors btn-press relative overflow-hidden">
              <span className="relative z-10">VIEW_REPORT</span>
            </button>
          </article>

          {/* Log Card 2: Clean */}
          <article className="bg-black border-4 border-outline p-6 relative flex flex-col justify-between hover:border-[#79ff5b] transition-colors hover:-translate-y-1 hover:-translate-x-1 group">
            <div className="absolute bottom-2 right-2 text-gray-500 font-mono text-xs">0xB3C4</div>
            <div className="mb-6 mt-4">
              <h3 className="font-heading text-2xl text-primary uppercase break-words leading-tight group-hover:text-[#79ff5b] transition-colors">ui-components-lib</h3>
            </div>
            <button className="mt-6 w-full border-4 border-outline text-primary py-3 font-mono font-bold text-xs uppercase hover:bg-[#79ff5b] hover:text-black hover:border-black transition-colors btn-press relative overflow-hidden">
              <span className="relative z-10">VIEW_LOG</span>
            </button>
          </article>

          {/* Log Card 3: Warning */}
          <article className="bg-black border-4 border-[#ffabf3] p-6 relative flex flex-col justify-between hover:border-[#ffabf3] transition-colors hover:-translate-y-1 hover:-translate-x-1 group">
            <div className="absolute bottom-2 right-2 text-gray-500 font-mono text-xs">0xC5D6</div>
            <div className="mb-6 mt-4">
              <h3 className="font-heading text-2xl text-primary uppercase break-words leading-tight group-hover:text-[#ffabf3] transition-colors">payment-gateway</h3>
            </div>
            <button className="mt-6 w-full border-4 border-[#ffabf3] text-[#ffabf3] py-3 font-mono font-bold text-xs uppercase hover:bg-[#ffabf3] hover:text-black hover:border-black transition-colors btn-press relative overflow-hidden">
              <span className="relative z-10">VIEW_REPORT</span>
            </button>
          </article>

          {/* Log Card 4: Clean */}
          <article className="bg-black border-4 border-outline p-6 relative flex flex-col justify-between hover:border-[#79ff5b] transition-colors hover:-translate-y-1 hover:-translate-x-1 group">
            <div className="absolute bottom-2 right-2 text-gray-500 font-mono text-xs">0xD7E8</div>
            <div className="mb-6 mt-4">
              <h3 className="font-heading text-2xl text-primary uppercase break-words leading-tight group-hover:text-[#79ff5b] transition-colors">core-utils</h3>
            </div>
            <button className="mt-6 w-full border-4 border-outline text-primary py-3 font-mono font-bold text-xs uppercase hover:bg-[#79ff5b] hover:text-black hover:border-black transition-colors btn-press relative overflow-hidden">
              <span className="relative z-10">VIEW_REPORT</span>
            </button>
          </article>

          {/* Pagination / Load More Block */}
          <div className="md:col-span-full mt-8 border-t-8 border-outline pt-8 flex justify-center">
            <button className="bg-black border-4 border-primary text-primary px-12 py-4 font-heading text-2xl uppercase hover:bg-primary hover:text-black transition-colors btn-press cyber-shadow-primary">
              LOAD_OLDER_LOGS &gt;&gt;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
