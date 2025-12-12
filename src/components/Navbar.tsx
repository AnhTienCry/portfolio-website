import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-96">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-primary">
            {'<Dev />'}
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Giới thiệu
            </a>
            <a href="#skills" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Kỹ năng
            </a>
            <a href="#projects" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Dự án
            </a>
            <a href="#experience" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Kinh nghiệm
            </a>
            <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Liên hệ
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/AnhTienCry" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:trananhtien157@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
