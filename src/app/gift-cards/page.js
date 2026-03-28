const giftCards = [
  {
    title: "$150 Gift Certificate",
    price: "$150",
    description: "A beautiful gift for self-care, skincare, and relaxation.",
    note: "Valid for 6 months from the date of purchase.",
    image: "/gift150.png",
    link: "https://www.vagaro.com/juliabeauty",
  },
  {
    title: "$100 Gift Certificate",
    price: "$100",
    description:
      "A thoughtful gift for facials, skincare services, or studio treatments.",
    note: "Valid for 6 months from the date of purchase.",
    image: "/gift100.png",
    link: "https://www.vagaro.com/juliabeauty",
  },
  {
    title: "$50 Gift Certificate",
    price: "$50",
    description:
      "Perfect for a smaller gesture, add-on service, or first visit.",
    note: "Valid for 6 months from the date of purchase.",
    image: "/gift50.png",
    link: "https://www.vagaro.com/juliabeauty",
  },
  {
    title: "Hollywood Lifting Massage Gift Card",
    price: "$160",
    description:
      "A signature sculpting treatment gift card — ideal for someone who would love a premium facial massage experience.",
    note: "Valid for 6 months from the date of purchase.",
    image: "/gift-hollywood.png",
    link: "https://www.vagaro.com/juliabeauty",
    featured: true,
  },
];

export default function GiftCardsPage() {
  return (
    <section className="gift-cards-page">
      <div className="container gift-cards-container">
        <div className="gift-cards-hero center">
          <p className="gift-cards-kicker">Give Beauty & Care</p>
          <h1>Gift Cards</h1>
          <p className="gift-cards-subtext">
            Share a thoughtful experience with someone special. Orlando Beauty
            Studio gift cards are perfect for birthdays, holidays, thank-you
            gifts, or simply treating someone to self-care.
          </p>
        </div>

        <div className="gift-cards-intro">
          <div className="gift-cards-intro-card">
            <h2>A Beautiful Gift, Made Simple</h2>
            <p>
              Choose a flexible gift certificate amount or select a featured
              treatment gift card. Each gift card can be used toward services at
              Orlando Beauty Studio and is designed to feel personal, elevated,
              and memorable.
            </p>
            <a
              href="https://www.vagaro.com/juliabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Purchase on Vagaro
            </a>
          </div>
        </div>

        <div className="gift-cards-grid">
          {giftCards.map((card) => (
            <article
              key={card.title}
              className={`gift-card-item ${card.featured ? "featured" : ""}`}
            >
              <div className="gift-card-image-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="gift-card-image"
                />
              </div>

              <div className="gift-card-content">
                <div className="gift-card-top">
                  <h3>{card.title}</h3>
                  <span className="gift-card-price">{card.price}</span>
                </div>

                <p className="gift-card-description">{card.description}</p>
                <p className="gift-card-note">{card.note}</p>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gift-card-btn"
                >
                  Purchase Gift Card
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="gift-cards-bottom center">
          <p>
            Looking for something more personal? You can also purchase directly
            through Vagaro and choose the gift option there.
          </p>

          <div className="gift-cards-actions">
            <a
              href="https://www.vagaro.com/juliabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Buy Gift Card
            </a>

            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
