import bookImage from '../image/1.png';

export default function Buy({ t }) {
  return (
    <section id="buy" className="buy fade-in">
      <h2>{t.buyTitle}</h2>
      <img src={bookImage} alt={t.title} className="buy-book" />
      <div className="hero-actions">
        <a className="btn btn-primary" href="https://publishnl.bookmundo.com/books/22046553" target="_blank" rel="noreferrer">{t.bookMundo}</a>
        <a className="btn btn-secondary" href="https://clubedeautores.com.br/livro/a-coruja-que-sempre-estava-la" target="_blank" rel="noreferrer">{t.clubeAutores}</a>
      </div>
    </section>
  );
}
