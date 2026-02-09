import React, { useEffect, useRef } from 'react';
import { ArrowDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.5}px)) scale(${1 + scrollY * 0.001})`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-0 overflow-hidden bg-tdc-red text-black">
      {/* Dynamic Background */}
      <div 
        ref={blobRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-black rounded-full blur-[120px] opacity-[0.2] pointer-events-none mix-blend-multiply"
      ></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center flex-grow">
        <div className="w-full border-t border-black mb-8 w-12 transition-all duration-700 hover:w-32"></div>
        
        <p className="text-sm md:text-base font-condensed uppercase font-bold tracking-[0.3em] text-white mb-4 animate-[fadeIn_1s_ease-out_both]">
          Est. 2023 &mdash; Ho Chi Minh City
        </p>
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-light leading-[0.85] tracking-tighter text-black animate-[slideUp_1s_ease-out_both]">
          Design <br />
          <span className="italic font-normal ml-8 md:ml-32 text-white hover:text-black transition-colors duration-500">Mentorship</span>
        </h1>
        
        <div className="mt-12 md:mt-16 max-w-xl self-end text-right animate-[fadeIn_1.5s_ease-out_0.5s_both]">
          <p className="text-black text-lg md:text-xl font-sans font-medium leading-relaxed">
            Không đào tạo thợ thiết kế.<br/>
            Chúng tôi kiến tạo <span className="text-white border-b border-white pb-1">Tư duy Sáng tạo</span>.
          </p>
          <div className="mt-8 flex justify-end gap-4">
            <a 
              href="#register" 
              className="group relative px-8 py-3 bg-black text-white overflow-hidden font-condensed font-bold uppercase tracking-widest text-sm hover:text-black transition-colors"
            >
              <div className="absolute inset-0 w-full h-full bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10">Đăng ký ngay</span>
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Effect - Black Strip */}
      <div className="relative w-full overflow-hidden py-8 bg-black mt-12 transform -skew-y-2 origin-bottom-left scale-105 border-t-4 border-white">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-8">
              <span className="text-4xl md:text-7xl font-condensed font-bold uppercase text-transparent stroke-text text-white/90 hover:text-tdc-red transition-colors duration-300" style={{WebkitTextStroke: '1px white'}}>
                Creative Thinking
              </span>
              <Star size={32} className="text-tdc-red animate-spin-slow fill-tdc-red" />
              <span className="text-4xl md:text-7xl font-serif italic text-white/50">
                Portfolio Ready
              </span>
              <Star size={32} className="text-tdc-red animate-spin-slow fill-tdc-red" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;