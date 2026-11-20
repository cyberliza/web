import React from 'react';

function Header() {
  return (
    <header className="relative overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl mb-8">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Аватарка */}
        <div className="relative group mb-4">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <img
            src="/avatar.jpg"
            alt="Дем'янова Єлизавета"
            className="relative w-28 h-28 rounded-full object-cover border-2 border-slate-900 shadow-xl"
          />
        </div>

        <div>
          <div className="inline-block px-3.5 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            Cybersecurity & Web Dev
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide mb-1 text-white">
            Дем'янова Єлизавета
          </h1>
          <p className="text-lg text-indigo-300 font-semibold mt-1">Junior Web Developer</p>

          {/* Контакти */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-300 font-medium">
            <a href="mailto:yelyzaveta.demianova.kb.2025@lpnu.ua" className="hover:text-indigo-400 transition flex items-center gap-1.5">
              <span>yelyzaveta.demianova.kb.2025@lpnu.ua</span>
            </a>
            <span className="text-slate-600">•</span>
            <a href="https://github.com/cyberliza" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition flex items-center gap-1.5">
              <span>github.com/cyberliza</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;