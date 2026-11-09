import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { CtaBand, HowWeWork, IconBadge, PageHero, SectionTitle } from '#/components/Blocks'
import { Arrow, Icon } from '#/components/Icon'
import { pageImage, sectionCover, sectionGallery } from '#/data/images'
import { company, findSection, services } from '#/data/site'

export const Route = createFileRoute('/$section/')({
  loader: ({ params }) => {
    const section = findSection(params.section)
    if (!section) throw notFound()
    return { section }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.section.title} – ${company.name}` },
          { name: 'description', content: loaderData.section.intro },
        ]
      : [],
  }),
  component: SectionPage,
})

function SectionPage() {
  const { section } = Route.useLoaderData()
  const gallery = sectionGallery(section.slug)
  const others = services.filter((s) => s.slug !== section.slug)

  return (
    <>
      <PageHero
        eyebrow={section.eyebrow}
        title={section.title}
        intro={section.intro}
        icon={section.icon}
        image={sectionCover(section.slug, 2000)}
        crumbs={[{ label: section.title }]}
      />

      {/* Introduzione con immagine */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle eyebrow={section.eyebrow} title={section.intro} />
            <div className="prose-body mt-6">
              {section.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <Link to="/contatti" className="btn-accent mt-8">Richiedi informazioni</Link>
          </div>
          <div className="relative">
            <img src={gallery[0] ?? sectionCover(section.slug, 900, 650)} alt="" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
            <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-line sm:flex">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-600 text-white">
                <Icon name={section.icon} />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-brand-700">{section.pages.length}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">ambiti di servizio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sottopagine con immagini */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <SectionTitle eyebrow="Approfondisci" title={`I servizi di ${section.title.toLowerCase()}`} />
          <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${section.pages.length === 3 ? 'lg:grid-cols-3' : section.pages.length === 2 ? '' : 'lg:grid-cols-4'}`}>
            {section.pages.map((p) => (
              <Link
                key={p.slug}
                to="/$section/$page"
                params={{ section: section.slug, page: p.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={pageImage(section.slug, p.slug, 700, 525)} alt={p.title} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                  <IconBadge name={section.icon} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-extrabold text-ink">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted">{p.summary}</p>
                  <span className="mt-auto flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-wide text-brand-600">
                    Scopri di più <Arrow className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork image={gallery[1]} icon={section.icon} />

      {/* Altri servizi */}
      {section.slug !== 'chi-siamo' && (
        <section className="bg-brand-50 py-20">
          <div className="container-x">
            <SectionTitle eyebrow="Servizi integrati" title="Scopri anche" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((s) => (
                <Link key={s.slug} to="/$section" params={{ section: s.slug }} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={sectionCover(s.slug, 700, 525)} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 to-transparent" />
                  <IconBadge name={s.icon} />
                  <p className="absolute bottom-0 left-0 p-5 text-lg font-extrabold text-white">{s.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
