import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { CtaBand, HowWeWork, IconBadge, PageHero, SectionTitle } from '#/components/Blocks'
import { Arrow, Icon } from '#/components/Icon'
import { img, pageImage, sectionCover, sectionGallery } from '#/data/images'
import { company, findSection } from '#/data/site'

export const Route = createFileRoute('/$section/$page')({
  loader: ({ params }) => {
    const section = findSection(params.section)
    const page = section?.pages.find((p) => p.slug === params.page)
    if (!section || !page) throw notFound()
    return { section, page }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.page.title} · ${loaderData.section.title} – ${company.name}` },
          { name: 'description', content: loaderData.page.summary },
        ]
      : [],
  }),
  component: SubPage,
})

function SubPage() {
  const { section, page } = Route.useLoaderData()
  const gallery = sectionGallery(section.slug)
  const siblings = section.pages.filter((p) => p.slug !== page.slug)
  return (
    <>
      <PageHero
        eyebrow={section.title}
        title={page.title}
        intro={page.summary}
        icon={section.icon}
        image={pageImage(section.slug, page.slug, 2000)}
        crumbs={[
          { label: section.title, to: '/$section', params: { section: section.slug } },
          { label: page.title },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="prose-body max-w-3xl">
              {page.body.map((p) => <p key={p}>{p}</p>)}
            </div>

            <figure className="relative mt-10">
              <img src={pageImage(section.slug, page.slug, 1400, 800)} alt={page.title} className="aspect-[16/9] w-full rounded-3xl object-cover shadow-lg" />
              <IconBadge name={section.icon} size="lg" className="left-6 top-6" />
              <figcaption className="mt-3 text-sm text-muted">{section.title} · {page.title} — immagine dimostrativa</figcaption>
            </figure>

            <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative">
                <img src={gallery[0] ?? sectionCover(section.slug, 800, 600)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                <IconBadge name="handshake" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">Un servizio pensato su di te</h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Ogni intervento parte da un’analisi delle esigenze e viene seguito da un referente dedicato. Personale
                  formato, attrezzature professionali e controlli periodici garantiscono continuità e qualità nel tempo.
                </p>
                <Link to="/contatti" className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-600">
                  Richiedi un sopralluogo <Arrow />
                </Link>
              </div>
            </div>

            {page.stats && (
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {page.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-brand-50 p-6">
                    <p className="text-3xl font-extrabold text-brand-700">{s.value}</p>
                    <p className="mt-1 text-sm text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {page.timeline && (
              <ol className="mt-10 border-l-2 border-brand-100">
                {page.timeline.map((t) => (
                  <li key={t.year} className="relative pb-8 pl-8 last:pb-0">
                    <span className="absolute -left-[9px] top-1 size-4 rounded-full border-4 border-white bg-accent-500 ring-2 ring-brand-100" />
                    <p className="text-xl font-extrabold text-brand-700">{t.year}</p>
                    <p className="mt-1 text-muted">{t.text}</p>
                  </li>
                ))}
              </ol>
            )}

            {page.points && (
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {page.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 rounded-xl border border-line p-4">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-500 text-brand-950">
                      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-10" /></svg>
                    </span>
                    <span className="font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-36 lg:self-start">
            <nav className="rounded-2xl border border-line p-5" aria-label={section.title}>
              <p className="eyebrow mb-3 text-muted">{section.title}</p>
              <ul className="space-y-1">
                {section.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/$section/$page"
                      params={{ section: section.slug, page: p.slug }}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-brand-50"
                      activeProps={{ className: 'bg-brand-600 text-white font-semibold hover:bg-brand-600' }}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rounded-2xl bg-brand-900 p-6 text-white">
              <Icon name="phone" className="size-7 text-accent-400" />
              <p className="mt-3 font-bold">Parla con noi</p>
              <p className="mt-1 text-sm text-white/70">Sopralluogo e preventivo gratuiti.</p>
              <a href={company.phoneHref} className="btn-accent mt-5 w-full justify-center">{company.phone}</a>
            </div>
          </aside>
        </div>
      </section>

      <HowWeWork image={gallery[1] ?? img('teamOffice', 1000, 1100)} icon={section.icon} />

      {siblings.length > 0 && (
        <section className="bg-brand-50 py-20">
          <div className="container-x">
            <SectionTitle eyebrow={section.title} title="Altri ambiti" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((p) => (
                <Link
                  key={p.slug}
                  to="/$section/$page"
                  params={{ section: section.slug, page: p.slug }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={pageImage(section.slug, p.slug, 700, 440)} alt={p.title} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                    <IconBadge name={section.icon} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold group-hover:text-brand-600">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.summary}</p>
                  </div>
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
