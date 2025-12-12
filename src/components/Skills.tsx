import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: { name: string; color?: string }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="bg-dark-card border border-dark-border rounded-2xl p-6 space-y-4">
    <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1.5 text-sm font-mono rounded-lg"
          style={{ 
            backgroundColor: skill.color ? `${skill.color}20` : 'rgba(0, 209, 178, 0.1)',
            color: skill.color || '#00d1b2'
          }}
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", color: "#61DAFB" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Express", color: "#ffffff" },
        { name: "MongoDB", color: "#47A248" }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", color: "#2496ED" },
        { name: "AWS", color: "#FF9900" },
        { name: "Git", color: "#F05032" },
        { name: "CI/CD", color: "#00d1b2" },
        { name: "Linux", color: "#FCC624" }
      ]
    },
    {
      title: "Khác",
      skills: [

        { name: "REST APIs", color: "#00d1b2" },
        { name: "WebSocket", color: "#0052CC" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-primary">// Kỹ năng</p>
          <h2 className="text-4xl font-bold">Công nghệ tôi sử dụng</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tôi liên tục cập nhật và học hỏi các công nghệ mới để đáp ứng yêu cầu của các dự án hiện đại
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
