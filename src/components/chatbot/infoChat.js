import { clinic } from "./clinic";
import { contact } from "./contact";
import { diseases } from "./diseases";
import { doctors } from "./doctors";
import { recommendedFacilities } from "./facilities";
import { services } from "./services";

export const infoChat = {
  introduction: "Chào mừng bạn đến với Trợ lý Y tế của hệ thống Booking Health, chatbot thân thiện hỗ trợ tư vấn sức khỏe, thông tin về các căn bệnh và tác dụng của các loại thuốc trên thị trường,đặt lịch khám, và đề xuất cơ sở y tế phù hợp!",
  details: {
    ...clinic,
    contact,
    services,
    doctors,
    recommendedFacilities,
    diseases,
  },
};