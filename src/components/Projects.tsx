import fitflexThumbnail from "../assets/fitflex-thumbnail.png";
import micDropThumbnail from "../assets/mic-drop-thumbnail.png";
import mindLiftThumbnail from "../assets/mind-lift-thumbnail.png";
import movieBrowserThumbnail from "../assets/movie-browser-thumbnail.png"

type Project = {
  title: string;
  description: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  tech: string[];
  githubUrl: string | null;
  demoUrl: string | null;
};

const projects: Project[] = [
  {
    title: "ReelView",
    description:
      "Simple movie browser with favouriting functionality using TMDB API.",
    thumbnailSrc: movieBrowserThumbnail,
    thumbnailAlt: "ReelView main page with movie list.",
    tech: ["React", "JavaScript", "TMDB API"],
    githubUrl: "https://github.com/mhuan22/Movie-Browser",
    demoUrl: null,
  },
  {
    title: "Mic Drop",
    description:
      "Karaoke web app with synchronized lyrics and live microphone playback.",
    thumbnailSrc: micDropThumbnail,
    thumbnailAlt: "Mic Drop landing screen.",
    tech: ["React", "TypeScript", "Python", "Flask", "Web Audio API"],
    githubUrl: "https://github.com/karentran28/MicDrop-BCSHacks-2025",
    demoUrl: null,
  },
  {
    title: "Mind Lift",
    description:
      "Gesture-controlled web application designed to help seniors play interactive games using hand movements.",
    thumbnailSrc: mindLiftThumbnail,
    thumbnailAlt: "Illustrated hand tracking interface for the Mind Lift project.",
    tech: ["React", "Computer Vision", "Accessibility", "Games"],
    githubUrl: "https://github.com/karentran28/Mind-Lift-nwHacks2025",
    demoUrl: null,
  },
  {
    title: "Fitflex",
    description:
      "Workout tracker app for planning routines, logging progress, and keeping fitness goals visible.",
    thumbnailSrc: fitflexThumbnail,
    thumbnailAlt: "Illustrated workout dashboard with progress and exercise tracking.",
    tech: ["Java"],
    githubUrl: "https://github.com/mhuan22/FitFlex",
    demoUrl: null,
  },
];

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Check out some of my work</h2>
      </div>

      <div
        className="project-grid"
        aria-label="Scrollable project list"
        role="region"
        tabIndex={0}
      >
        {projects.map((project) => (
            <article
              className={`project-card${project.githubUrl ? " project-card-clickable" : ""}`}
              key={project.title}
            >
              <img
                className="project-thumbnail"
                src={project.thumbnailSrc}
                alt={project.thumbnailAlt}
              />

              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="tech-list" aria-label={`${project.title} technologies`}>
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.githubUrl ? (
                <a
                  className="project-card-cover-link"
                  href={project.githubUrl}
                  aria-label={`Open ${project.title} GitHub repository`}
                />
              ) : null}

              {/* <div className="project-links" aria-label={`${project.title} links`}>
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
              </div> */}
            </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
