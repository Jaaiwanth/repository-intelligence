import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AnalysisProgress.css';

export default function AnalysisProgress() {
  const [status, setStatus] = useState("PINGING_SERVER...");
  const [glitch, setGlitch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const repoPath = location.state?.repoPath;

  useEffect(() => {
    const messages = [
      "PINGING_SERVER...",
      "HANDSHAKE_ESTABLISHED...",
      "SCANNING_ROOT_DIR...",
      "ANALYZING_DEPENDENCIES...",
      "CHECKING_VULNERABILITIES...",
      "COMPILING_REPORT_DATA...",
      "DECRYPTING_PAYLOAD..."
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setStatus(messages[currentIndex]);
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (repoPath) {
      fetch('/generate_report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo_path: repoPath })
      })
      .then(res => res.json())
      .then(data => {
        if (data.pdf_url) {
          navigate('/report', { state: { pdfUrl: data.pdf_url } });
        } else {
          setStatus("ERROR_GENERATING_REPORT: " + (data.error || "Unknown"));
        }
      })
      .catch(err => {
        console.error(err);
        setStatus("CONNECTION_ERROR");
      });
    }
  }, [repoPath, navigate]);

  return (
    <div className="tech-grid min-h-screen w-full flex items-center justify-center p-6 overflow-hidden selection:bg-[#ff00ff] selection:text-black">
      <main className="relative w-full max-w-4xl bg-[#050505] border-8 border-white shadow-[16px_16px_0px_0px_#ffffff] p-8 md:p-16 flex flex-col items-center justify-center gap-8 min-h-[600px]">
        
        {/* Corner Decoration - Top Left */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-white -translate-x-8 -translate-y-8"></div>
        {/* Corner Decoration - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#ff00ff] translate-x-8 translate-y-8"></div>
        
        <div className="relative flex items-center justify-center mb-8">
        </div>

        <h1 className="font-heading text-4xl md:text-6xl text-white uppercase text-center mb-4">
          Analyzing
        </h1>

        <div className="w-full max-w-2xl border-4 border-white bg-[#0e0e0e] h-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[size:20px_20px] z-10 opacity-50"></div>
          <div className="h-full bg-[#79ff5b] animate-progress relative z-0 flex items-center justify-end pr-2 border-r-4 border-black">
            <div className="w-2 h-full bg-black opacity-50 ml-1"></div>
            <div className="w-1 h-full bg-black opacity-50 ml-1"></div>
          </div>
        </div>

        <div id="status-feed" className={`font-mono text-xl text-[#39ff14] mt-8 ${glitch ? 'animate-glitch' : ''}`}>
          {status}
        </div>

      </main>
    </div>
  );
}
