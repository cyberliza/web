import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Перевірка чи вікно вже закривалось 
    const isClosed = sessionStorage.getItem('modal_closed');
    
    if (!isClosed) {
      // Показуємо через 1 хвилину 
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('modal_closed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl max-w-md w-full shadow-2xl relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold p-2"
        >
          ✕
        </button>

        <h3 className="text-2xl font-extrabold text-white mb-2">Зворотний зв'язок</h3>
        <p className="text-slate-400 text-xs mb-6">Будь ласка, заповніть форму для зв'язку зі мною.</p>

        {/* Форма Formspree */}
        <form action="https://formspree.io/f/xqaejvqw" method="POST" className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Ваше ім'я</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Номер телефону</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Повідомлення</label>
            <textarea
              name="message"
              rows="3"
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition duration-200"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;