"use client";

import { useState } from "react";

export default function BeautySchoolPage() {
  const [activeTab, setActiveTab] = useState("hollywood");

  return (
    <section className="beauty-school-page">
      <div className="container beauty-school-container">
        <section className="beauty-school-top">
          <p className="beauty-school-kicker">Orlando Beauty Studio</p>
          <h1>Beauty School</h1>
          <p className="beauty-school-page-intro">
            Professional beauty education designed for students and beauty
            professionals who want hands-on training in advanced facial massage
            and sugaring techniques.
          </p>

          <div className="beauty-school-actions beauty-school-actions-center">
            <a href="/contact" className="btn-primary">
              Contact About Training
            </a>
          </div>
        </section>

        <section id="courses" className="beauty-school-tabs-section">
          <div className="beauty-school-tabs">
            <button
              type="button"
              className={
                activeTab === "hollywood"
                  ? "beauty-school-tab active"
                  : "beauty-school-tab"
              }
              onClick={() => setActiveTab("hollywood")}
            >
              Hollywood Lifting
            </button>

            <button
              type="button"
              className={
                activeTab === "sculpting"
                  ? "beauty-school-tab active"
                  : "beauty-school-tab"
              }
              onClick={() => setActiveTab("sculpting")}
            >
              Signature Sculpting
            </button>

            <button
              type="button"
              className={
                activeTab === "sugaring"
                  ? "beauty-school-tab active"
                  : "beauty-school-tab"
              }
              onClick={() => setActiveTab("sugaring")}
            >
              Sugaring
            </button>
          </div>

          {activeTab === "hollywood" && (
            <div className="beauty-school-tab-panel">
              <section className="beauty-school-course-section">
                <div className="beauty-school-hero-grid">
                  <div className="beauty-school-hero-text">
                    <p className="beauty-school-kicker">Hollywood Lifting</p>
                    <h2 className="beauty-school-tab-title">
                      Hollywood Lifting Facial Massage Training
                    </h2>
                    <p className="beauty-school-lead">
                      Advanced hands-on training for beauty professionals who
                      want to master a non-surgical facial lifting technique
                      focused on sculpting, circulation, muscle release, and
                      visible rejuvenation.
                    </p>
                  </div>

                  <div className="beauty-school-hero-visual">
                    <img
                      src="/IMG_3310.JPG"
                      alt="Hollywood Lifting massage training"
                    />
                  </div>
                </div>

                <section className="beauty-school-video-section">
                  <div className="beauty-school-video-card">
                    <div className="beauty-school-video-text">
                      <p className="beauty-school-small-heading">
                        Training in Motion
                      </p>
                      <h3>Watch the Hollywood Lifting Technique</h3>
                      <p>
                        A closer look at the movement, atmosphere, and
                        professional approach behind the Hollywood Lifting
                        training experience.
                      </p>
                    </div>

                    <div className="beauty-school-video-wrap">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="beauty-school-video"
                      >
                        <source src="/videos/IMG_6164.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </section>

                <section className="beauty-school-intro">
                  <div className="beauty-school-intro-card">
                    <p className="beauty-school-small-heading">
                      Featured Training Focus
                    </p>
                    <h3>About Hollywood Lifting</h3>
                    <p>
                      Hollywood Lifting is the main signature training currently
                      taught by Julia and remains a central educational focus of
                      the school.
                    </p>
                    <p>
                      In 2025, Julia conducted training in Orlando, sharing this
                      method with students who wanted to deepen their knowledge
                      of natural facial lifting, holistic skin work, and
                      advanced manual techniques.
                    </p>
                  </div>
                </section>

                <section className="beauty-school-section">
                  <div className="beauty-school-section-grid">
                    <div className="beauty-school-section-text">
                      <p className="beauty-school-small-heading">
                        About the Method
                      </p>
                      <h3>Hollywood Lift Facial Massage (HLFM)</h3>
                      <p>
                        Hollywood Lifting is a non-surgical facial lifting
                        treatment based on stimulation of specific facial
                        muscles to help release tension, improve circulation,
                        and support a smoother, more lifted appearance.
                      </p>
                      <p>
                        The technique is known worldwide and is designed as a
                        non-invasive approach for concerns involving the face,
                        neck, and décolleté. It works not only on the surface,
                        but also on deeper structural tension patterns that
                        influence the appearance of the skin.
                      </p>
                    </div>

                    <div className="beauty-school-section-image">
                      <img
                        src="/IMG_3311.JPG"
                        alt="Hollywood Lifting facial massage presentation"
                      />
                    </div>
                  </div>
                </section>

                <section className="beauty-school-section alt">
                  <div className="beauty-school-section-grid reverse">
                    <div className="beauty-school-section-image circle-image">
                      <img
                        src="/IMG_3312.JPG"
                        alt="Hollywood Lifting technique visual"
                      />
                    </div>

                    <div className="beauty-school-section-text">
                      <p className="beauty-school-small-heading">
                        Why It Stands Out
                      </p>
                      <h3>The Massage Technique Known Worldwide</h3>
                      <p>
                        This method offers a non-invasive and non-surgical
                        approach to visible signs of aging, including
                        gravitational ptosis, expression lines, muscle
                        imbalance, and facial tension patterns.
                      </p>
                      <p>
                        The massage consists of five stages designed to relax
                        muscles, reduce spasms that contribute to folds and
                        tightness, and stimulate facial structures to support a
                        firmer, more lifted appearance.
                      </p>

                      <div className="beauty-school-list-block">
                        <h4>Training Themes May Include:</h4>
                        <ul>
                          <li>Facial muscle relaxation and stimulation</li>
                          <li>Natural lifting and sculpting principles</li>
                          <li>Lymphatic drainage support</li>
                          <li>
                            Detox and metabolic waste elimination concepts
                          </li>
                          <li>Work on face, neck, and décolleté</li>
                          <li>Holistic and manual rejuvenation methods</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="beauty-school-results">
                  <div className="beauty-school-results-grid">
                    <div className="beauty-school-results-text">
                      <p className="beauty-school-small-heading">
                        Visible Outcomes
                      </p>
                      <h3>Results After the First Session</h3>

                      <ul className="beauty-school-results-list">
                        <li>
                          Improvement in skin elasticity as the facial muscles
                          work in better balance
                        </li>
                        <li>
                          Reduction of wrinkles, fine lines, and visible fatigue
                        </li>
                        <li>
                          Lifting of the facial skin, including less droopiness
                          and sagging
                        </li>
                        <li>
                          Improved tone, circulation, and sculpted appearance
                        </li>
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

                <section className="beauty-school-cta">
                  <div className="beauty-school-cta-card center">
                    <p className="beauty-school-small-heading">
                      Professional Education
                    </p>
                    <h3>Interested in Hollywood Lifting Training?</h3>
                    <p>
                      Reach out to learn more about Hollywood Lifting, private
                      education, and upcoming training opportunities.
                    </p>

                    <div className="beauty-school-actions center-actions">
                      <a href="/contact" className="btn-primary">
                        Contact About Training
                      </a>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          )}

          {activeTab === "sculpting" && (
            <div className="beauty-school-tab-panel">
              <section className="beauty-school-course-section">
                <section className="beauty-school-category-intro beauty-school-category-intro-left">
                  <p className="beauty-school-small-heading">
                    Signature Sculpting Method
                  </p>
                  <h2>Signature Sculpting Method by J.Ratnikova</h2>
                  <p>
                    A separate facial massage training focused on structure,
                    deep tissue work, lymphatic flow, and holistic sculpting
                    principles rooted in anatomy and long-term visible results.
                  </p>
                </section>

                <section className="beauty-school-method-section">
                  <div className="beauty-school-method-grid">
                    <div className="beauty-school-method-text">
                      <p className="beauty-school-small-heading">
                        About the Method
                      </p>
                      <h3>How the Method Works</h3>

                      <p>
                        The Signature Sculpting Method was developed by Julia
                        Ratnikova through years of hands-on practice, advanced
                        training, and a refined technique she applies in her
                        work with clients and teaches to her students.
                      </p>

                      <p>
                        This method is built on a holistic understanding of the
                        body, where the face is not treated in isolation, but as
                        part of a connected system.
                      </p>

                      <p>The training focuses on deep work with:</p>

                      <ul className="beauty-school-course-list">
                        <li>cranial structure and mobility</li>
                        <li>fascia and soft tissue layers</li>
                        <li>muscle balance and tension patterns</li>
                        <li>lymphatic flow and fluid dynamics</li>
                      </ul>

                      <p>
                        The methodology is rooted in the idea that aging is not
                        only a skin concern. It is also influenced by
                        accumulated tension, restricted circulation, postural
                        imbalance, and changes in the deeper structures of the
                        body.
                      </p>
                    </div>

                    <div className="beauty-school-method-media-stack">
                      <div className="beauty-school-method-image-card">
                        <img
                          src="/IMG_6792.JPG"
                          alt="Signature Sculpting Method certificate"
                        />
                      </div>

                      <div className="beauty-school-method-image-card">
                        <img
                          src="/IMG_6789.JPG"
                          alt="Hands-on Signature Sculpting Method training"
                        />
                      </div>

                      <div className="beauty-school-method-video-card">
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          className="beauty-school-video"
                        >
                          <source src="/videos/IMG_6794.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="beauty-school-method-bottom">
                    <div className="beauty-school-method-bottom-card">
                      <p>
                        By addressing these underlying causes, the method
                        supports:
                      </p>

                      <ul className="beauty-school-course-list">
                        <li>natural lifting without aggressive techniques</li>
                        <li>restoration of facial symmetry and structure</li>
                        <li>
                          release of chronic tension in the face, neck, and
                          upper body
                        </li>
                        <li>improved circulation and cellular function</li>
                      </ul>

                      <p>
                        Beyond massage, lymphatic drainage, and deep tissue
                        work, the method teaches students how to work with the
                        body as a whole, understanding how different systems
                        interact and how to support long-term visible results
                        through precise, intentional touch.
                      </p>

                      <p className="beauty-school-method-highlight">
                        This is a structured, experience-based approach that
                        combines technique, anatomy, and awareness to create
                        results that are both immediate and progressive over
                        time.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="beauty-school-cta">
                  <div className="beauty-school-cta-card center">
                    <p className="beauty-school-small-heading">
                      Professional Education
                    </p>
                    <h3>Interested in Signature Sculpting Training?</h3>
                    <p>
                      Reach out to learn more about the Signature Sculpting
                      Method by J.Ratnikova, private education, and upcoming
                      training opportunities.
                    </p>

                    <div className="beauty-school-actions center-actions">
                      <a href="/contact" className="btn-primary">
                        Contact About Training
                      </a>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          )}

          {activeTab === "sugaring" && (
            <div className="beauty-school-tab-panel">
              <section className="beauty-school-course-section">
                <section className="beauty-school-hero">
                  <div className="beauty-school-hero-grid">
                    <div className="beauty-school-hero-text">
                      <p className="beauty-school-kicker">
                        Orlando Beauty Studio
                      </p>
                      <h2 className="beauty-school-tab-title">
                        Sugaring Course
                      </h2>
                      <h3>One-Day Professional Sugaring Course</h3>
                      <p className="beauty-school-lead">
                        Master one of the most in-demand skills in modern
                        beauty. This intensive one-day sugaring course is
                        designed for beginners and beauty professionals who want
                        to deliver clean, precise, and high-quality hair removal
                        results.
                      </p>

                      <div className="beauty-school-info-pills">
                        <span>1 Day Training</span>
                        <span>6 Hours</span>
                        <span>$500</span>
                      </div>
                    </div>

                    <div className="beauty-school-hero-visual">
                      <img
                        src="/sugaring-1.jpg"
                        alt="Sugaring course at Orlando Beauty Studio"
                      />
                    </div>
                  </div>
                </section>

                <section className="beauty-school-feature">
                  <div className="beauty-school-feature-inner beauty-school-feature-wide">
                    <img src="/sugaring-2.jpg" alt="Sugaring course training" />
                  </div>
                </section>

                <section className="beauty-school-video-section">
                  <div className="beauty-school-video-card">
                    <div className="beauty-school-video-text">
                      <p className="beauty-school-small-heading">
                        Training in Motion
                      </p>
                      <h3>Watch the Sugaring Technique</h3>
                      <p>
                        A closer look at the training atmosphere and hands-on
                        technique used during the sugaring course.
                      </p>
                    </div>

                    <div className="beauty-school-video-wrap">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="beauty-school-video"
                      >
                        <source src="/videos/sugaring.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </section>

                <section className="beauty-school-program-card-wrap">
                  <div className="beauty-school-program-card">
                    <p className="beauty-school-small-heading">
                      Course Overview
                    </p>
                    <h3>What You Will Learn</h3>
                    <p>
                      During the training, students focus on practical
                      technique, product selection, and real-world professional
                      application.
                    </p>

                    <ul className="beauty-school-course-list">
                      <li>
                        Develop confident, controlled hand technique (“set your
                        hand”)
                      </li>
                      <li>
                        Learn how to select the right sugar paste for different
                        hair and skin types
                      </li>
                      <li>
                        Understand professional application and removal methods
                      </li>
                      <li>
                        Discover industry-level tips that improve results and
                        client retention
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="beauty-school-orlando-note">
                  <div className="beauty-school-note-card">
                    <p className="beauty-school-small-heading">
                      One-Day Professional Sugaring Course
                    </p>
                    <h3>Real Practice, Not Just Theory</h3>
                    <p>
                      This course focuses on practical training, not just
                      theory, so students leave ready to begin working with
                      clients immediately.
                    </p>
                    <p>
                      Sugaring is an essential skill for estheticians and beauty
                      specialists who want to expand their services and build a
                      loyal client base.
                    </p>
                  </div>
                </section>

                <section className="beauty-school-cta">
                  <div className="beauty-school-cta-card center">
                    <p className="beauty-school-small-heading">
                      Professional Education
                    </p>
                    <h3>Interested in Sugaring Training?</h3>
                    <p>
                      Train with us and elevate your service to a professional
                      standard your clients will come back for.
                    </p>

                    <div className="beauty-school-actions center-actions">
                      <a href="/contact" className="btn-primary">
                        Contact About Training
                      </a>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
