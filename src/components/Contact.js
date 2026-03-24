export default function Contact() {
  return (
    <section className="section">
      <div className="section-inner">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Send a message or book your appointment
        </p>

        <form className="contact-form">
          <input placeholder="Your name" />
          <input placeholder="Your email" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
