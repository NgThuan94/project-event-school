import React, { useLayoutEffect, useRef, useState } from "react";
import { schedule } from "../data.js";

const ILLUSTRATIONS = [
  "/canva-elements/time-line/el-4.png",
  "/canva-elements/time-line/el-3.png",
  "/canva-elements/time-line/el-1.png",
  "/canva-elements/time-line/e-6.png",
];

const VB_W = 200;
const VB_H = 560;
const ITEMS = [
  { side: "right", topPct: 10 },
  { side: "left", topPct: 34 },
  { side: "right", topPct: 57 },
  { side: "left", topPct: 78 },
];

const PATH_D =
  "M 100 0 C 55 70, 145 140, 100 210 S 55 280, 100 320 S 145 400, 100 470 S 55 520, 100 560";

export default function TimelineSection() {
  const pathRef = useRef(null);
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  // mỗi dot: { cx, cy } toạ độ viewBox (cho <circle>) + leftPct (% scene cho card/illus)
  const [dots, setDots] = useState([]);
  const [inView, setInView] = useState(false);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const scene = sceneRef.current;
    if (!path || !scene) return;

    const len = path.getTotalLength();

    // Tính điểm trên path + quy đổi x sang % scene (1 nguồn duy nhất cho cả circle lẫn card)
    const compute = () => {
      const ctm = path.getScreenCTM();
      const r = scene.getBoundingClientRect();
      return ITEMS.map((cfg) => {
        const yVB = (cfg.topPct / 100) * VB_H;
        let lo = 0,
          hi = len;
        for (let k = 0; k < 48; k++) {
          const mid = (lo + hi) / 2;
          if (path.getPointAtLength(mid).y < yVB) lo = mid;
          else hi = mid;
        }
        const p = path.getPointAtLength((lo + hi) / 2);
        let leftPct = (p.x / VB_W) * 100;
        let topPct = (p.y / VB_H) * 100;
        if (ctm && r.width) {
          const sx = ctm.a * p.x + ctm.c * p.y + ctm.e; // viewBox → screen px
          leftPct = ((sx - r.left) / r.width) * 100;
        }
        if (ctm && r.height) {
          const sy = ctm.b * p.x + ctm.d * p.y + ctm.f; // viewBox → screen py
          topPct = ((sy - r.top) / r.height) * 100;
        }
        return { cx: p.x, cy: p.y, leftPct, topPct };
      });
    };

    setDots(compute());
    const ro = new ResizeObserver(() => setDots(compute()));
    ro.observe(scene);

    // Stroke draw-on + reveal dot khi cuộn tới
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition =
            "stroke-dashoffset 2.6s cubic-bezier(0.4,0,0.2,1) 0.2s";
          path.style.strokeDashoffset = "0";
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(sectionRef.current);

    return () => {
      ro.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <img
        className="tl-bg"
        src="/canva-elements/time-line/nen-hoa-sen.png"
        alt=""
        aria-hidden="true"
      />

      {/* Chuồn chuồn decoration */}
      <img
        className="tl-dragonfly tl-dragonfly--1"
        src="/canva-elements/time-line/el-5.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="tl-dragonfly tl-dragonfly--2"
        src="/canva-elements/chuongchuong.svg"
        alt=""
        aria-hidden="true"
      />

      <h2 className="tl-title">Timeline</h2>

      <div className="tl-scene" ref={sceneRef}>
        <svg
          className="tl-path-svg"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path ref={pathRef} className="tl-path" d={PATH_D} fill="none" />
          {/* Dot vẽ thẳng trên path → luôn nằm đúng đường line */}
          {dots.map((d, i) => (
            <g
              key={i}
              className={`tl-dot-g ${inView ? "is-in" : ""}`}
              style={{ "--d": `${600 + i * 220}ms` }}
            >
              <circle cx={d.cx} cy={d.cy} r="7.5" className="tl-dot-ring" />
              <circle cx={d.cx} cy={d.cy} r="4.4" className="tl-dot-core" />
            </g>
          ))}
        </svg>

        {schedule.map((item, i) => {
          const cfg = ITEMS[i];
          if (!cfg) return null;
          const illustSide = cfg.side === "right" ? "left" : "right";
          const leftPct = dots[i] ? `${dots[i].leftPct.toFixed(2)}%` : "50%";
          return (
            <div
              key={i}
              className={`tl-item tl-item--${cfg.side}`}
              style={{
                "--tl-y": dots[i] ? `${dots[i].topPct.toFixed(2)}%` : `${cfg.topPct}%`,
                "--tl-delay": `${i * 180}ms`,
                "--tl-dot-left": leftPct,
              }}
            >
              <div className={`tl-card tl-card--${cfg.side}`}>
                <time className="tl-time">{item.time}</time>
                <p className="tl-label">{item.label}</p>
              </div>
              <img
                className={`tl-illus tl-illus--${illustSide}`}
                src={ILLUSTRATIONS[i]}
                alt=""
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
