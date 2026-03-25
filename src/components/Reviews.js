"use client";

import { useState } from "react";

const reviews = [
  {
    text: "Absolutely amazing lymphatic massage for the body and face. The products were gentle on my skin, and the experience felt deeply relaxing and restorative.",
    name: "Fayza J.",
  },
  {
    text: "I had a signature facial massage and it was a wonderful experience. My face felt clean and smooth, and I really appreciated the thoughtful recommendations for my routine.",
    name: "Jorge P.",
  },
  {
    text: "Peaceful atmosphere, relaxing music, and amazing service. After my facial, my skin looked smooth and radiant, and I always enjoy coming back for facials and sugaring.",
    name: "Yuliia T.",
  },
  {
    text: "Julia is the best. From the moment I walked in, I felt comfortable. The whole experience was calming, welcoming, and exactly the kind of care you want during a treatment.",
    name: "Chiara C.",
  },
  {
    text: "My boyfriend booked me a facial for Valentine’s Day and it did not disappoint. It was incredibly relaxing, and I left with my skin feeling softer and cleaner than ever.",
    name: "Hannah M.",
  },
  {
    text: "Highly recommend Orlando Beauty Studio. The facial and Hollywood lifting massage were incredible, and the overall experience felt professional, warm, and truly special.",
    name: "Diesel 2012",
  },
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += cardsPerSlide) {
    groupedReviews.push(reviews.slice(i, i + cardsPerSlide));
  }

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }

  return (
    <section className="reviews">
      <div className="container">
        <div className="section-head center">
          <h2>Client Reviews</h2>
          <p className="subtext">Real client feedback from Google reviews.</p>
        </div>

        <div className="reviews-slider-wrap">
          {/* LEFT ARROW */}
          <button
            type="button"
            className="reviews-nav reviews-nav-left"
            onClick={prevSlide}
            aria-label="Previous reviews"
          >
            ←
          </button>

          {/* SLIDES */}
          <div className="reviews-slider">
            {groupedReviews.map((group, index) => (
              <div
                key={index}
                className={`reviews-slide ${
                  currentSlide === index ? "active" : "inactive"
                }`}
              >
                <div className="reviews-grid-slider">
                  {group.map((review, i) => (
                    <div className="review-card" key={i}>
                      <div className="stars">★★★★★</div>
                      <p>“{review.text}”</p>
                      <span className="reviewer">{review.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className="reviews-nav reviews-nav-right"
            onClick={nextSlide}
            aria-label="Next reviews"
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="reviews-dots">
          {groupedReviews.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`reviews-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* BUTTON */}
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
  );
}
