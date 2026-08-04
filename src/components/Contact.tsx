import type { FormEvent } from "react";

const contactEmail = "mingwei.huang1@gmail.com";

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Portfolio message from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, "", `${message}`].join(
      "\n",
    );

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Have any questions or want to collaborate? Send me a message and I'll get back to you as soon as possible</h2>
      </div>

      <div className="contact-panel">
        <p>
          I am currently looking for opportunities where I can contribute to
          thoughtful engineering teams, learn quickly, and help ship useful
          software.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />

          <button className="button button-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
