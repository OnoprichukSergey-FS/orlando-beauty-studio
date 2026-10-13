import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>About Orlando Beauty Studio</p>
          <h1 className={styles.heroTitle}>Meet Julia Ratnikova</h1>
          <p className={styles.heroText}>
            Julia Ratnikova is a licensed esthetician and the founder of Orlando
            Beauty Studio, specializing in advanced facial massage and natural
            lifting techniques.
          </p>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={`${styles.container} ${styles.founderGrid}`}>
          <div className={styles.founderText}>
            <p className={styles.eyebrow}>Founder & Holistic Expert</p>
            <h2>Beauty approached through deeper understanding</h2>

            <p>
              Julia founded Orlando Beauty Studio in 2021 with a vision to
              create a space where beauty is approached through deeper
              understanding of the face and body.
            </p>

            <p>
              She specializes in the patented{" "}
              <strong>Hollywood Lifting technique</strong> — a structured method
              of facial rejuvenation focused on achieving visible results
              through manual work.
            </p>

            <p>
              Julia has also completed advanced training in Faceplasty with Dr.
              Ales Ulischchenko, gaining deeper knowledge of facial
              biomechanics, posture, and the connection between facial structure
              and the body.
            </p>

            <p>
              Her approach reflects the philosophy of the studio — working
              beyond the skin, with muscles, fascia, and lymphatic flow, to
              support natural lifting, release tension, and restore balance.
            </p>

            <p>
              Each treatment is performed with precision and care, combining
              technical expertise with a holistic and personalized approach.
            </p>
          </div>

          <div className={styles.founderImageWrap}>
            <img
              src="/julia-main.jpg"
              alt="Julia Ratnikova, founder of Orlando Beauty Studio"
              className={styles.founderImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.pressSection}>
        <div className={styles.container}>
          <div className={styles.pressIntro}>
            <p className={styles.eyebrow}>Featured In</p>
            <h2>Interviews & Press</h2>
            <p>
              Learn more about Julia’s story, philosophy, and the vision behind
              Orlando Beauty Studio.
            </p>
          </div>

          <div className={styles.pressGrid}>
            <a
              href="https://canvasrebel.com/meet-julia-ratnikova/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pressCard}
            >
              <span className={styles.pressName}>CanvasRebel</span>
              <span className={styles.pressAction}>Read Interview</span>
            </a>

            <a
              href="https://orlandovoyager.com/interview/community-highlights-meet-julia-ratnikova-of-orlando-beauty-studio/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pressCard}
            >
              <span className={styles.pressName}>Orlando Voyager</span>
              <span className={styles.pressAction}>Read Interview</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.secondarySection}>
        <div className={`${styles.container} ${styles.secondaryGrid}`}>
          <div className={styles.secondaryText}>
            <p className={styles.eyebrow}>Creative Direction & Brand</p>
            <h2>Yulia Tereshchuk</h2>

            <p>
              Yulia Tereshchuk is a brand strategist and creative director
              behind Orlando Beauty Studio, leading its development,
              positioning, and client experience.
            </p>

            <p>
              Since 2022, she has been shaping the studio’s vision,
              communication, and overall direction.
            </p>

            <p>
              With a background in the spa industry and content creation, her
              work focuses on how the brand is seen, felt, and experienced —
              from strategy and ideas to wellness events and client experience.
            </p>
          </div>

          <div className={styles.secondaryImageWrap}>
            <img
              src="/yulia-about.jpg"
              alt="Yulia Tereshchuk, creative director"
              className={styles.secondaryImage}
            />
          </div>
        </div>
      </section>

      {/* MEET ANA */}
      <section className={styles.anaSection}>
        <div className={`${styles.container} ${styles.anaGrid}`}>
          <div className={styles.anaImageWrap}>
            <img
              src="/ana-about.jpg"
              alt="Ana, massage therapist at Orlando Beauty Studio"
              className={styles.anaImage}
            />
          </div>

          <div className={styles.anaText}>
            <p className={styles.eyebrow}>Therapeutic Bodywork & Massage</p>

            <h2>Meet Ana</h2>

            <p>
              Ana believes massage should meet you where you are — whether
              you’re looking for focused relief in a specific area, a deeper
              full-body release, or simply time to slow down and reset.
            </p>

            <p>
              Her sessions blend targeted therapeutic work, including myofascial
              techniques, with calming, restorative touch. When appropriate, she
              incorporates breathwork and sound to deepen relaxation and help
              the body settle.
            </p>

            <p>
              Her intention is to provide thoughtful, individualized bodywork
              that leaves you feeling lighter, grounded, and cared for.
            </p>

            <a href="/services" className={styles.anaButton}>
              Explore Body Massage
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
