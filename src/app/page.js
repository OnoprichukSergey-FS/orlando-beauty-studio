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
      <section className="reviews">
        <div className="container">
          <div className="section-head center">
            <h2>Client Reviews</h2>
            <p className="subtext">Real client feedback from Google reviews.</p>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                “Absolutely amazing lymphatic massage for the body and face. The
                products were gentle on my skin, and the experience felt deeply
                relaxing and restorative.”
              </p>
              <span className="reviewer">— Fayza J.</span>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                “I had a signature facial massage and it was a wonderful
                experience. My face felt clean and smooth, and I really
                appreciated the thoughtful recommendations for my routine.”
              </p>
              <span className="reviewer">— Jorge P.</span>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                “Peaceful atmosphere, relaxing music, and amazing service. After
                my facial, my skin looked smooth and radiant, and I always enjoy
                coming back for facials and sugaring.”
              </p>
              <span className="reviewer">— Yuliia T.</span>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                “Julia is the best. From the moment I walked in, I felt
                comfortable. The whole experience was calming, welcoming, and
                exactly the kind of care you want during a treatment.”
              </p>
              <span className="reviewer">— Chiara C.</span>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                “My boyfriend booked me a facial for Valentine’s Day and it did
                not disappoint. It was incredibly relaxing, and I left with my
                skin feeling softer and cleaner than ever.”
              </p>
              <span className="reviewer">— Hannah M.</span>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                “Highly recommend Orlando Beauty Studio. The facial and
                Hollywood lifting massage were incredible, and the overall
                experience felt professional, warm, and truly special.”
              </p>
              <span className="reviewer">— Diesel 2012</span>
            </div>
          </div>

          <div className="center top-space">
            <a
              className="btn-outline"
              href="https://www.google.com/search?q=orlando+beauty+studio#lrd=0x88e765e437cc91b3:0x364e5a9792365aba,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on Google
            </a>
          </div>
        </div>
      </section>
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
