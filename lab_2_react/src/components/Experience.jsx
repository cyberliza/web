import React from 'react';

function Experience() {
  return (
    <section className="bg-slate-900 p-6 rounded-2xl shadow-xl mb-6 border border-slate-800">
      <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
        Досвід роботи
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition">
          <h3 className="font-semibold text-indigo-300">Frontend Developer</h3>
          <p className="text-sm text-slate-400">Компанія / 2023 — Дотепер</p>
          <p className="text-slate-300 text-sm mt-1">
            Верстка веб-інтерфейсів та стилізація за допомогою Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;