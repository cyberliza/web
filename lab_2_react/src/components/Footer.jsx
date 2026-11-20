import React, { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {

    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform || 'Unknown OS'
    };
    
    
    localStorage.setItem('system_info', JSON.stringify(info));
    setSysInfo(info);
  }, []);

  return (
    <footer className="text-center text-slate-400 text-xs sm:text-sm py-8 border-t border-slate-800 mt-12 font-medium">
      <p>© 2026 Дем'янова Єлизавета. Усі права захищені.</p>
      
    
      <div className="mt-4 p-3 bg-slate-900/50 rounded-xl border border-slate-800 text-left max-w-xl mx-auto space-y-1 text-slate-500 text-[11px]">
        <p><span className="font-semibold text-indigo-400">Платформа:</span> {sysInfo.platform}</p>
        <p className="truncate"><span className="font-semibold text-indigo-400">User Agent:</span> {sysInfo.userAgent}</p>
      </div>
    </footer>
  );
}

export default Footer;