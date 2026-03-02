import onassis1 from '../onassis1.jpeg';
import onassis2 from '../onassis2.jpeg';
import onassis3 from '../onassis3.jpeg';
import onassis4 from '../onassis4.jpeg';
import onassis5 from '../onassis5.jpeg';
import onassis6 from '../onassis6.jpeg';
import onassis7 from '../onassis7.jpeg';
import onassis8 from '../onassis8.jpeg';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Systems', to: '/systems' },
  { label: 'Technology', to: '/technology' },
  { label: 'Applications', to: '/applications' },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Procurement', to: '/procurement' },
];

export const imageSet = {
  eodLive: onassis1,
  bombBlanket: onassis2,
  plateCarrier: onassis3,
  bootsFront: onassis4,
  bootsSole: onassis5,
  bootsSide: onassis6,
  bootsDual: onassis7,
  eodRender: onassis8,
};

export const systems = [
  {
    id: 'bomb-disposal',
    title: 'Bomb Disposal Systems',
    image: onassis1,
    description:
      'Heavy-duty explosive ordnance disposal suits engineered to mitigate blast overpressure, fragmentation, and thermal exposure. Designed for controlled mobility and sustained operational endurance.',
    capabilities: [
      'Integrated blast-resistant helmet system',
      'Reinforced torso and limb protection',
      'Thermal insulation layers',
      'Modular communication compatibility',
    ],
  },
  {
    id: 'blast-containment',
    title: 'Blast Containment Solutions',
    image: onassis2,
    description:
      'Rapid-deployment bomb blankets and safety containment systems designed to reduce explosive fragmentation and secondary damage in urban environments.',
    capabilities: [
      'Multi-layer ballistic fabric construction',
      'Lightweight portable design',
      'Rapid perimeter deployment',
      'High-energy absorption capacity',
    ],
  },
  {
    id: 'armor-platforms',
    title: 'Tactical Armor Platforms',
    image: onassis3,
    description:
      'Modular ballistic plate carrier systems built for mobility, durability, and adaptable threat protection.',
    capabilities: [
      'Level III / Level IV plate compatibility',
      'MOLLE modular integration',
      'Reinforced shoulder load distribution',
      'Lightweight composite material options',
    ],
  },
  {
    id: 'footwear',
    title: 'Tactical Footwear Systems',
    image: onassis4,
    description:
      'All-terrain tactical boots designed for impact absorption, structural support, and extended operational wear.',
    capabilities: [
      'High-traction rubber outsole',
      'Reinforced toe and heel',
      'Moisture-resistant upper materials',
      'Long-duration comfort engineering',
    ],
  },
];

export const metrics = [
  {
    value: '95%+',
    label: 'Blast Attenuation',
  },
  {
    value: 'Level IV',
    label: 'Ballistic Protection',
  },
  {
    value: '-40°C to +55°C',
    label: 'Operational Range',
  },
  {
    value: 'Field-Tested',
    label: 'Urban & Tactical Deployment',
  },
];

export const applicationEnvironments = [
  'Explosive Ordnance Disposal Units',
  'Military Tactical Operations',
  'Special Weapons & Tactics (SWAT)',
  'High-Risk Infrastructure Protection',
  'Urban Threat Mitigation',
];

export const technologyLayers = [
  'Outer impact-resistant shell',
  'Energy dispersion core',
  'Shock absorption layer',
  'Thermal regulation membrane',
  'Ergonomic internal support system',
];

export const competitorResearch = {
  snapshotDate: 'March 2, 2026',
  methodology:
    'Signals compiled from official company pages, official press releases, and NIJ standards/compliance documentation.',
  competitors: [
    {
      name: 'Point Blank Enterprises',
      focus: 'Broad body armor portfolio for military and law enforcement.',
      signal:
        'States five decades in body armor, NIJ-exceeding testing posture, and ISO 9001:2015 / ISO 14001:2015 certifications.',
      buyerTakeaway: 'Strong trust posture on quality systems and long-running body armor specialization.',
      source: 'https://pointblankenterprises.com/about-us.html',
    },
    {
      name: 'ArmorSource',
      focus: 'Ballistic head protection manufacturing at scale.',
      signal:
        'Positions itself as a leading ballistic helmet manufacturer and cites production capacity over 15,000 helmets per month.',
      buyerTakeaway: 'Public manufacturing scale messaging improves procurement confidence for volume programs.',
      source: 'https://armorsource.com/about-us/',
    },
    {
      name: 'Avon Protection',
      focus: 'Integrated CBRN and respiratory protection with military programs.',
      signal:
        'Highlights integrated protective systems and long-term supply relationships with UK MoD, NATO programs, and U.S. DoD.',
      buyerTakeaway: 'Program credibility is reinforced through named defense customers and long contract history.',
      source: 'https://www.avon-protection.com/',
    },
    {
      name: 'Safariland',
      focus: 'Law enforcement armor ecosystem and legacy brands.',
      signal:
        'Credits itself with early soft armor market innovation and combines armor lines across multiple acquired tactical brands.',
      buyerTakeaway: 'Brand depth and category breadth are used as a one-stop procurement narrative.',
      source: 'https://safariland.com/pages/safariland-armor',
    },
    {
      name: 'Gentex / Ops-Core',
      focus: 'Integrated helmet systems with comms and respiratory options.',
      signal:
        'Markets ballistic and non-ballistic helmet systems as integrated platforms for defense, law enforcement, and emergency response.',
      buyerTakeaway: 'Integrated systems positioning reduces buyer friction versus single-product vendors.',
      source: 'https://www.gentexcorp.com/capabilities/helmet-systems/',
    },
    {
      name: 'Galvion',
      focus: 'Global helmet systems and head systems modernization programs.',
      signal:
        'Reports over one million helmets sold and announced a U.S. Marine Corps Enhanced Combat Helmet contract award in 2025.',
      buyerTakeaway: 'Recent contract wins and installed base are used as proof of mission-scale adoption.',
      source: 'https://www.galvion.com/news/galvion-awarded-usmc-enhanced-combat-helmet-contract-via-mtek/',
    },
    {
      name: 'MKU',
      focus: 'Soldier protection + optronics + platform armoring.',
      signal:
        'Publishes broad soldier protection categories including ballistic helmets, body armor, shields, and armor plates.',
      buyerTakeaway: 'Portfolio breadth supports cross-category bids where agencies prefer consolidated suppliers.',
      source: 'https://www.mku.com/en-gb/',
    },
    {
      name: 'NP Aerospace',
      focus: 'Personal armor plus platform survivability and vehicle integration.',
      signal:
        'Describes itself as a world-leading armor manufacturer with personal armor, platform survivability, and vehicle systems.',
      buyerTakeaway: 'Vehicle survivability adjacency can increase value in integrated defense tenders.',
      source: 'https://npaerospace.com/',
    },
  ],
  benchmarkSignals: [
    {
      title: 'Verification Standards',
      text:
        'NIJ 0101.07 standard adoption and CPL visibility are now central trust signals in ballistic procurement conversations.',
      source:
        'https://nij.ojp.gov/library/publications/ballistic-resistant-body-armor-nii-standard-010107',
    },
    {
      title: 'Program Breadth',
      text:
        'Competitors increasingly package helmets, body armor, shields, communications, and lifecycle services into integrated procurement programs.',
      source: 'https://www.gentexcorp.com/capabilities/helmet-systems/',
    },
    {
      title: 'Manufacturing Transparency',
      text:
        'Public capacity claims, testing narratives, and certification disclosures are used as commercial proof points in procurement decisions.',
      source: 'https://armorsource.com/about-us/',
    },
    {
      title: 'Contract Signal Density',
      text:
        'Recent contract announcements are frequently used as social proof for readiness, sustainment capacity, and interoperability credibility.',
      source: 'https://www.galvion.com/news/galvion-awarded-usmc-enhanced-combat-helmet-contract-via-mtek/',
    },
  ],
  websiteContentPriorities: [
    {
      title: 'Proof-Led Product Pages',
      text:
        'For each platform, publish standards compliance, test methods, and mission-profile performance in a fixed evidence block.',
    },
    {
      title: 'Program Delivery Narrative',
      text:
        'Show end-to-end flow from requirement intake to deployment and sustainment with named timelines and support milestones.',
    },
    {
      title: 'Procurement-Specific UX',
      text:
        'Expose downloadable spec packs, RFP-ready datasheets, and region-specific compliance references without form friction.',
    },
    {
      title: 'Variant & Integration Maps',
      text:
        'Display how each system variant integrates with communications, helmets, sensors, and mission accessories.',
    },
  ],
  messagingAngles: [
    'Field-validated survivability with transparent standards mapping',
    'Mission-configurable kits for EOD, infantry, SWAT, and infrastructure protection',
    'Lifecycle partner model: training, spares, and rapid replacement SLAs',
    'Compliance-first international supply for controlled export programs',
  ],
};
