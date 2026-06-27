import { useState } from 'react';
import Icon from '@/components/ui/icon';

const days = [
  {
    n: 1,
    title: 'Знакомство с душой Алтая',
    img: 'https://cdn.poehali.dev/files/80788400-3f04-4f29-bb73-4174342f35e8.jpeg',
    mood: 'Лёгкий восторг и предвкушение',
    spots: ['Этно-музей', 'Дегустация алтайских блюд', 'Камышлинский водопад', 'Лохматая ферма', 'Моторафтинг', 'Манжерок'],
    desc: 'Первый день — это мягкое погружение. Мы примеряем национальные костюмы, пробуем местные травяные чаи и блюда, гладим ягнят на ферме и ловим первые брызги водопада. Знакомство с бытом и гостеприимством алтайцев задаёт тёплый тон всему путешествию.',
    activity: 'Авто — 100 км · Пешком — 5 км',
  },
  {
    n: 2,
    title: 'Долина горных духов',
    img: 'https://cdn.poehali.dev/files/7f291848-1820-4cf5-b88a-a6349ff57f15.jpeg',
    mood: 'Трепет перед величием природы',
    spots: ['Остров Патмос', 'Долина горных духов', 'Водопад Че-Чкыш', 'Ороктойский мост', 'Осенние краски', 'Зубы дракона'],
    desc: 'День открытий и силы места. Подвесные мосты над бирюзовой Катунью, шёпот ветра в Долине горных духов и легенды, которые местные жители хранят веками. Здесь особенно остро чувствуешь, как природа и духовная культура Алтая сплетаются в единое целое.',
    activity: 'Авто — 80 км · Пешком — 7 км',
  },
  {
    n: 3,
    title: 'По легендарному Чуйскому тракту',
    img: 'https://cdn.poehali.dev/files/654ed5de-5f6b-4c2f-bd98-7283c17ade0b.jpeg',
    mood: 'Свобода и дорожный драйв',
    spots: ['Чуйский тракт', 'Каракольская долина', 'Зубровый питомник', 'Перевал Чике-Таман', 'Слияние Чуи и Катуни', 'Осенние пейзажи'],
    desc: 'Одна из красивейших дорог мира раскрывается во всю мощь. Мы кормим зубров, поднимаемся на перевал Чике-Таман и любуемся слиянием двух рек разного цвета. Каждый поворот — новый кадр, а быт придорожных аилов напоминает о кочевых традициях народа.',
    activity: 'Авто — 300 км · Пешком — 5 км',
  },
  {
    n: 4,
    title: 'Марс, степи и горловое пение',
    img: 'https://cdn.poehali.dev/files/63e77f5d-a058-4ee4-b1ea-2df8f7ee6e61.jpeg',
    mood: 'Удивление и культурное откровение',
    spots: ['Гейзерное озеро', 'Северо-Чуйский хребет', 'Алтайский Марс', 'Верблюды', 'Курайская степь', 'Концерт горлового пения'],
    desc: 'Инопланетные пейзажи Алтайского Марса, заснеженные пики и бескрайняя Курайская степь с верблюдами. Кульминация дня — живой концерт горлового пения кай, древнейшего искусства Алтая. Звук, идущий из глубины, остаётся в сердце надолго.',
    activity: 'Авто — 180 км · Пешком — 7 км',
  },
  {
    n: 5,
    title: 'Древние тропы и тёплое прощание',
    img: 'https://cdn.poehali.dev/files/194787a7-31de-46c7-8c72-a410deea655c.jpeg',
    mood: 'Благодарность и новая дружба',
    spots: ['Старая вьючная тропа', 'Петроглифы Калбак-Таш', 'Ининские столбы', 'Чуйский тракт', 'Семинский перевал', 'Праздничный ужин'],
    desc: 'Финальный день соединяет тысячелетия: древние петроглифы Калбак-Таш и причудливые Ининские столбы. А вечером — праздничный ужин всей группой, где за общим столом рождаются настоящие дружбы. Уезжаешь другим человеком — наполненным и счастливым.',
    activity: 'Авто — 350 км · Пешком — 5 км',
  },
];

const perks = [
  { icon: 'Sofa', title: 'Комфортно', text: 'Уютные отели, новый транспорт и продуманный темп — отдыхают даже на ходу.' },
  { icon: 'UtensilsCrossed', title: 'Вкусно', text: 'Локальная кухня, дегустации и сытные завтраки. Голодным не останется никто.' },
  { icon: 'Sparkles', title: 'Разнообразно', text: 'Водопады, Марс, степи, культура и быт — каждый день не похож на предыдущий.' },
  { icon: 'PartyPopper', title: 'Весело', text: 'Дружная группа, гид с юмором и атмосфера, в которой рождаются настоящие друзья.' },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', people: '2' });

  return (
    <div className="min-h-screen bg-[#0E1116] text-white font-body overflow-x-hidden selection:bg-[#FF6B35] selection:text-white">
      {/* HERO */}
      <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/files/654ed5de-5f6b-4c2f-bd98-7283c17ade0b.jpeg"
          alt="Алтай"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1116]/70 via-[#0E1116]/40 to-[#0E1116]" />
        <div className="absolute inset-0 grain opacity-40" />

        <div className="relative z-10 animate-fade-up">
          <span className="inline-block mb-6 px-5 py-2 rounded-full border border-[#FFB627]/50 bg-white/5 backdrop-blur-sm font-display tracking-[0.35em] text-xs text-[#FFB627] uppercase">
            Авторский тур · Место тур
          </span>
          <h1 className="font-display font-bold uppercase leading-[0.92] text-6xl sm:text-8xl md:text-9xl tracking-tight">
            <span className="block text-gradient animate-gradient-pan">Золотой</span>
            <span className="block text-white">Алтай 2026</span>
          </h1>
          <p className="mt-7 max-w-xl mx-auto text-lg sm:text-xl text-white/75 font-light">
            Пять дней дороги, по которой возвращаешься другим человеком. Водопады, перевалы,
            культура и быт Алтая — путешествие, которое остаётся в сердце.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="group bg-altai px-9 py-4 rounded-full font-display uppercase tracking-wider text-base font-semibold shadow-lg shadow-[#FF6B35]/30 transition-transform hover:scale-105 flex items-center justify-center gap-2">
              Забронировать тур
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#days" className="px-9 py-4 rounded-full font-display uppercase tracking-wider text-base font-semibold border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              Программа по дням
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float text-white/50">
          <Icon name="ChevronsDown" size={30} />
        </div>
      </header>

      {/* INTRO STATS */}
      <section className="relative -mt-2 py-14 border-y border-white/10 bg-white/[0.02]">
        <div className="container max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '5', l: 'дней приключений' },
            { v: '20+', l: 'локаций' },
            { v: '1000+', l: 'км дороги' },
            { v: '∞', l: 'эмоций' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl md:text-6xl text-gradient">{s.v}</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DAYS */}
      <section id="days" className="py-24 px-5">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <span className="font-hand text-3xl text-[#FFB627]">наш маршрут</span>
            <h2 className="font-display font-bold uppercase text-5xl md:text-7xl mt-2">Путешествие <span className="text-gradient">по дням</span></h2>
          </div>

          <div className="space-y-20">
            {days.map((d, i) => (
              <article key={d.n} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}>
                <div className="[direction:ltr] card-hover rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={d.img} alt={`День ${d.n}`} className="w-full h-full object-cover" />
                </div>
                <div className="[direction:ltr]">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-7xl md:text-8xl text-gradient leading-none">0{d.n}</span>
                    <span className="font-display uppercase tracking-[0.3em] text-xs text-white/40">день</span>
                  </div>
                  <h3 className="font-display font-semibold uppercase text-3xl md:text-4xl mt-3">{d.title}</h3>

                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FFB627] text-sm">
                    <Icon name="Heart" size={15} />
                    Настроение: {d.mood}
                  </div>

                  <p className="mt-5 text-white/70 leading-relaxed">{d.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {d.spots.map((s) => (
                      <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/75">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm text-[#2EC4B6] font-medium">
                    <Icon name="Footprints" size={16} />
                    {d.activity}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW / WHY */}
      <section className="relative py-24 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-altai opacity-90" />
        <div className="absolute inset-0 grain opacity-30" />
        <div className="relative container max-w-5xl text-center">
          <span className="font-hand text-3xl text-white/90">почему именно мы</span>
          <h2 className="font-display font-bold uppercase text-4xl md:text-6xl text-white mt-2 leading-tight">
            Путешествия с «Место тур» — <br className="hidden md:block" />это всегда правильный выбор
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/90 text-lg">
            Потому что в наших турах по-настоящему <b>комфортно</b>. Здесь всегда <b>вкусно</b>,
            программа <b>разнообразная</b>, а компания — <b>весёлая</b>. Мы берём на себя все заботы,
            а вам остаётся только наслаждаться дорогой и новыми открытиями.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p) => (
              <div key={p.title} className="card-hover bg-[#0E1116]/85 backdrop-blur-sm rounded-2xl p-7 text-left border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-altai flex items-center justify-center mb-4">
                  <Icon name={p.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-display uppercase text-xl tracking-wide">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-14 max-w-3xl mx-auto bg-[#0E1116]/85 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 text-left">
            <Icon name="Quote" size={36} className="text-[#FFB627] mb-3" />
            <p className="text-lg md:text-xl text-white/90 italic leading-relaxed">
              «Это был лучший отпуск в моей жизни. Всё продумано до мелочей: вкусные обеды,
              удобный транспорт, заботливый гид. Уезжали уставшие, но абсолютно счастливые
              и с новыми друзьями. Спасибо, „Место тур“!»
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-altai flex items-center justify-center font-display text-lg">А</div>
              <div>
                <div className="font-semibold">Анна, Москва</div>
                <div className="text-sm text-white/55 flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={14} className="text-[#FFB627] fill-[#FFB627]" />)}
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-5">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="font-hand text-3xl text-[#FFB627]">забронируй место</span>
              <h2 className="font-display font-bold uppercase text-4xl md:text-6xl mt-2 leading-tight">
                Поехали на <span className="text-gradient">Алтай!</span>
              </h2>
              <p className="mt-5 text-white/70">
                Оставьте заявку — и мы свяжемся с вами, расскажем о ближайших датах,
                ответим на все вопросы и забронируем для вас место в группе.
              </p>
              <ul className="mt-7 space-y-3">
                {['Даты заездов 2026 года', 'Всё включено: проживание и питание', 'Опытный гид и поддержка 24/7'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/80">
                    <Icon name="CircleCheck" size={20} className="text-[#2EC4B6]" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 text-white/70">
                <Icon name="Phone" size={20} className="text-[#FFB627]" />
                <span className="font-display text-xl tracking-wide">8 (800) 000-00-00</span>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 backdrop-blur-sm"
            >
              <h3 className="font-display uppercase text-2xl mb-5">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-white/60">Ваше имя</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Как к вам обращаться"
                    className="mt-1.5 w-full bg-[#0E1116] border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60">Телефон</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="mt-1.5 w-full bg-[#0E1116] border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60">Количество человек</label>
                  <select
                    value={form.people}
                    onChange={(e) => setForm({ ...form, people: e.target.value })}
                    className="mt-1.5 w-full bg-[#0E1116] border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-[#FF6B35] transition-colors"
                  >
                    {['1', '2', '3', '4', '5+'].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-altai py-4 rounded-xl font-display uppercase tracking-wider font-semibold shadow-lg shadow-[#FF6B35]/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  Отправить заявку
                  <Icon name="Send" size={18} />
                </button>
                <p className="text-xs text-white/40 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-5 text-center">
        <div className="font-display uppercase text-2xl tracking-wider text-gradient">Место тур</div>
        <p className="mt-2 text-white/50 text-sm">Золотой Алтай 2026 · Путешествия, в которые влюбляешься</p>
        <div className="mt-5 flex justify-center gap-4 text-white/50">
          <Icon name="Instagram" size={22} className="hover:text-[#FFB627] transition-colors cursor-pointer" />
          <Icon name="Send" size={22} className="hover:text-[#FFB627] transition-colors cursor-pointer" />
          <Icon name="Phone" size={22} className="hover:text-[#FFB627] transition-colors cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
