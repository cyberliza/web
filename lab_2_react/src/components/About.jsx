import React from 'react';

function About() {
  return (
    <div className="space-y-6">
      {/* Про себе */}
      <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 !text-white">
          <span className="w-2.5 h-6 bg-indigo-500 rounded-full inline-block"></span>
          Про себе
        </h2>
        <p className="text-slate-200 leading-relaxed text-sm sm:text-base font-normal">
          Студентка, яка захоплюється веб-розробкою та кібербезпекою. Прагну розвивати навички
          створення сучасних, безпечних та адаптивних веб-застосунків.
        </p>
      </section>

      {/* Проєкти */}
      <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 !text-white">
          <span className="w-2.5 h-6 bg-purple-500 rounded-full inline-block"></span>
          Проєкти
        </h2>
        <div className="relative overflow-hidden rounded-xl border border-slate-800 group">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
            alt="Код сайту"
            className="w-full h-40 object-cover opacity-30 group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-5 flex flex-col justify-end">
            <h3 className="text-lg font-bold !text-white group-hover:text-indigo-300 transition">
              Персональний сайт-портфоліо
            </h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">
              Створення базової верстки з використанням HTML5, структурування коду та стилізація через Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;