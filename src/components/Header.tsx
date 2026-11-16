import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { company, sections } from '#/data/site'
import { Chevron, Icon } from './Icon'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${company.name} – home`}>
      <span className={`grid size-11 place-items-center rounded-full font-display text-2xl italic ${light ? 'bg-cream text-brand-800' : 'bg-brand-800 text-cream'}`}>
        e
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-xl font-medium ${light ? 'text-cream' : 'text-ink'}`}>
          Coop Esseq
        </span>
        <span className={`block text-xs italic ${light ? 'text-cream/60' : 'text-muted'}`}>
          cooperativa sociale
        </span>
      </span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  // Sottomenu chiuso dopo un click, finché il mouse non esce dalla voce
  const [closed, setClosed] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 [view-transition-name:site-header]">
      {/* Top bar */}
      <div className="bg-brand-800 text-sand/80 text-xs">
        <div className="container-x flex h-9 items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-white">
              <Icon name="phone" className="size-3.5" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" className="size-3.5" /> {company.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/contatti" className="hover:text-white">Lavora con noi</Link>
            <Link to="/partner" className="hidden sm:block hover:text-white">Partner</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-cream/95 backdrop-blur border-b border-line">
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden 2xl:flex items-center whitespace-nowrap" aria-label="Principale">
            {sections.map((s) => (
              <div key={s.slug} className="group relative" onMouseLeave={() => setClosed(null)}>
                <Link
                  to="/$section"
                  params={{ section: s.slug }}
                  className="flex items-center gap-1 px-3 py-7 text-[15px] text-ink hover:text-accent-500"
                  activeProps={{ className: '!text-accent-500 font-medium' }}
                  onClick={() => setClosed(s.slug)}
                >
                  {s.title}
                  <Chevron className="size-3.5 opacity-60 transition group-hover:rotate-180" />
                </Link>
                <div className={`invisible absolute left-0 top-full w-64 translate-y-2 opacity-0 transition ${closed === s.slug ? '' : 'group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100'}`}>
                  <ul className="rounded-2xl border border-line bg-cream p-2 shadow-xl shadow-brand-900/10">
                    {s.pages.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/$section/$page"
                          params={{ section: s.slug, page: p.slug }}
                          onClick={(e) => {
                            setClosed(s.slug)
                            e.currentTarget.blur()
                          }}
                          className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 hover:bg-sand hover:text-accent-600"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <Link
              to="/contatti"
              className="px-3 py-7 text-[15px] text-ink hover:text-accent-500"
              activeProps={{ className: '!text-accent-500 font-medium' }}
            >
              Contatti
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href={company.phoneHref} className="btn-line hidden text-brand-800 md:inline-flex">
              <Icon name="phone" className="size-4" /> Chiama ora
            </a>
            <button
              type="button"
              className="2xl:hidden grid size-11 place-items-center rounded-full border border-line"
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="2xl:hidden max-h-[calc(100dvh-7.25rem)] overflow-y-auto border-t border-line bg-cream" aria-label="Mobile">
            <ul className="container-x py-3">
              {sections.map((s) => (
                <li key={s.slug} className="border-b border-line last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/$section"
                      params={{ section: s.slug }}
                      onClick={() => setOpen(false)}
                      className="flex-1 py-3.5 font-display text-lg"
                    >
                      {s.title}
                    </Link>
                    <button
                      type="button"
                      className="grid size-10 place-items-center"
                      aria-label={`Sottomenu ${s.title}`}
                      aria-expanded={expanded === s.slug}
                      onClick={() => setExpanded(expanded === s.slug ? null : s.slug)}
                    >
                      <Chevron className={`size-4 transition ${expanded === s.slug ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {expanded === s.slug && (
                    <ul className="pb-3 pl-3">
                      {s.pages.map((p) => (
                        <li key={p.slug}>
                          <Link
                            to="/$section/$page"
                            params={{ section: s.slug, page: p.slug }}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-muted hover:text-accent-500"
                          >
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="border-b border-line">
                <Link to="/contatti" onClick={() => setOpen(false)} className="block py-3.5 font-display text-lg">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/partner" onClick={() => setOpen(false)} className="block py-3.5 font-display text-lg">
                  Partner
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
