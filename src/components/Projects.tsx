type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string | null;
  demoUrl: string | null;
};

const projects: Project[] = [
  {
    title: "Mic Drop",
    description:
      "Karaoke web app with synchronized lyrics and live microphone playback.",
    highlights: [
      "Designed a timing-focused interface for lyrics, playback, and singing flow.",
      "Balanced real-time audio feedback with a simple, approachable user experience.",
    ],
    tech: ["React", "TypeScript", "Web Audio", "UI State"],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: "Mind Lift",
    description:
      "Gesture-controlled web application designed to help seniors play interactive games using hand movements.",
    highlights: [
      "Explored accessible game interactions beyond keyboard and mouse input.",
      "Built with a focus on readable feedback, simple controls, and low-friction play.",
    ],
    tech: ["React", "Computer Vision", "Accessibility", "Games"],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: "Fitflex",
    description:
      "Workout tracker app for planning routines, logging progress, and keeping fitness goals visible.",
    highlights: [
      "Structured common workout flows around fast entry and easy review.",
      "Focused on practical data organization for repeated day-to-day use.",
    ],
    tech: ["TypeScript", "React", "Data Modeling", "Responsive UI"],
    githubUrl: null,
    demoUrl: null,
  },
];

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Check out any of my work</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="tech-list" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links" aria-label={`${project.title} links`}>
              {project.githubUrl ? (
                <a href={project.githubUrl}>GitHub</a>
              ) : (
                <span aria-disabled="true">GitHub soon</span>
              )}

              {project.demoUrl ? (
                <a href={project.demoUrl}>Live demo</a>
              ) : (
                <span aria-disabled="true">Demo soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
