import React from "react";
import { Clock3, MapPin } from "lucide-react";
import { invitation } from "../data.js";

export default function DetailBand() {
  return (
    <section className="detail-band relative z-10 grid gap-2.5 w-[min(calc(100%-32px),460px)] mx-auto py-5.5">
      <div className="date-card justify-center">
        <strong>{invitation.dateDay}</strong>
        <span>
          {invitation.dateMonth}
          <small>{invitation.dateYear}</small>
        </span>
      </div>
      <div>
        <Clock3 size={20} />
        <span>{invitation.time} | Thứ Bảy</span>
      </div>
      <div>
        <MapPin size={20} />
        <span>
          {invitation.place}
          <small>{invitation.address}</small>
        </span>
      </div>
    </section>
  );
}
