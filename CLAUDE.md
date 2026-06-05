# CLAUDE.md

Hướng dẫn cho Claude Code khi làm việc với project thiệp mời kỷ niệm 30 năm.

## Project Overview

Thiệp mời online — React 19 + Vite 7 + Tailwind CSS v4, mobile-first (max-width 430px).
Sự kiện: Họp mặt kỷ niệm 30 năm ra trường, niên khóa 1993–1996, Trường THPT Số 2 Nghĩa Hành.

## Cấu trúc quan trọng

```
src/
├── data.js          ← TẤT CẢ nội dung (ngày, tên, địa điểm, lịch trình, ảnh)
├── styles.css       ← Tailwind v4 (@import "tailwindcss") + CSS phức tạp (animations)
├── main.jsx         ← App shell + scroll motion logic
└── components/
    ├── HeroSection.jsx     ← Hero + video mở phong bì (SKIP_OPENING_VIDEO flag)
    ├── IntroSection.jsx
    ├── DetailBand.jsx      ← Ngày / giờ / địa điểm
    ├── MemorySection.jsx
    ├── GallerySection.jsx
    ├── TimelineSection.jsx ← Lịch trình buổi họp mặt
    └── ClosingSection.jsx  ← Liên hệ + Google Maps
```

## Rules quan trọng

### Sửa nội dung
- Luôn sửa `src/data.js` — **không bao giờ** hardcode text vào components
- `SKIP_OPENING_VIDEO = true` trong data.js để tắt/bật video phong bì

### Tailwind v4
- Custom tokens dùng `@theme` trong styles.css: `--color-ink`, `--color-pink-deep`, `--font-display`, v.v.
- Dùng canonical classes: `gap-2.5` thay `gap-[10px]`, `py-13.5` thay `py-[54px]`
- CSS animations và dynamic JS variables (`--scroll-progress`, `--hero-shift`) phải giữ trong styles.css

### CSS class names để giữ nguyên (IntersectionObserver dùng)
`.intro-section`, `.section-heading`, `.detail-band`, `.memory-section`, `.photo-card`,
`.timeline-section`, `.timeline__item`, `.closing-section`, `.is-visible`, `.motion-ready`

### Build & Dev
- `npm run dev` — dev server (host 0.0.0.0)
- `npm run build` — production build vào dist/
- dist/ và node_modules/ được gitignore — không commit

## Commands

- `/dev` — khởi động dev server
- `/build` — build production
- `/update-content` — hướng dẫn cập nhật nội dung thiệp

## Agents

- `content-editor` — chuyên sửa nội dung trong data.js (tên, ngày, địa điểm, lịch trình)

## Workflow Best Practices

- Sửa nội dung → chỉ cần edit `src/data.js`
- Thêm ảnh → đặt vào `public/photos/`, cập nhật mảng `gallery` trong data.js
- Thêm section UI mới → tạo component mới trong `src/components/`, import vào main.jsx
- Bật video phong bì → đổi `SKIP_OPENING_VIDEO = false` trong data.js
