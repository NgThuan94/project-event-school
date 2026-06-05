import React from "react";
import { ExternalLink, Phone } from "lucide-react";
import { invitation } from "../data.js";

export default function ClosingSection() {
  return (
    <section className="closing-section relative z-10 w-[min(calc(100%-32px),460px)] mx-auto py-13.5 min-h-[62vh] grid content-center text-center">
      <p className="m-0 text-muted leading-[1.75]">{invitation.organizer}</p>
      <h2 className="mt-3 mb-3 text-pink-deep font-display text-[clamp(1.75rem,8vw,2.4rem)] leading-[1.08]">
        {invitation.cta}
      </h2>
      <div
        className="closing-actions grid gap-2.5 justify-items-center mt-4.5"
        aria-label="Liên hệ và chỉ đường"
      >
        <a className="contact-line" href={invitation.phoneHref}>
          <Phone size={18} />
          Liên hệ: {invitation.contactName} - {invitation.contactPhone}
        </a>
        <a
          className="contact-line contact-line--secondary"
          href={invitation.mapHref}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={18} />
          Xem địa chỉ ở đây
        </a>
      </div>
    </section>
  );
}
