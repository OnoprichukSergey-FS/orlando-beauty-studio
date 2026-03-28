export default function BeautySchoolPage() {
  return (
    <section className="beauty-school-page">
      <div className="container beauty-school-container">
        {/* HERO */}
        <section className="beauty-school-hero">
          <div className="beauty-school-hero-grid">
            <div className="beauty-school-hero-text">
              <p className="beauty-school-kicker">Orlando Beauty Studio</p>
              <h1>Beauty School</h1>
              <h2>Hollywood Lifting Facial Massage Training</h2>
              <p className="beauty-school-lead">
                Advanced holistic education for beauty professionals who want to
                master a non-surgical facial lifting technique focused on facial
                muscles, circulation, sculpting, and visible rejuvenation.
              </p>

              <div className="beauty-school-actions">
                <a href="/contact" className="btn-primary">
                  Inquire About Training
                </a>
                <a href="#program" className="btn-outline">
                  Explore Program
                </a>
              </div>
            </div>

            <div className="beauty-school-hero-visual">
              <img src="/IMG_3310.JPG" alt="Hollywood Lifting Massage Course" />
            </div>
          </div>
        </section>

        {/* FEATURED TRAINING IMAGE */}
        <section className="beauty-school-feature">
          <img
            src="/IMG_3310.JPG"
            alt="Hollywood Lifting Facial Massage training presentation"
          />
        </section>

        {/* VIDEO */}
        <section className="beauty-school-video-section">
          <div className="beauty-school-video-card">
            <div className="beauty-school-video-text">
              <p className="beauty-school-small-heading">Training in Motion</p>
              <h3>Watch the Technique</h3>
              <p>
                A closer look at the atmosphere, movement, and professional
                approach behind the training experience at Orlando Beauty
                Studio.
              </p>
            </div>

            <div className="beauty-school-video-wrap">
              <video
                controls
                playsInline
                preload="metadata"
                className="beauty-school-video"
              >
                <source src="/videos/IMG_6168.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="beauty-school-intro">
          <div className="beauty-school-intro-card">
            <p className="beauty-school-small-heading">
              Featured Training Focus
            </p>
            <h3>Hollywood Lifting</h3>
            <p>
              The main technique currently taught by Yulia is Hollywood Lifting.
              This training is the signature educational direction of the school
              right now and deserves special focus on the website.
            </p>
            <p>
              In 2025, Yulia conducted training in Orlando, sharing this method
              with students who wanted to deepen their knowledge of natural
              facial lifting, holistic skin work, and advanced manual
              techniques.
            </p>
          </div>
        </section>

        {/* ABOUT THE METHOD */}
        <section id="program" className="beauty-school-section">
          <div className="beauty-school-section-grid">
            <div className="beauty-school-section-text">
              <p className="beauty-school-small-heading">About the Method</p>
              <h3>Hollywood Lift Facial Massage (HLFM)</h3>
              <p>
                Hollywood Lifting is a non-surgical face-lifting beauty
                treatment based on stimulation of particular facial muscles to
                relax and release tension so the skin instantly looks smoother,
                circulation improves, and the collagen layer in the skin is
                supported.
              </p>
              <p>
                The technique is known worldwide and is designed as a
                non-invasive approach to concerns involving the face, neck, and
                décolleté. It works not only on the surface, but also on deeper
                structural tension patterns that influence the appearance of the
                skin.
              </p>
            </div>

            <div className="beauty-school-section-image">
              <img
                src="/IMG_3311.JPG"
                alt="Hollywood Lifting Facial Massage presentation"
              />
            </div>
          </div>
        </section>

        {/* WHY IT STANDS OUT */}
        <section className="beauty-school-section alt">
          <div className="beauty-school-section-grid reverse">
            <div className="beauty-school-section-image circle-image">
              <img
                src="/IMG_3312.JPG"
                alt="Massage technique known worldwide"
              />
            </div>

            <div className="beauty-school-section-text">
              <p className="beauty-school-small-heading">Why It Stands Out</p>
              <h3>The Massage Technique Known Worldwide</h3>
              <p>
                This method is a unique invention for non-invasive and
                non-surgical support for skin aging concerns. The procedure
                targets gravitational ptosis, expression lines, muscle
                imbalance, and visible tension patterns.
              </p>
              <p>
                The massage consists of five stages aimed at relaxing muscles,
                relieving spasms that contribute to folds and tightness, and
                stimulating facial structures to support a firmer, more lifted
                appearance.
              </p>

              <div className="beauty-school-list-block">
                <h4>Training Themes May Include:</h4>
                <ul>
                  <li>Facial muscle relaxation and stimulation</li>
                  <li>Natural lifting and sculpting principles</li>
                  <li>Lymphatic drainage support</li>
                  <li>Detox and metabolic waste elimination concepts</li>
                  <li>Work on face, neck, and décolleté</li>
                  <li>Holistic and manual rejuvenation methods</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="beauty-school-results">
          <div className="beauty-school-results-grid">
            <div className="beauty-school-results-text">
              <p className="beauty-school-small-heading">Visible Outcomes</p>
              <h3>Results After the First Session</h3>

              <ul className="beauty-school-results-list">
                <li>
                  Improvement in skin elasticity as the facial muscles work in
                  better balance
                </li>
                <li>Reduction of wrinkles, fine lines, and visible fatigue</li>
                <li>
                  Lifting of the facial skin, including less droopiness and
                  sagging
                </li>
                <li>Improved tone, circulation, and sculpted appearance</li>
              </ul>
            </div>

            <div className="beauty-school-results-images">
              <img
                src="/IMG_3307.PNG"
                alt="Before and after treatment result"
              />
              <img
                src="/IMG_3313.JPG"
                alt="Hollywood lifting visible results"
              />
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="beauty-school-philosophy">
          <p className="beauty-school-small-heading center">
            Training Philosophy
          </p>
          <h3 className="center">A Holistic Beauty Education</h3>

          <p className="beauty-school-philosophy-text">
            Hollywood Lifting combines some of the most effective inspirations
            from around the world, blending modern understanding with holistic
            traditions. Lymphatic drainage, detox support, metabolic waste
            elimination concepts, Ayurvedic influence, and manual sculpting all
            help shape the philosophy behind this approach.
          </p>

          <p className="beauty-school-philosophy-text">
            The method is focused on reconstruction, release of tension, and
            helping return the face to a more youthful, healthy, and balanced
            appearance. It is also presented as a holistic alternative for
            clients seeking natural facial rejuvenation.
          </p>

          <div className="beauty-school-philosophy-gallery">
            <div className="beauty-school-gallery-item">
              <img src="/IMG_3314.JPG" alt="Hands-on manual technique" />
            </div>
            <div className="beauty-school-gallery-item">
              <img src="/IMG_3310.JPG" alt="Training demonstration" />
            </div>
            <div className="beauty-school-gallery-item">
              <img src="/IMG_3311.JPG" alt="Instructor and training method" />
            </div>
          </div>
        </section>

        {/* ORLANDO TRAINING NOTE */}
        <section className="beauty-school-orlando-note">
          <div className="beauty-school-note-card">
            <p className="beauty-school-small-heading">Orlando Training</p>
            <h3>Education Conducted in Orlando in 2025</h3>
            <p>
              Yulia conducted Hollywood Lifting training in Orlando in 2025.
              This page serves as a foundation for presenting both the method
              itself and future educational opportunities through Orlando Beauty
              Studio.
            </p>
            <p>
              As the school grows, this section can later be expanded with
              program dates, certification details, student requirements, and
              private training options.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="beauty-school-cta">
          <div className="beauty-school-cta-card center">
            <p className="beauty-school-small-heading">
              Professional Education
            </p>
            <h3>Interested in Training?</h3>
            <p>
              Reach out to learn more about upcoming courses, private education,
              and Hollywood Lifting training opportunities.
            </p>

            <div className="beauty-school-actions center-actions">
              <a href="/contact" className="btn-primary">
                Contact About Training
              </a>
              <a
                href="https://www.vagaro.com/juliabeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View Studio
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
