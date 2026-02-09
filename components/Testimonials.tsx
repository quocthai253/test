import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Minh Tú",
    course: "Graphic Design Foundation",
    quote: "Khóa học đã thay đổi hoàn toàn tư duy thiết kế của mình. Mentor cực kỳ tâm huyết, không chỉ dạy công cụ mà còn dạy cách 'nhìn' và 'cảm' cái đẹp. Sửa bài chi tiết đến từng pixel.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Trần Hoàng Nam",
    course: "UI/UX Intensive",
    quote: "Từ zero đến khi có portfolio xin việc chỉ trong 3 tháng. Phương pháp Coaching 1:1 thực sự hiệu quả cho người chuyển ngành (non-IT) như mình. Giờ mình đã tự tin apply vào các cty Product.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Lê Lan Anh",
    course: "Brand Master",
    quote: "Mình học được cách tư duy chiến lược chứ không chỉ là vẽ vời. Những kiến thức thực chiến này không sách vở nào dạy cả. Rất đáng tiền cho ai muốn làm Branding chuyên nghiệp.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-tdc-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-tdc-red font-condensed font-bold uppercase tracking-widest text-sm mb-4 block animate-[fadeIn_1s_ease-out_both]">
            Học viên nói gì về chúng tôi
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
            Câu chuyện <span className="italic text-gray-400">Thành công</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white/5 p-8 rounded-none border border-white/5 hover:border-tdc-red/30 transition-all duration-300 group">
              <div className="mb-6 text-tdc-red opacity-50 group-hover:opacity-100 transition-opacity">
                <Quote size={40} />
              </div>
              
              <p className="text-gray-300 font-serif text-lg leading-relaxed italic mb-8 min-h-[120px]">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ring-2 ring-transparent group-hover:ring-tdc-red/50"
                />
                <div>
                  <h4 className="text-white font-sans font-medium text-sm">{item.name}</h4>
                  <p className="text-tdc-red text-xs font-condensed uppercase tracking-wider mt-1">{item.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;