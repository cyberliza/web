import React, { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Варіант №11: jsonplaceholder.typicode.com/posts/11/comments
    fetch('https://jsonplaceholder.typicode.com/posts/11/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження відгуків:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl mt-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 !text-white">
        <span className="w-2.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
        Відгуки попередніх роботодавців
      </h2>

      {loading ? (
        <p className="text-slate-400 text-sm">Завантаження коментарів...</p>
      ) : (
        <div className="space-y-4">
          {comments.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-indigo-300 font-semibold text-sm capitalize">{item.name}</h3>
              <p className="text-xs text-slate-500 mb-2">{item.email}</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;