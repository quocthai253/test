import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const RegisterForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="register" className="py-32 bg-tdc-red relative overflow-hidden">
      {/* Abstract Background Line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-black/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-tdc-black border border-white/10 p-8 md:p-16 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative">
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tdc-red"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-tdc-red"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-tdc-red"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-tdc-red"></div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
              Bắt đầu hành trình <br/> <span className="italic text-tdc-red">Sáng tạo</span>
            </h2>
            <p className="text-gray-400 font-sans font-light">
              Để lại thông tin. Chúng tôi sẽ liên hệ tư vấn lộ trình phù hợp nhất cho bạn.
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 animate-[fadeIn_0.5s_ease-out]">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Đăng ký thành công!</h3>
              <p className="text-gray-400 text-center">Cảm ơn bạn đã quan tâm. Team TDC sẽ liên hệ sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-condensed uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-tdc-red transition-colors">Họ và Tên</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-tdc-red transition-colors font-serif text-xl"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-condensed uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-tdc-red transition-colors">Số Điện Thoại</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-tdc-red transition-colors font-serif text-xl"
                    placeholder="0909 xxx xxx"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-condensed uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-tdc-red transition-colors">Email</label>
                <input 
                  required 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-tdc-red transition-colors font-serif text-xl"
                  placeholder="hello@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-condensed uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-tdc-red transition-colors">Khóa học quan tâm</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-tdc-red transition-colors font-serif text-xl appearance-none">
                  <option value="" className="bg-tdc-black text-gray-500">Chọn khóa học...</option>
                  <option value="foundation" className="bg-tdc-black">Graphic Design Foundation</option>
                  <option value="uiux" className="bg-tdc-black">UI/UX Design Intensive</option>
                  <option value="brand" className="bg-tdc-black">Brand Identity Master</option>
                  <option value="1on1" className="bg-tdc-black">Coaching 1:1 Đặc biệt</option>
                </select>
              </div>

              <div className="pt-8 text-center">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-condensed font-bold uppercase tracking-widest hover:bg-tdc-red hover:text-white transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Đang gửi...' : 'Gửi đăng ký'}
                  <Send size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;