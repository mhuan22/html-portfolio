import heroImage from "../assets/hero.svg";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-copy">
        <p className="eyebrow">Computer Science at UBC</p>
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
        <div className="orbit-ring" />
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
}

export default Hero;
