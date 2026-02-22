import bookImage from '../image/1.png';

export default function About({ t }) {
  return (
    <section id="about" className="about section-card fade-in">
      <div className="about-image-card">
        <img src={bookImage} alt={t.aboutTitle} />
      </div>
      <div>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutDescription}</p>
      </div>
    </section>
  );
}
