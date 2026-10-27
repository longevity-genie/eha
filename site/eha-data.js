/* EHA 2026 site content. Edit this file only: the programme, speaker cards, countdown and calendar links
   are all generated from it, so a date or a name changed here changes everywhere on the page.
   Times are Brussels local time; on 5–6 November 2026 Brussels is on CET (UTC+01:00).
   Speaker e-mail addresses are deliberately not published. */
window.EHA = {
  title: 'Eurosymposium on Healthy Ageing and Longevity',
  edition: 8,
  siteUrl: 'https://www.eha-heales.org',
  timeZone: 'Europe/Brussels',
  utcOffset: '+01:00',
  updated: '2026-10-27',
  // Shown as a bar under the header. Delete this line (or set it to '') when the page becomes the official site.
  draftNotice: 'Draft of the new EHA 2026 site, prepared for the Heales organisers. Items marked "to be announced" or "to be confirmed" are not final.',
  registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScNjZdBEXSiQ-3rj75DXlgGcfhpw-0M1Z4-ddtHG9mYr6pqOw/viewform',
  registerText: 'Attendance is free, in Brussels or online. The short form asks whether you will come in person or follow online, so that we can plan the room and send you the practical details.',

  tracks: {
    policy: { name: 'Policy and longevity' },
    genetics: { name: 'Genetics, genomics and AI' },
    exosomes: { name: 'Exosomes and plasma' },
    bioelectric: { name: 'Bioelectricity' },
    interactive: { name: 'Hands-on' },
    trials: { name: 'Clinical trials' }
  },
  badgeLabels: { online: 'Online', interactive: 'Interactive', panel: 'Panel', keynote: 'Keynote', welcome: 'Opening' },

  themesLede: 'Each half-day has one theme. Thursday opens with European policy and moves to genetics and AI; Friday turns to exosomes and plasma, then to bioelectric signalling. A panel on clinical trials in Belgium and Europe and two hands-on sessions complete the programme.',
  themeCards: [
    { track: 'policy', when: 'Thursday morning', text: 'How Europe can make healthy longevity a research and health priority, and what a right to health and longevity would mean.' },
    { track: 'genetics', when: 'Thursday afternoon', text: 'Genomes, ageing clocks and AI agents: what genetic data can tell a person today, and where the evidence stops.' },
    { track: 'exosomes', when: 'Friday morning', text: 'Exosomes and other extracellular vesicles, and plasma-based rejuvenation, from cell biology to the first experiments.' },
    { track: 'bioelectric', when: 'Friday afternoon', text: 'Bioelectric signals that tell cells what to build, and what they could mean for regeneration and repair.' }
  ],

  programmeStatus: 'The programme is being finalised. Open slots are marked "to be announced" and talk titles are added as speakers send them.',
  programmeNote: 'Times are in Brussels local time unless you switch to your own time zone. "+ Calendar" adds a talk to Google Calendar.',

  days: [
    {
      date: '2026-11-05', tab: 'Thu 5 Nov', opens: '09:00', closes: '17:00',
      intro: 'Day 1 · Policy and longevity in the morning; genetics, genomics and AI in the afternoon.',
      sessions: [
        {
          track: 'policy', title: 'Policy and longevity',
          items: [
            { start: '09:00', end: '09:30', speakers: ['didier-coeurnelle'], title: 'Welcome and opening of the 8th Eurosymposium', badges: ['welcome'] },
            { start: '09:30', end: '10:15', speakers: ['alexander-tietz-latza'] },
            { start: '10:15', end: '10:45', kind: 'break', title: 'Coffee break' },
            { start: '10:45', end: '11:30', speakers: ['didier-coeurnelle'] },
            { start: '11:30', end: '12:00', title: 'Panel: clinical trials and longevity in Belgium and Europe', speakers: ['sven-bulterijs', 'marthe-de-boevre'], note: 'With a third panellist to be announced.', badges: ['panel'] },
            { start: '12:00', end: '13:30', kind: 'break', title: 'Lunch break' }
          ]
        },
        {
          track: 'genetics', title: 'Genetics, genomics and AI',
          items: [
            { start: '13:30', end: '14:15', speakers: ['anton-kulaga'], title: 'AI agents in longevity research: genetics and beyond', badges: ['interactive'] },
            { start: '14:15', end: '15:00', speakers: ['david-meyer'] },
            { start: '15:00', end: '15:30', kind: 'break', title: 'Coffee break' },
            { start: '15:30', end: '16:15', speakers: ['ninon-lecoquierre'], badges: ['online'] },
            { start: '16:15', end: '17:00', title: 'Predicting glucose before it happens', speakers: ['livia-zaharia'], badges: ['interactive'] }
          ]
        }
      ]
    },
    {
      date: '2026-11-06', tab: 'Fri 6 Nov', opens: '09:00', closes: '17:00',
      intro: 'Day 2 · Exosomes and plasma-based rejuvenation in the morning; bioelectricity in the afternoon.',
      sessions: [
        {
          track: 'exosomes', title: 'Exosomes and plasma-based rejuvenation',
          items: [
            { start: '09:00', end: '09:30', speakers: ['sven-bulterijs'], title: 'Welcome to day 2', badges: ['welcome'] },
            { start: '09:30', end: '10:15', speakers: ['nicolas-chernavsky', 'nina-torres-zanvettor'] },
            { start: '10:15', end: '10:45', kind: 'break', title: 'Coffee break' },
            { start: '10:45', end: '11:30', speakers: ['jan-lotvall'] },
            { start: '11:30', end: '12:00' },
            { start: '12:00', end: '13:40', kind: 'break', title: 'Lunch break' }
          ]
        },
        {
          track: 'bioelectric', title: 'Bioelectricity and regeneration',
          items: [
            { start: '13:40', end: '14:25', speakers: ['michael-levin'], badges: ['keynote', 'online'] },
            { start: '14:25', end: '14:55', speakers: ['leo-pio-lopez'] },
            { start: '15:00', end: '15:30', kind: 'break', title: 'Coffee break' },
            { start: '15:30', end: '16:15' },
            { start: '16:15', end: '17:00' }
          ]
        }
      ]
    }
  ],

  unscheduled: [],

  people: [
    {
      slug: 'didier-coeurnelle', name: 'Didier Coeurnelle', role: 'Co-chair', affiliation: 'Heales', short: 'Co-chair, Heales',
      photo: 'img/speakers/didier-coeurnelle.jpg',
      bio: 'Didier Coeurnelle co-founded Heales and co-chairs it, coordinating its activities and public communication; he also sits on the board of the International Longevity Alliance. He co-organises the Eurosymposium and, at the European Parliament on 1 October 2026, spoke about ageing in the light of artificial general intelligence.',
      links: [{ label: 'Heales', url: 'https://heales.org/who-we-are/' }, { label: 'ILA profile', url: 'https://longevityalliance.org/employee/didier-coeurnelle-belgium-brussels/' }]
    },
    {
      slug: 'alexander-tietz-latza', name: 'Alexander Tietz-Latza', role: 'CEO', affiliation: 'PRIMA Longevity Policy Institute, Cologne', short: 'PRIMA Longevity Policy Institute',
      photo: 'img/speakers/alexander-tietz-latza.jpg',
      bio: 'Alexander Tietz-Latza is a lawyer and political scientist who works to bring the biology of ageing into health and prevention policy. He leads PRIMA, a non-profit longevity policy institute in Cologne, after years in the German Bundestag and at the European Parliament, where he worked on the Active and Healthy Ageing initiative. He is treasurer of Heales and a board member of the International Longevity Alliance.',
      links: [{ label: 'PRIMA', url: 'https://prima.ngo/' }, { label: 'LinkedIn', url: 'https://de.linkedin.com/in/alexandertietz' }, { label: 'ILA profile', url: 'https://longevityalliance.org/employee/alexander-tietz-latza-germany-aachen-cologne/' }]
    },
    {
      slug: 'anton-kulaga', name: 'Anton Kulaga', role: 'Bioinformatician', affiliation: 'IBIMA, Rostock University Medical Center; Institute of Biochemistry of the Romanian Academy', short: 'IBIMA Rostock · Romanian Academy',
      photo: 'img/speakers/anton-kulaga.jpg',
      bio: 'Anton Kulaga is a bioinformatician working on the biology of ageing at IBIMA, Rostock University Medical Center, and with the Systems Biology of Aging Group in Bucharest. He builds open-source tools that turn genomic and health data into usable knowledge about longevity, among them Just-DNA-Seq for annotating personal genomes and Longevity Genie for AI agents in ageing research, and he is scientific lead of GlucoseDAO\'s glucose-forecasting models.',
      links: [{ label: 'GitHub', url: 'https://github.com/antonkulaga' }, { label: 'Just-DNA-Seq', url: 'https://dna-seq.github.io' }, { label: 'Longevity Genie', url: 'https://github.com/longevity-genie' }, { label: 'ORCID', url: 'https://orcid.org/0000-0001-7449-7054' }]
    },
    {
      slug: 'david-meyer', name: 'David H. Meyer', role: 'Group leader', affiliation: 'CECAD, University of Cologne', short: 'CECAD, University of Cologne',
      photo: 'img/speakers/david-meyer.jpg',
      bio: 'David H. Meyer leads an independent group at the Institute for Genome Stability in Ageing and Disease, part of the CECAD ageing research centre in Cologne. During his PhD with Björn Schumacher he built BiT age, an ageing clock based on gene expression, and later showed that the accumulation of random molecular variation is enough on its own to produce working ageing clocks. His group uses machine learning on multi-omic data to link genome instability to ageing.',
      links: [{ label: 'CECAD news: how ageing clocks tick', url: 'https://www.cecad.uni-koeln.de/outreach/news/article/how-aging-clocks-tick/' }, { label: 'Google Scholar', url: 'https://scholar.google.co.uk/citations?hl=en&user=UgMD1uMAAAAJ' }, { label: 'ORCID', url: 'https://orcid.org/0000-0002-5667-4720' }]
    },
    {
      slug: 'ninon-lecoquierre', name: 'Ninon Lecoquierre', role: 'Scientific consultant', affiliation: 'Heales; Université libre de Bruxelles', short: 'Heales · ULB',
      photo: 'img/speakers/ninon-lecoquierre.jpg',
      bio: 'Ninon Lecoquierre is a biologist and scientific consultant at Heales, and a doctoral researcher in evolutionary biology and ecology at the Université libre de Bruxelles. Her research covers the genomics and taxonomy of invertebrates. She coordinates the scientific programme of EHA 2026.',
      links: [{ label: 'Heales', url: 'https://heales.org/who-we-are/' }, { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ninon-lecoquierre-385a511a1/' }]
    },
    {
      slug: 'nicolas-chernavsky', name: 'Nicolás Cherñavsky', role: 'President', affiliation: 'Rejuvenation Science Institute (ICR), Brazil', short: 'Rejuvenation Science Institute, Brazil',
      photo: 'img/speakers/nicolas-chernavsky.jpg',
      bio: 'Nicolás Cherñavsky presides over the Rejuvenation Science Institute (ICR), a non-profit research institute in Campinas, Brazil, that he founded with Nina Torres Zanvettor. A journalist and translator by background, he has brought the science of rejuvenation to Portuguese-speaking readers since 2016. ICR runs experiments with open publication of results, starting with a replication, with the Biology Institute of Unicamp, of a reported rejuvenation of old rats with a plasma fraction from young pigs.',
      links: [{ label: 'ICR', url: 'https://www.rejuvenescimento.org/english' }, { label: 'ICR history', url: 'https://www.rejuvenescimento.org/our-history' }]
    },
    {
      slug: 'nina-torres-zanvettor', name: 'Nina Torres Zanvettor', role: 'Vice-president', affiliation: 'Rejuvenation Science Institute (ICR), Brazil', short: 'Rejuvenation Science Institute, Brazil',
      photo: 'img/speakers/nina-torres-zanvettor.jpg',
      bio: 'Nina Torres Zanvettor is a chemist and vice-president of the Rejuvenation Science Institute (ICR) in Campinas, Brazil. Through her publishing house NTZ she has published Portuguese translations of books on the biology of ageing. At ICR she helps run the institute\'s openly reported experiments on plasma-based rejuvenation.',
      links: [{ label: 'ICR', url: 'https://www.rejuvenescimento.org/english' }, { label: 'Interview (Lifeboat, 2020)', url: 'https://lifeboat.com/blog/2020/05/we-need-more-rejuvenation-translators-ntz-co-founders-nicolas-chernavsky-nina-torres-zanvettor' }]
    },
    {
      slug: 'jan-lotvall', name: 'Jan Lötvall', role: 'Professor and chief physician', affiliation: 'University of Gothenburg', short: 'University of Gothenburg',
      photo: 'img/speakers/jan-lotvall.jpg',
      bio: 'Jan Lötvall is a physician-scientist at the Krefting Research Centre of the University of Gothenburg. His group showed in 2007 that exosomes carry RNA from one cell to another, a finding that helped found the field of extracellular vesicle research. He was the first president of the International Society for Extracellular Vesicles and now works on turning vesicles into medicines, including their manufacture at scale.',
      links: [{ label: 'University profile', url: 'https://www.gu.se/en/about/find-staff/janlotvall' }, { label: 'ORCID', url: 'https://orcid.org/0000-0001-9195-9249' }]
    },
    {
      slug: 'michael-levin', name: 'Michael Levin', role: 'Distinguished Professor; Director, Allen Discovery Center', affiliation: 'Tufts University', short: 'Allen Discovery Center, Tufts University',
      photo: 'img/speakers/michael-levin.jpg',
      bio: 'Michael Levin leads the Allen Discovery Center at Tufts University. His lab studies the voltage patterns of ordinary, non-neural cells as a layer of information that stores the plan for body shape, and develops tools to read and rewrite it to steer regeneration, normalise tumours and build new living machines such as xenobots. He gives the keynote of the bioelectricity session online.',
      links: [{ label: 'Levin Lab', url: 'https://drmichaellevin.org/' }, { label: 'Allen Discovery Center', url: 'https://allencenter.tufts.edu/our-team/michael-levin/' }]
    },
    {
      slug: 'leo-pio-lopez', name: 'Léo Pio-Lopez', role: 'Senior scientist, Levin Lab', affiliation: 'Allen Discovery Center, Tufts University', short: 'Allen Discovery Center, Tufts University',
      photo: 'img/speakers/leo-pio-lopez.jpg',
      bio: 'Léo Pio-Lopez is a computational biologist in Michael Levin\'s group at Tufts. He uses machine learning and evolutionary algorithms to study bioelectric signalling: how groups of cells pursue goals for body shape, and what that means for regeneration, cancer and ageing.',
      links: [{ label: 'Allen Discovery Center', url: 'https://allencenter.tufts.edu/leo-pio-lopez-ph-d/' }, { label: 'Talk on ageing and bioelectricity', url: 'https://foresight.org/resource/leo-pio-lopez-aging-goal-directedness-and-bioelectricity/' }]
    },
    {
      slug: 'sven-bulterijs', name: 'Sven Bulterijs', role: 'Co-chair', affiliation: 'Heales; Longaevitas Consulting', short: 'Co-chair, Heales', track: 'trials',
      photo: 'img/speakers/sven-bulterijs.jpg',
      bio: 'Sven Bulterijs is a biogerontologist, co-founder and co-chair of Heales, and its scientific adviser. He worked on the ageing-related cross-link glucosepane at Yale and did his PhD at Ghent University on screening existing drugs for effects on lifespan in C. elegans. He presents the monthly science news at Heales meetings.',
      links: [{ label: 'Heales', url: 'https://heales.org/who-we-are/' }, { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=ebFqaH4AAAAJ&hl=en' }]
    },
    {
      slug: 'marthe-de-boevre', name: 'Marthe De Boevre', role: 'Professor of clinical mycotoxicology', affiliation: 'Ghent University', short: 'Ghent University', track: 'trials',
      photo: 'img/speakers/marthe-de-boevre.jpg',
      bio: 'Marthe De Boevre studies how long-term exposure to mould toxins in food relates to health, at Ghent University\'s Centre of Excellence in Mycotoxicology and Public Health, with an ERC Starting Grant. She coordinates GLORIA Gezondheidsmonitor, a Belgian population study that will follow 20,000 adults over 45 for twenty years to support research on healthy ageing and prevention.',
      links: [{ label: 'Speaker profile', url: 'https://www.health-care.be/speaker/prof-dr-marthe-de-boevre/' }, { label: 'ORCID', url: 'https://orcid.org/0000-0002-6151-5126' }]
    },
    {
      slug: 'livia-zaharia', name: 'Livia Zaharia', role: 'Founder', affiliation: 'GlucoseDAO; Heales', short: 'GlucoseDAO · Heales', track: 'interactive',
      photo: 'img/speakers/livia-zaharia.jpg',
      bio: 'Livia Zaharia founded GlucoseDAO, an open, community-run project that collects glucose-sensor data from volunteers to train glucose-forecasting models under shared data governance. She leads the Sugar-Sugar study, which measures how well people predict real glucose curves so that machine-learning models can be compared with a human baseline, and teaches hands-on workshops on building biomedical AI agents.',
      links: [{ label: 'GlucoseDAO', url: 'https://glucosedao.org/' }, { label: 'Sugar-Sugar', url: 'https://sugar-sugar.study/' }, { label: 'GitHub', url: 'https://github.com/Livia-Zaharia' }]
    },
    {
      slug: 'ilia-stambler', name: 'Ilia Stambler', role: 'Chairman', affiliation: 'International Longevity Alliance', onProgramme: false,
      photo: 'img/speakers/ilia-stambler.jpg',
      bio: 'Ilia Stambler is a historian of science who chairs the International Longevity Alliance and has long pressed for ageing research to become a health-policy priority.',
      links: [{ label: 'Longevity History', url: 'https://www.longevityhistory.com/' }]
    }
  ],

  labs: [
    {
      kicker: 'Interactive session · Thursday 13:30',
      title: 'AI agents in longevity research: genetics and beyond',
      by: 'Anton Kulaga · IBIMA, Rostock University Medical Center; Institute of Biochemistry of the Romanian Academy, Bucharest',
      text: 'Used on their own, AI assistants make errors in genetics that are hard to spot, such as invented variant identifiers and wrong citations. This session shows a workflow built to catch them. An assistant turns published studies into a module, a rulebook of which variants the evidence supports, what each genotype means and which paper backs each claim. The Just-DNA-Lite platform applies the rulebook to the speaker\'s public genome, and reviewer agents check the report for clarity and accuracy. Parts run live, including errors that passed the automatic checks.',
      points: [
        'Agents built for EHA that you can question from your phone about the conference and about genetics',
        'Agents for news, grant search and manuscript writing',
        'Closing discussion: which decisions an AI agent can take and which stay with researchers'
      ],
      links: [
        { label: 'Just-DNA-Lite', url: 'https://github.com/dna-seq/just-dna-lite' },
        { label: 'Module creator', url: 'https://github.com/dna-seq/just-module-creator' }
      ]
    },
    {
      kicker: 'Interactive session · Thursday 16:15',
      title: 'Predicting glucose before it happens',
      by: 'Livia Zaharia, Anton Kulaga, Nikolay Usanov, Alexey Karmazin · GlucoseDAO, Heales, IBIMA Rostock',
      text: 'A glucose sensor worn in everyday life already says something about metabolic health. Most wearers read the curve by eye and guess what comes next, and how accurate those guesses are has hardly been measured. In this session you play Sugar-Sugar: look at a real glucose curve, draw where it goes next and compete with an AI. The game is part of an ethics-approved study at Rostock University Medical Center that is building a benchmark of how well people predict glucose.',
      points: [
        'In one study, centenarians who wore a glucose sensor had lower average glucose than people aged 60 to 80',
        'If time allows: estimate your biological age from a selfie with a facial ageing clock, and vascular ageing from the optical pulse signal (PPG) of a phone camera'
      ],
      stat: { value: '≈40%', label: 'lower mortality with stable glucose among insulin-treated people over 75 with type 2 diabetes, independent of HbA1c' },
      links: [
        { label: 'Play Sugar-Sugar now', url: 'https://sugar-sugar.study/' },
        { label: 'Source code', url: 'https://github.com/GlucoseDAO/sugar-sugar' }
      ]
    }
  ],

  europe: [
    {
      when: '1 Oct 2026',
      title: 'Healthy longevity at the European Parliament',
      text: 'On International Longevity Day, the Longevity Policies Association and the International Longevity Alliance held the conference "Promoting Healthy Ageing and Longevity – A High Strategic Priority for the Future of EU Health" in the Parliament, hosted by MEP Valentina Palmisano. Two EHA 2026 speakers took part: Heales co-chair Didier Coeurnelle and Alexander Tietz-Latza of the PRIMA Longevity Policy Institute.',
      link: { label: 'Conference programme (PDF)', url: 'https://longevityalliance.org/wp-content/uploads/2026/09/healthy-longevity-promotion-brussels-october-1-preliminary-program.pdf' }
    },
    {
      when: '28 Oct 2026',
      title: 'EIC Pathfinder Challenge: Biotechnology for Healthy Ageing',
      text: 'The European Innovation Council set aside about €30 million for early-stage research on healthy ageing, with up to €4 million per project. The 2026 deadline was 28 October.',
      link: { label: 'Summary on Longevity.Technology', url: 'https://longevity.technology/news/an-eu-moonshot-to-solve-aging/' }
    },
    {
      when: 'Since 2025',
      title: 'European Health Data Space',
      text: 'The EU regulation that gives people access to their own health data across member states and opens it, under safeguards, to research. EHA 2024 was devoted to it, and closed with a declaration asking to speed it up.',
      link: { label: 'European Commission page', url: 'https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en' }
    }
  ],

  venue: {
    name: 'Muntpunt',
    lines: ['Place de la Monnaie 6 · Muntplein 6', '1000 Brussels, Belgium'],
    oneLine: 'Muntpunt, Place de la Monnaie 6, 1000 Brussels, Belgium',
    osm: 'https://www.openstreetmap.org/search?query=Muntpunt%2C%20Brussels',
    gmaps: 'https://www.google.com/maps/search/?api=1&query=Muntpunt%2C%20Place%20de%20la%20Monnaie%206%2C%201000%20Brussels',
    how: [
      { label: 'Metro', text: 'De Brouckère (lines 1 and 5), about 200 m.' },
      { label: 'Train', text: 'Brussels-Central, about 500 m on foot; direct trains from Brussels Airport.' },
      { label: 'Online', text: 'Choose online participation in the registration form to receive the connection details.' }
    ],
    note: 'Muntpunt is the Brussels public library next to the opera house La Monnaie. EHA 2018 was held in the same building.'
  },

  pastLede: 'Since 2012 the Eurosymposium has brought researchers, clinicians and longevity advocates together every two years. It met at the Royal Library of Belgium, then at Muntpunt, went online during the pandemic and came back to Brussels in 2024.',
  pastPhoto: { src: 'img/photos/eha2016-group-photo-panorama.jpg', alt: 'About sixty participants of the third Eurosymposium standing in front of a projection screen', caption: 'Participants of the 3rd Eurosymposium, Royal Library of Belgium, 2016.' },
  editions: [
    { year: '2026', label: '8th · 5–6 Nov · Muntpunt and online', theme: 'Policy and longevity; genetics and AI; exosomes and plasma; bioelectricity.', current: true, links: [{ label: 'Programme', url: '#programme' }] },
    { year: '2024', label: '7th · 22–23 Nov · Mundo Matonge, Ixelles, and online', theme: 'Sharing health data and AI insights for longevity in Europe.', with: 'Carina Dantas, Georg Fuellen, Ilia Stambler, David Wood and Huguette Diakabana (WHO)', links: [{ label: 'Videos', url: 'https://www.youtube.com/playlist?list=PLR-1vQ2-gT_c5ftvv_QKt9D6ruvvIM8xA' }, { label: 'Declaration', url: 'https://heales.org/wp-content/uploads/2024/11/Declaration-of-Sharing-Health-Data-and-using-AI-for-Healthy-Longevity.pdf' }] },
    { year: '2022', label: '6th · 25–26 Nov · online', theme: 'New scientific avenues, longevity advocacy and sharing big data for longevity.', with: 'Andrea Maier, João Pedro de Magalhães, Lorna Harries, Liz Parrish and Aubrey de Grey', links: [{ label: 'Videos', url: 'https://www.youtube.com/playlist?list=PLR-1vQ2-gT_cSgXlWTrC5wJ6DPPzgrrZr' }, { label: 'Programme', url: 'https://www.eha-heales.org/program-2022.html' }, { label: 'Declaration', url: 'https://heales.org/wp-content/uploads/2022/12/Declaration-English.pdf' }] },
    { year: '2020', label: '5th · 1 Oct · online', theme: 'Enhancing clinical trials for longevity therapies; biomarkers of human senescence.', with: 'Brian Kennedy, Irina Conboy, Greg Fahy, Nir Barzilai and Alex Zhavoronkov', links: [{ label: 'Videos', url: 'https://www.youtube.com/playlist?list=PLR-1vQ2-gT_c2kiKiGEtC9J9-EyvepM8D' }, { label: 'Declaration', url: 'https://drive.google.com/file/d/1JpCOYH3pM5Seyy_3g3FPNawqphsDDp1-/view' }] },
    { year: '2018', label: '4th · 8–10 Nov · Muntpunt', theme: 'Senescence, proteostasis and DNA damage; panels on investing in longevity and on clinical tests.', with: 'Thomas von Zglinicki, Andrea Maier, Björn Schumacher and Marco Demaria', links: [{ label: 'Videos', url: 'https://www.youtube.com/playlist?list=PLZAQ3kBXUjJlnNwca-jRZVbse_YVwVXew' }, { label: 'Programme', url: 'https://www.eha-heales.org/eha2018-program.html' }] },
    { year: '2016', label: '3rd · 29 Sep – 1 Oct · Royal Library of Belgium', theme: 'The biology of ageing, and the panel "Biological ageing: a disease or not?"', with: 'Claudio Franceschi, Jan Hoeijmakers and David Gems', links: [{ label: 'Programme', url: 'https://www.eha-heales.org/eha2016-program.html' }, { label: 'Declaration', url: 'https://www.eha-heales.org/declaration-old.html' }] },
    { year: '2014', label: '2nd · 1–3 Oct · Royal Library of Belgium', theme: 'A new age of long-term health and longevity.', with: 'João Pedro de Magalhães, Holly Brown-Borg, Graham Pawelec and Suresh Rattan', links: [{ label: 'Programme', url: 'https://www.eha-heales.org/eha2014-program.html' }] },
    { year: '2012', label: '1st · 12–14 Dec · Royal Library of Belgium', theme: 'Organised with the Leyden Academy on Vitality and Ageing: the biology of ageing as robust science.', with: 'Aubrey de Grey, David Gems, David Rubinsztein and Rudi Westendorp', links: [{ label: 'Programme', url: 'https://www.eha-heales.org/eha2012-program.html' }, { label: 'Report', url: 'https://www.fightaging.org/archives/2012/12/a-report-from-the-eurosymposium-on-healthy-aging/' }] }
  ],
  gallery: [
    { src: 'img/photos/eha2014-panel-dsc05590.jpg', alt: 'A panel of three speakers with microphones at EHA 2014' },
    { src: 'img/photos/eha2014-speaker-with-mic-dsc05517.jpg', alt: 'A speaker with a microphone in front of the EHA lectern, 2014' },
    { src: 'img/photos/eha2014-resolution-on-screen-dsc05596.jpg', alt: 'The 2014 resolution on preventive medicine for older people shown on screen' },
    { src: 'img/photos/eha2014-informal-evening-cafe-dsc05561.jpg', alt: 'Participants at a long table in a Brussels café during the informal evening, 2014' }
  ],
  declarationsIntro: 'Since 2016, each Eurosymposium has closed by adopting a declaration. Anyone can sign by writing to info@heales.org with their name, profession and country.',
  declarations: [
    { year: '2024', title: 'Declaration on Sharing Health Data and Using AI for Healthy Longevity', text: 'Calls for full data portability and a right to share health data for science, broad consent, FAIR data, altruistic databases and faster implementation of the European Health Data Space.', url: 'https://heales.org/wp-content/uploads/2024/11/Declaration-of-Sharing-Health-Data-and-using-AI-for-Healthy-Longevity.pdf' },
    { year: '2022', title: 'Second Brussels Declaration for Radical Healthspan Extension', text: '"After Covid times, rejuvenation times": renews the call to defeat age-related diseases within 25 years, adding AI, big data and open publication of all publicly funded results.', url: 'https://heales.org/wp-content/uploads/2022/12/Declaration-English.pdf' },
    { year: '2020', title: 'Declaration on Biomarkers and Clinical Tests', text: 'Asks for an accepted measure of biological age built from biomarkers and open databases, and for ethics committees to decide on longevity trials within a month.', url: 'https://drive.google.com/file/d/1JpCOYH3pM5Seyy_3g3FPNawqphsDDp1-/view' },
    { year: '2016', title: 'Brussels Declaration for Radical Healthspan Extension', text: 'Proposes a 25-year moonshot to overcome age-related diseases by targeting ageing itself, with public funding and affordable access for all.', url: 'https://www.eha-heales.org/declaration-old.html' }
  ],

  about: [
    'Heales, the Healthy Life Extension Society, is a non-profit association (vzw-asbl) based in Brussels. It promotes research to extend healthy human life, and argues that ending age-related diseases should become a public research priority whose results are shared by all.',
    'Heales publishes the monthly newsletter "The death of death" in English, French, Dutch and Spanish, holds monthly online meetings open to newcomers, and has organised the Eurosymposium every two years since 2012, together with the International Longevity Alliance.',
    'Co-chairs: Sven Bulterijs and Didier Coeurnelle. Scientific consultants: Ninon Lecoquierre and Shivani Kumar.'
  ],
  organisers: [
    { name: 'Heales', note: 'Healthy Life Extension Society, Brussels', url: 'https://heales.org/', logo: 'img/brand/heales-icon-512.png' },
    { name: 'International Longevity Alliance', note: 'Co-organiser', url: 'https://longevityalliance.org/', logo: 'img/brand/partner-ila-logo.png' }
  ],
  partners: [],
  newsletter: { title: 'The death of death', text: 'Monthly news on the science of longer, healthier lives, in four languages.', url: 'https://heales.org/newsletter/' },

  faq: [
    { q: 'Does it cost anything?', a: 'No. Attendance is free, in the room and online. Please register so that we know how many people to expect.' },
    { q: 'Can I follow the symposium online?', a: 'Yes. EHA 2026 takes place in Brussels and online, and some speakers present remotely. Choose online participation in the registration form.' },
    { q: 'What language is used?', a: 'English. Many participants also speak French or Dutch, the two languages of Brussels.' },
    { q: 'Who is the symposium for?', a: 'Researchers, clinicians, students, policy makers and anyone interested in the science of ageing and in extending healthy life. Talks are aimed at a mixed audience.' },
    { q: 'Do I need to bring anything?', a: 'For the interactive sessions, bring a charged phone: you will question AI agents and play a glucose-prediction game in the browser.' },
    { q: 'Where can I watch earlier editions?', a: 'Recordings of the 2018, 2020, 2022 and 2024 editions are on YouTube; the links are on the Past editions tab.' },
    { q: 'Someone asked me to pay for EHA. Is that real?', a: 'No. Registration is free, and nobody from Heales will ask you to pay or to send bank details for EHA 2026. Scammers have recently written to people while posing as a Heales organiser; if you receive a request for money, write to info@heales.org.' }
  ],

  contact: { intro: 'Questions about EHA 2026:', email: 'info@heales.org', address: 'Heales vzw-asbl, Rue Jules Delhaize 18, 1080 Brussels, Belgium' },
  social: [
    { label: 'YouTube: recordings of past editions', url: 'https://www.youtube.com/user/HealesMovies' },
    { label: 'LinkedIn', url: 'https://be.linkedin.com/company/heales-healthy-life-extension-society' },
    { label: 'Facebook', url: 'https://www.facebook.com/Healthy-Life-Extension-Society-205511232803482/' },
    { label: 'X: @HealesFr', url: 'https://twitter.com/HealesFr' },
    { label: 'Newsletter', url: 'https://heales.org/newsletter/' }
  ]
};
