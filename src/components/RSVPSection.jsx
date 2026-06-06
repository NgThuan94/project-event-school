import React, { useState } from "react";
import { RSVP_ENDPOINT } from "../data.js";

const STATE = { idle: "idle", loading: "loading", success: "success", error: "error" };

export default function RSVPSection() {
  const [name, setName]     = useState("");
  const [phone, setPhone]   = useState("");
  const [status, setStatus] = useState(STATE.idle);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus(STATE.loading);
    try {
      const form = new FormData();
      form.append("name", name.trim());
      form.append("phone", phone.trim());
      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: form,
      });
      setStatus(STATE.success);
    } catch {
      setStatus(STATE.error);
    }
  };

  return (
    <section className="rsvp-section">
      <h2 className="rsvp-title">Xác nhận tham dự</h2>
      <p className="rsvp-sub">Vui lòng điền thông tin để Ban liên lạc ghi nhận</p>

      {status === STATE.success ? (
        <div className="rsvp-success">
          <span className="rsvp-success__icon">🌸</span>
          <p className="rsvp-success__msg">Cảm ơn bạn đã xác nhận!</p>
          <p className="rsvp-success__name">{name}</p>
          <p className="rsvp-success__note">Hẹn gặp ngày 11 tháng 7 năm 2026 🎉</p>
        </div>
      ) : (
        <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
          <div className="rsvp-field">
            <label className="rsvp-label" htmlFor="rsvp-name">Họ và tên</label>
            <input
              id="rsvp-name"
              className="rsvp-input"
              type="text"
              placeholder="Nguyễn Văn A"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={status === STATE.loading}
            />
          </div>

          <div className="rsvp-field">
            <label className="rsvp-label" htmlFor="rsvp-phone">Số điện thoại</label>
            <input
              id="rsvp-phone"
              className="rsvp-input"
              type="tel"
              placeholder="0912 345 678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={status === STATE.loading}
            />
          </div>

          {status === STATE.error && (
            <p className="rsvp-error">Có lỗi xảy ra, vui lòng thử lại.</p>
          )}

          <button
            className="rsvp-btn"
            type="submit"
            disabled={status === STATE.loading || !name.trim() || !phone.trim()}
          >
            {status === STATE.loading ? "Đang gửi…" : "Xác nhận tham dự ✓"}
          </button>
        </form>
      )}
    </section>
  );
}
