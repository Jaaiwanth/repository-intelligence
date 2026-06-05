import React, { useEffect, useState } from 'react';
import './Login.css';

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const targetText = "root_admin";

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const typeWriter = setInterval(() => {
        if (i < targetText.length) {
          setIdentifier(prev => prev + targetText.charAt(i));
          i++;
        } else {
          clearInterval(typeWriter);
          document.getElementById('access_key')?.focus();
        }
      }, 100);
      return () => clearInterval(typeWriter);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="login-container text-on-background min-h-screen flex items-center justify-center p-4 relative w-full overflow-hidden">
      {/* Top Left Status */}
      <div className="fixed top-4 left-4 flex items-center gap-2 z-20">
        <div className="w-3 h-3 bg-primary-container caret-blink"></div>
        <span className="font-label-bold text-label-bold text-primary-container tracking-widest">SYSTEM_READY</span>
      </div>
      
      {/* Bottom Right Memory Address */}
      <div className="fixed bottom-4 right-4 z-20" style={{ writingMode: 'vertical-rl' }}>
        <span className="font-label-sm text-label-sm text-outline tracking-widest rotate-180">0x00451_CORE</span>
      </div>

      {/* Background decorative elements */}
      <div className="fixed top-20 right-20 w-64 h-64 border-2 border-outline-variant opacity-20 -z-10 rotate-12"></div>
      <div className="fixed bottom-20 left-20 w-32 h-32 border-8 border-secondary opacity-10 -z-10 -rotate-12"></div>

      {/* Main Auth Container */}
      <main className="relative w-full max-w-md bg-black border-4 border-primary shadow-[8px_8px_0px_0px_#ffffff] p-8 z-10 flex flex-col gap-6">
        <header className="border-b-4 border-outline pb-4 flex justify-between items-end">
          <div>
            <h1 className="font-heading text-3xl text-primary uppercase tracking-widest mb-1">AUTH_REQUIRED</h1>
            <p className="font-mono text-xs text-primary-container tracking-widest">ENTER_CREDENTIALS</p>
          </div>
          <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
        </header>

        <form className="flex flex-col gap-6 mt-4" onSubmit={(e) => {
          e.preventDefault();
          document.getElementById('login-btn').classList.add('bg-secondary', 'border-secondary');
        }}>
          {/* Identifier ID */}
          <div className="flex flex-col gap-2">
            <label className="font-mono font-bold text-xs text-outline uppercase tracking-widest flex items-center justify-between" htmlFor="identifier_id">
              <span>IDENTIFIER_ID</span>
              <span className="text-xs opacity-50">SYS.USR</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                <span className="material-symbols-outlined text-sm">terminal</span>
              </span>
              <input 
                autoComplete="username" 
                className="w-full pl-10 pr-4 py-3 font-mono text-sm uppercase tracking-wider placeholder-outline-variant focus:ring-0" 
                id="identifier_id" 
                name="identifier_id" 
                placeholder="root@system" 
                required 
                type="text" 
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>
          </div>

          {/* Access Key */}
          <div className="flex flex-col gap-2">
            <label className="font-mono font-bold text-xs text-outline uppercase tracking-widest flex items-center justify-between" htmlFor="access_key">
              <span>ACCESS_KEY</span>
              <span className="text-xs opacity-50">***</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                <span className="material-symbols-outlined text-sm">key</span>
              </span>
              <input 
                autoComplete="current-password" 
                className="w-full pl-10 pr-4 py-3 font-mono text-sm tracking-wider placeholder-outline-variant focus:ring-0" 
                id="access_key" 
                name="access_key" 
                placeholder="••••••••••••" 
                required 
                type="password" 
              />
            </div>
          </div>

          {/* Options Row */}
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input defaultChecked className="cursor-pointer" type="checkbox" />
              <span className="font-mono text-xs text-outline group-hover:text-primary transition-colors tracking-widest">PERSIST_SESSION</span>
            </label>
            <a className="font-mono text-xs text-outline hover:text-secondary underline decoration-2 underline-offset-4 tracking-widest transition-colors" href="#">RESET_KEY</a>
          </div>

          {/* Submit Button */}
          <button 
            className="mt-4 w-full py-4 bg-primary text-black font-heading text-2xl border-4 border-black shadow-[8px_8px_0px_0px_#39ff14] uppercase tracking-widest transition-all duration-75 active:translate-x-2 active:translate-y-2 active:shadow-none hover:bg-secondary hover:shadow-[8px_8px_0px_0px_#ff00ff]" 
            id="login-btn" 
            type="submit"
          >
            SECURE_ACCESS
          </button>
        </form>

        {/* Footer / Decorative */}
        <footer className="mt-4 border-t-2 border-outline-variant pt-4 flex justify-between items-center opacity-70">
          <span className="font-mono text-xs text-outline-variant tracking-widest">V. 2.4.1.99</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-outline-variant"></div>
            <div className="w-2 h-2 bg-outline-variant"></div>
            <div className="w-2 h-2 bg-outline-variant"></div>
            <div className="w-2 h-2 bg-primary"></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
