import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Minimalist Architecture',
    category: 'Branding',
    description: 'Rebranding thương hiệu kiến trúc - Khoá Brand Master.',
    // Reduced width from 2000 to 800 for performance
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Urban Coffee Culture',
    category: 'Packaging',
    description: 'Thiết kế bao bì Specialty Coffee - Khoá Foundation.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Fintech Revolution',
    category: 'UI/UX',
    description: 'App tài chính cá nhân - Khoá UI/UX Intensive.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Fashion Editorial',
    category: 'Art Direction',
    description: 'Concept chụp ảnh thời trang - Khoá Creative.',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white text-tdc-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-6xl md:text-8xl font-serif font-medium leading-none tracking-tighter">
            Selected <br/> Works
          </h2>
          <a href="#" className="group hidden md:flex items-center gap-2 text-sm font-condensed font-bold uppercase tracking-widest pb-1 border-b border-black hover:text-tdc-red hover:border-tdc-red transition-all">
            Xem tất cả dự án <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 group overflow-hidden">
                 <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      loading="lazy" 
                      width="800"
                      height="500"
                      className="w-full h-full object-cover transform grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-tdc-red/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/5 md:px-8">
                 <span className="text-tdc-red text-xs font-condensed font-bold uppercase tracking-[0.2em] mb-4 block">
                    0{index + 1} / {project.category}
                 </span>
                 <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                    {project.title}
                 </h3>
                 <p className="text-gray-500 font-sans leading-relaxed text-lg mb-8">
                    {project.description}
                 </p>
                 <a href="#" className="inline-block text-sm font-bold uppercase tracking-wider border-b border-gray-300 hover:border-black transition-colors pb-1">
                    Xem chi tiết
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;