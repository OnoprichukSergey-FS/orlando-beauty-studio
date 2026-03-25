import Reviews from "../components/Reviews";
export default function Home() {
  return (
    <>
      {/* ================= HERO TEXT SECTION ================= */}
      <section className="hero-text-section">
        <div className="container hero-text-wrap">
          <div className="hero-left">
            <h1 className="hero-main-title">
              <span>Natural face lifting</span>
              <span>through advanced holistic massage</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ================= HERO VIDEO ================= */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/facial.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <div className="hero-actions">
            <a
              href="https://www.vagaro.com/juliabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <div className="container about-grid">
          <div className="about-text">
            <h2>About Orlando Beauty Studio</h2>

            <p className="about-intro">
              Orlando Beauty Studio is a holistic spa studio where beauty is
              approached from within.
            </p>

            <p>
              <strong>
                We are the official representatives of the patented Hollywood
                Lifting technique in the United States —
              </strong>{" "}
              a method of natural lifting that works beyond the surface through
              advanced manual techniques.
            </p>

            <p>
              Our treatments combine holistic practices, including elements of
              Ayurveda, with carefully selected skincare that supports the skin
              without aggressive impact.
            </p>

            <p>
              <strong>
                We work with muscles, fascia, lymphatic flow, and tension —
              </strong>{" "}
              the deeper layers that shape how the face looks and feels.
            </p>

            <div className="about-actions">
              <a href="/about" className="btn-outline">
                More
              </a>
            </div>
          </div>

          <div className="about-visual">
            {/* MAIN IMAGE */}
            <div className="about-main-image">
              <img src="/about1.JPG" alt="Facial treatment" />
            </div>

            {/* SMALL BOTTOM LEFT */}
            <div className="about-secondary-image">
              <img src="/about2.JPG" alt="Client experience" />
            </div>

            {/* NEW TOP RIGHT IMAGE */}
            <div className="about-third-image">
              <img src="/about3.jpg" alt="Orlando Beauty Studio" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED SERVICES =================
      <section className="services">
        <div className="container">
          <div className="section-head center">
            <h2>Featured Services</h2>
            <p className="subtext">
              A curated selection of treatments designed for visible results and
              deep relaxation.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <img src="/g1.jpg" alt="Sugaring service" />
              <h3>Sugaring</h3>
              <p>Gentle hair removal for smooth, clean skin.</p>
              <a href="/services">Learn More</a>
            </div>

            <div className="service-card">
              <img src="/g2.jpg" alt="Advanced skincare service" />
              <h3>Advanced Skincare</h3>
              <p>Customized treatments tailored to your skin&apos;s needs.</p>
              <a href="/services">Learn More</a>
            </div>

            <div className="service-card">
              <img src="/g3.jpg" alt="Holistic facial treatment" />
              <h3>Holistic Treatments</h3>
              <p>Professional care using safe, natural techniques.</p>
              <a href="/services">Learn More</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= REVIEWS ================= */}
      <Reviews />

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container center">
          <h2>Ready to Feel Confident in Your Skin?</h2>
          <p>
            Book online in seconds — choose a service and pick a time that works
            for you.
          </p>

          <div className="cta-buttons">
            <a
              href="https://www.vagaro.com/juliabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
            </a>

            <a href="/contact" className="btn-outline">
              Contact & Location
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
