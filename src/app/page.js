import Link from "next/link";

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
            {/* MAIN VIDEO */}
            <div className="about-main-image">
              <video
                src="/videos/IMG_4521.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="about-main-video"
              />
            </div>

            {/* SMALL BOTTOM LEFT */}
            <div className="about-secondary-image">
              <img src="/about2.JPG" alt="Client experience" />
            </div>

            {/* SMALL TOP RIGHT IMAGE */}
            <div className="about-third-image">
              <img src="/about3.jpg" alt="Orlando Beauty Studio" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <Reviews />

      {/* ================= TREATMENT FINDER ================= */}
      <section
        className="treatment-finder"
        style={{
          backgroundColor: "#f8f5f0",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              color: "#8b7355",
            }}
          >
            PERSONALIZED BEAUTY EXPERIENCE
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "500",
              marginBottom: "20px",
              color: "#252525",
            }}
          >
            Not Sure What to Book?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#666",
              maxWidth: "550px",
              margin: "0 auto 35px",
            }}
          >
            Every face is unique. Answer two simple questions and let us guide
            you toward the treatment that best matches your beauty goals.
          </p>

          <Link href="/treatment-quiz" className="btn-primary">
            Find Your Treatment
          </Link>

          <p
            style={{
              fontSize: "13px",
              color: "#888",
              marginTop: "20px",
            }}
          >
            Takes less than 30 seconds · No registration required
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container center">
          <h2>Ready to Feel in Harmony with Your Skin?</h2>
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
