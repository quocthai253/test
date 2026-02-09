import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    icon: null,
    title: 'Coaching 1:1',
    description: 'Kèm cặp riêng biệt. Lộ trình cá nhân hoá.',
  },
  {
    id: '2',
    icon: null,
    title: 'Brand Identity',
    description: 'Tư duy chiến lược và hệ thống nhận diện.',
  },
  {
    id: '3',
    icon: null,
    title: 'UI/UX Design',
    description: 'Thiết kế trải nghiệm người dùng hiện đại.',
  },
  {
    id: '4',
    icon: null,
    title: 'Art Direction',
    description: 'Định hướng nghệ thuật và nhiếp ảnh.',
  },
  {
    id: '5',
    icon: null,
    title: 'Packaging',
    description: 'Tư duy bao bì thương mại và in ấn.',
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-tdc-black relative z-10 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-5xl md:text-7xl font-serif font-medium text-white leading-none">
            Chương trình <br/> <span className="text-tdc-red italic">Đào tạo</span>
          </h2>
          <p className="text-gray-400 max-w-sm text-right mt-6 md:mt-0 font-sans font-light">
            Kết hợp giữa tư duy học thuật và quy trình Agency thực chiến.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative border-t border-white/10 hover:border-tdc-red transition-colors duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-12 flex flex-col md:flex-row items-baseline justify-between gap-6 relative z-10">
                <span className={`font-condensed text-sm transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-gray-500'}`}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                
                <h3 className={`text-4xl md:text-6xl font-serif transition-all duration-500 ease-out flex-grow ${hoveredIndex === index ? 'text-white translate-x-4' : 'text-gray-300'}`}>
                  {service.title}
                </h3>
                
                <p className={`font-sans font-light max-w-xs text-right transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 ${hoveredIndex === index ? 'text-black font-medium' : 'text-gray-500'}`}>
                  {service.description}
                </p>

                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={32} className="text-black" />
                </div>
              </div>

              {/* Hover Background Reveal Effect - RED */}
              <div 
                className={`absolute inset-0 bg-tdc-red transition-transform duration-500 origin-left ${
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`} 
              />
            </div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;