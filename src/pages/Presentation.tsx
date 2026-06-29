import { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/icon';

const days = [
  {
    n: 1,
    title: 'Знакомство с душой Алтая',
    mood: 'Лёгкий восторг и предвкушение',
    spots: ['Этно-музей', 'Дегустация алтайских блюд', 'Камышлинский водопад', 'Лохматая ферма', 'Моторафтинг', 'Манжерок'],
    desc: 'Первый день — это мягкое погружение. Мы примеряем национальные костюмы, пробуем местные травяные чаи и блюда, гладим ягнят на ферме и ловим первые брызги водопада.',
    activity: 'Авто — 100 км · Пешком — 5 км',
    img: 'https://cdn.poehali.dev/files/80788400-3f04-4f29-bb73-4174342f35e8.jpeg',
  },
  {
    n: 2,
    title: 'Долина горных духов',
    mood: 'Трепет перед величием природы',
    spots: ['Остров Патмос', 'Долина горных духов', 'Водопад Че-Чкыш', 'Ороктойский мост', 'Зубы дракона'],
    desc: 'Подвесные мосты над бирюзовой Катунью, шёпот ветра в Долине горных духов и легенды, которые местные жители хранят веками.',
    activity: 'Авто — 80 км · Пешком — 7 км',
    img: 'https://cdn.poehali.dev/files/7f291848-1820-4cf5-b88a-a6349ff57f15.jpeg',
  },
  {
    n: 3,
    title: 'По легендарному Чуйскому тракту',
    mood: 'Свобода и дорожный драйв',
    spots: ['Чуйский тракт', 'Каракольская долина', 'Зубровый питомник', 'Перевал Чике-Таман', 'Слияние Чуи и Катуни'],
    desc: 'Одна из красивейших дорог мира. Кормим зубров, поднимаемся на перевал Чике-Таман и любуемся слиянием двух рек разного цвета.',
    activity: 'Авто — 300 км · Пешком — 5 км',
    img: 'https://cdn.poehali.dev/files/654ed5de-5f6b-4c2f-bd98-7283c17ade0b.jpeg',
  },
  {
    n: 4,
    title: 'Марс, степи и горловое пение',
    mood: 'Удивление и культурное откровение',
    spots: ['Гейзерное озеро', 'Северо-Чуйский хребет', 'Алтайский Марс', 'Верблюды', 'Курайская степь', 'Концерт кай'],
    desc: 'Инопланетные пейзажи Алтайского Марса, бескрайняя Курайская степь с верблюдами. Кульминация — живой концерт горлового пения кай.',
    activity: 'Авто — 180 км · Пешком — 7 км',
    img: 'https://cdn.poehali.dev/files/63e77f5d-a058-4ee4-b1ea-2df8f7ee6e61.jpeg',
  },
  {
    n: 5,
    title: 'Древние тропы и праздничный ужин',
    mood: 'Благодарность и новая дружба',
    spots: ['Вьючная тропа', 'Петроглифы Калбак-Таш', 'Ининские столбы', 'Семинский перевал', 'Праздничный ужин'],
    desc: 'Петроглифы возрастом 10 000 лет и причудливые Ининские столбы. Вечером — праздничный ужин всей группой, где рождаются настоящие друзья.',
    activity: 'Авто — 350 км · Пешком — 5 км',
    img: 'https://cdn.poehali.dev/files/194787a7-31de-46c7-8c72-a410deea655c.jpeg',
  },
  {
    n: 6,
    title: 'До новых встреч, Алтай!',
    mood: 'Тепло, обнимашки и до новых встреч',
    spots: ['Сытный завтрак', 'Индивидуальный трансфер', 'Аэропорт Горно-Алтайск'],
    desc: 'После сытного завтрака — трансфер в аэропорт. Но мы не прощаемся! После такого путешествия каждый становится другу больше, чем просто попутчик.',
    activity: 'Поездка с нами — это заряд классных эмоций, любви и заботы!',
    img: 'https://cdn.poehali.dev/projects/24fad796-5cdc-4637-8c70-7ce155449543/bucket/c1a3fc4f-8e45-4b6a-94b6-6c59c01613bb.jpeg',
  },
];

const perks = [
  { icon: 'Sofa', title: 'Комфортно', text: 'Уютные отели, новый транспорт и продуманный темп — отдыхают даже на ходу.' },
  { icon: 'UtensilsCrossed', title: 'Вкусно', text: 'Локальная кухня, дегустации и сытные завтраки. Голодным не останется никто.' },
  { icon: 'Sparkles', title: 'Разнообразно', text: 'Водопады, Марс, степи, культура и быт — каждый день не похож на предыдущий.' },
  { icon: 'PartyPopper', title: 'Весело', text: 'Дружная группа, гид с юмором и атмосфера, в которой рождаются настоящие друзья.' },
];

const TOTAL_SLIDES = 2 + days.length + 1;

const Presentation = () => {
  const [slide, setSlide] = useState(0);
  const [animDir, setAnimDir] = useState<'next' | 'prev'>('next');
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((next: number, dir: 'next' | 'prev') => {
    if (next < 0 || next >= TOTAL_SLIDES) return;
    setAnimDir(dir);
    setVisible(false);
    setTimeout(() => {
      setSlide(next);
      setVisible(true);
    }, 280);
  }, []);

  const next = useCallback(() => goTo(slide + 1, 'next'), [slide, goTo]);
  const prev = useCallback(() => goTo(slide - 1, 'prev'), [slide, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  useEffect(() => {
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = startY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) { if (dy > 0) { next(); } else { prev(); } }
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => { window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchend', onTouchEnd); };
  }, [next, prev]);

  const transClass = visible
    ? 'opacity-100 translate-y-0'
    : animDir === 'next'
      ? 'opacity-0 translate-y-8'
      : 'opacity-0 -translate-y-8';

  return (
    <div className="fixed inset-0 bg-[#0E1116] text-white font-body overflow-hidden select-none">

      {/* SLIDES */}
      <div className={`absolute inset-0 transition-all duration-[280ms] ease-out ${transClass}`}>

        {/* SLIDE 0 — ОБЛОЖКА */}
        {slide === 0 && (
          <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-8">
            <img
              src="https://cdn.poehali.dev/files/654ed5de-5f6b-4c2f-bd98-7283c17ade0b.jpeg"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
              alt="Алтай"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E1116]/60 via-[#0E1116]/30 to-[#0E1116]/80" />
            <div className="absolute inset-0 grain opacity-40" />
            <div className="relative z-10">
              <span className="inline-block mb-6 px-5 py-2 rounded-full border border-[#FFB627]/50 bg-white/5 backdrop-blur-sm font-display tracking-[0.35em] text-xs text-[#FFB627] uppercase">
                Авторский тур · Мечта тур
              </span>
              <h1 className="font-display font-bold uppercase leading-[0.9] text-[clamp(64px,12vw,140px)] tracking-tight">
                <span className="block text-gradient animate-gradient-pan">Золотой</span>
                <span className="block text-white">Алтай 2026</span>
              </h1>
              <p className="mt-6 max-w-xl mx-auto text-lg text-white/70 font-light">
                Шесть дней дороги, по которой возвращаешься другим человеком
              </p>
              <div className="mt-10 flex justify-center gap-10">
                {[{ v: '6', l: 'дней' }, { v: '20+', l: 'локаций' }, { v: '1000+', l: 'км' }, { v: '\u221e', l: 'эмоций' }].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="font-display text-3xl md:text-4xl text-gradient font-bold">{s.v}</div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 1 — ПОЧЕМУ МЫ */}
        {slide === 1 && (
          <div className="relative w-full h-full flex flex-col justify-center items-center px-8">
            <div className="absolute inset-0 bg-altai opacity-90" />
            <div className="absolute inset-0 grain opacity-30" />
            <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
              <span className="font-hand text-3xl text-white/80">почему именно мы</span>
              <h2 className="font-display font-bold uppercase text-[clamp(32px,6vw,72px)] text-white mt-2 leading-tight">
                Путешествия с «Мечта тур» —<br />это всегда правильный выбор
              </h2>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {perks.map((p) => (
                  <div key={p.title} className="bg-[#0E1116]/80 backdrop-blur-sm rounded-2xl p-6 text-left border border-white/10">
                    <div className="w-11 h-11 rounded-xl bg-altai flex items-center justify-center mb-4">
                      <Icon name={p.icon} size={22} className="text-white" />
                    </div>
                    <h3 className="font-display uppercase text-xl tracking-wide">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-center gap-4 bg-[#0E1116]/70 backdrop-blur-sm rounded-2xl p-5 border border-white/10 max-w-md mx-auto">
                <div className="w-14 h-14 rounded-full bg-altai flex items-center justify-center font-display text-2xl font-bold">В</div>
                <div className="text-left">
                  <div className="font-display uppercase text-lg">Вероника</div>
                  <div className="text-sm text-[#FFB627]">Автор и гид тура · +7 (923) 298-18-88</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDES 2–7 — ДНИ */}
        {slide >= 2 && slide <= 7 && (() => {
          const d = days[slide - 2];
          return (
            <div className="relative w-full h-full flex flex-col md:flex-row">
              {/* Фото */}
              <div className="relative md:w-1/2 h-48 md:h-full shrink-0">
                <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1116] hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E1116] md:hidden" />
                <div className="absolute top-6 left-6 flex items-baseline gap-3">
                  <span className="font-display font-bold text-gradient text-[clamp(56px,8vw,96px)] leading-none drop-shadow-lg">0{d.n}</span>
                  <span className="font-display uppercase tracking-[0.3em] text-xs text-white/60">день</span>
                </div>
              </div>
              {/* Контент */}
              <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-12 py-8 md:py-0">
                <h2 className="font-display font-bold uppercase text-[clamp(24px,4vw,52px)] leading-tight">{d.title}</h2>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 self-start">
                  <Icon name="Heart" size={14} className="text-[#FFB627]" />
                  <span className="text-[#FFB627] text-sm">{d.mood}</span>
                </div>
                <p className="mt-5 text-white/75 leading-relaxed text-base md:text-lg max-w-lg">{d.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.spots.map(s => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/75">{s}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-[#2EC4B6] text-sm font-medium">
                  <Icon name="Footprints" size={16} />
                  {d.activity}
                </div>
              </div>
            </div>
          );
        })()}

        {/* SLIDE 8 — ФИНАЛ / БРОНИРОВАНИЕ */}
        {slide === 8 && (
          <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-8">
            <img
              src="https://cdn.poehali.dev/files/80788400-3f04-4f29-bb73-4174342f35e8.jpeg"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              alt="Алтай"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E1116]/80 to-[#0E1116]/95" />
            <div className="absolute inset-0 grain opacity-30" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-hand text-3xl text-[#FFB627]">поехали!</span>
              <h2 className="font-display font-bold uppercase text-[clamp(40px,8vw,96px)] leading-[0.9] mt-2">
                <span className="text-gradient">Забронируй</span><br />своё место
              </h2>
              <p className="mt-6 text-white/70 text-lg">
                Оставь заявку — расскажем о датах, ответим на вопросы и зарезервируем место в группе
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+79232981888"
                  className="flex items-center justify-center gap-3 bg-altai px-8 py-4 rounded-full font-display uppercase tracking-wider font-semibold shadow-lg shadow-[#FF6B35]/30 hover:scale-105 transition-transform"
                >
                  <Icon name="Phone" size={18} />
                  +7 (923) 298-18-88
                </a>
                <a
                  href="/"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display uppercase tracking-wider font-semibold border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  На сайт
                  <Icon name="ArrowRight" size={18} />
                </a>
              </div>
              <div className="mt-10 font-display text-2xl tracking-widest text-gradient font-bold">МЕЧТА ТУР</div>
            </div>
          </div>
        )}
      </div>

      {/* НАВИГАЦИЯ — СТРЕЛКИ */}
      <button
        onClick={prev}
        disabled={slide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <Icon name="ChevronLeft" size={22} />
      </button>
      <button
        onClick={next}
        disabled={slide === TOTAL_SLIDES - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <Icon name="ChevronRight" size={22} />
      </button>

      {/* ТОЧКИ */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > slide ? 'next' : 'prev')}
            className={`rounded-full transition-all duration-300 ${i === slide ? 'w-8 h-2 bg-[#FFB627]' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* ПОДСКАЗКА */}
      <div className="absolute bottom-6 right-6 z-50 text-white/30 text-xs hidden md:flex items-center gap-2">
        <Icon name="ArrowRight" size={13} />
        <span>стрелки для навигации</span>
      </div>

      {/* НОМЕР СЛАЙДА */}
      <div className="absolute top-5 right-6 z-50 font-display text-white/30 text-sm tracking-widest">
        {String(slide + 1).padStart(2, '0')} / {String(TOTAL_SLIDES).padStart(2, '0')}
      </div>

      {/* ЛОГОТИП */}
      <div className="absolute top-5 left-6 z-50">
        <a href="/" className="font-display text-sm uppercase tracking-[0.25em] text-white/40 hover:text-white/70 transition-colors">
          Мечта тур
        </a>
      </div>
    </div>
  );
};

export default Presentation;