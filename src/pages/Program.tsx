const days = [
  {
    n: 1,
    title: 'Знакомство с душой Алтая',
    mood: 'Лёгкий восторг и предвкушение',
    spots: ['Этно-музей', 'Дегустация алтайских блюд', 'Камышлинский водопад', 'Лохматая ферма', 'Моторафтинг', 'Манжерок'],
    desc: 'Первый день — это мягкое погружение. Мы примеряем национальные костюмы, пробуем местные травяные чаи и блюда, гладим ягнят на ферме и ловим первые брызги водопада. Знакомство с бытом и гостеприимством алтайцев задаёт тёплый тон всему путешествию.',
    activity: 'Авто — 100 км · Пешком — 5 км',
    culture: 'Национальные алтайские костюмы, травяные чаи, традиционное гостеприимство',
  },
  {
    n: 2,
    title: 'Долина горных духов',
    mood: 'Трепет перед величием природы',
    spots: ['Остров Патмос', 'Долина горных духов', 'Водопад Че-Чкыш', 'Ороктойский мост', 'Осенние краски', 'Зубы дракона'],
    desc: 'День открытий и силы места. Подвесные мосты над бирюзовой Катунью, шёпот ветра в Долине горных духов и легенды, которые местные жители хранят веками. Здесь особенно остро чувствуешь, как природа и духовная культура Алтая сплетаются в единое целое.',
    activity: 'Авто — 80 км · Пешком — 7 км',
    culture: 'Священное место острова Патмос, легенды о горных духах, бирюзовая Катунь',
  },
  {
    n: 3,
    title: 'По легендарному Чуйскому тракту',
    mood: 'Свобода и дорожный драйв',
    spots: ['Чуйский тракт', 'Каракольская долина', 'Зубровый питомник', 'Перевал Чике-Таман', 'Слияние Чуи и Катуни', 'Осенние пейзажи'],
    desc: 'Одна из красивейших дорог мира раскрывается во всю мощь. Мы кормим зубров, поднимаемся на перевал Чике-Таман и любуемся слиянием двух рек разного цвета. Каждый поворот — новый кадр, а быт придорожных аилов напоминает о кочевых традициях народа.',
    activity: 'Авто — 300 км · Пешком — 5 км',
    culture: 'Кочевые традиции, придорожные аилы, два цвета воды на слиянии рек',
  },
  {
    n: 4,
    title: 'Марс, степи и горловое пение',
    mood: 'Удивление и культурное откровение',
    spots: ['Гейзерное озеро', 'Северо-Чуйский хребет', 'Алтайский Марс', 'Верблюды', 'Курайская степь', 'Концерт горлового пения'],
    desc: 'Инопланетные пейзажи Алтайского Марса, заснеженные пики и бескрайняя Курайская степь с верблюдами. Кульминация дня — живой концерт горлового пения кай, древнейшего искусства Алтая. Звук, идущий из глубины, остаётся в сердце надолго.',
    activity: 'Авто — 180 км · Пешком — 7 км',
    culture: 'Горловое пение кай — нематериальное наследие Алтая, цветные горы, верблюды в степи',
  },
  {
    n: 5,
    title: 'Древние тропы и праздничный ужин',
    mood: 'Благодарность и новая дружба',
    spots: ['Старая вьючная тропа', 'Петроглифы Калбак-Таш', 'Ининские столбы', 'Семинский перевал', 'Праздничный ужин'],
    desc: 'Финальный день соединяет тысячелетия: древние петроглифы Калбак-Таш и причудливые Ининские столбы. А вечером — праздничный ужин всей группой, где за общим столом рождаются настоящие дружбы. Уезжаешь другим человеком — наполненным и счастливым.',
    activity: 'Авто — 350 км · Пешком — 5 км',
    culture: 'Петроглифы возрастом 10 000 лет, наскальные рисунки древних племён Алтая',
  },
  {
    n: 6,
    title: 'Прощаемся с Алтаем. Трансфер в аэропорт',
    mood: 'Тепло, обнимашки и до новых встреч',
    spots: ['Сытный завтрак', 'Индивидуальный трансфер', 'Аэропорт Горно-Алтайск'],
    desc: 'После сытного завтрака — индивидуальный трансфер в аэропорт по времени вашего вылета. Но мы не прощаемся! После такого путешествия каждый становится другу больше, чем просто попутчик. Впереди много обнимашек и тёплых слов. До новых встреч!',
    activity: 'Поездка с нами — это заряд классных эмоций, любви и заботы!',
    culture: '',
  },
];

const Program = () => {
  return (
    <div className="program-page bg-white text-[#1a1a1a] font-body">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Golos+Text:wght@400;500;600&display=swap');

        .program-page {
          font-family: 'Golos Text', sans-serif;
        }
        .font-display {
          font-family: 'Oswald', sans-serif;
        }

        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          .program-page { background: white; }
        }

        .cover-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #FF9E40 40%, #FFB627 70%, #2EC4B6 100%);
        }
        .day-accent {
          background: linear-gradient(135deg, #FF6B35, #FFB627);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .spot-tag {
          display: inline-block;
          border: 1.5px solid #FF6B35;
          color: #FF6B35;
          border-radius: 99px;
          padding: 3px 12px;
          font-size: 11px;
          margin: 3px 3px 3px 0;
          font-family: 'Golos Text', sans-serif;
        }
        .section-line {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #FFB627);
          border-radius: 99px;
          margin-bottom: 8px;
        }
      `}</style>

      {/* ОБЛОЖКА */}
      <div className="cover-gradient min-h-screen flex flex-col justify-between p-12 relative overflow-hidden page-break" style={{minHeight: '297mm'}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '28px 28px'}} />

        <div className="relative">
          <p className="font-display text-white/70 tracking-[0.4em] text-sm uppercase mb-2">Авторский тур</p>
          <h1 className="font-display text-white font-bold leading-none" style={{fontSize: '96px', lineHeight: '0.9'}}>
            ЗОЛОТОЙ<br />АЛТАЙ
          </h1>
          <p className="font-display text-white/90 text-5xl mt-3 tracking-widest">2026</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { v: '6', l: 'дней' },
              { v: '20+', l: 'локаций' },
              { v: '1000+', l: 'км дороги' },
              { v: '\u221e', l: 'эмоций' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-white font-bold text-4xl">{s.v}</div>
                <div className="text-white/70 text-xs uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/30 pt-6 flex justify-between items-end">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Организатор</p>
              <p className="font-display text-white text-3xl font-bold tracking-wider">МЕЧТА ТУР</p>
              <p className="text-white/70 text-sm mt-1">Вероника · Автор и гид</p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Телефон</p>
              <p className="font-display text-white text-xl">+7 (923) 298-18-88</p>
            </div>
          </div>
        </div>
      </div>

      {/* ДНИ */}
      {days.map((d, i) => (
        <div
          key={d.n}
          className="page-break relative"
          style={{minHeight: '297mm', padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: i % 2 === 0 ? '#fff' : '#fafaf8'}}
        >
          {/* Верхний акцент */}
          <div className="cover-gradient" style={{height: '6px', borderRadius: '99px', marginBottom: '36px'}} />

          <div style={{flex: 1}}>
            {/* Шапка дня */}
            <div style={{display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px'}}>
              <span className="font-display day-accent font-bold" style={{fontSize: '80px', lineHeight: 1}}>0{d.n}</span>
              <span className="font-display text-[#999] uppercase tracking-[0.3em] text-sm">день</span>
            </div>
            <h2 className="font-display font-bold uppercase text-[#1a1a1a]" style={{fontSize: '32px', lineHeight: 1.1, marginBottom: '20px'}}>{d.title}</h2>

            {/* Настроение */}
            <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFF4EC', border: '1.5px solid #FFB627', borderRadius: '99px', padding: '6px 16px', marginBottom: '24px'}}>
              <span style={{color: '#FF6B35', fontSize: '13px'}}>♥</span>
              <span style={{color: '#FF6B35', fontSize: '13px', fontWeight: 500}}>Настроение: {d.mood}</span>
            </div>

            {/* Описание */}
            <div className="section-line" />
            <p style={{fontSize: '15px', lineHeight: '1.75', color: '#444', marginBottom: '28px'}}>{d.desc}</p>

            {/* Локации */}
            <p className="font-display uppercase text-xs tracking-widest text-[#999] mb-3">Что посетим</p>
            <div style={{marginBottom: '28px'}}>
              {d.spots.map((s) => <span key={s} className="spot-tag">{s}</span>)}
            </div>

            {/* Культура */}
            {d.culture && (
              <div style={{background: '#F0FAFA', borderLeft: '4px solid #2EC4B6', padding: '14px 18px', borderRadius: '0 12px 12px 0', marginBottom: '28px'}}>
                <p style={{fontSize: '12px', color: '#2EC4B6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px'}}>Культура и быт Алтая</p>
                <p style={{fontSize: '14px', color: '#444', lineHeight: 1.6}}>{d.culture}</p>
              </div>
            )}
          </div>

          {/* Подвал дня */}
          <div style={{borderTop: '1.5px solid #eee', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{fontSize: '13px', color: '#2EC4B6', fontWeight: 600}}>🚗 {d.activity}</span>
            <span className="font-display" style={{fontSize: '13px', color: '#ccc', letterSpacing: '0.2em'}}>МЕЧТА ТУР · АЛТАЙ 2026</span>
          </div>
        </div>
      ))}

      {/* ФИНАЛЬНАЯ СТРАНИЦА */}
      <div className="cover-gradient page-break" style={{minHeight: '297mm', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '48px', textAlign: 'center'}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
        <div className="relative">
          <p className="font-display text-white/70 tracking-[0.4em] text-sm uppercase mb-6">Поездка с нами — это</p>
          <h2 className="font-display text-white font-bold uppercase" style={{fontSize: '56px', lineHeight: 1.05, marginBottom: '32px'}}>
            ЗАРЯД КЛАССНЫХ<br />ЭМОЦИЙ, ЛЮБВИ<br />И ЗАБОТЫ!
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '480px', margin: '0 auto 48px'}}>
            {['Комфортно', 'Вкусно', 'Разнообразно', 'Весело'].map((t) => (
              <div key={t} style={{background: 'rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px', backdropFilter: 'blur(8px)'}}>
                <p className="font-display text-white font-bold text-xl uppercase">{t}</p>
              </div>
            ))}
          </div>

          <div style={{borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '32px'}}>
            <p className="font-display text-white text-3xl font-bold tracking-wider mb-2">МЕЧТА ТУР</p>
            <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '15px', marginBottom: '8px'}}>Вероника · Автор и гид</p>
            <p className="font-display text-white text-xl">+7 (923) 298-18-88</p>
          </div>
        </div>
      </div>

      {/* Кнопка печати */}
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="bg-altai px-6 py-3 rounded-full font-display uppercase tracking-wider text-white shadow-xl hover:scale-105 transition-transform text-sm font-semibold flex items-center gap-2"
          style={{background: 'linear-gradient(135deg, #FF6B35, #FFB627)', color: 'white', border: 'none', cursor: 'pointer', fontFamily: 'Oswald, sans-serif', fontSize: '14px', letterSpacing: '0.1em'}}
        >
          🖨 Сохранить PDF
        </button>
      </div>
    </div>
  );
};

export default Program;
