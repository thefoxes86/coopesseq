import type { IconName } from '#/data/site'

const paths: Record<IconName, React.ReactNode> = {
  people: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 13.6c3 .2 5.5 2.7 5.5 5.9" />
    </>
  ),
  broom: (
    <>
      <path d="M19 3 11 11" />
      <path d="M9.5 9.5 14.5 14.5" />
      <path d="M9.5 9.5c-2 1-4.5 1.5-6.5 1.5 0 4 3.5 9 7.5 10 .5-2 1.5-4.5 4-6.5" />
      <path d="M6 15l2 2" />
    </>
  ),
  shirt: (
    <path d="M8 3 3 6l2 5 2-1v11h10V10l2 1 2-5-5-3c0 2-1.8 3-4 3S8 5 8 3Z" />
  ),
  utensils: (
    <>
      <path d="M6 3v7a2 2 0 0 0 2 2v9" />
      <path d="M10 3v7a2 2 0 0 1-2 2" />
      <path d="M8 3v5" />
      <path d="M17 21V3c-2.5 1.5-3.5 4-3.5 7.5V13H17" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-9 6-15 16-16 0 10-6 16-15 16" />
      <path d="M4 20 13 11" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2v18" />
      <path d="M12 9h8v12" />
      <path d="M2 21h20" />
      <path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
    </>
  ),
  heart: (
    <path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20Z" />
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  chart: (
    <>
      <path d="M3 21h18" />
      <path d="M6 17v-5M11 17V7M16 17v-8M21 17V4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  star: (
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
      <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11l-3 3a1.5 1.5 0 0 1-2-2l3-3 5 1 3-1" />
      <path d="m2 9 3 1 4-1" />
      <path d="M5 10v4l4 4a1.4 1.4 0 0 0 2-2" />
    </>
  ),
}

export function Icon({
  name,
  className = 'size-6',
}: {
  name: IconName
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export function Chevron({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Arrow({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
