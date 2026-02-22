import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Author from './components/Author';
import Quote from './components/Quote';
import Testimonials from './components/Testimonials';
import Buy from './components/Buy';
import Footer from './components/Footer';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState('pt');
  const t = useMemo(() => translations[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = `${t.title} | ${t.author}`;
  }, [lang, t]);

  return (
    <div className="page">
      <header className="topbar">
        <span className="brand">{t.author}</span>
        <div className="lang-switch" aria-label={t.langLabel}>
          <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
          <span>|</span>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      <main>
        <Hero t={t} />
        <About t={t} />
        <Features t={t} />
        <Author t={t} />
        <Quote t={t} />
        <Testimonials t={t} />
        <Buy t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
