const translations = {
  pt: {
    pageTitle: 'A Coruja que Sempre Estava Lá | Monaliza Bezerra',
    metaDescription:
      'Landing page oficial do livro infantil A Coruja que Sempre Estava Lá, de Monaliza Bezerra. Uma história ilustrada sobre amor, família e presença para bebês e crianças pequenas.',
    htmlLang: 'pt-BR',
    brand: 'Monaliza Bezerra',
    title: 'A Coruja que Sempre Estava Lá',
    author: 'Por Monaliza Bezerra',
    subtitle: 'Porque o amor sempre encontra um jeito de estar presente.',
    buyNow: 'Comprar Agora',
    aboutBook: 'Sobre o Livro',
    aboutHeading: 'Sobre o Livro',
    aboutText:
      'Uma história ilustrada delicada sobre família, saudade e amor que permanece presente mesmo à distância. Perfeito para leitura antes de dormir para bebês e crianças pequenas.',
    quote: '“Não importa a distância, eu sempre estarei com vocês.”',
    specialHeading: 'Por que este livro é especial',
    special1: 'Ilustrações simples e acolhedoras',
    special2: 'Texto curto e rítmico para primeira infância',
    special3: 'Presente perfeito para famílias que vivem longe',
    special4: 'Uma história sobre conexão e segurança emocional',
    cta: 'Dê o presente de um amor que permanece.',
    buyMundo: 'Comprar na Book Mundo',
    buyClube: 'Comprar no Clube de Autores'
  },
  en: {
    pageTitle: 'The Owl That Was Always There | Monaliza Bezerra',
    metaDescription:
      'Official landing page for the children\'s picture book The Owl That Was Always There by Monaliza Bezerra. A gentle story of family, love, and presence for babies and toddlers.',
    htmlLang: 'en',
    brand: 'Monaliza Bezerra',
    title: 'A Coruja que Sempre Estava Lá',
    author: 'By Monaliza Bezerra',
    subtitle: 'Because love always finds a way to stay present.',
    buyNow: 'Buy Now',
    aboutBook: 'About the Book',
    aboutHeading: 'About the Book',
    aboutText:
      'A gentle illustrated story about family, distance and love that remains present. Perfect for bedtime reading for babies and toddlers.',
    quote: '“No matter the distance, I will always be with you.”',
    specialHeading: 'Why this book is special',
    special1: 'Simple and calming illustrations',
    special2: 'Short and rhythmic text for early childhood',
    special3: 'Perfect gift for families living abroad',
    special4: 'A story about emotional connection and security',
    cta: 'Give the gift of love that stays.',
    buyMundo: 'Buy on Book Mundo',
    buyClube: 'Buy on Clube de Autores'
  }
};

const switchableSections = document.querySelectorAll('.section-fade');
const langButtons = document.querySelectorAll('.lang-btn');
const i18nNodes = document.querySelectorAll('[data-i18n]');
const descriptionMeta = document.querySelector('meta[name="description"]');

function setLanguage(lang) {
  const content = translations[lang];
  if (!content) return;

  switchableSections.forEach((section) => section.classList.add('is-switching'));

  window.setTimeout(() => {
    i18nNodes.forEach((node) => {
      const key = node.dataset.i18n;
      if (content[key]) {
        node.textContent = content[key];
      }
    });

    document.title = content.pageTitle;
    descriptionMeta.setAttribute('content', content.metaDescription);
    document.documentElement.setAttribute('lang', content.htmlLang);

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    switchableSections.forEach((section) => section.classList.remove('is-switching'));
  }, 160);
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage('pt');
