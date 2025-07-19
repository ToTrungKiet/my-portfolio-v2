import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiGithub, SiPostman
} from "react-icons/si";

const VSCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
    <title>Visual Studio Code</title>
    <path d="M23.31 4.263a.642.642 0 0 0-.205-.21L18.45 1.168a.643.643 0 0 0-.604-.035.633.633 0 0 0-.296.24l-5.2 6.69L8.11 4.24a.633.633 0 0 0-.775-.024L.832 9.167a.63.63 0 0 0 .002 1.013l3.58 2.571-3.58 2.58a.63.63 0 0 0-.002 1.012l6.503 4.952a.634.634 0 0 0 .774-.024l4.242-3.82 5.201 6.69a.634.634 0 0 0 .895.093l4.655-2.885a.633.633 0 0 0 .295-.526V4.789a.634.634 0 0 0-.19-.526Z"/>
  </svg>
);

const skills = [
  // Frontend
  {
    name: 'HTML/CSS', level: 80, category: 'frontend', icon: (
      <>
        <SiHtml5 className="text-orange-500 mr-1" />
        <SiCss3 className="text-blue-500" />
      </>
    )
  },
  { name: 'JavaScript', level: 75, category: 'frontend', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', level: 70, category: 'frontend', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', level: 65, category: 'frontend', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Bootstrap', level: 65, category: 'frontend', icon: <SiBootstrap className="text-purple-600" /> },

  // Backend
  { name: 'Node.js', level: 70, category: 'backend', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'Express.js', level: 65, category: 'backend', icon: <SiExpress className="text-gray-600" /> },
  { name: 'MongoDB', level: 60, category: 'backend', icon: <SiMongodb className="text-green-500" /> },

  // Tools
  { name: 'Git/GitHub', level: 70, category: 'tools', icon: <SiGithub className="text-white bg-black rounded-full" /> },
  { name: 'VS Code', level: 80, category: 'tools', icon: <VSCodeIcon className="text-blue-500" /> },
  { name: 'Postman', level: 70, category: 'tools', icon: <SiPostman className="text-orange-500" /> },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl">{skill.icon}</div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
