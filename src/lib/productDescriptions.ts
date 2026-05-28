export interface ProductInfo {
  short: string;
  description: string;
  benefits: string[];
  ingredients?: { name: string; latin?: string; quantity?: string }[];
  form?: string;
  netWeight?: string;
  category?: string;
}

const catalogue: { keywords: string[]; info: ProductInfo }[] = [
  {
    keywords: ['chyawanprash', 'chyavanprash', 'च्यवनप्राश'],
    info: {
      short: 'Classical Ayurvedic health tonic for immunity, memory & vitality.',
      description:
        'Himayu Care Chyawanprash is a classical Ayurvedic health supplement prepared from over 40 Himalayan herbs. Regular consumption strengthens immunity, sharpens memory, improves digestion and promotes long-lasting vitality for all age groups.',
      benefits: [
        'Improves memory & intellect (मेधा, स्मृति)',
        'Enhances skin radiance & complexion (कान्ति)',
        'Boosts overall health & longevity (आरोग्य, आयुवृद्धि)',
        'Strengthens sensory organs (इन्द्रियसामर्थ्य)',
        'Kindles digestive fire (जाठराग्निदीपन)',
        'Regulates Vata dosha',
      ],
      category: 'Ayurvedic Health Tonic',
    },
  },
  {
    keywords: ['dashmool ark', 'dashmool', 'दशमूल'],
    info: {
      short: 'Powerful ten-root distillate for arthritis, asthma & postpartum care.',
      description:
        'Dashmool Ark is a classical distillate (Ark) prepared from the ten sacred roots of Ayurveda. It is specially indicated for arthritis, asthma, swelling, urinary disorders and is renowned as a postpartum tonic for women. Also used as Anupaan (adjuvant) in Vata disorders.',
      benefits: [
        'Arthritis & joint inflammation',
        'Asthma & respiratory conditions',
        "Women's diseases & postpartum recovery",
        'Swelling & oedema in the body',
        'Urinary tract disorders',
        'Flatulence & phlegm-related conditions',
      ],
      ingredients: [
        { name: 'बिल्व (Bael)', latin: 'Aegle marmelos' },
        { name: 'अग्निमंथ', latin: 'Premna mucroranta' },
        { name: 'श्योनाक', latin: 'Oroxylum indicum' },
        { name: 'पाटला', latin: 'Stereospermum suaveolens' },
        { name: 'गंभारी', latin: 'Gmelina arborea' },
        { name: 'बृहती', latin: 'Solanum indicum' },
        { name: 'कंटकारी', latin: 'Solanum surattense' },
        { name: 'शालपणीं', latin: 'Desmodium gangeticum' },
        { name: 'पृश्निपणीं', latin: 'Uraria picta' },
        { name: 'गोक्षुर', latin: 'Tribulus terrestris' },
        { name: 'प्रिज़वेटिव', latin: 'Sodium Benzoate', quantity: 'Q.s.' },
        { name: 'जल', latin: 'Water', quantity: 'Q.s.' },
      ],
      netWeight: '200ml',
      form: 'Ark (Distillate)',
      category: 'Ayurvedic Ark Formulation',
    },
  },
  {
    keywords: ['kasni ark', 'kasni', 'कासनी'],
    info: {
      short: 'Chicory-based distillate for liver, kidney & digestive health.',
      description:
        'Kasni Ark is a pure distillate of Kasni (Chicory), one of Ayurveda\'s most revered liver-protective herbs. It supports healthy liver and kidney function, eases respiratory conditions, reduces swelling and improves overall digestion.',
      benefits: [
        'Liver diseases & liver protection',
        'Kidney disorders & renal support',
        'Respiratory diseases & breathlessness',
        'Swelling & inflammation in the body',
        'Improves digestion & gut health',
      ],
      ingredients: [
        { name: 'कासनी', latin: 'Chicorium intybus', quantity: '2.5g' },
        { name: 'प्रिज़वेटिव', latin: 'Sodium Benzoate', quantity: 'Q.s.' },
        { name: 'जल', latin: 'Water', quantity: 'Q.s.' },
      ],
      netWeight: '200ml',
      form: 'Ark (Distillate)',
      category: 'Ayurvedic Ark Formulation',
    },
  },
  {
    keywords: ['makoy ark', 'makoy', 'मकोय'],
    info: {
      short: 'Black nightshade distillate for liver, jaundice & kidney care.',
      description:
        'Makoy Ark is prepared from Makoy (Black Nightshade / Solanum nigrum), a powerful hepatoprotective herb in Ayurveda. It is beneficial in jaundice, anemia, stomach disorders and supports both liver and kidney health.',
      benefits: [
        'Liver diseases & hepatoprotection',
        'Jaundice (Kamala)',
        'Anemia & blood disorders',
        'Stomach & digestive diseases',
        'Urinary tract disorders',
        'Kidney diseases & renal support',
      ],
      ingredients: [
        { name: 'मकोय', latin: 'Solanum nigrum', quantity: '2.5g' },
        { name: 'प्रिज़वेटिव', latin: 'Sodium Benzoate', quantity: 'Q.s.' },
        { name: 'जल', latin: 'Water', quantity: 'Q.s.' },
      ],
      netWeight: '200ml',
      form: 'Ark (Distillate)',
      category: 'Ayurvedic Ark Formulation',
    },
  },
  {
    keywords: ['phalatrikadi', 'phaltrikadi', 'phala trikadi', 'phalatrikadi kwath', 'phaltrikadi kwath', 'फलत्रिकादि', 'फ़लत्रिकादि', 'मधुमेह'],
    info: {
      short: 'Classical decoction for diabetes, fatty liver & renal health.',
      description:
        'Phalatrikadi Kwath (Madhumeh) is a classical Ayurvedic decoction (Kwath) used in the management of Diabetes mellitus, Liver disease, Fatty liver, Renal disease and Constipation. Direction: Soak 5gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink after filtering or as advised by physician.',
      benefits: [
        'Diabetes mellitus (Madhumeh)',
        'Liver disease & fatty liver',
        'Renal disease & kidney support',
        'Constipation & bowel regulation',
        'Vrikka (kidney) dosha',
      ],
      ingredients: [
        { name: 'Haritaki', latin: 'Terminalia chebula' },
        { name: 'Vibhitaki', latin: 'Terminalia bellarica' },
        { name: 'Amalaki', latin: 'Emblica Officinalis' },
        { name: 'Daruharidra', latin: 'Berberis aristata' },
        { name: 'Indrayan', latin: 'Citrullus colocynthis' },
        { name: 'Nagarmotha', latin: 'Cyperus rotundus' },
      ],
      netWeight: '200g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
    },
  },
  {
    keywords: ['pilolin', 'पाइलोलिन', 'piles', 'pile'],
    info: {
      short: 'Complete Ayurvedic kit (Capsule + Oil + Powder) for piles relief.',
      description:
        'Himayu Pilolin Kit is a complete 3-in-1 Ayurvedic solution for both internal and external piles (Haemorrhoids). The combo pack includes Pilolin Capsules, Pilolin Oil, and Pilolin Powder — working together to stop bleeding, shrink piles mass, reduce swelling and ease constipation. 100% Ayurvedic and natural.',
      benefits: [
        'Controls bleeding from piles',
        'Reduces piles mass',
        'Reduces swelling & inflammation',
        'Eases constipation',
        'Reduces pain',
        'Effective for both internal & external piles',
      ],
      form: 'Kit (Capsule + Oil + Powder)',
      netWeight: '60 Caps + 100ml Oil + 100g Powder',
      category: 'Ayurvedic Proprietary Formulation',
    },
  },
  {
    keywords: ['punarnava ark', 'punarnava', 'पुनर्नवा'],
    info: {
      short: 'Boerhavia root distillate for liver, kidney & joint disorders.',
      description:
        'Punarnava Ark is prepared from Punarnava (Boerhavia diffusa), meaning "that which renews the body." This revered Ayurvedic herb supports liver and kidney function, reduces inflammation and is widely used in joint pain and oedema.',
      benefits: [
        'Liver diseases & hepatoprotection',
        'Kidney diseases & renal support',
        'Joint pain & arthritis',
        'Swelling & oedema',
      ],
      ingredients: [
        { name: 'पुनर्नवा', latin: 'Boerhavia diffusa', quantity: '2.5g' },
        { name: 'प्रिज़वेटिव', latin: 'Sodium Benzoate', quantity: 'Q.s.' },
        { name: 'जल', latin: 'Water', quantity: 'Q.s.' },
      ],
      netWeight: '200ml',
      form: 'Ark (Distillate)',
      category: 'Ayurvedic Ark Formulation',
    },
  },
  {
    keywords: ['shadangpaaniya', 'shadang', 'षडंगपानीय'],
    info: {
      short: 'Classical six-herb decoction for fever, excessive thirst & digestive imbalance — referenced in Charaka Samhita.',
      description:
        'Shadangpaaniya is a classical Ayurvedic formulation composed of six potent herbs, referenced in Charaka Samhita (Chikitsa Sthana, Jwara Chikitsa Adhyaya) as a medicated water that is cooling, thirst-quenching and fever-relieving in nature.\n\nMore than a medicinal drink, Shadangpaaniya is an integral part of Ayurvedic living. It works to pacify the body\'s internal heat, restore Pitta balance and support digestive equilibrium. In conditions such as fever — common yet debilitating — it offers a simple, natural and highly effective remedy. In an age where chemical-based cooling beverages have become the norm, Ayurveda offers Shadangpaaniya as a pure, time-tested and enduring alternative.\n\nFor educational purposes only. Consult a qualified Ayurvedic physician before use.',
      benefits: [
        'All types of fever (Jwara)',
        'Pittadushti — vitiation of Pitta dosha',
        'Excessive thirst and burning sensation in the body',
        'Impaired digestion and Aam dosha (digestive toxin accumulation)',
        'Maintaining internal coolness during summer months',
        'Heat stroke (Loo)',
      ],
      ingredients: [
        { name: 'मुस्ता (Musta)', latin: 'Cyperus rotundus' },
        { name: 'पर्पट (Parpata)', latin: 'Fumaria parviflora' },
        { name: 'उशीर (Ushira)', latin: 'Vetiveria zizanioides' },
        { name: 'चन्दन (Chandana)', latin: 'Santalum album' },
        { name: 'उदीच्य (Udichya)', latin: 'Pavonia odorata' },
        { name: 'नागर / शुण्ठी (Nagara)', latin: 'Zingiber officinale' },
      ],
      netWeight: '50g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Formulation',
    },
  },
  {
    keywords: ['tulsi ark', 'tulsi', 'तुलसी'],
    info: {
      short: 'Holy basil distillate — nature\'s disinfectant for cold, cough & immunity.',
      description:
        'Tulsi Ark is a pure distillate of Ocimum sanctum (Holy Basil), revered in Ayurveda as the "Queen of Herbs." It is highly effective for cold, cough and fever. Acts as a natural disinfectant, blood purifier and antioxidant. Regular consumption reduces mental stress and boosts overall immunity.',
      benefits: [
        'Cold, cough & fever',
        'Natural disinfectant & antimicrobial',
        'Blood purifier',
        'Anti-oxidant',
        'Reduces mental stress',
        'Boosts overall immunity',
      ],
      ingredients: [
        { name: 'तुलसी', latin: 'Ocimum sanctum', quantity: '2.5g' },
        { name: 'प्रिज़वेटिव', latin: 'Sodium Benzoate', quantity: 'Q.s.' },
        { name: 'जल', latin: 'Water', quantity: 'Q.s.' },
      ],
      netWeight: '200ml',
      form: 'Ark (Distillate)',
      category: 'Ayurvedic Ark Formulation',
    },
  },
  {
    keywords: ['neurojoint', 'neuro joint', 'neurojoint'],
    info: {
      short: 'Advanced Ayurvedic formula for joint pain, nerve strength & mobility — our newest formulation.',
      description:
        'Neurojoint is Himayu Care\'s latest classical Ayurvedic formulation, developed for individuals suffering from joint pain, nerve weakness and restricted mobility. Combining time-tested herbs known for their anti-inflammatory, nerve-nourishing and Vata-pacifying properties, Neurojoint offers a natural, side-effect-free path to lasting relief.\n\nFormulated under GMP-certified conditions at Hans Herbals Pvt Ltd, Haridwar, each capsule delivers a precise, therapeutic dose of potent Himalayan botanicals.\n\nFor educational purposes only. Consult a qualified Ayurvedic physician before use.',
      benefits: [
        'Joint pain and stiffness (Sandhivata)',
        'Nerve weakness and neuropathy (Vata disorders)',
        'Arthritis — Osteoarthritis and Rheumatoid',
        'Restricted movement and flexibility',
        'Muscle weakness and fatigue',
        'Post-injury recovery and inflammation',
      ],
      ingredients: [
        { name: 'अश्वगंधा (Ashwagandha)', latin: 'Withania somnifera' },
        { name: 'शल्लकी (Shallaki)', latin: 'Boswellia serrata' },
        { name: 'गुग्गुलु (Guggulu)', latin: 'Commiphora mukul' },
        { name: 'निर्गुण्डी (Nirgundi)', latin: 'Vitex negundo' },
        { name: 'रास्ना (Rasna)', latin: 'Pluchea lanceolata' },
        { name: 'एरण्ड (Eranda)', latin: 'Ricinus communis' },
      ],
      form: 'Capsule',
      netWeight: '60 Caps',
      category: 'Ayurvedic Proprietary Formulation',
    },
  },
];

export function getProductInfo(title: string): ProductInfo | null {
  const normalized = title.toLowerCase();
  const match = catalogue.find(({ keywords }) =>
    keywords.some((kw) => normalized.includes(kw.toLowerCase()))
  );
  return match?.info ?? null;
}
