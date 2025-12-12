import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  isLeft?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  location,
  responsibilities,
  technologies,
  isLeft = true
}) => (
  <div className={`relative flex md:flex-row flex-col ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
    {/* Timeline dot */}
    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary border-4 border-dark-bg rounded-full z-10" />
    
    {/* Card */}
    <div className={`w-full md:w-[45%] ml-10 md:ml-0 bg-dark-card border border-dark-border rounded-2xl p-6 space-y-4 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        <div className="w-9 h-9 bg-primary-10 rounded-xl flex items-center justify-center">
          <Briefcase size={18} className="text-primary" />
        </div>
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {period}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {location}
        </span>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-primary mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 text-xs font-mono bg-dark-input text-text-secondary rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Startup ABC",
      period: "2023 - Hiện tại",
      location: "Hồ Chí Minh",
      responsibilities: [
        "Phát triển và bảo trì các ứng dụng web sử dụng React, Next.js và TypeScript",
        "Tối ưu hiệu suất, giảm 40% thời gian tải trang",
        "Mentor cho 3 junior developers trong team",
        "Thiết lập CI/CD pipeline và coding standards"
      ],
      technologies: ["React", "Next.js", "TypeScript", "GraphQL"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Agency XYZ",
      period: "2021 - 2023",
      location: "Hà Nội",
      responsibilities: [
        "Xây dựng 10+ website và web app cho khách hàng doanh nghiệp",
        "Thiết kế và triển khai RESTful APIs sử dụng Node.js",
        "Tích hợp các dịch vụ third-party như Stripe, Firebase, AWS",
        "Làm việc trực tiếp với khách hàng để thu thập requirements"
      ],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "Junior Developer",
      company: "Software Company DEF",
      period: "2020 - 2021",
      location: "Đà Nẵng",
      responsibilities: [
        "Phát triển frontend cho hệ thống ERP nội bộ",
        "Viết unit tests và documentation",
        "Tham gia code review và sprint planning",
        "Học hỏi best practices từ senior developers"
      ],
      technologies: ["React", "Redux", "Jest", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-primary">// Kinh nghiệm</p>
          <h2 className="text-4xl font-bold">Hành trình sự nghiệp</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Những công ty và dự án tôi đã tham gia
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-dark-border" />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
