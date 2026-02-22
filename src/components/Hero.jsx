import bookImage from '../image/1.png';

export default function Hero({ t }) {
  return (
    <section className="hero fade-in">
      <div className="book-mockup-wrap">
        <img src={bookImage} alt={t.title} className="book-mockup" />
      </div>
      <h1>{t.title}</h1>
      <p className="author">{t.author}</p>
      <p className="subtitle">{t.subtitle}</p>
      <div className="hero-actions">
        <a href="#buy" className="btn btn-primary">{t.buyNow}</a>
        <a href="#about" className="btn btn-secondary">{t.aboutStory}</a>
      </div>
    </section>
  );
}
