import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import HeroSection from "./components/HeroSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import TimelineSection from "./components/TimelineSection.jsx";
import RSVPSection from "./components/RSVPSection.jsx";
import ClosingSection from "./components/ClosingSection.jsx";

function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return undefined;

    let frame = 0;
    document.documentElement.classList.add("motion-ready");

    const updateScrollMotion = () => {
      frame = 0;
      const viewportHeight = Math.max(window.innerHeight, 1);
      const pageHeight = Math.max(
        document.documentElement.scrollHeight - viewportHeight,
        1,
      );
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(scrollY / pageHeight, 1)),
      );
      document.documentElement.style.setProperty(
        "--page-grid-y",
        `${-120 * (scrollY / pageHeight)}px`,
      );
      document.documentElement.style.setProperty(
        "--page-grid-x",
        `${80 * (scrollY / pageHeight)}px`,
      );
    };

    const requestScrollMotion = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrollMotion);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    document
      .querySelectorAll(
        [
          ".g-logo",
          ".g-school",
          ".g-reunion",
          ".g-tagline",
          ".g-book",
          ".tl-title",
          ".tl-item",
          ".closing-section > *",
        ].join(", "),
      )
      .forEach((element) => revealObserver.observe(element));

    updateScrollMotion();
    window.addEventListener("scroll", requestScrollMotion, { passive: true });
    window.addEventListener("resize", requestScrollMotion);

    return () => {
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
      window.removeEventListener("scroll", requestScrollMotion);
      window.removeEventListener("resize", requestScrollMotion);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main className="page">
      <HeroSection />
      <GallerySection />
      <TimelineSection />
      <RSVPSection />
      <ClosingSection />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
