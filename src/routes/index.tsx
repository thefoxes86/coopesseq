import { Link, createFileRoute } from '@tanstack/react-router'
import { ArchImage, CtaBand, IconBadge, SectionTitle, Stamp } from '#/components/Blocks'
import { Arrow, Icon } from '#/components/Icon'
import { img, sectionCover } from '#/data/images'
import type { IconName } from '#/data/site'
import { findSection, partners, services, stats } from '#/data/site'

export const Route = createFileRoute('/')({ component: Home })

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: 'heart', title: 'Inclusione', text: 'Creiamo lavoro stabile anche per persone in condizione di fragilità.' },
  { icon: 'shield', title: 'Qualità certificata', text: 'Procedure documentate, controlli periodici e personale formato.' },
  { icon: 'leaf', title: 'Sostenibilità', text: 'Prodotti ecologici, consumi ridotti e mezzi a basso impatto.' },
  { icon: 'handshake', title: 'Un unico referente', text: 'Un solo interlocutore per coordinare tutti i servizi.' },
]

const sectors: { title: string; text: string; image: string; icon: IconName }[] = [
  { title: 'Sociosanitario', text: 'RSA, cliniche, ospedali e centri diurni.', image: img('clinic', 700, 900), icon: 'heart' },
  { title: 'Turismo', text: 'Hotel, residence, agriturismi e case vacanza.', image: img('resort', 700, 900), icon: 'star' },
  { title: 'Aziende', text: 'Uffici, stabilimenti e centri commerciali.', image: img('officeCorridor', 700, 900), icon: 'chart' },
  { title: 'Enti pubblici', text: 'Comuni, scuole, parchi e edifici pubblici.', image: img('building', 700, 900), icon: 'building' },
  { title: 'Privati', text: 'Case, condomini e giardini privati.', image: img('livingRoom', 700, 900), icon: 'people' },
]

const news = [
  { date: '12 ottobre 2026', title: 'Inaugurato il nuovo reparto stiro di Ecolavabile Lucca', image: img('linens', 800, 600), icon: 'shirt' as IconName, to: { section: 'lavanderia', page: 'ecolavabile-lucca' } },
  { date: '28 settembre 2026', title: 'Gustosamente al festival del gusto di Lucca', image: img('dining', 800, 600), icon: 'utensils' as IconName, to: { section: 'ristorazione', page: 'catering-gustosamente' } },
  { date: '3 settembre 2026', title: 'Al via il restauro del verde in una villa storica lucchese', image: img('soil', 800, 600), icon: 'leaf' as IconName, to: { section: 'manutenzioni-del-verde', page: 'giardini-storici' } },
]

function Home() {
  const chiSiamo = findSection('chi-siamo')!
  return (
    <>
      {/* Hero editoriale */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-x grid gap-14 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-accent-500">Cooperativa sociale di servizi · Lucca</p>
            <h1 className="mt-4 text-5xl font-normal leading-[0.98] text-ink sm:text-6xl lg:text-[5.5rem]">
              Ci prendiamo cura dei luoghi, <em className="text-brand-600">e delle</em> <span className="scribble">persone</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Housekeeping, lavanderia, ristorazione, verde e manutenzioni: un unico partner per strutture
              sociosanitarie, turismo, enti pubblici, aziende e famiglie del territorio.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contatti" className="btn-accent">Richiedi una consulenza <Arrow /></Link>
              <a href="#servizi" className="btn-line text-brand-800">I nostri servizi</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-[1.2fr_1fr] items-end gap-4">
              <div className="relative">
                <img src={img('cleaningWindow', 800, 1100)} alt="" className="arch aspect-[3/4] w-full object-cover" />
                <IconBadge name="broom" className="bottom-5 left-5" />
              </div>
              <div className="relative mb-10">
                <img src={img('houseGarden', 600, 800)} alt="" className="arch aspect-[3/4] w-full object-cover" />
                <IconBadge name="leaf" size="sm" className="bottom-4 left-4" />
              </div>
            </div>
            <Stamp icon="heart" className="absolute -left-6 -top-6 hidden sm:grid" />
          </div>
        </div>

        {/* Numeri in riga, stile editoriale */}
        <div className="border-y border-line">
          <div className="container-x grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-8 md:px-8 ${i > 0 ? 'md:border-l md:border-line' : ''} ${i % 2 ? 'pl-6 border-l border-line md:pl-8' : ''}`}>
                <p className="font-display text-5xl text-brand-800 md:text-6xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chi siamo */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <ArchImage src={img('teamMeeting', 900, 1100)} icon="people" className="mx-auto w-full max-w-md" />
          <div>
            <SectionTitle eyebrow="Chi siamo" title="Una cooperativa nata per creare lavoro e valore sul territorio" />
            <div className="prose-body mt-6">
              {chiSiamo.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {chiSiamo.pages.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/$section/$page"
                    params={{ section: 'chi-siamo', page: p.slug }}
                    className="group flex items-center justify-between py-4"
                  >
                    <span className="font-display text-2xl transition group-hover:translate-x-2 group-hover:text-accent-500">{p.title}</span>
                    <span className="hidden text-sm text-muted sm:block">{p.summary}</span>
                    <Arrow className="size-5 text-accent-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Servizi: elenco numerato con immagine ad arco */}
      <section id="servizi" className="scroll-mt-32 bg-sand py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Servizi" title="Cinque mestieri, un solo interlocutore" />
            <p className="max-w-sm text-muted">Aree di competenza che lavorano insieme o separatamente, adattate a ogni cliente.</p>
          </div>
          <div className="mt-16 space-y-6">
            {services.map((s, i) => (
              <article key={s.slug} className="group grid gap-8 rounded-[2rem] bg-cream p-6 transition hover:shadow-xl hover:shadow-brand-900/5 md:grid-cols-[5rem_1fr_16rem] md:items-center md:p-8">
                <span className="font-display text-5xl italic text-accent-500">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-brand-800 text-cream">
                      <Icon name={s.icon} className="size-5" />
                    </span>
                    <p className="eyebrow text-muted">{s.eyebrow}</p>
                  </div>
                  <h3 className="mt-3 text-3xl md:text-4xl">
                    <Link to="/$section" params={{ section: s.slug }} className="hover:text-accent-500">{s.title}</Link>
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted">{s.intro}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.pages.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/$section/$page"
                          params={{ section: s.slug, page: p.slug }}
                          className="inline-block rounded-full border border-line px-3.5 py-1.5 text-sm text-ink/80 hover:border-accent-500 hover:text-accent-500"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/$section" params={{ section: s.slug }} className="relative block">
                  <img src={sectionCover(s.slug, 600, 450)} alt={s.title} loading="lazy" className="arch-sm aspect-[4/3] w-full object-cover transition duration-500 group-hover:-translate-y-1" />
                  <IconBadge name={s.icon} size="sm" className="bottom-3 left-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Citazione */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xs">
            <img src={img('seedlings', 600, 750)} alt="" loading="lazy" className="arch aspect-[4/5] w-full object-cover" />
            <IconBadge name="leaf" className="bottom-5 left-5" />
          </div>
          <figure>
            <blockquote className="text-3xl leading-snug text-ink md:text-5xl">
              <span className="text-accent-500">“</span>Il nostro lavoro si vede quando tutto funziona: ambienti puliti, pasti buoni, giardini curati e
              persone che lavorano con <em className="text-brand-600">dignità</em>.<span className="text-accent-500">”</span>
            </blockquote>
            <figcaption className="eyebrow mt-8 text-muted">— Il Presidente di Coop Esseq</figcaption>
          </figure>
        </div>
      </section>

      {/* Valori su verde */}
      <section className="bg-brand-800 py-24 text-cream md:py-28">
        <div className="container-x">
          <p className="eyebrow text-accent-400">Valori e metodi</p>
          <h2 className="mt-2 max-w-3xl text-4xl font-normal md:text-5xl">Perché scegliere Coop Esseq</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="bg-brand-800 p-8">
                <span className="grid size-12 place-items-center rounded-full border border-accent-400 text-accent-400">
                  <Icon name={v.icon} className="size-6" />
                </span>
                <h3 className="mt-6 text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settori: archi in fila */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionTitle center eyebrow="Aree di intervento" title="Per chi lavoriamo" intro="Ogni settore ha esigenze diverse: per ciascuno abbiamo squadre e procedure dedicate." />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((s, i) => (
              <div key={s.title} className={`text-center ${i % 2 ? 'lg:mt-12' : ''}`}>
                <div className="relative">
                  <img src={s.image} alt={s.title} loading="lazy" className="arch aspect-[3/4] w-full object-cover" />
                  <IconBadge name={s.icon} className="-bottom-6 left-1/2 -translate-x-1/2" />
                </div>
                <h3 className="mt-10 text-2xl">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notizie */}
      <section className="bg-sand py-24 md:py-28">
        <div className="container-x">
          <SectionTitle eyebrow="Dalla cooperativa" title="Ultime notizie" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {news.map((n) => (
              <Link key={n.title} to="/$section/$page" params={n.to} className="group">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img src={n.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <IconBadge name={n.icon} />
                </div>
                <p className="eyebrow mt-5 text-accent-500">{n.date}</p>
                <h3 className="mt-1 text-2xl leading-snug group-hover:text-brand-600">{n.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-20">
        <div className="container-x">
          <p className="eyebrow text-center text-muted">Lavorano con noi</p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <li key={p} className="font-display text-xl text-ink/50">{p}</li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link to="/partner" className="btn-line text-brand-800">Tutti i partner</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
