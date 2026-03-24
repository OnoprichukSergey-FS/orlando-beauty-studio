import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="featured">
      <div className="container">
        <h2 className="section-title">Featured Services</h2>

        {/* Sugaring */}
        <div className="featured-row">
          <div className="featured-image">
            <Image
              src="/istockphoto-1990707667-1024x1024.jpg"
              alt="Sugaring treatment"
              width={600}
              height={420}
              className="img"
            />
          </div>
          <div className="featured-content">
            <h3>Sugaring</h3>
            <p>
              A gentle and natural method of hair removal using sugar paste.
              Perfect for sensitive skin and long-lasting smoothness.
            </p>
            <Link href="/services/sugaring" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Advanced Skincare */}
        <div className="featured-row reverse">
          <div className="featured-image">
            <Image
              src="/istockphoto-2238288096-1024x1024.jpg"
              alt="Advanced skincare facial"
              width={600}
              height={420}
              className="img"
            />
          </div>
          <div className="featured-content">
            <h3>Advanced Skincare</h3>
            <p>
              Personalized facial treatments designed to rejuvenate, lift, and
              restore your natural glow using advanced techniques.
            </p>
            <Link href="/services/figure-correction" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Holistic Treatments */}
        <div className="featured-row">
          <div className="featured-image">
            <Image
              src="/woman-with-band-aid-flower-plastic-face.jpg"
              alt="Holistic beauty care"
              width={600}
              height={420}
              className="img"
            />
          </div>
          <div className="featured-content">
            <h3>Holistic Treatments</h3>
            <p>
              Experience beauty rooted in harmony. Our holistic approach blends
              science, nature, and mindful care for lasting results.
            </p>
            <Link href="/services" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
