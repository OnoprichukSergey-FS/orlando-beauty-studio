"use client";

import { useState } from "react";

export default function BeautySchoolPage() {
  const [activeTab, setActiveTab] = useState("faceMassage");

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
              Inquire About Training
            </a>
            <a href="#courses" className="btn-outline">
              Explore Courses
            </a>
          </div>
        </section>

        <section id="courses" className="beauty-school-tabs-section">
          <div className="beauty-school-tabs">
            <button
              type="button"
              className={
                activeTab === "faceMassage"
                  ? "beauty-school-tab active"
                  : "beauty-school-tab"
              }
              onClick={() => setActiveTab("faceMassage")}
            >
              Face Massage
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

          {activeTab === "faceMassage" && (
            <div className="beauty-school-tab-panel">
              <section className="beauty-school-hero">
                <div className="beauty-school-hero-grid">
                  <div className="beauty-school-hero-text">
                    <p className="beauty-school-kicker">
                      Orlando Beauty Studio
                    </p>
                    <h2 className="beauty-school-tab-title">
                      Face Massage Courses
                    </h2>
                    <h3>Hollywood Lifting Facial Massage Training</h3>
                    <p className="beauty-school-lead">
                      Advanced holistic education for beauty professionals who
                      want to master a non-surgical facial lifting technique
                      focused on facial muscles, circulation, sculpting, and
                      visible rejuvenation.
                    </p>

                    <div className="beauty-school-actions">
                      <a href="/contact" className="btn-primary">
                        Inquire About Training
                      </a>
                      <a href="#face-program" className="btn-outline">
                        Explore Program
                      </a>
                    </div>
                  </div>

                  <div className="beauty-school-hero-visual">
                    <img
                      src="/IMG_3310.JPG"
                      alt="Hollywood Lifting Massage Course"
                    />
                  </div>
                </div>
              </section>

              <section className="beauty-school-courses-overview">
                <div className="beauty-school-courses-grid">
                  <article className="beauty-school-course-mini-card">
                    <img src="/IMG_3311.JPG" alt="Hollywood Lifting training" />
                    <div className="beauty-school-course-mini-content">
                      <p className="beauty-school-small-heading">
                        Face Massage Course
                      </p>
                      <h3>Hollywood Lifting</h3>
                      <p>
                        A professional facial massage training focused on
                        lifting, sculpting, muscle release, and natural facial
                        rejuvenation.
                      </p>
                    </div>
                  </article>

                  <article className="beauty-school-course-mini-card">
                    <img
                      src="/IMG_5131.JPG"
                      alt="Signature Sculpting Method by J. Ratnikova"
                    />
                    <div className="beauty-school-course-mini-content">
                      <p className="beauty-school-small-heading">
                        Face Massage Course
                      </p>
                      <h3>Signature Sculpting Method by J. Ratnikova</h3>
                      <p>
                        A specialized sculpting-focused facial massage training
                        centered on contour work, refined manual technique, and
                        tension release.
                      </p>
                    </div>
                  </article>
                </div>
              </section>

              <section className="beauty-school-feature">
                <div className="beauty-school-feature-inner">
                  <img
                    src="/IMG_5128.JPG"
                    alt="Students holding certificates at Orlando Beauty Studio training"
                  />
                </div>
              </section>

              <section className="beauty-school-video-section">
                <div className="beauty-school-video-card">
                  <div className="beauty-school-video-text">
                    <p className="beauty-school-small-heading">
                      Training in Motion
                    </p>
                    <h3>Watch the Technique</h3>
                    <p>
                      A closer look at the atmosphere, movement, and
                      professional approach behind the training experience at
                      Orlando Beauty Studio.
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
                  <h3>Hollywood Lifting</h3>
                  <p>
                    The main technique currently taught by Yulia is Hollywood
                    Lifting. This training is the signature educational
                    direction of the school right now and deserves special focus
                    on the website.
                  </p>
                  <p>
                    In 2025, Yulia conducted training in Orlando, sharing this
                    method with students who wanted to deepen their knowledge of
                    natural facial lifting, holistic skin work, and advanced
                    manual techniques.
                  </p>
                </div>
              </section>

              <section id="face-program" className="beauty-school-section">
                <div className="beauty-school-section-grid">
                  <div className="beauty-school-section-text">
                    <p className="beauty-school-small-heading">
                      About the Method
                    </p>
                    <h3>Hollywood Lift Facial Massage (HLFM)</h3>
                    <p>
                      Hollywood Lifting is a non-surgical face-lifting beauty
                      treatment based on stimulation of particular facial
                      muscles to relax and release tension so the skin instantly
                      looks smoother, circulation improves, and the collagen
                      layer in the skin is supported.
                    </p>
                    <p>
                      The technique is known worldwide and is designed as a
                      non-invasive approach to concerns involving the face,
                      neck, and décolleté. It works not only on the surface, but
                      also on deeper structural tension patterns that influence
                      the appearance of the skin.
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

              <section className="beauty-school-section alt">
                <div className="beauty-school-section-grid reverse">
                  <div className="beauty-school-section-image circle-image">
                    <img
                      src="/IMG_3312.JPG"
                      alt="Massage technique known worldwide"
                    />
                  </div>

                  <div className="beauty-school-section-text">
                    <p className="beauty-school-small-heading">
                      Why It Stands Out
                    </p>
                    <h3>The Massage Technique Known Worldwide</h3>
                    <p>
                      This method is a unique invention for non-invasive and
                      non-surgical support for skin aging concerns. The
                      procedure targets gravitational ptosis, expression lines,
                      muscle imbalance, and visible tension patterns.
                    </p>
                    <p>
                      The massage consists of five stages aimed at relaxing
                      muscles, relieving spasms that contribute to folds and
                      tightness, and stimulating facial structures to support a
                      firmer, more lifted appearance.
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

              <section className="beauty-school-method-section">
                <div className="beauty-school-method-grid">
                  <div className="beauty-school-method-text">
                    <p className="beauty-school-small-heading">
                      About the Method
                    </p>
                    <h3>The Signature Holistic Sculpting Method</h3>

                    <p>
                      The Signature Holistic Sculpting Method was developed by
                      Yulia Ratnikova based on years of hands-on practice,
                      advanced training, and a refined technique she applies in
                      her work with clients and teaches to her students.
                    </p>

                    <p>
                      This method is built on a holistic understanding of the
                      body — where the face is not treated in isolation, but as
                      part of a connected system.
                    </p>

                    <p>It focuses on deep work with:</p>

                    <ul className="beauty-school-course-list">
                      <li>cranial structure and mobility</li>
                      <li>fascia and soft tissue layers</li>
                      <li>muscle balance and tension patterns</li>
                      <li>lymphatic flow and fluid dynamics</li>
                    </ul>

                    <p>
                      The methodology is rooted in the idea that aging is not
                      only a skin concern. It is a result of accumulated
                      tension, restricted circulation, postural imbalances, and
                      changes in the deeper structures of the body.
                    </p>
                  </div>

                  <div className="beauty-school-method-media-stack">
                    <div className="beauty-school-method-image-card">
                      <img
                        src="/IMG_6792.JPG"
                        alt="Signature Holistic Sculpting Method certificate"
                      />
                    </div>

                    <div className="beauty-school-method-image-card">
                      <img
                        src="/IMG_6789.JPG"
                        alt="Hands-on Signature Holistic Sculpting Method training"
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
                      By addressing these underlying causes, the method allows
                      for:
                    </p>

                    <ul className="beauty-school-course-list">
                      <li>natural lifting without aggressive techniques</li>
                      <li>restoration of facial symmetry and structure</li>
                      <li>
                        release of chronic tension in the face, neck, and upper
                        body
                      </li>
                      <li>improved circulation and cellular function</li>
                    </ul>

                    <p>
                      Beyond massage, lymphatic drainage, and deep tissue work,
                      the method teaches how to work with the body as a whole —
                      understanding how different systems interact and how to
                      support long-term, visible results through precise,
                      intentional touch.
                    </p>

                    <p className="beauty-school-method-highlight">
                      This is a structured, experience-based approach that
                      combines technique, anatomy, and awareness — creating
                      results that are both immediate and progressive over time.
                    </p>
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

              <section className="beauty-school-philosophy">
                <p className="beauty-school-small-heading center">
                  Training Philosophy
                </p>
                <h3 className="center">A Holistic Beauty Education</h3>

                <p className="beauty-school-philosophy-text">
                  Hollywood Lifting combines some of the most effective
                  inspirations from around the world, blending modern
                  understanding with holistic traditions. Lymphatic drainage,
                  detox support, metabolic waste elimination concepts, Ayurvedic
                  influence, and manual sculpting all help shape the philosophy
                  behind this approach.
                </p>

                <p className="beauty-school-philosophy-text">
                  The method is focused on reconstruction, release of tension,
                  and helping return the face to a more youthful, healthy, and
                  balanced appearance. It is also presented as a holistic
                  alternative for clients seeking natural facial rejuvenation.
                </p>

                <div className="beauty-school-philosophy-gallery">
                  <div className="beauty-school-gallery-item">
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

                  <div className="beauty-school-gallery-item">
                    <img
                      src="/IMG_5131.JPG"
                      alt="Training certification students"
                    />
                  </div>
                </div>
              </section>

              <section className="beauty-school-orlando-note">
                <div className="beauty-school-note-card">
                  <p className="beauty-school-small-heading">
                    Orlando Training
                  </p>
                  <h3>Education Conducted in Orlando in 2025</h3>
                  <p>
                    Yulia conducted Hollywood Lifting training in Orlando in
                    2025. This page serves as a foundation for presenting both
                    the method itself and future educational opportunities
                    through Orlando Beauty Studio.
                  </p>
                  <p>
                    As the school grows, this section can later be expanded with
                    program dates, certification details, student requirements,
                    and private training options.
                  </p>
                </div>
              </section>

              <section className="beauty-school-cta">
                <div className="beauty-school-cta-card center">
                  <p className="beauty-school-small-heading">
                    Professional Education
                  </p>
                  <h3>Interested in Training?</h3>
                  <p>
                    Reach out to learn more about upcoming courses, private
                    education, and Hollywood Lifting training opportunities.
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
          )}

          {activeTab === "sugaring" && (
            <div className="beauty-school-tab-panel">
              <section className="beauty-school-hero">
                <div className="beauty-school-hero-grid">
                  <div className="beauty-school-hero-text">
                    <p className="beauty-school-kicker">
                      Orlando Beauty Studio
                    </p>
                    <h2 className="beauty-school-tab-title">Sugaring Course</h2>
                    <h3>One-Day Professional Sugaring Course</h3>
                    <p className="beauty-school-lead">
                      Master one of the most in-demand skills in modern beauty.
                      Our intensive one-day sugaring course is designed for
                      beginners and beauty professionals who want to deliver
                      clean, precise, and high-quality hair removal results.
                    </p>

                    <div className="beauty-school-info-pills">
                      <span>1 Day Training</span>
                      <span>6 Hours</span>
                      <span>$500</span>
                    </div>

                    <div className="beauty-school-actions">
                      <a href="/contact" className="btn-primary">
                        Inquire About Training
                      </a>
                      <a href="#sugaring-program" className="btn-outline">
                        Explore Program
                      </a>
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

              <section
                id="sugaring-program"
                className="beauty-school-program-card-wrap"
              >
                <div className="beauty-school-program-card">
                  <p className="beauty-school-small-heading">Course Overview</p>
                  <h3>What You Will Learn</h3>
                  <p>
                    During the training, students focus on practical technique,
                    product selection, and real-world professional application.
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
                    This course focuses on real practice, not just theory—so you
                    leave ready to work with clients immediately.
                  </p>
                  <p>
                    Sugaring is a must-have skill for estheticians and beauty
                    specialists looking to expand their services and build a
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
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
