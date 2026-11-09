import { Link, createFileRoute } from '@tanstack/react-router'
import { CtaBand, IconBadge, SectionTitle } from '#/components/Blocks'
import { Arrow, Icon } from '#/components/Icon'
import { img, sectionCover } from '#/data/images'
import type { IconName } from '#/data/site'
import { findSection, partners, services, stats } from '#/data/site'

export const Route = createFileRoute('/')({ component: Home })

const statIcons: IconName[] = ['people', 'clock', 'handshake', 'star']

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: 'heart', title: 'Inclusione', text: 'Creiamo lavoro stabile anche per persone in condizione di fragilità.' },
  { icon: 'shield', title: 'Qualità certificata', text: 'Procedure documentate, controlli periodici e personale formato.' },
  { icon: 'leaf', title: 'Sostenibilità', text: 'Prodotti ecologici, consumi ridotti e mezzi a basso impatto.' },
  { icon: 'handshake', title: 'Un unico referente', text: 'Un solo interlocutore per coordinare tutti i servizi.' },
]

const sectors: { title: string; text: string; image: string; icon: IconName }[] = [
  { title: 'Sociosanitario', text: 'RSA, cliniche, ospedali e centri diurni.', image: img('clinic', 800, 600), icon: 'heart' },
  { title: 'Turismo', text: 'Hotel, residence, agriturismi e case vacanza.', image: img('resort', 800, 600), icon: 'star' },
  { title: 'Aziende', text: 'Uffici, stabilimenti e centri commerciali.', image: img('officeCorridor', 800, 600), icon: 'chart' },
  { title: 'Enti pubblici', text: 'Comuni, scuole, parchi e edifici pubblici.', image: img('building', 800, 600), icon: 'building' },
  { title: 'Privati', text: 'Case, condomini e giardini privati.', image: img('livingRoom', 800, 600), icon: 'people' },
]

const news = [
  { date: '12 ottobre 2026', title: 'Inaugurato il nuovo reparto stiro di Ecolavabile Lucca', image: img('linens', 800, 500), icon: 'shirt' as IconName, to: { section: 'lavanderia', page: 'ecolavabile-lucca' } },
  { date: '28 settembre 2026', title: 'Gustosamente al festival del gusto di Lucca', image: img('dining', 800, 500), icon: 'utensils' as IconName, to: { section: 'ristorazione', page: 'catering-gustosamente' } },
  { date: '3 settembre 2026', title: 'Al via il restauro del verde in una villa storica lucchese', image: img('soil', 800, 500), icon: 'leaf' as IconName, to: { section: 'manutenzioni-del-verde', page: 'giardini-storici' } },
]

function Home() {
  const chiSiamo = findSection('chi-siamo')!
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <img src={img('cleaningWindow', 2000)} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/40" />
        <div className="container-x relative grid gap-12 py-24 md:py-36 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-accent-400">Cooperativa sociale · Lucca</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Un unico partner per <span className="text-accent-400">servizi</span> che si prendono cura.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Housekeeping, lavanderia, ristorazione, verde e manutenzioni: soluzioni integrate per strutture
              sociosanitarie, turismo, enti pubblici, aziende e privati.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contatti" className="btn-accent">Richiedi una consulenza</Link>
              <a href="#servizi" className="btn border border-white/40 text-white hover:bg-white/10">Scopri i servizi</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {services.slice(0, 4).map((s, i) => (
              <Link
                key={s.slug}
                to="/$section"
                params={{ section: s.slug }}
                className={`group rounded-2xl border border-white/15 bg-brand-950/40 p-5 backdrop-blur-md transition hover:bg-brand-950/60 ${i % 2 ? 'translate-y-6' : ''}`}
              >
                <span className="grid size-11 place-items-center rounded-xl bg-accent-500 text-brand-950">
                  <Icon name={s.icon} />
                </span>
                <p className="mt-4 font-bold">{s.title}</p>
                <p className="mt-1 text-xs text-white/70">{s.eyebrow}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Numeri */}
      <section className="relative z-10 border-b border-line bg-white">
        <div className="container-x grid grid-cols-2 divide-line py-10 md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center gap-2 px-4 py-4 text-center">
              <Icon name={statIcons[i]} className="size-8 text-brand-600" />
              <span className="text-3xl font-extrabold text-ink md:text-4xl">{s.value}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chi siamo */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative pb-16 pr-10 sm:pr-24">
            <img src={img('teamMeeting', 1000, 750)} alt="" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
            <img src={img('glovesHeart', 600, 600)} alt="" className="absolute bottom-0 right-0 aspect-square w-1/2 rounded-3xl border-8 border-sand object-cover shadow-xl" />
            <IconBadge name="people" size="lg" className="bottom-6 left-6" />
            <IconBadge name="heart" className="bottom-8 right-8" />
            <div className="absolute left-6 top-6 rounded-2xl bg-accent-500 px-5 py-4 text-brand-950 shadow-lg">
              <Icon name="clock" className="mb-1 size-6" />
              <p className="text-3xl font-extrabold">30</p>
              <p className="text-xs font-bold uppercase tracking-wider">anni insieme</p>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Chi siamo" title="Una cooperativa multiservizi al servizio del territorio" />
            <div className="prose-body mt-6">
              {chiSiamo.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chiSiamo.pages.map((p) => (
                <Link
                  key={p.slug}
                  to="/$section/$page"
                  params={{ section: 'chi-siamo', page: p.slug }}
                  className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 font-semibold shadow-sm ring-1 ring-line transition hover:ring-brand-200"
                >
                  {p.title}
                  <Arrow className="size-4 text-accent-600 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="scroll-mt-32 py-20 md:py-28">
        <div className="container-x">
          <SectionTitle center eyebrow="Servizi" title="Servizi integrati, un solo interlocutore" intro="Cinque aree di competenza che possono lavorare insieme o separatamente, adattate a ogni cliente." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:border-brand-200 hover:shadow-xl">
                <Link to="/$section" params={{ section: s.slug }} className="relative block aspect-[16/10] overflow-hidden">
                  <img src={sectionCover(s.slug, 800, 500)} alt={s.title} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-0 left-6 grid size-14 translate-y-1/2 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg">
                    <Icon name={s.icon} className="size-7" />
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-7 pt-10">
                  <p className="eyebrow text-accent-600">{s.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.intro}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.pages.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/$section/$page"
                          params={{ section: s.slug, page: p.slug }}
                          className="inline-block rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink/80 hover:bg-brand-100 hover:text-brand-800"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/$section" params={{ section: s.slug }} className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold uppercase tracking-wide text-brand-600">
                    Scopri di più <Arrow className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
            <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-7 text-white">
              <img src={img('teamOffice', 800, 900)} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-brand-950/20" />
              <div className="relative">
                <span className="grid size-14 place-items-center rounded-2xl bg-accent-500 text-brand-950 shadow-lg">
                  <Icon name="handshake" className="size-7" />
                </span>
                <p className="eyebrow mt-5 text-accent-400">Su misura</p>
                <h3 className="mt-2 text-2xl font-extrabold">Ti serve più di un servizio?</h3>
                <p className="mt-3 text-sm text-white/80">Costruiamo un pacchetto integrato con un unico contratto e un unico referente.</p>
                <Link to="/contatti" className="btn-accent mt-6">Parliamone</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Banda immagine con citazione */}
      <section className="relative overflow-hidden py-28 text-white md:py-40">
        <img src={img('seedlings', 2000, 900)} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-brand-950/75" />
        <div className="container-x relative max-w-4xl text-center">
          <Icon name="leaf" className="mx-auto size-10 text-accent-400" />
          <blockquote className="mt-6 text-2xl font-bold leading-snug md:text-4xl">
            “Il nostro lavoro si vede quando tutto funziona: ambienti puliti, pasti buoni, giardini curati e persone che lavorano con dignità.”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-widest text-white/70">Il Presidente di Coop Esseq</p>
        </div>
      </section>

      {/* Settori */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Aree di intervento" title="Per chi lavoriamo" intro="Ogni settore ha esigenze diverse: per ciascuno abbiamo squadre e procedure dedicate." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((s) => (
              <div key={s.title} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
                <IconBadge name={s.icon} />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="bg-brand-50 py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="Valori e metodi" title="Perché scegliere Coop Esseq" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title}>
                  <Icon name={v.icon} className="size-9 text-brand-600" />
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img src={img('vacuum', 700, 900)} alt="" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover" />
              <IconBadge name="broom" />
            </div>
            <div className="grid gap-4 pt-12">
              <div className="relative">
                <img src={img('vegetables', 700, 500)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
                <IconBadge name="utensils" />
              </div>
              <div className="relative">
                <img src={img('electrician', 700, 500)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
                <IconBadge name="building" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Dalla cooperativa" title="Ultime notizie" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <Link key={n.title} to="/$section/$page" params={n.to} className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt="" loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                  <IconBadge name={n.icon} />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">{n.date}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-brand-600">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-16">
        <div className="container-x">
          <p className="eyebrow text-center text-muted">Lavorano con noi</p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <li key={p} className="grid h-20 place-items-center rounded-xl border border-line px-3 text-center text-sm font-semibold text-muted">
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link to="/partner" className="text-sm font-bold uppercase tracking-wide text-brand-600 hover:underline">Tutti i partner</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
