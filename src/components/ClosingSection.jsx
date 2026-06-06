import React from "react";
import { invitation } from "../data.js";

export default function ClosingSection() {
  return (
    <section className="closing-section">
      {/* Divider hoa */}
      <div className="closing-divider" aria-hidden="true">
        <span className="closing-divider__line" />
        <span className="closing-divider__icon">🌸</span>
        <span className="closing-divider__line" />
      </div>

      <p className="closing-organizer">{invitation.organizer}</p>

      <h2 className="closing-cta">{invitation.cta}</h2>

      <div className="closing-actions">
        <a className="closing-btn closing-btn--phone" href={invitation.phoneHref}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
          </svg>
          {invitation.contactName} · {invitation.contactPhone}
        </a>

        <a
          className="closing-btn closing-btn--map"
          href={invitation.mapHref}
          target="_blank"
          rel="noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Xem địa chỉ trên bản đồ
        </a>
      </div>

      <p className="closing-footer">
        Trường THPT Số 2 Nghĩa Hành · Thứ Bảy, 11/7/2026
      </p>
    </section>
  );
}
