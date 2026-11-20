import React from 'react';

function Education() {
  return (
    <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 !text-white">
        <span className="w-2.5 h-6 bg-indigo-500 rounded-full inline-block"></span>
        Освіта
      </h2>
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          2025 — дотепер
        </span>
        <h3 className="text-lg font-bold mt-3 !text-white">
          Національний університет "Львівська політехніка"
        </h3>
        <p className="text-indigo-300 font-semibold text-sm mt-1">
          Спеціальність: Кібербезпека та захист інформації
        </p>
        <p className="text-slate-400 text-xs mt-1 font-medium">Ступінь: Бакалавр</p>
      </div>
    </section>
  );
}

export default Education;