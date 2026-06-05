import React from "react";
import { UsersRound } from "lucide-react";
import { invitation, memoryLines } from "../data.js";

export default function IntroSection() {
  return (
    <section className="intro-section relative z-10 w-[min(calc(100%-32px),460px)] mx-auto py-13.5">
      <div className="section-heading flex items-center gap-2.5">
        <UsersRound size={20} className="text-brown" />
        <p>Trở về nơi ta bắt đầu</p>
      </div>
      <h2 className="mt-3 mb-3 text-ink font-display text-[clamp(1.75rem,8vw,2.4rem)] leading-[1.08]">
        Tháng năm đứng ngoài quy luật thời gian
      </h2>
      <p className="m-0 text-muted leading-[1.75]">{invitation.intro}</p>
      <blockquote>{memoryLines[0]}</blockquote>
    </section>
  );
}
