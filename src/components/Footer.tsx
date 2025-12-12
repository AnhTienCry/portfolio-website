import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Kỹ năng', href: '#skills' },
    { label: 'Dự án', href: '#projects' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-dark-border bg-dark-card/50">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-dark-bg hover:bg-primary/80 transition-all hover:scale-110 shadow-lg shadow-primary/20"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-primary">
              Trần Anh <span className="text-primary">Tiên</span>
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Frontend Developer đam mê tạo ra những trải nghiệm web đẹp mắt và hiệu quả.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-dark-input border border-dark-border rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Liên kết nhanh
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2 w-fit"
                >
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Liên hệ
            </h4>
            <div className="space-y-3 text-sm text-text-secondary">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                trananhtien17@gmail.com
              </p>
              <p>📍 Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span>© 2025 Trần Anh Tiên.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:flex items-center gap-1">
                Được xây dựng với
                <Heart size={14} className="text-red fill-red animate-pulse" />
                và React
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className="px-2 py-1 bg-dark-input rounded font-mono">React</span>
              <span className="px-2 py-1 bg-dark-input rounded font-mono">TypeScript</span>
              <span className="px-2 py-1 bg-dark-input rounded font-mono">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
