function About() {
  const techStack = [
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
  ];

  return (
    <section className="content-section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
      </div>

      <div className="about-grid">
        <p>
          I am a third-year computer science student at UBC with an interest in
          full-stack development, accessible software, and practical
          applications that solve real problems. I like working where product
          thinking and technical detail meet.
        </p>

        <ul className="focus-list" aria-label="Tech stacks">
          {techStack.map((technology) => (
            <li key={technology.name}>
              <span className="tech-logo-frame" aria-hidden="true">
                <img
                  className="tech-logo"
                  src={technology.logo}
                  alt=""
                  width="32"
                  height="32"
                  loading="lazy"
                />
              </span>
              <span>{technology.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
