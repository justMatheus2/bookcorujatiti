export default function Features({ t }) {
  const items = [t.feature1, t.feature2, t.feature3, t.feature4];

  return (
    <section className="features fade-in">
      <h2>{t.specialTitle}</h2>
      <div className="feature-grid">
        {items.map((item) => (
          <article className="feature-card" key={item}>
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
