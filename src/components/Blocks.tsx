import { Link } from '@tanstack/react-router'
import { company } from '#/data/site'
import type { IconName } from '#/data/site'
import { img } from '#/data/images'
import { Arrow, Icon } from './Icon'

/** Immagine circolare con anello giallo, come nel riferimento grafico. */
export function CircleImage({ src, icon, className = '' }: { src: string; icon: IconName; className?: string }) {
  return (
    <div className={`relative mx-auto aspect-square w-full ${className}`}>
      {/* anello sottile */}
      <div className="absolute -inset-3 rounded-full border border-white/10" />
      {/* arco giallo */}
      <div className="absolute -inset-5 rotate-[-20deg] rounded-full border-2 border-accent-500 border-b-transparent border-l-transparent" />
      <div className="relative size-full overflow-hidden rounded-full shadow-2xl ring-8 ring-brand-900/60">
        <img src={src} alt="" className="size-full object-cover" />
      </div>
      <IconBadge name={icon} size="lg" className="bottom-[8%] left-[4%]" />
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  icon,
  image,
  crumbs,
}: {
  eyebrow: string
  title: string
  intro: string
  icon: IconName
  image?: string
  crumbs: { label: string; to?: string; params?: Record<string, string> }[]
}) {
  return (
    <section className="hero-bg relative overflow-hidden text-white">
      <Icon name={icon} className="pointer-events-none absolute -left-16 -bottom-20 size-80 text-white/[0.03]" />
      <div className={`container-x relative grid items-center gap-14 py-16 md:py-24 ${image ? 'lg:grid-cols-[1.3fr_1fr]' : ''}`}>
        <div>
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60">
            <Link to="/" className="hover:text-accent-400">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-white/30">/</span>
                {c.to ? (
                  <Link to={c.to} params={c.params as never} className="hover:text-accent-400">{c.label}</Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-400">
            <span className="size-2 rounded-full bg-accent-500" /> {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">{intro}</p>
        </div>
        {image && <CircleImage src={image} icon={icon} className="max-w-sm lg:max-w-md" />}
      </div>
    </section>
  )
}

const ctaPoints = ['Sopralluogo gratuito', 'Preventivo senza impegno', 'Un unico referente']

export function CtaBand() {
  return (
    <section className="hero-bg text-white">
      <div className="container-x grid gap-10 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Hai bisogno di un servizio su misura?</h2>
          <p className="mt-4 max-w-xl text-white/70">
            Raccontaci di cosa hai bisogno: ti proponiamo una soluzione integrata, con tempi e costi chiari.
          </p>
          <a href={company.phoneHref} className="mt-6 inline-flex items-center gap-3 text-accent-400 hover:text-accent-500">
            <span className="grid size-10 place-items-center rounded-lg bg-accent-500 text-brand-950">
              <Icon name="phone" className="size-5" />
            </span>
            <span className="font-semibold">{company.phone}</span>
          </a>
        </div>
        <div className="space-y-3">
          {ctaPoints.map((p) => (
            <p key={p} className="flex items-center gap-3 rounded-xl border border-white/15 px-4 py-3 text-sm">
              <svg viewBox="0 0 24 24" className="size-4 text-accent-500" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
              {p}
            </p>
          ))}
          <Link to="/contatti" className="btn-accent w-full justify-center">
            Richiedi una consulenza <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`inline-flex items-center gap-2 text-sm font-semibold text-accent-600 ${center ? 'justify-center' : ''}`}>
        <span className="size-2 rounded-full bg-accent-500" /> {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-[2.75rem] md:leading-[1.1]">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  )
}

/** Badge con icona da sovrapporre alle immagini (il contenitore deve essere `relative`). */
export function IconBadge({ name, className = 'left-4 top-4', size = 'md' }: { name: IconName; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'size-10 rounded-lg', md: 'size-12 rounded-xl', lg: 'size-14 rounded-2xl' }[size]
  const i = { sm: 'size-5', md: 'size-6', lg: 'size-7' }[size]
  return (
    <span className={`absolute z-10 grid place-items-center bg-accent-500 text-brand-950 shadow-lg ring-4 ring-brand-950/20 ${s} ${className}`}>
      <Icon name={name} className={i} />
    </span>
  )
}

const steps = [
  { n: '01', title: 'Sopralluogo', text: 'Visitiamo la struttura e ascoltiamo le tue esigenze.' },
  { n: '02', title: 'Progetto', text: 'Prepariamo un piano di servizio e un preventivo chiaro.' },
  { n: '03', title: 'Avvio', text: 'Formiamo la squadra dedicata e partiamo nei tempi concordati.' },
  { n: '04', title: 'Controllo', text: 'Verifiche periodiche e un referente sempre raggiungibile.' },
]

/** Blocco "come lavoriamo" con immagine laterale. */
export function HowWeWork({ image = img('teamOffice', 1000, 1100), icon = 'people' }: { image?: string; icon?: IconName }) {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img src={image} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover shadow-xl lg:aspect-[5/6]" />
          <IconBadge name={icon} size="lg" className="left-6 top-6" />
        </div>
        <div>
          <SectionTitle eyebrow="Il metodo" title="Come lavoriamo" intro="Un percorso semplice e trasparente, dal primo contatto alla gestione quotidiana." />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="card-dark p-6">
                <span className="grid size-11 place-items-center rounded-lg bg-accent-500 font-bold text-brand-950">{s.n}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
