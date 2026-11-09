import { Link } from '@tanstack/react-router'
import { company, sections } from '#/data/site'
import { Logo } from './Header'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white/70">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">{company.tagline}.</p>
          <p className="mt-4 text-xs text-white/50">
            {company.legal}
            <br />
            {company.vat}
          </p>
        </div>

        <div>
          <h3 className="footer-title">Servizi</h3>
          <ul className="space-y-2 text-sm">
            {sections.slice(1).map((s) => (
              <li key={s.slug}>
                <Link to="/$section" params={{ section: s.slug }} className="hover:text-accent-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Sede e recapiti</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5"><Icon name="pin" className="size-4 mt-0.5 shrink-0 text-accent-400" />{company.address}</li>
            <li><a href={company.phoneHref} className="flex gap-2.5 hover:text-white"><Icon name="phone" className="size-4 mt-0.5 shrink-0 text-accent-400" />{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="flex gap-2.5 hover:text-white"><Icon name="mail" className="size-4 mt-0.5 shrink-0 text-accent-400" />{company.email}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Orari di apertura</h3>
          <ul className="space-y-2 text-sm">
            {company.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <span className="text-white">{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <Link to="/$section" params={{ section: 'chi-siamo' }} className="hover:text-white">Chi siamo</Link>
            <Link to="/partner" className="hover:text-white">Partner</Link>
            <Link to="/contatti" className="hover:text-white">Contatti</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {company.legal}. Tutti i diritti riservati.</span>
          <span>Privacy · Cookie · Trasparenza</span>
        </div>
      </div>
    </footer>
  )
}
