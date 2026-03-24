export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container center">
          <p className="small-text">Let&apos;s connect</p>
          <h1>CONTACT</h1>
          <p className="subtext">
            We would love to hear from you. Book an appointment or reach out
            with any questions.
          </p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>ADDRESS</h3>
              <p>
                1430 Lake Baldwin Ln <br />
                Orlando, FL
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>PHONE</h3>
              <p>
                <a href="tel:+14079295675">+1 (407) 929-5675</a>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>EMAIL</h3>
              <p>
                <a href="mailto:beautystudioorlando@gmail.com">
                  beautystudioorlando@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🤍</div>
              <h3>CONNECT</h3>
              <div className="social-links">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps?q=1430%20Lake%20Baldwin%20Ln%20Orlando%20FL&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Orlando Beauty Studio Location"
        />
      </section>
    </>
  );
}
