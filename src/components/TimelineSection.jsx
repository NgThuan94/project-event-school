import React, { useEffect, useRef } from "react";
import { schedule } from "../data.js";

export default function TimelineSection() {
  const pathRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition =
            "stroke-dashoffset 2.4s cubic-bezier(0.4,0,0.2,1) 0.3s";
          path.style.strokeDashoffset = "0";
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <h2 className="tl-title">Timeline</h2>

      <div className="tl-scene">
        {/* SVG viewBox 200×500, đường cong qua giữa x=100 */}
        <svg
          className="tl-path-svg"
          viewBox="0 0 200 500"
          preserveAspectRatio="xMidYMid none"
          aria-hidden="true"
        >
          <path
            ref={pathRef}
            className="tl-path"
            d="M 100 10 C 55 60, 145 130, 100 200 S 55 280, 100 320 S 145 390, 100 490"
            fill="none"
          />
        </svg>

        {schedule.map((item, i) => {
          const sides = ["left", "right", "left", "right"];
          const tops  = ["14%", "34%", "58%", "80%"];
          const side  = sides[i];
          return (
            <div
              key={item.time}
              className={`tl-item tl-item--${side}`}
              style={{ "--tl-y": tops[i], "--tl-delay": `${i * 160}ms` }}
            >
              <div className="tl-card">
                <span className="tl-icon">{item.icon}</span>
                <time className="tl-time">{item.time}</time>
                <p className="tl-label">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
