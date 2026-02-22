import authorImage from '../image/1.png';

export default function Author({ t }) {
  return (
    <section className="author-section section-card fade-in">
      <div className="author-photo">
        <img src={authorImage} alt={t.author} />
      </div>
      <div>
        <h2>{t.authorTitle}</h2>
        <p>{t.authorBio}</p>
      </div>
    </section>
  );
}
