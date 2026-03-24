export default function Reviews() {
  return (
    <section className="section">
      <div className="section-inner">
        <h2 className="section-title">Reviews</h2>
        <p className="section-subtitle">What our clients say</p>

        <div className="grid-3">
          <div className="card">
            <p>"Very professional and gentle. Best experience I've had."</p>
            <strong>- Anna</strong>
          </div>

          <div className="card">
            <p>"Clean space and amazing results. Highly recommend."</p>
            <strong>- Maria</strong>
          </div>

          <div className="card">
            <p>"Attention to detail is amazing. Will come back again."</p>
            <strong>- Kate</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
