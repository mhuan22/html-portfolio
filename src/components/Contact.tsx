const contactLinks = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
    icon: "documentation-icon",
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
    icon: "github-icon",
  },
  {
    label: "Social",
    value: "Add LinkedIn or Bluesky",
    href: "#hero",
    icon: "social-icon",
  },
];

function Contact() {
  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Open to internships, co-op roles, and project collaborations.</h2>
      </div>

      <div className="contact-panel">
        <p>
          I am currently looking for opportunities where I can contribute to
          thoughtful engineering teams, learn quickly, and help ship useful
          software.
        </p>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href}>
              <svg aria-hidden="true">
                <use href={`/icons.svg#${link.icon}`} />
              </svg>
              <span>
                <strong>{link.label}</strong>
                <small>{link.value}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
