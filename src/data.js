export const invitation = {
  organizer: "Ban liên lạc cựu học sinh niên khóa 1993 - 1996",
  eyebrow: "Giấy Mời",
  intro:
    "Nhân dịp kỷ niệm 30 năm ngày ra trường, Ban Liên lạc cựu học sinh niên khóa 1993 - 1996 xin trân trọng kính mời",
  recipient: "Các Bạn",
  intro2:
    "cùng gia đình về tham dự buổi họp mặt thân mật với Khóa, để cùng ôn lại những kỷ niệm xưa và chia sẻ những chặng đường đã qua",
  dateDay: "11",
  dateMonth: "Tháng 7",
  dateYear: "2026",
  date: "Thứ Bảy, ngày 11 tháng 7 năm 2026",
  time: "09:00",
  place: "Trường THPT Số 2 Nghĩa Hành",
  address: "Xã Thiện Tín, Quảng Ngãi",
  contactName: "Phạm Hồng Thắng",
  contactPhone: "0385.850.999",
  phoneHref: "tel:0385850999",
  mapHref:
    "https://maps.google.com/?q=Tr%C6%B0%E1%BB%9Dng%20THPT%20S%E1%BB%91%202%20Ngh%C4%A9a%20H%C3%A0nh%20Qu%E1%BA%A3ng%20Ng%C3%A3i",
  cta: "Rất hân hạnh được đón tiếp!",
};

export const schedule = [
  { time: "08:00 - 08:30", label: "Đón tiếp đại biểu" },
  { time: "08:30 - 09:00", label: "chụp hình lưu niệm" },
  { time: "09:00 - 10:00", label: "Gặp mặt, ôn lại kỷ niệm" },
  { time: "10:30", label: "tham gia các hoạt động" },
];

export const gallery = {
  logo: "/canva-elements/gallry/logo.png",
  school: "Trường THPT Số 2 Nghĩa Hành - Quảng Ngãi",
  reunion: "Hội cựu học sinh niên khóa 1993 - 1996",
  tagline: "Trở về nơi ta bắt đầu",
  // Ảnh slide giữa (tự chạy). Thêm/bớt ảnh trong thư mục public/canva-elements/gallry/
  slides: [
    "/canva-elements/gallry/imag-1.jpg",
    "/canva-elements/gallry/imag-2.jpg",
    "/canva-elements/gallry/image-3.jpg",
    "/canva-elements/gallry/image-4.jpg",
  ],
  // Câu trích — dòng highlight (đỏ, to) tách riêng
  quote: {
    pre: ["Thanh xuân có hạn kỳ,", "nhưng tình bạn là những"],
    highlight: ["Tháng năm", "rực rỡ"],
    post: ["Đứng ngoài quy luật", "thời gian"],
  },
};

// Thời gian mỗi ảnh slide hiển thị (ms)
export const GALLERY_SLIDE_MS = 3500;

// Dán URL Google Apps Script Web App vào đây sau khi deploy
export const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxfzC0_SyGJByZgb0kExo34IUyP6g9t9mJPkyaryaPTmuzfkl13_oUjovVF6IJIfhTv/exec";

export const OPENING_VIDEO_SRC =
  "/canva-elements/K%E1%BB%B6%20NI%E1%BB%86M%2030%20N%C4%82M%20V%E1%BB%80%20TR%C6%AF%E1%BB%9CNG%20(1).mp4";
export const SKIP_OPENING_VIDEO = false;
export const PETAL_COUNT = 12;
// Số chuồn chuồn bay quanh hero — đường bay định nghĩa trong styles.css (.dragonfly:nth-child)
export const DRAGONFLY_COUNT = 2;
