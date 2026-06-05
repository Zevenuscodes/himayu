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
    keywords: ['trinpanchmool kwath', 'trinpanchmool', 'trin panchmool', 'तृण पंचमूल'],
    info: {
      short: 'Classical five grass-root decoction for kidney, urinary & gynaecological disorders.',
      description:
        'Trinpanchmool Kwath is a classical Ayurvedic decoction prepared from five sacred grass roots — used for kidney disease, urinary tract disorders and gynaecological conditions. Direction: Soak 5gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink or as advised by physician.',
      benefits: [
        'Kidney disease and renal support',
        'Urinary tract disorders and UTI',
        'Urinary incontinence and frequency',
        'Gynaecological disorders',
        'Vrikka Dosha (kidney imbalance)',
      ],
      ingredients: [
        { name: 'Kush', latin: 'Desmostachya bipinnata', quantity: '20% each' },
        { name: 'Kash', latin: 'Saccharum spontaneum', quantity: '20% each' },
        { name: 'Shar', latin: 'Saccharum Munja', quantity: '20% each' },
        { name: 'Kandokshu', latin: 'Saccharum officinarum', quantity: '20% each' },
        { name: 'Darbh', latin: 'Desmostachya bipinnata', quantity: '20% each' },
      ],
      netWeight: '200g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
    },
  },
  {
    keywords: ['mansyadi kwath', 'mansyadi', 'मांस्यादि', 'mansyadhi'],
    info: {
      short: 'Three-herb decoction for anxiety, depression, OCD, insomnia and arthritis.',
      description:
        'Mansyadi Kwath is a classical Ayurvedic formulation for psychiatric and neurological disorders including anxiety, depression, OCD, psychosis, arthritis and insomnia. Direction: Soak 2gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink or as advised by physician.',
      benefits: [
        'Anxiety and depression',
        'OCD and psychiatric disorders',
        'Insomnia (Anidra)',
        'Arthritis and joint conditions',
        'Mental fatigue and stress',
      ],
      ingredients: [
        { name: 'Jatamansi', latin: 'Nardostachys jatamansi', quantity: '61.54%' },
        { name: 'Ashwagandha', latin: 'Withania somnifera', quantity: '30.76%' },
        { name: 'Khurasani Ajwain', latin: 'Hyoscyamus Niger', quantity: '7.70%' },
      ],
      netWeight: '100g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
    },
  },
  {
    keywords: ['panchvalkal kwath', 'panchvalkal', 'पंचवल्कल', 'panch valkal'],
    info: {
      short: 'Five sacred fig-bark decoction for skin diseases, ulcers, diabetes and infertility.',
      description:
        'Panchvalkal Kwath is a classical Ayurvedic decoction prepared from the barks of five Ficus trees — used for skin diseases, ulcers, diabetes, infertility and gynaecological disorders. Direction: Soak 5gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink or as advised by physician.',
      benefits: [
        'Skin diseases — eczema, psoriasis',
        'Ulcers — gastric and skin',
        'Diabetes mellitus',
        'Infertility — male and female',
        'Gynaecological disorders',
      ],
      ingredients: [
        { name: 'Vata (Bargad)', latin: 'Ficus benghalensis', quantity: '20% each' },
        { name: 'Peepal', latin: 'Ficus religiosa', quantity: '20% each' },
        { name: 'Udumber (Gular)', latin: 'Ficus glomoata', quantity: '20% each' },
        { name: 'Plaksha (Pakar)', latin: 'Ficus infectoria', quantity: '20% each' },
        { name: 'Pareesh', latin: 'Thespesia populnea', quantity: '20% each' },
      ],
      netWeight: '200g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
    },
  },
  {
    keywords: ['shirishadi kwath', 'shirishadi', 'शिरीषादि', 'shirshadhi'],
    info: {
      short: 'Four-herb decoction for allergic rhinitis, sinusitis, asthma and urticaria.',
      description:
        'Shirishadi Kwath is a classical Ayurvedic formulation (Sushruta Samhita) for allergic and respiratory conditions including rhinitis, sinusitis, bronchial asthma, cough and urticaria. Direction: Soak 5gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink or as advised by physician.',
      benefits: [
        'Allergic rhinitis and sinusitis',
        'Bronchial asthma',
        'Cough — acute and chronic',
        'Urticaria and allergic skin disease',
        'Sheetapitta (cold urticaria)',
      ],
      ingredients: [
        { name: 'Shirish', latin: 'Albizia lebbock', quantity: '25% each' },
        { name: 'Mulethi', latin: 'Glycyrrhiza glabra', quantity: '25% each' },
        { name: 'Chotikateri', latin: 'Solanum surattense', quantity: '25% each' },
        { name: 'Vasa', latin: 'Adhatoda vasica', quantity: '25% each' },
      ],
      netWeight: '200g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
    },
  },
  {
    keywords: ['maharasnadi kwath', 'maharasnadi', 'महारास्नादि', 'maharshidhi', 'maha rasnadi'],
    info: {
      short: 'Classical 25-herb decoction for arthritis, Parkinson\'s, sciatica & Vata disorders.',
      description:
        'Maharasnadi Kwath is a classical Ayurvedic formulation (Ayurved Sar Sangrah) for Sarvangvaat, osteoarthritis, Parkinson\'s disease, tremors, sciatica, rheumatoid arthritis, frozen shoulder and reproductive disorders. Direction: Soak 10gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink or as advised by physician.',
      benefits: [
        'Sarvangvaat — Vata paralysis',
        'Osteoarthritis and rheumatoid arthritis',
        'Parkinson\'s disease and tremors',
        'Frozen shoulder and sciatica',
        'Fascial paralysis',
        'Impotency and gynaecological conditions',
      ],
      ingredients: [
        { name: 'Rasna', latin: 'Pluchea lanceolata', quantity: '3.85% each' },
        { name: 'Yavasa', latin: 'Alhagi camelorum', quantity: '3.85% each' },
        { name: 'Bala Mool', latin: 'Sida cordifalia', quantity: '3.85% each' },
        { name: 'Erand Mool', latin: 'Ricinus communis', quantity: '3.85% each' },
        { name: 'Devdaru', latin: 'Cedrus deodara', quantity: '3.85% each' },
        { name: 'Kachur', latin: 'Curcuma Zedoaria', quantity: '3.85% each' },
        { name: 'Vacha', latin: 'Acorus calamus', quantity: '3.85% each' },
        { name: 'Vasa', latin: 'Adhatoda vasica', quantity: '3.85% each' },
        { name: 'Gokharu', latin: 'Tribulus terrestris', quantity: '3.85% each' },
        { name: 'Asgandh (Ashwagandha)', latin: 'Withania somnifera', quantity: '3.85% each' },
        { name: 'Amaltas Ka Guda', latin: 'Cassia fistula', quantity: '3.85% each' },
        { name: 'Shatawar', latin: 'Asparagus racemosus', quantity: '3.85% each' },
        { name: 'Peepal', latin: 'Ficus religiosa', quantity: '3.85% each' },
        { name: 'Katsaraiya', latin: 'Barleria prionitis', quantity: '3.85% each' },
        { name: 'Dhaniya', latin: 'Coriandrum sativum', quantity: '3.85% each' },
        { name: 'Sonth', latin: 'Zingiber officinale', quantity: '3.85% each' },
        { name: 'Haritaki', latin: 'Terminalia chebula', quantity: '3.85% each' },
        { name: 'Chavya', latin: 'Piper chaba', quantity: '3.85% each' },
        { name: 'Nagarmotha', latin: 'Cyperus scariosus', quantity: '3.85% each' },
        { name: 'Punarnava', latin: 'Boerhaavia diffusa', quantity: '3.85% each' },
        { name: 'Giloy (Gurch)', latin: 'Tinospora speciosa', quantity: '3.85% each' },
        { name: 'Vidhara', latin: 'Argyreia speciosa', quantity: '3.85% each' },
        { name: 'Saunf', latin: 'Faeniculum vulgare', quantity: '3.85% each' },
        { name: 'Choti Kateli', latin: 'Solanum surattense', quantity: '3.85% each' },
        { name: 'Badi Kateli', latin: 'Solanum indicum', quantity: '3.85% each' },
      ],
      netWeight: '200g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
    },
  },
  {
    keywords: ['varunadi kwath', 'varunadi', 'वरुणादि', 'varunadhi'],
    info: {
      short: 'Four-herb decoction for kidney stones, renal calculi, cysts and uterine disorders.',
      description:
        'Varunadi Kwath is a classical Ayurvedic formulation (Ayurved Sar Sangrah) for kidney stones, urinary tract calculi, bladder cysts, uterine diseases and liver disorders. Direction: Soak 10gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink or as advised by physician.',
      benefits: [
        'Kidney stones and renal calculi',
        'Urinary tract calculi',
        'Bladder cysts',
        'Uterine diseases',
        'Liver disorder',
      ],
      ingredients: [
        { name: 'Varun Ki Chaal', latin: 'Crataeva nurvala', quantity: '25% each' },
        { name: 'Sonth', latin: 'Zingiber officinale', quantity: '25% each' },
        { name: 'Gokhuru', latin: 'Tribulus terrestris', quantity: '25% each' },
        { name: 'Passan Bhed', latin: 'Gentiana kurroo', quantity: '25% each' },
      ],
      netWeight: '200g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
    },
  },
  {
    keywords: ['gojihwadi kwath', 'gojihwadi', 'गोजिह्वादि', 'gojihadi', 'gojihwa'],
    info: {
      short: 'Fifteen-herb decoction for cold, cough, asthma, rhinitis and loss of smell.',
      description:
        'Gojihwadi Kwath is a classical Ayurvedic formulation (Ayurved Sar Sangrah) for cold, cough, asthma, nasal congestion, rhinitis, diminished sense of smell and taste, fever and liver disorders. Direction: Soak 10gm in 200ml water for 8 hours, boil till ¼ remains, filter and drink or as advised by physician.',
      benefits: [
        'Cold, cough and flu',
        'Asthma and bronchial conditions',
        'Nasal blockage and rhinitis',
        'Diminished sense of smell and taste',
        'Fever and liver support',
      ],
      ingredients: [
        { name: 'Gojihwa', latin: 'Onosma bracteatum', quantity: '6.67% each' },
        { name: 'Mulethi', latin: 'Glycyrrhiza glabra', quantity: '6.67% each' },
        { name: 'Saunf', latin: 'Foeniculum vulgare', quantity: '6.67% each' },
        { name: 'Draksha (Grape)', latin: 'Vitis vinifera', quantity: '6.67% each' },
        { name: 'Anjir (Fig)', latin: 'Ficus carica', quantity: '6.67% each' },
        { name: 'Unnab (Jujube)', latin: 'Zizyphus sativa', quantity: '6.67% each' },
        { name: 'Vasa', latin: 'Adhatoda vasaka', quantity: '6.67% each' },
        { name: 'Jufa (Hyssop)', latin: 'Hyssopus officinalis', quantity: '6.67% each' },
        { name: 'Khubkhalan', latin: 'Sisymbrium irio', quantity: '6.67% each' },
        { name: 'Hansraj', latin: 'Adiantum longulatem', quantity: '6.67% each' },
        { name: 'Gul Vanafsha', latin: 'Viola odorata', quantity: '6.67% each' },
        { name: 'Alsi (Flaxseed)', latin: 'Linum usitatissimum', quantity: '6.67% each' },
        { name: 'Khatmi', latin: 'Althaea officinalis', quantity: '6.67% each' },
        { name: 'Kantkari', latin: 'Solanum surattense', quantity: '6.67% each' },
        { name: 'Maricha (Black Pepper)', latin: 'Piper nigrum', quantity: '6.67% each' },
      ],
      netWeight: '50g',
      form: 'Kwath (Decoction Powder)',
      category: 'Ayurvedic Classical Decoction',
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
  {
    keywords: ['saindhavadi tail', 'saindhavadi taila', 'saindhavadi tel', 'सेन्धवादि तेल', 'saindhavadi'],
    info: {
      short: 'Classical Ayurvedic oil for joint pain, arthritis, back pain & muscle stiffness.',
      description:
        'Saindhavadi Tail (सेन्धवादि तेल) is a classical Ayurvedic medicated oil referenced in Ashtanga Hridayam, prepared with Saindhava Lavana (rock salt) as the primary therapeutic agent combined with sesame oil and classical herbs. It is highly effective for all types of joint pain, arthritis, backache, sciatica and muscle stiffness. Used for external massage (Abhyanga). Available in 450ml.',
      benefits: [
        'Joint pain and stiffness (Sandhivata)',
        'Osteoarthritis and Rheumatoid Arthritis',
        'Back pain and lumbar spondylosis',
        'Sciatica and nerve pain',
        'Muscle stiffness and spasms',
        'Cervical spondylosis and frozen shoulder',
      ],
      ingredients: [
        { name: 'Saindhava Lavana (Rock Salt)', latin: 'Sodium chloride naturale', quantity: 'Classical ratio' },
        { name: 'Tila Taila (Sesame Oil)', latin: 'Sesamum indicum', quantity: 'Base oil' },
        { name: 'Devadaru', latin: 'Cedrus deodara', quantity: 'Classical ratio' },
        { name: 'Rasna', latin: 'Pluchea lanceolata', quantity: 'Classical ratio' },
        { name: 'Bala', latin: 'Sida cordifolia', quantity: 'Classical ratio' },
        { name: 'Madhuka (Mulethi)', latin: 'Glycyrrhiza glabra', quantity: 'Classical ratio' },
      ],
      form: 'Taila (Medicated Oil)',
      netWeight: '450ml',
      category: 'Ayurvedic Classical Oil',
    },
  },
  {
    keywords: ['ksheerbala tail', 'ksheerbala taila', 'ksheerbala tel', 'kheerbala', 'क्षीरबला तेल', 'ksheerbala'],
    info: {
      short: 'Classical Ayurvedic oil for joint pain, arthritis, nerve weakness & paralysis.',
      description:
        'Ksheerbala Tail (क्षीरबला तेल) is a classical Ayurvedic medicated oil referenced in Ashtanga Hridayam (Vatavyadhi Chikitsa). Prepared by processing sesame oil with Bala (Sida cordifolia) and cow\'s milk, it is one of the most revered Vata-pacifying oils in the classical pharmacopoeia. Used for massage (Abhyanga) and Panchakarma therapies. Highly effective for joint pain, arthritis, nerve weakness and postpartum recovery.',
      benefits: [
        'Joint pain and stiffness (Sandhivata)',
        'Arthritis — Osteoarthritis and Rheumatoid',
        'Nerve weakness and neuropathy',
        'Paralysis and Vata disorders',
        'Muscle weakness and fatigue',
        'Postpartum recovery and strengthening',
        'Sciatica and back pain',
      ],
      ingredients: [
        { name: 'Bala (Root)', latin: 'Sida cordifolia', quantity: 'Classical ratio' },
        { name: 'Tila Taila (Sesame Oil)', latin: 'Sesamum indicum', quantity: 'Base oil' },
        { name: 'Ksheera (Cow\'s Milk)', latin: 'Bos taurus', quantity: 'Classical ratio' },
      ],
      form: 'Taila (Medicated Oil)',
      netWeight: '50ml / 150ml / 450ml',
      category: 'Ayurvedic Classical Oil',
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

export function productMatchesQuery(title: string, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  const t = title.toLowerCase();
  if (t.includes(q)) return true;
  const entry = catalogue.find(({ keywords }) =>
    keywords.some((kw) => t.includes(kw.toLowerCase()))
  );
  if (!entry) return false;
  return entry.keywords.some((kw) => kw.toLowerCase().includes(q) || q.includes(kw.toLowerCase()));
}
