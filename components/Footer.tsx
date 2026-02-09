import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-tdc-black border-t border-white/10 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-4xl font-serif font-medium italic mb-8">The Design Council</h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed font-sans font-light">
              Nơi đào tạo Graphic Design chuyên sâu hàng đầu Việt Nam. Chúng tôi không chỉ dạy thiết kế, chúng tôi kiến tạo sự nghiệp với phương pháp Coaching 1:1 độc quyền cùng đội ngũ Artist thực chiến.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/thedesign.council" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-tdc-red transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/thedesign.council/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-tdc-red transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-condensed font-bold uppercase tracking-[0.2em] mb-8 text-tdc-red">Liên hệ</h3>
            <ul className="space-y-6 text-gray-300 text-sm font-sans">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-gray-500" />
                <span className="leading-relaxed">Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-gray-500" />
                <a href="mailto:hello@thedesigncouncil.vn" className="hover:text-tdc-red transition-colors">hello@thedesigncouncil.vn</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-gray-500" />
                <a href="tel:+84123456789" className="hover:text-tdc-red transition-colors">0123 456 789</a>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-sm font-condensed font-bold uppercase tracking-[0.2em] mb-8 text-tdc-red">Pháp lý</h3>
            <ul className="space-y-6 text-gray-300 text-sm font-sans">
              <li>
                <span className="block text-gray-500 text-xs font-condensed uppercase tracking-wider mb-1">Công ty TNHH</span>
                The Design Council
              </li>
              <li>
                <span className="block text-gray-500 text-xs font-condensed uppercase tracking-wider mb-1">Mã số thuế</span>
                0317868162
              </li>
              <li>
                <span className="block text-gray-500 text-xs font-condensed uppercase tracking-wider mb-1">Ngày thành lập</span>
                05/06/2023
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-condensed uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} The Design Council. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;