import { Link } from '@tanstack/react-router'
import { company } from '#/data/site'
import type { IconName } from '#/data/site'
import { img } from '#/data/images'
import { Icon } from './Icon'

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
    <section className={`relative overflow-hidden text-white ${image ? 'bg-brand-950' : 'hero-bg'}`}>
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/40" />
        </>
      )}
      <Icon name={icon} className="pointer-events-none absolute -right-10 -bottom-16 size-80 text-white/[0.06]" />
      <div className="container-x relative py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-white/70">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span>/</span>
              {c.to ? (
                <Link to={c.to} params={c.params as never} className="hover:text-white">{c.label}</Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="eyebrow text-accent-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/85">{intro}</p>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="bg-accent-500">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-brand-950 md:text-3xl">Hai bisogno di un servizio su misura?</h2>
          <p className="mt-2 text-brand-950/80">Contattaci per un sopralluogo gratuito e un preventivo senza impegno.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={company.phoneHref} className="btn bg-brand-950 text-white hover:bg-brand-800">
            <Icon name="phone" className="size-4" /> Chiama ora
          </a>
          <Link to="/contatti" className="btn border-2 border-brand-950 text-brand-950 hover:bg-brand-950 hover:text-white">
            Scrivici
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  )
}

/** Badge con icona da sovrapporre alle immagini (il contenitore deve essere `relative`). */
export function IconBadge({ name, className = 'left-4 top-4', size = 'md' }: { name: IconName; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'size-10 rounded-lg', md: 'size-12 rounded-xl', lg: 'size-14 rounded-2xl' }[size]
  const i = { sm: 'size-5', md: 'size-6', lg: 'size-7' }[size]
  return (
    <span className={`absolute z-10 grid place-items-center bg-brand-600 text-white shadow-lg ring-4 ring-white/70 ${s} ${className}`}>
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
          <img src={image} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl lg:aspect-[5/6]" />
          <IconBadge name={icon} size="lg" className="left-6 top-6" />
        </div>
        <div>
          <SectionTitle eyebrow="Il metodo" title="Come lavoriamo" intro="Un percorso semplice e trasparente, dal primo contatto alla gestione quotidiana." />
          <ol className="mt-10 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-600 font-extrabold text-white">{s.n}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
