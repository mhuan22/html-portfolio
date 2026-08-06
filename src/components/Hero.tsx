import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import heroImage from "../assets/hero.svg";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const animationFrame = useRef(0);

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const updateParallax = (x: number, y: number) => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    window.cancelAnimationFrame(animationFrame.current);
    animationFrame.current = window.requestAnimationFrame(() => {
      hero.style.setProperty("--hero-copy-x", `${(-x * 8).toFixed(2)}px`);
      hero.style.setProperty("--hero-copy-y", `${(-y * 6).toFixed(2)}px`);
      hero.style.setProperty("--hero-card-x", `${(x * 18).toFixed(2)}px`);
      hero.style.setProperty("--hero-card-y", `${(y * 16).toFixed(2)}px`);
      hero.style.setProperty("--hero-image-x", `${(x * 28).toFixed(2)}px`);
      hero.style.setProperty("--hero-image-y", `${(y * 24).toFixed(2)}px`);
      hero.style.setProperty("--hero-ring-x", `${(-x * 22).toFixed(2)}px`);
      hero.style.setProperty("--hero-ring-y", `${(-y * 18).toFixed(2)}px`);
      hero.style.setProperty("--hero-grid-x", `${(x * 12).toFixed(2)}px`);
      hero.style.setProperty("--hero-grid-y", `${(y * 10).toFixed(2)}px`);
      hero.style.setProperty("--hero-accent-x", `${(x * 34).toFixed(2)}px`);
      hero.style.setProperty("--hero-accent-y", `${(y * 28).toFixed(2)}px`);
      hero.style.setProperty("--hero-accent-inverse-x", `${(-x * 34).toFixed(2)}px`);
      hero.style.setProperty("--hero-accent-inverse-y", `${(-y * 28).toFixed(2)}px`);
      hero.style.setProperty("--hero-tilt-x", `${(-y * 7).toFixed(2)}deg`);
      hero.style.setProperty("--hero-tilt-y", `${(x * 9).toFixed(2)}deg`);
      hero.style.setProperty("--hero-glow-x", `${((x + 0.5) * 100).toFixed(2)}%`);
      hero.style.setProperty("--hero-glow-y", `${((y + 0.5) * 100).toFixed(2)}%`);
    });
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const canUsePointerMotion =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUsePointerMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    updateParallax(x, y);
  };

  const handlePointerLeave = () => {
    updateParallax(0, 0);
  };

  return (
    <section
      className="hero-section"
      id="hero"
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-copy">
        <p className="eyebrow">Vancouver-based Software Engineer</p>
        <h1>Hi, I'm Mingwei.</h1>

        <div className="hero-actions" aria-label="Primary links">
          <a className="button button-primary" href="#projects">
            View projects
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-depth-grid" />
        <div className="hero-signal hero-signal-mint" />
        <div className="hero-signal hero-signal-coral" />
        <div className="orbit-ring" />
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
}

export default Hero;
