export default function Footer({ t }) {
  return (
    <footer className="connect fade-in">
      <h2>{t.connectTitle}</h2>
      <p>{t.connectText}</p>
      <div className="connect-form">
        <input type="email" placeholder={t.inputPlaceholder} aria-label={t.inputPlaceholder} />
        <button className="btn btn-primary" type="button">{t.subscribe}</button>
      </div>
      <div className="socials" aria-hidden="true">◎ ◌ ◍</div>
      <small>© Monaliza Bezerra · {t.rights}</small>
    </footer>
  );
}
