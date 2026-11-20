import React from 'react';

function Skills() {
  const skills = [
    { name: "HTML5 / CSS3", level: "Intermediate", color: "from-orange-500 to-amber-500" },
    { name: "Python", level: "Pro", color: "from-emerald-500 to-teal-500" },
    { name: "JavaScript", level: "Basic", color: "from-yellow-500 to-amber-400" },
    { name: "C#", level: "Basic", color: "from-purple-500 to-indigo-500" },
    { name: "Git / GitHub", level: "Intermediate", color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 !text-white">
        <span className="w-2.5 h-6 bg-purple-500 rounded-full inline-block"></span>
        Навички
      </h2>
      <div className="flex flex-col gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center group hover:border-indigo-500/50 transition duration-200"
          >
            <span className="text-sm font-bold !text-white">{skill.name}</span>
            <span className={`text-xs px-2.5 py-1 rounded-md font-bold text-slate-950 bg-gradient-to-r ${skill.color}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;