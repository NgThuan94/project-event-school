import React from "react";
import { memoryLines } from "../data.js";

export default function MemorySection() {
  return (
    <section className="memory-section relative z-10 grid gap-3 w-[min(calc(100%-32px),460px)] mx-auto py-8.5">
      {memoryLines.slice(1).map((line) => (
        <p key={line}>{line}</p>
      ))}
    </section>
  );
}
