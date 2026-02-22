export default function Testimonials({ t }) {
  return (
    <section className="testimonials fade-in">
      <h2>{t.testimonialTitle}</h2>
      <div className="testimonial-grid">
        <article className="testimonial-card">{t.testimonial1}</article>
        <article className="testimonial-card">{t.testimonial2}</article>
        <article className="testimonial-card">{t.testimonial3}</article>
      </div>
    </section>
  );
}
