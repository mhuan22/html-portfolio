import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--cursor-x",
          `${event.clientX}px`,
        );
        document.documentElement.style.setProperty(
          "--cursor-y",
          `${event.clientY}px`,
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="ambient-spotlight" aria-hidden="true" />

      <header className="site-header">
        <a className="brand-mark" href="#hero" aria-label="Mingwei portfolio home">
          MW
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
