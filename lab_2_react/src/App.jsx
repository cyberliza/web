import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  // Автоматичне перемикання теми за часом
  useEffect(() => {
    const hours = new Date().getHours();
    // Денна тема
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      } py-10 px-4 sm:px-8`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Кнопка ручного перемикання теми */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-xs font-bold rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition"
          >
            {theme === 'dark' ? '☀️ Денний режим' : '🌙 Нічний режим'}
          </button>
        </div>

        <Header />
        
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <About />
            <Education />
            <Reviews />
          </div>
          <div className="md:col-span-1">
            <Skills />
          </div>
        </main>

        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;