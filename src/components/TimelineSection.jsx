import React from "react";
import { schedule } from "../data.js";

export default function TimelineSection() {
  return (
    <section className="timeline-section relative z-10 w-[min(calc(100%-32px),460px)] mx-auto py-13.5">
      <h2 className="mt-3 mb-3 text-ink font-display text-[clamp(1.75rem,8vw,2.4rem)] leading-[1.08]">
        Chương trình
      </h2>
      <div className="timeline grid gap-3 mt-5.5 relative">
        {schedule.map(([time, title]) => (
          <div className="timeline__item" key={time}>
            <time>{time}</time>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
