import React from 'react';
import { ChevronDown, Download, RefreshCw } from 'lucide-react';

// Profile image from Figma
const profileImg = "../../public/2291cf4f-e893-443d-9384-319e30037bdc.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-10 rounded-full blur-3xl top-1/4 left-1/4" />
        <div className="absolute w-96 h-96 bg-primary-5 rounded-full blur-3xl bottom-1/4 right-1/4" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="text-text-secondary hover:text-primary transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-dark-input border border-dark-border rounded-full px-4 py-2">
              <RefreshCw size={16} className="text-primary" />
              <span className="text-sm text-text-secondary"></span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Xin chào, tôi là
                <br />
                <span className="text-primary">Trần Anh Tiên</span>
              </h1>
              <p className="text-2xl font-medium text-text-secondary">
                Full-Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Tôi xây dựng những trải nghiệm web hiện đại, tối ưu và thân thiện với người dùng. 
              Đam mê biến ý tưởng thành sản phẩm thực tế với code sạch và hiệu suất cao.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-dark-bg font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Liên hệ ngay
                <ChevronDown size={16} className="rotate-90deg" />
              </a>
              <button className="inline-flex items-center gap-2 bg-transparent border border-dark-border text-text-primary font-medium px-6 py-3 rounded-lg hover:border-primary transition-colors">
                <Download size={16} />
                Tải CV
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                {/* <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-sm text-text-secondary">Năm kinh nghiệm</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-text-secondary">Dự án hoàn thành</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-text-secondary">Khách hàng</p> */}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="shrink-0">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-12 bg-primary-20 rounded-full blur-3xl" />
              
              {/* Profile Image Container */}
              <div className="relative w-96 h-96 border-4 border-primary-30 rounded-full p-1 shadow-[0_25px_50px_-12px_rgba(0,209,178,0.2)]">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Tags */}
              <div className="absolute -top-4 -right-4 bg-dark-card border border-dark-border rounded-xl px-4 py-3 shadow-lg">
                <code className="text-sm text-primary font-mono">{'<React />'}</code>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-dark-card border border-dark-border rounded-xl px-4 py-3 shadow-lg">
                <code className="text-sm text-primary font-mono">Node.js</code>
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-dark-card border border-dark-border rounded-xl px-4 py-3 shadow-lg">
                <code className="text-sm text-primary font-mono">TypeScript</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
