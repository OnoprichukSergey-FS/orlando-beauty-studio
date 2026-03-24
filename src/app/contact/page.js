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

            <div className="contact-card connect-card">
              <div className="contact-icon">🤍</div>
              <h3>CONNECT</h3>

              <div className="social-links social-links-column">
                <a
                  href="https://www.instagram.com/orlando_beauty_studio?igsh=MXhqNHJ2djc1d3Mxbg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>Instagram</span>
                  <span>↗</span>
                </a>

                <a
                  href="https://www.tiktok.com/@orlando.beauty.studio?_r=1&_t=ZT-94y5eJ0vwS5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>TikTok</span>
                  <span>↗</span>
                </a>

                <a
                  href="https://www.google.com/maps?q=Orlando+Beauty+Studio+-+SPA+%26+Face+Treatments,+1430+Lake+Baldwin+Ln,+Orlando,+FL+32814&ftid=0x88e765e437cc91b3:0x364e5a9792365aba&entry=gps&shh=CAE&lucs=,94297699,94284508,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjExLjEuODgxMDA1NjQ2MBgAIIgnKkgsOTQyOTc2OTksOTQyODQ1MDgsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAlVT&skid=1d69eb73-2a79-4dfa-9494-e45351d41919&g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span>Google</span>
                  <span>↗</span>
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
