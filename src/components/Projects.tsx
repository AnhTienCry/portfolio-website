import React from 'react';
import { ExternalLink, Github, ShoppingCart, BookOpen, Music } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, gradient, tags, liveUrl, githubUrl }) => (
  <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
    {/* Project Visual */}
    <div className={`relative h-48 ${gradient} flex items-center justify-center overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-full" />
        <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
      </div>
      
      {/* Icon */}
      <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Overlay with links */}
      <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-dark-bg hover:bg-primary/90 transition-colors hover:scale-110"
          >
            <ExternalLink size={18} />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-text-primary rounded-full flex items-center justify-center text-dark-bg hover:bg-text-primary/90 transition-colors hover:scale-110"
          >
            <Github size={18} />
          </a>
        )}
      </div>
    </div>

    {/* Project Info */}
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{description}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-mono bg-dark-input text-text-secondary rounded hover:text-primary transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Comet-Ring",
      description: "Ứng dụng Web E-commerce toàn diện, được phát triển theo mô hình Fullstack, phục vụ quản lý sản phẩm, bán hàng và phân quyền người dùng (Admin/Khách hàng)",
      icon: <ShoppingCart size={40} />,
      gradient: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/AnhTienCry/Comet-Ring"
    },
    {
      title: "English Web App",
      description: "Ứng dụng học tiếng Anh toàn diện, được phát triển theo mô hình Fullstack, phục vụ cho việc học từ vựng, ngữ pháp và luyện tập với kiến trúc phân quyền: web dành cho Giảng viên, Admin. App dành cho student và API Backend.",
      icon: <BookOpen size={40} />,
      gradient: "bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400",
      tags: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com"
    },
    {
      title: "MelodyHub",
      description: "Ứng dụng Web phát triển theo mô hình Fullstack (React và Node.js), tích hợp và tiêu thụ dữ liệu từ Spotify Web API để cung cấp trải nghiệm tìm kiếm và khám phá âm nhạc.",
      icon: <Music size={40} />,
      gradient: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/AnhTienCry/MelodyHub"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-primary">// Dự án</p>
          <h2 className="text-4xl font-bold">Các dự án nổi bật</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Một số dự án tiêu biểu tôi đã thực hiện, thể hiện kỹ năng và kinh nghiệm của mình
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/AnhTienCry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Xem thêm dự án trên GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
