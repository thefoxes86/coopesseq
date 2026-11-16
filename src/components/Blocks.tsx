import { Link } from '@tanstack/react-router'
import { company } from '#/data/site'
import type { IconName } from '#/data/site'
import { img } from '#/data/images'
import { Arrow, Icon } from './Icon'

/** Testo che gira in cerchio attorno a un'icona: timbro "artigianale". */
export function Stamp({ icon, text = 'cooperativa sociale · dal 1995 · lucca · ', className = '' }: { icon: IconName; text?: string; className?: string }) {
  return (
    <div className={`grid size-32 place-items-center rounded-full bg-cream text-brand-800 shadow-xl shadow-brand-900/10 ${className}`}>
      <svg viewBox="0 0 120 120" className="absolute size-32 animate-[spin_24s_linear_infinite]" aria-hidden="true">
        <defs>
          <path id="stamp-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-current font-display text-[11px] italic tracking-[0.08em]">
          <textPath href="#stamp-circle">{text}{text}</textPath>
        </text>
      </svg>
      <span className="grid size-12 place-items-center rounded-full bg-accent-500 text-white">
        <Icon name={icon} className="size-6" />
      </span>
    </div>
  )
}

/** Immagine ad arco con icona. */
export function ArchImage({ src, icon, className = '', alt = '' }: { src: string; icon: IconName; className?: string; alt?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="arch absolute inset-0 translate-x-3 translate-y-3 border-[1.5px] border-accent-500" />
      <img src={src} alt={alt} className="arch relative aspect-[4/5] w-full object-cover" />
      <IconBadge name={icon} className="bottom-6 left-6" />
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
    <section className="relative overflow-hidden bg-cream">
      <div className={`container-x relative grid items-end gap-12 pt-14 pb-16 md:pt-20 ${image ? 'lg:grid-cols-[1.5fr_1fr]' : ''}`}>
        <div className="pb-4">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-accent-500">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-line">—</span>
                {c.to ? (
                  <Link to={c.to} params={c.params as never} className="hover:text-accent-500">{c.label}</Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <p className="eyebrow text-accent-500">{eyebrow}</p>
          <h1 className="mt-2 max-w-4xl text-5xl font-normal leading-[1.02] text-ink md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
        </div>
        {image && (
          <ArchImage src={image} icon={icon} className="mx-auto w-full max-w-sm lg:mr-4" />
        )}
      </div>
      <div className="container-x">
        <div className="h-px bg-line" />
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-800 text-cream">
      <Icon name="leaf" className="pointer-events-none absolute -right-10 -top-10 size-72 rotate-12 text-cream/[0.05]" />
      <div className="container-x relative grid gap-8 py-20 md:grid-cols-[1.5fr_1fr] md:items-center">
        <div>
          <p className="eyebrow text-accent-400">Parliamone</p>
          <h2 className="mt-2 text-4xl font-normal leading-tight md:text-5xl">
            Hai bisogno di un servizio <em className="text-accent-400">su misura</em>?
          </h2>
          <p className="mt-4 max-w-xl text-cream/70">Sopralluogo gratuito e preventivo senza impegno, con un unico referente.</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link to="/contatti" className="btn-accent">
            Scrivici <Arrow />
          </Link>
          <a href={company.phoneHref} className="inline-flex items-center gap-2 text-cream/80 hover:text-cream">
            <Icon name="phone" className="size-4" /> oppure chiama il {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow text-accent-500">{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-normal leading-[1.08] text-ink md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted">{intro}</p>}
    </div>
  )
}

/** Badge con icona da sovrapporre alle immagini (il contenitore deve essere `relative`). */
export function IconBadge({ name, className = 'left-4 top-4', size = 'md' }: { name: IconName; className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'size-10', md: 'size-12', lg: 'size-14' }[size]
  const i = { sm: 'size-5', md: 'size-6', lg: 'size-7' }[size]
  return (
    <span className={`absolute z-10 grid place-items-center rounded-full bg-cream text-accent-500 shadow-lg shadow-brand-900/15 ${s} ${className}`}>
      <Icon name={name} className={i} />
    </span>
  )
}

const steps = [
  { title: 'Sopralluogo', text: 'Visitiamo la struttura e ascoltiamo le tue esigenze.' },
  { title: 'Progetto', text: 'Prepariamo un piano di servizio e un preventivo chiaro.' },
  { title: 'Avvio', text: 'Formiamo la squadra dedicata e partiamo nei tempi concordati.' },
  { title: 'Controllo', text: 'Verifiche periodiche e un referente sempre raggiungibile.' },
]

/** Blocco "come lavoriamo" con immagine ad arco. */
export function HowWeWork({ image = img('teamOffice', 1000, 1100), icon = 'people' }: { image?: string; icon?: IconName }) {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <ArchImage src={image} icon={icon} className="mx-auto w-full max-w-md" />
        <div>
          <SectionTitle eyebrow="Il metodo" title="Come lavoriamo" intro="Un percorso semplice e trasparente, dal primo contatto alla gestione quotidiana." />
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[4rem_1fr] items-baseline gap-4 py-5">
                <span className="font-display text-4xl italic text-accent-500">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-2xl">{s.title}</h3>
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
