import React from 'react';
import { Code, Zap, Lightbulb, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-card border border-dark-border rounded-2xl p-6 space-y-4">
    <div className="w-12 h-12 bg-primary-10 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
    <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={24} className="text-primary" />,
      title: "Clean Code",
      description: "Viết code sạch, dễ đọc và có thể bảo trì lâu dài"
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: "Hiệu suất cao",
      description: "Tối ưu hóa ứng dụng để đạt tốc độ và trải nghiệm tốt nhất"
    },
    {
      icon: <Lightbulb size={24} className="text-primary" />,
      title: "Sáng tạo",
      description: "Tìm kiếm giải pháp sáng tạo cho mọi thách thức kỹ thuật"
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Hợp tác",
      description: "Làm việc hiệu quả trong nhóm và giao tiếp tốt với thành viên"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-mono text-primary">// Giới thiệu</p>
              <h2 className="text-4xl font-bold leading-tight">
                Đam mê tạo ra những
                <br />
                sản phẩm web xuất sắc
              </h2>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
              Tôi là một Sinh viên năm cuối chuyên ngành Công nghệ thông tin, đang tìm kiếm cơ hội thực tập. Tôi có nền tảng vững chắc trong việc xây dựng các ứng dụng web toàn diện (Full-Stack) thông qua các đồ án và dự án thực tế              </p>
              <p>
                Tinh thần chủ động & Học hỏi: Luôn duy trì tinh thần chủ động tự học (Self-learning), liên tục tìm kiếm và nắm bắt các công nghệ mới để nâng cao kỹ năng chuyên môn. 
              </p>
              <p>
                Ngoài các kỹ năng Full-Stack (React, Node.js), tôi còn có tư duy mở rộng về quy trình vận hành, đã tìm hiểu và có kinh nghiệm thực hành cơ bản với Docker, CI/CD (GitHub Actions), và triển khai ứng dụng (deployment) lên AWS Cloud.
              </p>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
