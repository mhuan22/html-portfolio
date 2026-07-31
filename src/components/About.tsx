function About() {
  const focusAreas = [
    "Full-stack product development",
    "Accessible, user-centered interfaces",
    "Practical tools for real-world workflows",
  ];

  return (
    <section className="content-section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Focused on software that feels clear, useful, and human.</h2>
      </div>

      <div className="about-grid">
        <p>
          I am a third-year computer science student at UBC with an interest in
          full-stack development, accessible software, and practical
          applications that solve real problems. I like working where product
          thinking and technical detail meet.
        </p>

        <ul className="focus-list" aria-label="Focus areas">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
