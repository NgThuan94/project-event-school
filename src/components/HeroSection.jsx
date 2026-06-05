import React, { useEffect, useMemo, useRef, useState } from "react";
import { Clock3 } from "lucide-react";
import {
  invitation,
  DRAGONFLY_COUNT,
  OPENING_VIDEO_SRC,
  PETAL_COUNT,
  SKIP_OPENING_VIDEO,
} from "../data.js";

export default function HeroSection() {
  const [opened, setOpened] = useState(SKIP_OPENING_VIDEO);
  const [dismissed, setDismissed] = useState(SKIP_OPENING_VIDEO);
  const videoRef = useRef(null);

  useEffect(() => {
    if (SKIP_OPENING_VIDEO) return undefined;
    document.body.classList.add("is-locked");
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => document.body.classList.remove("is-locked");
  }, []);

  useEffect(() => {
    if (SKIP_OPENING_VIDEO) return;
    document.body.classList.toggle("is-locked", !dismissed);
  }, [dismissed]);

  useEffect(() => {
    if (SKIP_OPENING_VIDEO) return;
    videoRef.current?.load();
  }, []);

  const floatingTokens = useMemo(
    () => ["1993", "1996", "30 năm", "2026", "Thanh xuân", "Bạn cũ"],
    [],
  );

  const playOpeningVideo = async () => {
    if (opened) return;
    setOpened(true);
    try {
      await videoRef.current?.play();
    } catch {
      setDismissed(true);
    }
  };

  return (
    <section
      className="hero"
      aria-label="Thiệp mời kỷ niệm 30 năm ngày ra trường"
    >
      <img
        className="hero__image"
        src="/canva-elements/background-hero.png"
        alt="Nền hero hoa sen hồng từ Canva"
        decoding="async"
        fetchPriority="high"
      />
      <div className="hero__veil" />
      <img
        className="hero__ribbon"
        src="/canva-elements/image-banner.png"
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <div className="soft-petal soft-petal--one" aria-hidden="true" />
      <div className="soft-petal soft-petal--two" aria-hidden="true" />

      <div className="float-layer" aria-hidden="true">
        {floatingTokens.map((item, index) => (
          <span
            key={item}
            style={{
              "--i": index,
              "--token-left": `${5 + index * 14}%`,
              "--token-top": `${13 + (index % 3) * 18}%`,
              "--token-delay": `${0.6 + index * 0.09}s`,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="dragonfly-layer" aria-hidden="true">
        {Array.from({ length: DRAGONFLY_COUNT }, (_, index) => (
          <img
            key={index}
            className="dragonfly"
            src="/canva-elements/chuongchuong.svg"
            alt=""
            decoding="async"
          />
        ))}
      </div>

      <div className="petal-field" aria-hidden="true">
        {Array.from({ length: PETAL_COUNT }, (_, index) => (
          <span
            key={index}
            style={{
              "--i": index,
              "--petal-left": `${7 + index * 7}%`,
              "--petal-top": `${-18 + index * 4}%`,
              "--petal-delay": `${index * -0.88}s`,
              "--petal-duration": `${11 + index * 0.62}s`,
              "--petal-size": `${8 + index * 0.7}px`,
              "--petal-rotate": `${index * 18}deg`,
              "--petal-rotate-end": `${index * 18 + 190}deg`,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        <p className="eyebrow">{invitation.eyebrow}</p>
        <p className="hero__line">{invitation.intro}</p>
        <p className="hero__and">{invitation.recipient}</p>
        <p className="hero__line">{invitation.intro2}</p>
        <div className="hero__facts">
          <span>
            <Clock3 size={15} />
            {invitation.time}&nbsp;|&nbsp;{invitation.date.split(",")[0]}
          </span>
          <span>
            {invitation.dateMonth}&nbsp;<b>{invitation.dateDay}</b>&nbsp;
            {invitation.dateYear}
          </span>
        </div>
        <div className="hero__venue">
          <p>Tổ chức tại</p>
          <strong>{invitation.place}</strong>
          <small>{invitation.address}</small>
        </div>
        <p className="hero__welcome">{invitation.cta}</p>
      </div>

      {!SKIP_OPENING_VIDEO && (
        <div
          className={`card-opening ${opened ? "is-open" : ""} ${dismissed ? "is-dismissed" : ""}`}
        >
          <div className="opening-stage" aria-hidden={dismissed}>
            <video
              ref={videoRef}
              className="opening-video"
              src={OPENING_VIDEO_SRC}
              muted
              playsInline
              preload="auto"
              tabIndex={0}
              aria-label="Chạm vào video để mở thiệp"
              onPointerDown={(event) => {
                event.preventDefault();
                playOpeningVideo();
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  playOpeningVideo();
                }
              }}
              onEnded={() => setDismissed(true)}
              onError={() => setDismissed(true)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
