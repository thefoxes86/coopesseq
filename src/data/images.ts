// Immagini DEMO da Unsplash: sostituirle con foto reali della cooperativa.

const P = {
  cleaningWindow: '1581578731548-c64695cc6952',
  kitchen: '1556911220-bff31c812dba',
  linens: '1517677208171-0bc6725a3e60',
  glovesHeart: '1585421514738-01798e348b17',
  construction: '1504307651254-35680f356dfd',
  teamOffice: '1600880292203-757bb62b4baf',
  resort: '1566073771259-6a8506099945',
  clinic: '1519494026892-80bbd2d6fd0d',
  buffet: '1555244162-803834f70033',
  soil: '1416879595882-3373a0480b5b',
  maintenance: '1558618666-fcd25c85cd64',
  vacuum: '1527515637462-cff94eecc1ac',
  laundromat: '1545173168-9f1947eebb7f',
  bathroom: '1584622650111-993a426fbf0a',
  livingRoom: '1631679706909-1844bbd07221',
  teamMeeting: '1521737604893-d14cc237f11d',
  officeCorridor: '1497366216548-37526070297c',
  houseGarden: '1600585154340-be6161a56a0c',
  whiteKitchen: '1541123437800-1bb1317badc2',
  restaurant: '1590846406792-0adc7f938f1d',
  seedlings: '1466692476868-aef1dfb1e735',
  tiles: '1523413651479-597eb2da0ad6',
  electrician: '1621905251189-08b45d6a269e',
  dining: '1414235077428-338989a2e8c0',
  healthcare: '1576091160550-2173dba999ef',
  building: '1600566753190-17f0baa2a6c3',
  vegetables: '1542838132-92c53300491e',
} as const

type PhotoKey = keyof typeof P

export function img(key: PhotoKey, w = 1200, h?: number) {
  return `https://images.unsplash.com/photo-${P[key]}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`
}

const sectionImages: Record<string, { cover: PhotoKey; gallery: PhotoKey[] }> = {
  'chi-siamo': { cover: 'teamMeeting', gallery: ['teamOffice', 'glovesHeart', 'seedlings'] },
  housekeeping: { cover: 'cleaningWindow', gallery: ['vacuum', 'bathroom', 'officeCorridor'] },
  lavanderia: { cover: 'laundromat', gallery: ['linens', 'resort', 'clinic'] },
  ristorazione: { cover: 'buffet', gallery: ['vegetables', 'kitchen', 'dining'] },
  'manutenzioni-del-verde': { cover: 'houseGarden', gallery: ['soil', 'seedlings', 'resort'] },
  'manutenzione-immobili': { cover: 'electrician', gallery: ['maintenance', 'tiles', 'building'] },
}

const pageImages: Record<string, PhotoKey> = {
  'chi-siamo/i-nostri-numeri': 'teamOffice',
  'chi-siamo/governance': 'teamMeeting',
  'chi-siamo/storia': 'seedlings',
  'chi-siamo/valori-e-metodi': 'glovesHeart',
  'housekeeping/sociosanitario': 'clinic',
  'housekeeping/turismo': 'bathroom',
  'housekeeping/fine-cantiere': 'construction',
  'housekeeping/uffici-e-aziende': 'officeCorridor',
  'lavanderia/ecolavabile-marlia': 'laundromat',
  'lavanderia/ecolavabile-lucca': 'linens',
  'lavanderia/progetti-futuri': 'seedlings',
  'ristorazione/sociosanitario': 'vegetables',
  'ristorazione/catering-gustosamente': 'buffet',
  'manutenzioni-del-verde/giardini-storici': 'resort',
  'manutenzioni-del-verde/verde-pubblico': 'seedlings',
  'manutenzioni-del-verde/giardini-privati': 'houseGarden',
  'manutenzioni-del-verde/aziende': 'soil',
  'manutenzione-immobili/sociosanitario': 'healthcare',
  'manutenzione-immobili/turismo': 'resort',
  'manutenzione-immobili/aziende': 'building',
  'manutenzione-immobili/privati': 'livingRoom',
}

export function sectionCover(slug: string, w = 1200, h?: number) {
  return img(sectionImages[slug]?.cover ?? 'teamMeeting', w, h)
}

export function sectionGallery(slug: string, w = 900, h = 650) {
  return (sectionImages[slug]?.gallery ?? []).map((k) => img(k, w, h))
}

export function pageImage(section: string, page: string, w = 1200, h?: number) {
  return img(pageImages[`${section}/${page}`] ?? sectionImages[section]?.cover ?? 'teamMeeting', w, h)
}
