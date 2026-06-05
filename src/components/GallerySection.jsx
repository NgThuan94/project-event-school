import React, { useEffect, useState } from "react";
import { gallery, GALLERY_SLIDE_MS } from "../data.js";

export default function GallerySection() {
  const slides = gallery.slides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      GALLERY_SLIDE_MS,
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="gallery-section" aria-label="Album kỷ niệm">
      <img
        className="g-deco g-deco--phuong-top"
        src="/canva-elements/gallry/hoa-phuong.png"
        alt=""
        aria-hidden="true"
        decoding="async"
      />

      <header className="g-head">
        <img
          className="g-logo"
          src={gallery.logo}
          alt="Huy hiệu kỷ niệm 30 năm"
          decoding="async"
        />
        <p className="g-school">{gallery.school}</p>
        <p className="g-reunion">{gallery.reunion}</p>
        <p className="g-tagline">{gallery.tagline}</p>
      </header>

      {/* Cuốn sổ: slide ở trang trên, quote ở trang dưới */}
      <div className="g-book">
        <div className="g-slideshow">
          <div className="g-frame">
            {slides.map((src, index) => (
              <img
                key={src}
                className={`g-slide ${index === active ? "is-active" : ""}`}
                src={src}
                alt={`Ảnh kỷ niệm ${index + 1}`}
                loading="lazy"
                decoding="async"
                aria-hidden={index !== active}
              />
            ))}
          </div>

          <div className="g-dots" role="tablist" aria-label="Chọn ảnh">
            {slides.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`g-dot ${index === active ? "is-active" : ""}`}
                onClick={() => setActive(index)}
                aria-label={`Ảnh ${index + 1}`}
                aria-selected={index === active}
              />
            ))}
          </div>

          <img
            className="g-deco g-deco--bike"
            src="/canva-elements/gallry/xe-dap.png"
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        </div>

        <div className="g-quote">
          <div className="g-quote__text">
            {gallery.quote.pre.map((line) => (
              <p className="g-quote__line" key={line}>
                {line}
              </p>
            ))}
            {gallery.quote.highlight.map((line) => (
              <p className="g-quote__big" key={line}>
                {line}
              </p>
            ))}
            {gallery.quote.post.map((line) => (
              <p className="g-quote__line" key={line}>
                {line}
              </p>
            ))}
          </div>
        </div>

        <img
          className="g-deco g-deco--hoado"
          src="/canva-elements/gallry/hoa-do.png"
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      </div>
    </section>
  );
}
