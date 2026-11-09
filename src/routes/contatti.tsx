import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PageHero } from '#/components/Blocks'
import { Icon } from '#/components/Icon'
import { company, services } from '#/data/site'
import { img } from '#/data/images'

export const Route = createFileRoute('/contatti')({
  head: () => ({ meta: [{ title: `Contatti – ${company.name}` }] }),
  component: Contatti,
})

function Contatti() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Parliamo del tuo progetto"
        intro="Scrivici o chiamaci: ti ricontattiamo entro un giorno lavorativo per un sopralluogo o un preventivo."
        icon="mail"
        image={img('officeCorridor', 2000)}
        crumbs={[{ label: 'Contatti' }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[
              { icon: 'pin' as const, label: 'Sede', value: company.address },
              { icon: 'phone' as const, label: 'Telefono', value: company.phone, href: company.phoneHref },
              { icon: 'mail' as const, label: 'Email', value: company.email, href: `mailto:${company.email}` },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 rounded-2xl bg-sand p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <div>
                  <p className="eyebrow text-muted">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block font-semibold hover:text-brand-600">{c.value}</a>
                  ) : (
                    <p className="mt-1 font-semibold">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-sand p-5">
              <p className="eyebrow mb-3 text-muted">Orari di apertura</p>
              {company.hours.map((h) => (
                <p key={h.day} className="flex justify-between py-1 text-sm">
                  <span className="font-semibold">{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </p>
              ))}
            </div>
            <div className="rounded-2xl border-2 border-dashed border-brand-200 p-5">
              <p className="font-bold">Lavora con noi</p>
              <p className="mt-1 text-sm text-muted">
                Invia il tuo curriculum a <a className="font-semibold text-brand-600" href={`mailto:${company.email}`}>{company.email}</a> indicando l’area di interesse.
              </p>
            </div>
          </div>

          <form
            className="rounded-2xl border border-line p-6 shadow-sm md:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <h2 className="text-2xl font-extrabold">Richiedi informazioni</h2>
            {sent ? (
              <p className="mt-6 rounded-xl bg-brand-50 p-5 text-brand-800">
                Grazie! Abbiamo ricevuto la tua richiesta e ti risponderemo al più presto.
              </p>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Nome e cognome" name="nome" required />
                <Field label="Azienda / Ente" name="azienda" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Telefono" name="telefono" type="tel" />
                <label className="sm:col-span-2 text-sm font-semibold">
                  Servizio di interesse
                  <select name="servizio" className="input mt-1.5">
                    {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                    <option>Altro</option>
                  </select>
                </label>
                <label className="sm:col-span-2 text-sm font-semibold">
                  Messaggio
                  <textarea name="messaggio" rows={5} required className="input mt-1.5" />
                </label>
                <label className="sm:col-span-2 flex items-start gap-2 text-xs text-muted">
                  <input type="checkbox" required className="mt-0.5 accent-brand-600" />
                  Ho letto l’informativa privacy e acconsento al trattamento dei dati.
                </label>
                <button type="submit" className="btn-accent sm:col-span-2 justify-center">Invia richiesta</button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="text-sm font-semibold">
      {label}{required && ' *'}
      <input name={name} type={type} required={required} className="input mt-1.5" />
    </label>
  )
}
