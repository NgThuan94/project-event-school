import React from "react";
import { Star } from "lucide-react";
import { gallery } from "../data.js";

export default function GallerySection() {
  return (
    <section className="gallery-section relative z-10 w-[min(calc(100%-32px),460px)] mx-auto py-13.5">
      <div className="section-heading flex items-center gap-2.5">
        <Star size={20} className="text-brown" />
        <p>Tháng năm rực rỡ</p>
      </div>
      <div className="photo-strip grid grid-cols-1 gap-3.5 mt-5">
        {gallery.map((photo, index) => (
          <figure
            className={`photo-card ${photo.className}`}
            key={photo.label}
            style={{ "--delay": index }}
          >
            <img src={photo.src} alt={photo.label} />
            <figcaption>
              <span>{photo.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
