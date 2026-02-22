export default function Quote({ t }) {
  return (
    <section className="quote fade-in">
      <blockquote>{t.quote}</blockquote>
    </section>
  );
}
