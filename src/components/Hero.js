export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/facial.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          Natural face lifting
          <br />
          through advanced holistic massage.
        </h1>

        <a
          href="https://www.vagaro.com/juliabeauty"
          target="_blank"
          className="hero-btn"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
