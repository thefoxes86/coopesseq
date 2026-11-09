// Contenuti del sito. I testi sono segnaposto: sostituirli con quelli reali.

export type IconName =
  | 'people'
  | 'broom'
  | 'shirt'
  | 'utensils'
  | 'leaf'
  | 'building'
  | 'heart'
  | 'shield'
  | 'chart'
  | 'clock'
  | 'star'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'handshake'

export interface SubPage {
  slug: string
  title: string
  summary: string
  body: string[]
  points?: string[]
  stats?: { value: string; label: string }[]
  timeline?: { year: string; text: string }[]
}

export interface Section {
  slug: string
  title: string
  eyebrow: string
  icon: IconName
  intro: string
  body: string[]
  pages: SubPage[]
}

export const company = {
  name: 'Coop Esseq',
  legal: 'Coop Esseq Società Cooperativa Sociale',
  tagline: 'Servizi integrati per persone, strutture e territorio',
  phone: '+39 0583 000000',
  phoneHref: 'tel:+390583000000',
  email: 'info@coopesseq.it',
  address: 'Via Esempio 1, 55100 Lucca (LU)',
  vat: 'P.IVA 00000000000',
  hours: [
    { day: 'Lun – Ven', time: '8:30 – 13:00 / 14:00 – 18:00' },
    { day: 'Sab – Dom', time: 'Chiuso' },
  ],
}

export const stats = [
  { value: '350+', label: 'Soci e dipendenti' },
  { value: '30', label: 'Anni di esperienza' },
  { value: '200+', label: 'Clienti serviti' },
  { value: '5', label: 'Aree di servizio' },
]

export const sections: Section[] = [
  {
    slug: 'chi-siamo',
    title: 'Chi siamo',
    eyebrow: 'La cooperativa',
    icon: 'people',
    intro:
      'Una cooperativa sociale che unisce lavoro, inclusione e qualità del servizio, radicata nel territorio lucchese.',
    body: [
      'Coop Esseq nasce dalla volontà di un gruppo di soci di creare lavoro stabile e dignitoso, offrendo a enti pubblici, strutture sociosanitarie, aziende e privati servizi affidabili e su misura.',
      'Oggi coordiniamo housekeeping, lavanderia, ristorazione, manutenzione del verde e degli immobili con un unico referente per il cliente e squadre formate per ogni ambito.',
    ],
    pages: [
      {
        slug: 'i-nostri-numeri',
        title: 'I nostri numeri',
        summary: 'Persone, clienti e servizi: la cooperativa in cifre.',
        body: [
          'Dietro ogni numero ci sono persone: soci lavoratori, collaboratori e clienti che ogni giorno scelgono di lavorare con noi.',
        ],
        stats: [
          { value: '350+', label: 'Soci e dipendenti' },
          { value: '30', label: 'Anni di attività' },
          { value: '200+', label: 'Clienti attivi' },
          { value: '1.200 t', label: 'Biancheria lavata ogni anno' },
          { value: '450.000', label: 'Pasti serviti ogni anno' },
          { value: '80 ha', label: 'Aree verdi curate' },
        ],
      },
      {
        slug: 'governance',
        title: 'Governance',
        summary: 'Organi sociali, trasparenza e responsabilità.',
        body: [
          'La cooperativa è governata dall’Assemblea dei soci, che elegge il Consiglio di Amministrazione. Il CdA definisce le strategie e nomina il Presidente e il Direttore Generale.',
          'Adottiamo un modello organizzativo ai sensi del D.Lgs. 231/2001, un Codice Etico e una procedura di whistleblowing, e pubblichiamo ogni anno il bilancio sociale.',
        ],
        points: [
          'Assemblea dei soci',
          'Consiglio di Amministrazione',
          'Collegio Sindacale',
          'Organismo di Vigilanza 231',
        ],
      },
      {
        slug: 'storia',
        title: 'Storia',
        summary: 'Dalle origini a oggi, una crescita costruita insieme.',
        body: [
          'La nostra storia è fatta di piccoli passi e di grandi scelte, sempre condivise con i soci.',
        ],
        timeline: [
          { year: '1995', text: 'Fondazione della cooperativa con 12 soci e i primi servizi di pulizia.' },
          { year: '2003', text: 'Avvio dei servizi di ristorazione per strutture sociosanitarie.' },
          { year: '2010', text: 'Nasce il ramo manutenzione del verde e degli immobili.' },
          { year: '2018', text: 'Apertura della lavanderia Ecolavabile a Marlia.' },
          { year: '2023', text: 'Secondo stabilimento Ecolavabile a Lucca e lancio di Gustosamente catering.' },
        ],
      },
      {
        slug: 'valori-e-metodi',
        title: 'Valori e metodi',
        summary: 'Come lavoriamo e in cosa crediamo.',
        body: [
          'Mettiamo al centro le persone: chi lavora con noi e chi riceve i nostri servizi. Ogni intervento parte da un sopralluogo, segue procedure documentate e viene verificato nel tempo.',
        ],
        points: [
          'Inclusione lavorativa e pari opportunità',
          'Qualità certificata e controlli continui',
          'Sostenibilità ambientale dei prodotti e dei processi',
          'Formazione costante del personale',
          'Un unico referente per ogni cliente',
        ],
      },
    ],
  },
  {
    slug: 'housekeeping',
    title: 'Housekeeping',
    eyebrow: 'Pulizie e sanificazione',
    icon: 'broom',
    intro:
      'Pulizia, sanificazione e riordino degli ambienti con personale formato e prodotti a basso impatto ambientale.',
    body: [
      'Progettiamo il servizio di housekeeping sulle esigenze di ogni struttura: frequenze, protocolli e prodotti cambiano tra una RSA, un hotel o un ufficio.',
      'Ogni cantiere ha un capo squadra di riferimento e un piano di controllo qualità condiviso con il cliente.',
    ],
    pages: [
      {
        slug: 'sociosanitario',
        title: 'Sociosanitario',
        summary: 'RSA, ospedali, ambulatori e centri diurni.',
        body: [
          'Negli ambienti sociosanitari la pulizia è parte della cura. Applichiamo protocolli di sanificazione specifici per aree a diverso rischio e lavoriamo in coordinamento con il personale sanitario.',
        ],
        points: ['Protocolli per aree a basso, medio e alto rischio', 'Sanificazione camere e ambienti comuni', 'Gestione rifiuti speciali', 'Tracciabilità degli interventi'],
      },
      {
        slug: 'turismo',
        title: 'Turismo',
        summary: 'Hotel, residence, B&B e case vacanza.',
        body: [
          'Rifacimento camere, pulizia aree comuni e gestione dei cambi biancheria, anche con picchi stagionali e check-out ravvicinati.',
        ],
        points: ['Rifacimento camere e cambio biancheria', 'Aree comuni e reception', 'Servizio flessibile in alta stagione', 'Integrazione con la nostra lavanderia'],
      },
      {
        slug: 'fine-cantiere',
        title: 'Fine cantiere',
        summary: 'Pulizie post costruzione e ristrutturazione.',
        body: [
          'Rimuoviamo polveri, residui di cemento, vernici e silicone per consegnare gli ambienti pronti all’uso dopo lavori edili o ristrutturazioni.',
        ],
        points: ['Rimozione residui edili', 'Pulizia vetri e infissi', 'Trattamento pavimenti', 'Interventi rapidi su tempistiche di consegna'],
      },
      {
        slug: 'uffici-e-aziende',
        title: 'Uffici e aziende',
        summary: 'Pulizie ordinarie e straordinarie per ambienti di lavoro.',
        body: [
          'Servizi programmati negli orari più comodi per l’azienda, così da non interferire con le attività.',
        ],
        points: ['Pulizie giornaliere o periodiche', 'Uffici, magazzini e aree produttive', 'Fornitura materiali di consumo', 'Interventi straordinari su richiesta'],
      },
    ],
  },
  {
    slug: 'lavanderia',
    title: 'Lavanderia',
    eyebrow: 'Ecolavabile',
    icon: 'shirt',
    intro:
      'Lavaggio, sanificazione e noleggio di biancheria piana e divise con i nostri stabilimenti Ecolavabile.',
    body: [
      'Ecolavabile è il nostro marchio di lavanderia industriale: processi a basso consumo di acqua ed energia, ritiro e consegna con mezzi propri, tracciabilità di ogni capo.',
    ],
    pages: [
      {
        slug: 'ecolavabile-marlia',
        title: 'Ecolavabile Marlia',
        summary: 'Il primo stabilimento, dedicato al settore sociosanitario.',
        body: [
          'Lo stabilimento di Marlia gestisce la biancheria di RSA, cliniche e strutture assistenziali, con percorsi separati sporco/pulito e sanificazione certificata.',
        ],
        points: ['Biancheria piana e da ospite', 'Divise del personale', 'Ritiro e consegna programmati', 'Sanificazione certificata'],
      },
      {
        slug: 'ecolavabile-lucca',
        title: 'Ecolavabile Lucca',
        summary: 'Il polo per hotel, ristoranti e aziende.',
        body: [
          'A Lucca serviamo il settore turistico e della ristorazione con noleggio e lavaggio di lenzuola, spugne, tovagliato e abiti da lavoro.',
        ],
        points: ['Noleggio biancheria', 'Tovagliato per la ristorazione', 'Abiti da lavoro aziendali', 'Consegne anche nel fine settimana'],
      },
      {
        slug: 'progetti-futuri',
        title: 'Progetti futuri',
        summary: 'Dove stiamo andando con Ecolavabile.',
        body: [
          'Stiamo lavorando a un impianto di recupero delle acque di lavaggio, all’ampliamento del parco mezzi elettrici e a un sistema RFID per la tracciabilità in tempo reale dei capi.',
        ],
        points: ['Recupero acque di processo', 'Flotta di consegna elettrica', 'Tracciabilità RFID', 'Nuovi posti di lavoro inclusivi'],
      },
    ],
  },
  {
    slug: 'ristorazione',
    title: 'Ristorazione',
    eyebrow: 'Cucina e catering',
    icon: 'utensils',
    intro:
      'Pasti sani e bilanciati per strutture sociosanitarie, e un servizio catering per eventi con il marchio Gustosamente.',
    body: [
      'Le nostre cucine lavorano con prodotti del territorio, menù studiati da dietisti e piani HACCP rigorosi.',
    ],
    pages: [
      {
        slug: 'sociosanitario',
        title: 'Sociosanitario',
        summary: 'Ristorazione per RSA, ospedali e centri diurni.',
        body: [
          'Prepariamo pasti adatti alle esigenze degli ospiti: diete speciali, consistenze modificate e menù stagionali, con gestione completa della cucina o veicolazione dei pasti.',
        ],
        points: ['Menù elaborati da dietisti', 'Diete speciali e consistenze modificate', 'Gestione cucine interne', 'Piani HACCP certificati'],
      },
      {
        slug: 'catering-gustosamente',
        title: 'Catering Gustosamente',
        summary: 'Il nostro catering per eventi privati e aziendali.',
        body: [
          'Gustosamente porta in tavola la cucina toscana per matrimoni, feste, convegni e pranzi aziendali, dal coffee break alla cena di gala.',
        ],
        points: ['Eventi privati e aziendali', 'Coffee break e buffet', 'Menù personalizzati', 'Allestimento e servizio in sala'],
      },
    ],
  },
  {
    slug: 'manutenzioni-del-verde',
    title: 'Manutenzioni del verde',
    eyebrow: 'Giardini e parchi',
    icon: 'leaf',
    intro:
      'Progettazione, cura e manutenzione di giardini storici, parchi pubblici e spazi verdi privati e aziendali.',
    body: [
      'Le nostre squadre di giardinieri lavorano con attrezzature professionali e tecniche rispettose del paesaggio e della biodiversità.',
    ],
    pages: [
      {
        slug: 'giardini-storici',
        title: 'Giardini storici',
        summary: 'Cura specialistica di ville e giardini vincolati.',
        body: [
          'Interveniamo nei giardini delle ville storiche con personale formato sul restauro del verde, in accordo con le Soprintendenze.',
        ],
        points: ['Potature di siepi e topiarie', 'Recupero di aiuole storiche', 'Cura di agrumi in vaso', 'Rapporto con le Soprintendenze'],
      },
      {
        slug: 'verde-pubblico',
        title: 'Verde pubblico',
        summary: 'Parchi, aiuole, alberature e aree gioco.',
        body: [
          'Gestiamo appalti di manutenzione del verde per Comuni ed enti pubblici: sfalci, potature, piantumazioni e controllo delle alberature.',
        ],
        points: ['Sfalci e decespugliamenti', 'Potature in quota', 'Valutazione stabilità alberi', 'Manutenzione aree gioco'],
      },
      {
        slug: 'giardini-privati',
        title: 'Giardini privati',
        summary: 'Il tuo giardino curato tutto l’anno.',
        body: [
          'Dalla manutenzione periodica alla realizzazione di nuovi spazi verdi, con impianti di irrigazione e prati.',
        ],
        points: ['Manutenzione periodica', 'Realizzazione giardini', 'Impianti di irrigazione', 'Prati a rotolo e semina'],
      },
      {
        slug: 'aziende',
        title: 'Aziende',
        summary: 'Aree verdi aziendali sempre in ordine.',
        body: [
          'Contratti di manutenzione annuali per le aree verdi di stabilimenti, uffici e centri commerciali.',
        ],
        points: ['Contratti annuali', 'Interventi programmati', 'Pulizia piazzali', 'Gestione sfalci e smaltimento'],
      },
    ],
  },
  {
    slug: 'manutenzione-immobili',
    title: 'Manutenzione immobili',
    eyebrow: 'Edifici e impianti',
    icon: 'building',
    intro:
      'Piccoli lavori edili, tinteggiature, manutenzione ordinaria e pronto intervento per strutture e abitazioni.',
    body: [
      'Un servizio di manutenzione con squadre polivalenti: imbianchini, muratori, idraulici ed elettricisti coordinati da un unico tecnico referente.',
    ],
    pages: [
      {
        slug: 'sociosanitario',
        title: 'Sociosanitario',
        summary: 'Manutenzione di RSA e strutture sanitarie.',
        body: [
          'Interveniamo in strutture abitate da persone fragili, organizzando i lavori per ridurre al minimo disagi e rischi.',
        ],
        points: ['Manutenzione ordinaria programmata', 'Pronto intervento', 'Tinteggiature con prodotti certificati', 'Adeguamenti di sicurezza'],
      },
      {
        slug: 'turismo',
        title: 'Turismo',
        summary: 'Hotel e strutture ricettive pronte per la stagione.',
        body: [
          'Lavori di manutenzione e rinnovo nei periodi di bassa stagione, e reperibilità durante l’apertura.',
        ],
        points: ['Rinnovo camere', 'Manutenzione impianti', 'Interventi in bassa stagione', 'Reperibilità in alta stagione'],
      },
      {
        slug: 'aziende',
        title: 'Aziende',
        summary: 'Facility management per sedi e stabilimenti.',
        body: [
          'Un contratto unico per la manutenzione di uffici, capannoni e spazi produttivi.',
        ],
        points: ['Manutenzione edile', 'Piccoli impianti', 'Gestione segnalazioni', 'Report periodici'],
      },
      {
        slug: 'privati',
        title: 'Privati',
        summary: 'Lavori in casa affidabili e puntuali.',
        body: [
          'Tinteggiature, piccole riparazioni e manutenzioni per abitazioni e condomini, con preventivo gratuito.',
        ],
        points: ['Tinteggiature interne ed esterne', 'Piccole riparazioni', 'Condomini', 'Preventivo gratuito'],
      },
    ],
  },
]

export const services = sections.filter((s) => s.slug !== 'chi-siamo')

export const partners = [
  'Comune di Lucca',
  'ASL Toscana Nord Ovest',
  'Legacoop Toscana',
  'Confcooperative',
  'Fondazione Esempio',
  'Hotel Esempio',
]

export function findSection(slug: string) {
  return sections.find((s) => s.slug === slug)
}
