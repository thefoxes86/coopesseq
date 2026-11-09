import { createFileRoute } from '@tanstack/react-router'
import { CtaBand, PageHero, SectionTitle } from '#/components/Blocks'
import { Icon } from '#/components/Icon'
import { company, partners } from '#/data/site'
import { img } from '#/data/images'

export const Route = createFileRoute('/partner')({
  head: () => ({ meta: [{ title: `Partner – ${company.name}` }] }),
  component: Partner,
})

const kinds = [
  { title: 'Enti pubblici', text: 'Comuni, aziende sanitarie e istituzioni che ci affidano servizi in appalto.' },
  { title: 'Rete cooperativa', text: 'Consorzi e associazioni di rappresentanza con cui condividiamo progetti e valori.' },
  { title: 'Imprese e fornitori', text: 'Aziende clienti e fornitori qualificati che rendono possibile il nostro lavoro.' },
]

function Partner() {
  return (
    <>
      <PageHero
        eyebrow="Partner"
        title="Una rete che lavora insieme"
        intro="Collaboriamo con enti, cooperative e imprese per offrire servizi di qualità e creare valore sul territorio."
        icon="handshake"
        image={img('teamOffice', 2000)}
        crumbs={[{ label: 'Partner' }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {kinds.map((k) => (
              <div key={k.title} className="rounded-2xl bg-brand-50 p-7">
                <Icon name="handshake" className="size-8 text-brand-600" />
                <h2 className="mt-4 text-lg font-extrabold">{k.title}</h2>
                <p className="mt-2 text-sm text-muted">{k.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <SectionTitle eyebrow="Chi ci ha scelto" title="I nostri partner" />
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {partners.map((p) => (
                <li key={p} className="grid h-28 place-items-center rounded-2xl border border-line px-4 text-center font-semibold text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
