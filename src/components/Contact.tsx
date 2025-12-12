import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex items-center gap-4 p-4 bg-dark-card border border-dark-border rounded-2xl hover:border-primary/50 transition-colors">
      <div className="w-12 h-12 bg-primary-10 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-text-secondary">{label}</p>
        <p className="font-medium text-text-primary">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-primary">// Liên hệ</p>
          <h2 className="text-4xl font-bold">Hãy kết nối với tôi</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Bạn có dự án thú vị? Hãy liên hệ và cùng nhau tạo ra điều tuyệt vời!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail size={20} className="text-primary" />}
                label="Email"
                value="trananhtien157@gmail.com"
                href="mailto:trananhtien157@gmail.com"
              />
              <ContactInfo
                icon={<Phone size={20} className="text-primary" />}
                label="Điện thoại"
                value="+84 766517276"
              />
              <ContactInfo
                icon={<MapPin size={20} className="text-primary" />}
                label="Địa điểm"
                value="Hồ Chí Minh, Việt Nam"
              />
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-dark-border">
              <p className="text-sm text-text-secondary mb-4">Theo dõi tôi trên</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Họ tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn B"
                  className="w-full px-4 py-2 bg-dark-card border border-dark-input rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 bg-dark-card border border-dark-input rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-primary">
                Tin nhắn
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mô tả dự án hoặc câu hỏi của bạn..."
                rows={4}
                className="w-full px-4 py-3 bg-dark-card border border-dark-input rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-dark-bg font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Send size={16} />
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
