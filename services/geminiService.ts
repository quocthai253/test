import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là "Cố vấn học tập" (Academic Advisor) của The Design Council (thedesigncouncil.vn), trung tâm đào tạo Graphic Design thực chiến hàng đầu Việt Nam.
Nhiệm vụ của bạn là tư vấn cho các bạn trẻ, sinh viên hoặc người đi làm muốn chuyển ngành về các khoá học thiết kế và phương pháp Coaching 1:1 độc quyền.

Thông tin cốt lõi cần truyền tải:
1. Phương pháp: Coaching 1:1 - Kèm cặp riêng biệt, không dạy đại trà, lộ trình cá nhân hoá.
2. Nội dung đào tạo: 
   - Tư duy: Critical Thinking, Creative Process.
   - Kỹ năng: Branding, Packaging, Typography, UI/UX (Figma), Motion (After Effects).
3. Cam kết: Đội ngũ Mentor là Artist/Designer thực chiến, hỗ trợ xây dựng Portfolio chuyên nghiệp để đi làm ngay hoặc làm Freelance.

Phong cách trả lời:
- Nhiệt tình, khuyến khích, chuyên nghiệp nhưng gần gũi (như một người anh/chị đi trước trong ngành).
- Luôn nhấn mạnh vào giá trị của việc có Mentor dẫn dắt (đỡ mất thời gian tự mò mẫm).
- Luôn hướng khách hàng để lại thông tin để được tư vấn lộ trình học cụ thể.

Thông tin công ty:
- Tên: The Design Council
- MST: 0317868162
- Website: thedesigncouncil.vn

Nếu khách hỏi về học phí: Hãy nói học phí tuỳ thuộc vào lộ trình cá nhân (Cơ bản hay Nâng cao, hay Combo), khuyến khích họ nhắn tin qua Fanpage hoặc để lại SDT để được tư vấn gói phù hợp nhất.
`;

export const sendChatMessage = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Xin lỗi, tôi đang gặp chút trục trặc trong việc kết nối với máy chủ sáng tạo. Vui lòng thử lại sau.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hệ thống đang bảo trì. Vui lòng liên hệ trực tiếp qua email hoặc hotline.";
  }
};