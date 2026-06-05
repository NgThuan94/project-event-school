# UI/UX Pro Max Design System

Project: Thiệp mời kỷ niệm 30 năm ngày ra trường

Canva source: `ELEMENTS - HOÀI CẢM - XANH HỒNG` (`DAHJuMYK7iM`) only.

## Product Pattern

- Type: mobile-first event invitation landing page
- Structure: opening card effect, emotional hero, invitation copy, event details, official invite image, memory gallery, schedule, final CTA
- Primary UX pattern: Scroll-Triggered Storytelling + Event Landing

## Visual Direction

- Primary style: Hoài cảm xanh-hồng from the Canva Elements file
- Supporting style: soft vertical invitation, pastel paper, script headline, memory quote cards
- Mood: nostalgic, warm, respectful, alumni reunion, gentle and emotional
- Avoid: back-to-school/kids visuals, generic SaaS sections, heavy dashboards, excessive animations

## Color System

- Ink: `#23314d`
- Soft blue: `#8ed6e8`
- Deep blue: `#427da5`
- Soft pink: `#f4a9c6`
- Deep pink: `#d86996`
- Warm cream: `#fffaf2`
- Paper: `rgba(255, 255, 255, 0.84)`
- Muted text: `#66708d`

## Typography

- Script accent: Luxurious Script
- Heading: Playfair Display
- Body: Inter
- Heading style: editorial, balanced, high contrast, no negative letter spacing
- Body style: readable on 360px mobile screens

## Motion Rules

- Keep opening card as the signature animation.
- Use scroll reveal for section cards.
- Avoid infinite decorative motion except subtle hero image drift.
- Respect `prefers-reduced-motion`.
- Animate transform and opacity, not layout dimensions.

## Accessibility

- Maintain visible text contrast over images with overlays.
- Images require meaningful alt text.
- CTA links must be tap-friendly and keyboard-focus visible.
- Mobile width target: 360px to 430px first, then tablet/desktop.
