import React, { useEffect, useRef } from 'react';
import { Target, Award, Rocket, CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: "Coaching 1:1 Độc Quyền",
    description: "Không dạy đại trà. Mỗi học viên là một dự án riêng biệt. Mentor bám sát tiến độ, sửa bài chi tiết từng pixel và định hướng phong cách cá nhân độc bản.",
    icon: <Target size={24} />
  },
  {
    title: "Mentor Thực Chiến",
    description: "Học trực tiếp từ Art Director & Senior Designer tại các Agency hàng đầu. Kiến thức được cập nhật liên tục theo xu hướng thị trường thực tế, nói không với lý thuyết suông.",
    icon: <Award size={24} />
  },
  {
    title: "Sẵn Sàng Sự Nghiệp",
    description: "Không chỉ dạy công cụ. Chúng tôi rèn luyện tư duy Critical Thinking và hỗ trợ hoàn thiện Portfolio chuẩn quốc tế để bạn tự tin ứng tuyển hoặc làm Freelance ngay.",
    icon: <Rocket size={24} />
  }
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight - rect.top) * 0.1;
        textRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-tdc-red text-white border-t border-black/10 relative overflow-hidden">
      {/* Decorative background text */}
      <div 
        ref={textRef}
        className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.1] text-black text-[20rem] font-serif font-bold italic pointer-events-none select-none will-change-transform mix-blend-overlay"
      >
        Why
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header Column */}
          <div className="lg:w-1/3">
             <span className="text-black font-condensed font-bold uppercase tracking-widest text-sm mb-4 block">
              Sự Khác Biệt
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight text-white">
              Tại sao chọn <br/>
              <span className="italic text-black">The Design Council?</span>
            </h2>
            <p className="text-white/90 font-sans font-medium leading-relaxed mb-8 text-lg">
              Chúng tôi không tạo ra những "thợ thiết kế". Chúng tôi đào tạo những nhà sáng tạo có tư duy độc lập và kỹ năng sắc bén.
            </p>
            <div className="h-px w-24 bg-black"></div>
            
            <div className="mt-12 hidden lg:block">
              <div className="inline-flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-sm font-condensed uppercase tracking-wider text-black font-bold">
                    <CheckCircle size={16} className="text-white" /> <span>Cam kết đầu ra</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm font-condensed uppercase tracking-wider text-black font-bold">
                    <CheckCircle size={16} className="text-white" /> <span>Hỗ trợ trọn đời</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm font-condensed uppercase tracking-wider text-black font-bold">
                    <CheckCircle size={16} className="text-white" /> <span>Chứng nhận hoàn thành</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-2/3 grid grid-cols-1 gap-12">
            {reasons.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 group">
                <div className="flex-shrink-0 mt-1">
                   <div className="w-16 h-16 rounded-full border-2 border-white bg-transparent flex items-center justify-center text-white group-hover:bg-white group-hover:text-tdc-red transition-all duration-500 shadow-xl">
                      {item.icon}
                   </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-3 text-black group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white font-sans font-light leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;