export interface MedicinePage {
  slug: string;
  name: string;
  hindiName?: string;
  tagline: string;
  category: string;
  form: string;
  netWeight: string;
  description: string;
  longDescription: string;
  benefits: string[];
  ingredients: { name: string; latin?: string; quantity?: string }[];
  dosage: string;
  faqs: { q: string; a: string }[];
  shopifyHandle: string;
  keywords: string[];
  image?: string;
}

export const medicinePages: MedicinePage[] = [
  {
    slug: 'shadangpaaniya',
    name: 'Shadangpaaniya',
    hindiName: 'षडंगपानीय',
    tagline: 'Classical Six-Herb Fever & Cooling Decoction',
    category: 'Ayurvedic Classical Formulation',
    form: 'Kwath (Decoction Powder)',
    netWeight: '50g',
    description: 'Classical six-herb decoction for fever, excessive thirst & digestive imbalance — referenced in Charaka Samhita.',
    longDescription: `Shadangpaaniya (षडंगपानीय) is one of the most celebrated classical formulations in Ayurveda, referenced in the Charaka Samhita (Chikitsa Sthana, Jwara Chikitsa Adhyaya). The name itself means "the six-limbed drink" — a medicated water comprising six potent herbs that together create a powerful cooling, fever-relieving and thirst-quenching decoction.

This formulation has been used for thousands of years across the Indian subcontinent to manage all types of fever (Jwara), Pitta imbalance and conditions arising from excess heat in the body. Unlike modern synthetic antipyretics, Shadangpaaniya works by addressing the root cause — pacifying vitiated Pitta dosha and clearing Aam (digestive toxins) from the system.

Himayu Care's Shadangpaaniya is prepared using the six classical herbs in their authentic ratios: Musta, Parpata, Ushira, Chandana, Udichya and Nagara. It is manufactured under GMP-certified conditions to ensure purity and consistency in every batch.`,
    benefits: [
      'All types of fever (Jwara) — acute and chronic',
      'Pittadushti — vitiation of Pitta dosha',
      'Excessive thirst and burning sensation in the body',
      'Impaired digestion and Aam dosha (digestive toxin accumulation)',
      'Maintaining internal coolness during summer months',
      'Heat stroke (Loo) and heatwave-related conditions',
    ],
    ingredients: [
      { name: 'मुस्ता (Musta)', latin: 'Cyperus rotundus' },
      { name: 'पर्पट (Parpata)', latin: 'Fumaria parviflora' },
      { name: 'उशीर (Ushira)', latin: 'Vetiveria zizanioides' },
      { name: 'चन्दन (Chandana)', latin: 'Santalum album' },
      { name: 'उदीच्य (Udichya)', latin: 'Pavonia odorata' },
      { name: 'नागर / शुण्ठी (Nagara)', latin: 'Zingiber officinale' },
    ],
    dosage: 'Boil 5g of Shadangpaaniya powder in 200ml of water. Reduce to 50ml (one-quarter). Filter and drink warm, or as directed by your Ayurvedic physician. Can be taken 2–3 times daily during fever.',
    faqs: [
      { q: 'What is Shadangpaaniya used for?', a: 'Shadangpaaniya is primarily used for managing fever (Jwara), excessive thirst, burning sensation and Pitta imbalance. It is a classical Ayurvedic cooling decoction referenced in Charaka Samhita.' },
      { q: 'Is Shadangpaaniya safe for children?', a: 'Yes, Shadangpaaniya is generally safe for children when taken in appropriate doses. Consult an Ayurvedic physician for child-specific dosage.' },
      { q: 'How is Shadangpaaniya different from regular medicines for fever?', a: 'Unlike synthetic antipyretics, Shadangpaaniya works by pacifying Pitta dosha and clearing Aam (toxins) — addressing the root cause rather than suppressing symptoms alone.' },
      { q: 'Can I take Shadangpaaniya daily?', a: 'It is safe for short-term daily use during fever or heat. For long-term use, consult an Ayurvedic physician.' },
    ],
    shopifyHandle: 'shadangpaaniya',
    keywords: ['shadangpaaniya', 'shadangpaneeya', 'shadangpaniya', 'shadang', 'षडंगपानीय', 'shadangpaaniya kwath', 'fever ayurvedic medicine', 'jwara chikitsa', 'ayurvedic decoction fever'],
    image: '/logo.jpeg',
  },
  {
    slug: 'chyawanprash',
    name: 'Chyawanprash',
    hindiName: 'च्यवनप्राश',
    tagline: 'Classical Ayurvedic Health Tonic for Immunity & Vitality',
    category: 'Ayurvedic Health Tonic',
    form: 'Herbal Jam',
    netWeight: '500g',
    description: 'Classical Ayurvedic health tonic prepared from over 40 Himalayan herbs for immunity, memory and vitality.',
    longDescription: `Chyawanprash (च्यवनप्राश) is one of the oldest and most celebrated formulations in Ayurveda — a classical herbal jam whose recipe is described in the Charaka Samhita. Named after the sage Chyawan, who is said to have regained his youth through this formulation, Chyawanprash has been trusted for millennia as a daily health tonic.

Himayu Care Chyawanprash is prepared from over 40 Himalayan herbs, with Amla (Indian Gooseberry) as the primary ingredient — one of the richest natural sources of Vitamin C. The classical recipe is followed without modification, combined with GMP-certified manufacturing to deliver consistent quality in every jar.

Regular consumption of Chyawanprash strengthens the immune system, sharpens memory, improves digestion, enhances skin radiance and promotes longevity. It is safe for all age groups — from children above 2 years to the elderly.`,
    benefits: [
      'Strengthens immunity and fights infections',
      'Improves memory and intellect (Medha)',
      'Enhances skin radiance and complexion',
      'Kindles digestive fire and improves gut health',
      'Boosts energy and reduces fatigue',
      'Regulates Vata dosha',
      'Safe for the entire family — children to elderly',
    ],
    ingredients: [
      { name: 'Amla (Indian Gooseberry)', latin: 'Emblica officinalis' },
      { name: 'Ashwagandha', latin: 'Withania somnifera' },
      { name: 'Shatavari', latin: 'Asparagus racemosus' },
      { name: 'Pippali', latin: 'Piper longum' },
      { name: 'Giloy', latin: 'Tinospora cordifolia' },
      { name: '35+ classical Himalayan herbs', latin: 'As per Charaka Samhita' },
    ],
    dosage: 'Adults: 1–2 teaspoons (5–10g) twice daily with warm milk or water. Children: ½ teaspoon once daily. Best taken in the morning on an empty stomach.',
    faqs: [
      { q: 'Can children take Chyawanprash?', a: 'Yes. Chyawanprash is safe for children above 2 years of age. Start with ½ teaspoon once daily.' },
      { q: 'When is the best time to take Chyawanprash?', a: 'The best time is in the morning before breakfast, taken with warm milk. It can also be taken at bedtime.' },
      { q: 'Does Himayu Care Chyawanprash contain sugar?', a: 'It contains natural sweeteners as per the classical recipe. Diabetic patients should consult their physician before use.' },
      { q: 'How long does it take to see results?', a: 'Most people notice improvements in energy and immunity within 4–6 weeks of regular use.' },
    ],
    shopifyHandle: 'chyawanprash',
    keywords: ['chyawanprash', 'chyavanprash', 'च्यवनप्राश', 'ayurvedic health tonic', 'immunity booster ayurveda', 'chyawanprash online india'],
  },
  {
    slug: 'kasni-ark',
    name: 'Kasni Ark',
    hindiName: 'कासनी अर्क',
    tagline: 'Pure Chicory Distillate for Liver & Kidney Health',
    category: 'Ayurvedic Ark Formulation',
    form: 'Ark (Distillate)',
    netWeight: '200ml',
    description: 'Pure distillate of Kasni (Chicory) for liver protection, kidney support and digestive health.',
    longDescription: `Kasni Ark (कासनी अर्क) is a pure herbal distillate prepared from Kasni — the Ayurvedic name for Chicory (Cichorium intybus). Kasni is one of Ayurveda's most powerful hepatoprotective (liver-protecting) herbs and has been used in classical medicine for centuries to treat liver diseases, kidney disorders and digestive conditions.

The ark (distillate) form ensures maximum bioavailability — the therapeutic essence of the herb is captured in pure water form, making it easy to absorb and gentle on the stomach. Himayu Care's Kasni Ark is manufactured under GMP-certified conditions with 2.5g of Kasni per 10ml dose.

Kasni Ark is particularly beneficial for those with fatty liver, jaundice, liver inflammation or chronic kidney issues. It also helps with respiratory conditions and reduces swelling throughout the body.`,
    benefits: [
      'Liver diseases & liver protection (hepatoprotective)',
      'Kidney disorders & renal support',
      'Respiratory diseases & breathlessness',
      'Swelling & inflammation in the body',
      'Improves digestion & gut health',
      'Jaundice & bile-related disorders',
    ],
    ingredients: [
      { name: 'कासनी (Kasni)', latin: 'Cichorium intybus', quantity: '2.5g per 10ml' },
      { name: 'Sodium Benzoate', latin: 'Preservative', quantity: 'Q.s.' },
      { name: 'Water', latin: 'Aqua', quantity: 'Q.s.' },
    ],
    dosage: '10–20ml diluted in equal parts water, twice daily before meals. Or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Kasni Ark used for?', a: 'Kasni Ark is primarily used for liver protection, kidney support and digestive health. It is especially effective for fatty liver, jaundice and kidney disorders.' },
      { q: 'Is Kasni Ark safe for daily use?', a: 'Yes, when taken in recommended doses it is safe for regular use. Consult a physician for long-term use beyond 3 months.' },
      { q: 'Can Kasni Ark be taken with other medicines?', a: 'Generally yes, but consult your doctor especially if you are on liver or kidney medication.' },
    ],
    shopifyHandle: 'kasni-ark',
    keywords: ['kasni ark', 'कासनी अर्क', 'kasni', 'chicory distillate ayurveda', 'liver ayurvedic medicine', 'kasni ark for liver'],
    image: '/kasni-ark.png',
  },
  {
    slug: 'dashmool-ark',
    name: 'Dashmool Ark',
    hindiName: 'दशमूल अर्क',
    tagline: 'Ten-Root Distillate for Arthritis, Asthma & Postpartum Care',
    category: 'Ayurvedic Ark Formulation',
    form: 'Ark (Distillate)',
    netWeight: '200ml',
    description: 'Classical distillate of the ten sacred Ayurvedic roots — for arthritis, respiratory conditions and postpartum recovery.',
    longDescription: `Dashmool Ark (दशमूल अर्क) is one of the most potent classical formulations in Ayurveda, prepared from the "Dashmool" — the ten sacred roots described in Ayurvedic texts. These ten roots are divided into two groups (Laghu Panchamool and Brihad Panchamool) and together create a powerful Vata-pacifying, anti-inflammatory and rejuvenating combination.

The distillate (ark) form of Dashmool is easy to administer and rapidly absorbed. It is especially renowned as a postpartum tonic for new mothers — helping in recovery, reducing Vata imbalance and restoring strength after childbirth. It is also highly effective in arthritis, asthma, swelling, urinary disorders and general debility.

Himayu Care's Dashmool Ark is prepared under GMP-certified conditions, maintaining the classical formulation without adulteration.`,
    benefits: [
      'Arthritis & joint inflammation',
      'Asthma & respiratory conditions',
      "Women's diseases & postpartum recovery",
      'Swelling & oedema in the body',
      'Urinary tract disorders',
      'Flatulence & phlegm-related conditions',
      'General weakness & Vata imbalance',
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
    ],
    dosage: '10–20ml diluted in equal parts water, twice daily. Traditionally consumed as Anupaan (adjuvant) with other medicines. Not recommended during pregnancy — consult your physician.',
    faqs: [
      { q: 'What is Dashmool Ark?', a: 'Dashmool Ark is a distillate prepared from the ten sacred Ayurvedic roots (Dashmool). It is used for arthritis, asthma, postpartum care and Vata disorders.' },
      { q: 'Is Dashmool Ark good for postpartum recovery?', a: 'Yes, Dashmool Ark is a classical postpartum tonic. It helps restore strength, reduce Vata imbalance and support recovery after childbirth. However, consult your physician before use during breastfeeding.' },
      { q: 'Can Dashmool Ark be taken during pregnancy?', a: 'Dashmool Ark is traditionally used postpartum, not during pregnancy. Please consult an Ayurvedic physician before taking during pregnancy.' },
    ],
    shopifyHandle: 'dashmool-ark',
    keywords: ['dashmool ark', 'दशमूल अर्क', 'dashmool', 'ten roots ayurveda', 'postpartum ayurvedic medicine', 'arthritis ayurvedic treatment'],
  },
  {
    slug: 'tulsi-ark',
    name: 'Tulsi Ark',
    hindiName: 'तुलसी अर्क',
    tagline: "Nature's Disinfectant — Holy Basil Distillate for Immunity",
    category: 'Ayurvedic Ark Formulation',
    form: 'Ark (Distillate)',
    netWeight: '200ml',
    description: "Pure Holy Basil distillate for cold, cough, fever and immunity — Ayurveda's most revered herb.",
    longDescription: `Tulsi Ark (तुलसी अर्क) is a pure distillate of Ocimum sanctum — Holy Basil, revered in India as the "Queen of Herbs" and "Mother Medicine of Nature." Tulsi has been a cornerstone of Ayurvedic and traditional Indian medicine for over 3,000 years, mentioned extensively in classical texts for its remarkable range of therapeutic benefits.

The ark (distillate) form concentrates the medicinal properties of fresh Tulsi leaves into a pure, water-based solution. It acts as a natural disinfectant, blood purifier, antioxidant and immune modulator. Tulsi Ark is particularly effective for respiratory conditions — cold, cough, fever, bronchitis and asthma.

Himayu Care Tulsi Ark is prepared under GMP-certified conditions using pure Ocimum sanctum (Holy Basil), with 2.5g of herb per 10ml dose.`,
    benefits: [
      'Cold, cough, fever and flu',
      'Natural disinfectant & antimicrobial action',
      'Blood purifier',
      'Powerful antioxidant',
      'Reduces mental stress and anxiety',
      'Boosts overall immunity',
      'Respiratory support — asthma, bronchitis',
    ],
    ingredients: [
      { name: 'तुलसी (Holy Basil)', latin: 'Ocimum sanctum', quantity: '2.5g per 10ml' },
      { name: 'Sodium Benzoate', latin: 'Preservative', quantity: 'Q.s.' },
      { name: 'Water', latin: 'Aqua', quantity: 'Q.s.' },
    ],
    dosage: '10–20ml diluted in equal parts water, 2–3 times daily. Best taken on an empty stomach in the morning. Can be mixed with honey for children.',
    faqs: [
      { q: 'What are the benefits of Tulsi Ark?', a: 'Tulsi Ark boosts immunity, treats cold and cough, purifies blood, reduces stress and acts as a natural antimicrobial. It is one of the most versatile Ayurvedic medicines.' },
      { q: 'Can Tulsi Ark be taken daily?', a: 'Yes, Tulsi Ark is safe for daily use as an immunity booster. Take 10ml diluted in water each morning.' },
      { q: 'Is Tulsi Ark safe for children?', a: 'Yes, Tulsi Ark is safe for children. Mix 5ml with honey or warm water. Consult a physician for children below 5 years.' },
    ],
    shopifyHandle: 'tulsi-ark',
    keywords: ['tulsi ark', 'तुलसी अर्क', 'holy basil distillate', 'tulsi benefits', 'ayurvedic immunity booster', 'tulsi for cold cough'],
  },
  {
    slug: 'makoy-ark',
    name: 'Makoy Ark',
    hindiName: 'मकोय अर्क',
    tagline: 'Black Nightshade Distillate for Liver & Kidney Health',
    category: 'Ayurvedic Ark Formulation',
    form: 'Ark (Distillate)',
    netWeight: '200ml',
    description: 'Potent Makoy (Black Nightshade) distillate for liver protection, jaundice, anaemia and kidney disorders.',
    longDescription: `Makoy Ark (मकोय अर्क) is prepared from Makoy (Solanum nigrum), commonly known as Black Nightshade — a powerful hepatoprotective (liver-protecting) herb widely used in Ayurvedic classical medicine. Despite its unfamiliar name, Makoy is one of the most effective herbs for liver and kidney conditions in the Ayurvedic pharmacopoeia.

The distillate (ark) of Makoy concentrates its therapeutic properties into a gentle, easily absorbed liquid form. It is particularly beneficial in jaundice, anaemia, liver inflammation and kidney disorders. Makoy works by stimulating bile production, supporting liver detoxification and protecting liver cells from damage.

Himayu Care Makoy Ark contains 2.5g of pure Solanum nigrum per 10ml and is manufactured under GMP-certified conditions.`,
    benefits: [
      'Liver diseases & hepatoprotection',
      'Jaundice (Kamala) — highly effective',
      'Anaemia & blood-related disorders',
      'Stomach & digestive diseases',
      'Urinary tract disorders',
      'Kidney diseases & renal support',
    ],
    ingredients: [
      { name: 'मकोय (Black Nightshade)', latin: 'Solanum nigrum', quantity: '2.5g per 10ml' },
      { name: 'Sodium Benzoate', latin: 'Preservative', quantity: 'Q.s.' },
      { name: 'Water', latin: 'Aqua', quantity: 'Q.s.' },
    ],
    dosage: '10–20ml diluted in equal parts water, twice daily before meals. Or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Makoy Ark used for?', a: 'Makoy Ark is primarily used for liver protection, jaundice, anaemia and kidney disorders. It is a powerful hepatoprotective herbal distillate.' },
      { q: 'Is Makoy Ark good for jaundice?', a: 'Yes, Makoy Ark is one of the most effective Ayurvedic remedies for jaundice. It supports liver detoxification and bile production.' },
    ],
    shopifyHandle: 'makoy-ark',
    keywords: ['makoy ark', 'मकोय अर्क', 'makoy', 'black nightshade ayurveda', 'liver ayurvedic medicine jaundice', 'solanum nigrum ark'],
  },
  {
    slug: 'punarnava-ark',
    name: 'Punarnava Ark',
    hindiName: 'पुनर्नवा अर्क',
    tagline: 'The Body Renewer — Distillate for Liver, Kidney & Joints',
    category: 'Ayurvedic Ark Formulation',
    form: 'Ark (Distillate)',
    netWeight: '200ml',
    description: 'Boerhavia diffusa distillate for liver health, kidney support, joint pain and oedema reduction.',
    longDescription: `Punarnava Ark (पुनर्नवा अर्क) is prepared from Punarnava (Boerhavia diffusa), whose name in Sanskrit means "that which renews the body." Punarnava is one of the most revered herbs in Ayurveda, classified as a Rasayana (rejuvenating herb) and described extensively in classical texts for its ability to restore health, reduce swelling and rejuvenate vital organs.

The herb has a unique combination of properties — it is simultaneously diuretic, anti-inflammatory, hepatoprotective and nephroprotective (kidney-protecting). The ark (distillate) form of Punarnava delivers these benefits in a highly bioavailable, gentle liquid form.

Punarnava Ark is particularly effective for conditions involving fluid retention (oedema), liver disorders, kidney dysfunction and joint inflammation. It is also commonly used in conditions like nephrotic syndrome and chronic kidney disease as a supportive Ayurvedic treatment.`,
    benefits: [
      'Liver diseases & hepatoprotection',
      'Kidney diseases, renal support & nephrotic syndrome',
      'Joint pain, arthritis & inflammation',
      'Swelling & oedema throughout the body',
      'Urinary tract conditions',
      'General rejuvenation and body renewal',
    ],
    ingredients: [
      { name: 'पुनर्नवा (Punarnava)', latin: 'Boerhavia diffusa', quantity: '2.5g per 10ml' },
      { name: 'Sodium Benzoate', latin: 'Preservative', quantity: 'Q.s.' },
      { name: 'Water', latin: 'Aqua', quantity: 'Q.s.' },
    ],
    dosage: '10–20ml diluted in equal parts water, twice daily before meals. Or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Punarnava Ark good for?', a: 'Punarnava Ark is used for liver health, kidney support, reducing swelling (oedema) and joint pain. It is a classical Ayurvedic rejuvenating herb.' },
      { q: 'Can Punarnava Ark help with kidney disease?', a: 'Punarnava is widely used in Ayurveda for kidney support, including nephrotic syndrome. However, it should be used as a complementary treatment under physician supervision.' },
    ],
    shopifyHandle: 'punarnava-ark',
    keywords: ['punarnava ark', 'पुनर्नवा अर्क', 'punarnava', 'boerhavia diffusa', 'kidney ayurvedic medicine', 'punarnava for kidney'],
  },
  {
    slug: 'phalatrikadi-kwath',
    name: 'Phalatrikadi Kwath',
    hindiName: 'फलत्रिकादि क्वाथ',
    tagline: 'Classical Decoction for Diabetes, Fatty Liver & Renal Health',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Classical six-herb Ayurvedic decoction for diabetes (Madhumeh), fatty liver and kidney health.',
    longDescription: `Phalatrikadi Kwath (फलत्रिकादि क्वाथ) is a classical Ayurvedic decoction formulation widely used in the management of Diabetes mellitus (Madhumeh), liver disorders and kidney conditions. The name "Phalatrikadi" refers to the three primary fruits (Phala Trikadi) — Haritaki, Vibhitaki and Amalaki — which form the base of this formulation, supplemented by additional herbs for enhanced therapeutic action.

This kwath is prepared as a decoction powder — you soak the powder in water overnight, boil it down to one-quarter volume, filter and drink. This traditional preparation method extracts the maximum therapeutic potential from the herbs and ensures excellent bioavailability.

Phalatrikadi Kwath works by balancing blood sugar levels, supporting liver detoxification and improving kidney function. It is particularly effective when combined with diet modification and regular exercise as part of an integrated diabetes management approach.`,
    benefits: [
      'Diabetes mellitus (Madhumeh) — blood sugar management',
      'Liver disease & fatty liver',
      'Renal disease & kidney support',
      'Constipation & bowel regulation',
      'Vrikka (kidney) dosha',
      'Obesity & metabolic disorders',
    ],
    ingredients: [
      { name: 'Haritaki', latin: 'Terminalia chebula', quantity: '12.5g' },
      { name: 'Vibhitaki', latin: 'Terminalia bellirica', quantity: '12.5g' },
      { name: 'Amalaki', latin: 'Emblica Officinalis', quantity: '12.5g' },
      { name: 'Guduchi', latin: 'Tinospora cordifolia', quantity: '12.5g' },
      { name: 'Vasa', latin: 'Adhatoda Vasica', quantity: '12.5g' },
      { name: 'Neem', latin: 'Azadirachta indica', quantity: '12.5g' },
      { name: 'Katuki', latin: 'Picrorhiza Kurroa', quantity: '12.5g' },
      { name: 'Chirata', latin: 'Swertia Chirata', quantity: '12.5g' },
    ],
    dosage: 'Soak 5g of Phalatrikadi Kwath powder in 200ml of water for 8 hours (overnight). Boil the soaked mixture until only 50ml (one-quarter) remains. Filter and drink warm on an empty stomach in the morning. Or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'Is Phalatrikadi Kwath good for diabetes?', a: 'Yes, Phalatrikadi Kwath is a classical Ayurvedic formulation used in the management of diabetes mellitus (Madhumeh). It helps regulate blood sugar and supports metabolic health.' },
      { q: 'How do I prepare Phalatrikadi Kwath?', a: 'Soak 5g in 200ml water overnight. Boil until 50ml remains. Filter and drink warm. This is the classical decoction preparation method.' },
      { q: 'Can I take Phalatrikadi Kwath alongside my diabetes medication?', a: 'Please consult your physician before combining with diabetes medication as it may affect blood sugar levels synergistically.' },
    ],
    shopifyHandle: 'phalatrikadi-kwath',
    keywords: ['phalatrikadi kwath', 'फलत्रिकादि क्वाथ', 'phalatrikadi', 'ayurvedic medicine for diabetes', 'madhumeh ayurveda', 'diabetes kwath', 'phaltrikadi kwath kamala', 'jaundice ayurvedic kwath'],
  },
  {
    slug: 'trinpanchmool-kwath',
    name: 'Trinpanchmool Kwath',
    hindiName: 'तृण पंचमूल क्वाथ',
    tagline: 'Five Grass Roots Decoction for Kidney, Urinary & Gynaecological Health',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Classical five-root Ayurvedic decoction for kidney disease, urinary disorders and gynaecological conditions.',
    longDescription: `Trinpanchmool Kwath (तृण पंचमूल क्वाथ) is a classical Ayurvedic formulation prepared from five sacred grass roots, referenced in classical Ayurvedic texts for its powerful action on the kidneys, urinary system and female reproductive system. The "Trin Panchamool" (five grass roots) are revered in Ayurveda for their cooling, diuretic and purifying properties.

This decoction is particularly effective in conditions involving the urinary tract — from kidney stones and UTIs to urinary incontinence. It also has significant benefits for gynaecological disorders, working to balance Apana Vata (the downward energy governing excretion and reproduction).

Himayu Care's Trinpanchmool Kwath is prepared under GMP-certified conditions by Gurukul Ayurved Pharmacy, Haridwar, ensuring authentic formulation.`,
    benefits: [
      'Kidney disease and renal support',
      'Urinary tract disorders and UTI',
      'Urinary incontinence and frequency',
      'Gynaecological disorders',
      'Vrikka Dosha (kidney imbalance)',
      'Mootra Sambandhi Vikar (urinary conditions)',
    ],
    ingredients: [
      { name: 'Kush', latin: 'Desmostachya bipinnata', quantity: '20% each' },
      { name: 'Kash', latin: 'Saccharum spontaneum', quantity: '20% each' },
      { name: 'Shar', latin: 'Saccharum Munja', quantity: '20% each' },
      { name: 'Kandokshu', latin: 'Saccharum officinarum', quantity: '20% each' },
      { name: 'Darbh', latin: 'Desmostachya bipinnata', quantity: '20% each' },
    ],
    dosage: 'Soak 5g of Trinpanchmool Kwath powder in 200ml of water for 8 hours. Boil until only 50ml (one-quarter) remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Trinpanchmool Kwath used for?', a: 'Trinpanchmool Kwath is used for kidney disease, urinary tract disorders and gynaecological conditions. The five grass roots work together to support the urinary and reproductive systems.' },
      { q: 'Is Trinpanchmool Kwath good for kidney stones?', a: 'Yes, Trinpanchmool Kwath has diuretic and purifying properties that support kidney health and may help in conditions involving urinary tract calculi. Consult your physician for kidney stones.' },
      { q: 'Can women take Trinpanchmool Kwath?', a: 'Yes, Trinpanchmool Kwath is especially beneficial for women with gynaecological disorders. Consult an Ayurvedic physician for specific conditions.' },
    ],
    shopifyHandle: 'trinpanchmool-kwath',
    keywords: ['trinpanchmool kwath', 'तृण पंचमूल क्वाथ', 'trin panchmool', 'kidney ayurvedic medicine', 'urinary ayurvedic kwath', 'gynaecological ayurveda'],
  },
  {
    slug: 'shirishadi-kwath',
    name: 'Shirishadi Kwath',
    hindiName: 'शिरीषादि क्वाथ',
    tagline: 'Classical Decoction for Allergies, Asthma & Respiratory Conditions',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Four-herb Ayurvedic decoction for allergic rhinitis, sinusitis, bronchial asthma and urticaria — referenced in Sushruta Samhita.',
    longDescription: `Shirishadi Kwath (शिरीषादि क्वाथ) is a classical Ayurvedic decoction formulation referenced in Sushruta Samhita, traditionally used for allergic and respiratory conditions. The formulation derives its name from Shirish (Albizia lebbeck) — one of Ayurveda's most potent anti-allergic herbs, known for its ability to desensitise the body to allergens and reduce hypersensitivity reactions.

Combined with Mulethi (Glycyrrhiza glabra), Chotikateri (Solanum surattense) and Vasa (Adhatoda vasica), Shirishadi Kwath creates a powerful anti-allergic, bronchodilatory and expectorant combination that addresses the root cause of allergic conditions — not just the symptoms.

Himayu Care's Shirishadi Kwath is prepared under GMP-certified conditions by Hans Herbals Pvt. Ltd., Haridwar.`,
    benefits: [
      'Allergic rhinitis and sinusitis',
      'Bronchial asthma and breathlessness',
      'Cough — chronic and acute',
      'Urticaria (hives) and allergic skin disease',
      'Sheetapitta (cold urticaria)',
      'Respiratory hypersensitivity conditions',
    ],
    ingredients: [
      { name: 'Shirish', latin: 'Albizia lebbock', quantity: '25% each' },
      { name: 'Mulethi', latin: 'Glycyrrhiza glabra', quantity: '25% each' },
      { name: 'Chotikateri', latin: 'Solanum surattense', quantity: '25% each' },
      { name: 'Vasa', latin: 'Adhatoda vasica', quantity: '25% each' },
    ],
    dosage: 'Soak 5g of Shirishadi Kwath powder in 200ml of water for 8 hours. Boil until one-quarter remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Shirishadi Kwath used for?', a: 'Shirishadi Kwath is used for allergic conditions including rhinitis, sinusitis, bronchial asthma, urticaria and allergic skin disease. It is one of Ayurveda\'s most effective anti-allergy formulations.' },
      { q: 'Is Shirishadi Kwath good for asthma?', a: 'Yes, Shirishadi Kwath contains Vasa (Adhatoda vasica) and Mulethi which are classical bronchodilators and expectorants, making it highly effective for bronchial asthma.' },
      { q: 'Can Shirishadi Kwath help with skin allergies?', a: 'Yes, particularly Shirish (Albizia lebbeck) is known for its powerful anti-allergic properties that help with urticaria and allergic skin conditions.' },
    ],
    shopifyHandle: 'shirishadi-kwath',
    keywords: ['shirishadi kwath', 'शिरीषादि क्वाथ', 'shirishadi', 'allergy ayurvedic medicine', 'asthma ayurveda', 'rhinitis sinusitis ayurvedic treatment', 'shirish kwath'],
  },
  {
    slug: 'mansyadi-kwath',
    name: 'Mansyadi Kwath',
    hindiName: 'मांस्यादि क्वाथ',
    tagline: 'Classical Decoction for Anxiety, Depression, OCD & Insomnia',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '100g',
    description: 'Three-herb Ayurvedic decoction for psychiatric disorders — anxiety, depression, OCD, insomnia and arthritis.',
    longDescription: `Mansyadi Kwath (मांस्यादि क्वाथ) is a classical Ayurvedic formulation referenced in Sidhayog Sangrah, used for the management of psychiatric and neurological disorders. The formulation is centred around Jatamansi (Nardostachys jatamansi) — one of Ayurveda's most powerful brain tonics and nerve sedatives — combined with Ashwagandha and Khurasani Ajwain for a comprehensive neuropsychiatric action.

Mansyadi Kwath works by calming vitiated Vata and Pitta in the mind, reducing neurological hyperactivity and restoring mental equilibrium. It is particularly effective for anxiety, depression, obsessive-compulsive disorder (OCD), psychosis, arthritis and insomnia (Anidra).

This formulation contains concentrated Jatamansi at 61.54%, making it highly potent. It must be used under Ayurvedic physician guidance.`,
    benefits: [
      'Anxiety and generalised anxiety disorder',
      'Depression and low mood',
      'OCD (Obsessive-Compulsive Disorder)',
      'Psychosis and psychiatric disorders',
      'Insomnia (Anidra) — promotes sleep',
      'Arthritis and joint conditions',
      'Mental fatigue and cognitive stress',
    ],
    ingredients: [
      { name: 'Jatamansi', latin: 'Nardostachys jatamansi', quantity: '61.54%' },
      { name: 'Ashwagandha', latin: 'Withania somnifera', quantity: '30.76%' },
      { name: 'Khurasani Ajwain', latin: 'Hyoscyamus Niger', quantity: '7.70%' },
    ],
    dosage: 'Soak 2g of Mansyadi Kwath powder in 200ml of water for 8 hours. Boil until one-quarter remains. Filter and drink warm. Or as directed by your Ayurvedic physician. Use under physician guidance.',
    faqs: [
      { q: 'What is Mansyadi Kwath used for?', a: 'Mansyadi Kwath is used for psychiatric conditions including anxiety, depression, OCD, psychosis and insomnia. It is a classical Ayurvedic formulation that calms the nervous system.' },
      { q: 'Is Mansyadi Kwath safe for anxiety?', a: 'Yes, Mansyadi Kwath contains Jatamansi — one of Ayurveda\'s most effective herbs for anxiety and nervous disorders. Use under Ayurvedic physician guidance.' },
      { q: 'Can Mansyadi Kwath help with insomnia?', a: 'Yes, Mansyadi Kwath has a calming effect on the nervous system and helps regulate sleep. Jatamansi is a classical Ayurvedic sedative herb.' },
    ],
    shopifyHandle: 'mansyadi-kwath',
    keywords: ['mansyadi kwath', 'मांस्यादि क्वाथ', 'mansyadi', 'anxiety ayurvedic medicine', 'depression ayurveda', 'insomnia ayurvedic treatment', 'jatamansi kwath', 'OCD ayurveda'],
  },
  {
    slug: 'panchvalkal-kwath',
    name: 'Panchvalkal Kwath',
    hindiName: 'पंचवल्कल क्वाथ',
    tagline: 'Five Sacred Fig Barks Decoction for Skin, Diabetes & Infertility',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Classical five fig-bark decoction for skin diseases, ulcers, diabetes, infertility and gynaecological disorders.',
    longDescription: `Panchvalkal Kwath (पंचवल्कल क्वाथ) is a classical Ayurvedic formulation prepared from the barks (valkal) of five sacred fig trees, referenced in Bhavaprakasha Nighantu. The "Pancha" (five) Ficus species have been used in Ayurveda for thousands of years for their astringent, wound-healing, anti-diabetic and hormonal-balancing properties.

This formulation is particularly known for its action on the reproductive system — it has been used traditionally in conditions of infertility and gynaecological disorders. The combination of five Ficus barks creates a powerful astringent and tissue-healing action that is effective for both internal ulcers and external skin conditions.

Panchvalkal Kwath is also one of the classical Ayurvedic formulations used in the management of diabetes, working to regulate blood sugar through its bitter and astringent properties.`,
    benefits: [
      'Skin diseases — eczema, psoriasis, dermatitis',
      'Ulcers — gastric and skin ulcers',
      'Diabetes mellitus (Madhumeh)',
      'Infertility — male and female',
      'Gynaecological disorders',
      'Bandhyatva Rog (reproductive disorders)',
    ],
    ingredients: [
      { name: 'Vata (Bargad)', latin: 'Ficus benghalensis', quantity: '20% each' },
      { name: 'Peepal', latin: 'Ficus religiosa', quantity: '20% each' },
      { name: 'Udumber (Gular)', latin: 'Ficus glomoata', quantity: '20% each' },
      { name: 'Plaksha (Pakar)', latin: 'Ficus infectoria', quantity: '20% each' },
      { name: 'Pareesh', latin: 'Thespesia populnea', quantity: '20% each' },
    ],
    dosage: 'Soak 5g of Panchvalkal Kwath powder in 200ml of water for 8 hours. Boil until one-quarter remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Panchvalkal Kwath used for?', a: 'Panchvalkal Kwath is used for skin diseases, ulcers, diabetes, infertility and gynaecological disorders. The five Ficus bark combination has powerful astringent and healing properties.' },
      { q: 'Is Panchvalkal Kwath good for infertility?', a: 'Panchvalkal Kwath is a classical Ayurvedic formulation used for gynaecological disorders and infertility. It helps balance reproductive hormones and supports uterine health. Consult an Ayurvedic physician for specific treatment.' },
      { q: 'Can Panchvalkal Kwath help with diabetes?', a: 'Yes, Panchvalkal Kwath has anti-diabetic properties from its five Ficus bark combination. It should be used alongside diet modification and medical supervision.' },
    ],
    shopifyHandle: 'panchvalkal-kwath',
    keywords: ['panchvalkal kwath', 'पंचवल्कल क्वाथ', 'panchvalkal', 'skin disease ayurvedic medicine', 'infertility ayurveda', 'diabetes kwath', 'five fig bark ayurveda'],
  },
  {
    slug: 'punarnavashtak-kwath',
    name: 'Punarnavashtak Kwath',
    hindiName: 'पुनर्नवाष्टक क्वाथ',
    tagline: 'Eight-Herb Decoction for Liver, Kidney, Jaundice & Joint Disorders',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Eight-herb classical decoction for liver disorder, jaundice, kidney disease, urinary tract infection and diabetes.',
    longDescription: `Punarnavashtak Kwath (पुनर्नवाष्टक क्वाथ) is a classical Ayurvedic decoction referenced in Ayurved Sar Sangrah, centred around Punarnava (Boerhavia diffusa) — the body-renewing herb. Combined with seven additional classical herbs, this formulation creates a powerful multi-organ supporting remedy for liver disease, kidney disorders, jaundice, urinary tract infections, diabetes and joint disorders.

The formulation's primary action is hepatoprotective (liver-protecting) and nephroprotective (kidney-protecting). Punarnava's diuretic action is enhanced by Guduchi's immune-modulating properties and Neem's blood-purifying action, creating a synergistic effect on organ health and detoxification.

Himayu Care's Punarnavashtak Kwath is prepared under GMP-certified conditions by Hans Herbals Pvt. Ltd., Haridwar, maintaining the classical eight-herb ratio as described in Ayurved Sar Sangrah.`,
    benefits: [
      'Liver disorder and liver protection',
      'Jaundice (Kamala/Peeliya) — highly effective',
      'Kidney disorder and renal support',
      'Urinary tract infection (UTI)',
      'Diabetes mellitus',
      'Joint disorder and arthritis',
      'Blood purification',
    ],
    ingredients: [
      { name: 'Punarnava', latin: 'Boerhavia diffusa', quantity: '12.5% each' },
      { name: 'Kutki', latin: 'Androgophis panniculata', quantity: '12.5% each' },
      { name: 'Guduchi', latin: 'Tinospora cordifolia', quantity: '12.5% each' },
      { name: 'Devdaru', latin: 'Cedrus deodara', quantity: '12.5% each' },
      { name: 'Hareetaki', latin: 'Terminalia chebula', quantity: '12.5% each' },
      { name: 'Neem', latin: 'Azadirachta indica', quantity: '12.5% each' },
      { name: 'Sonth', latin: 'Zingiber officinalis', quantity: '12.5% each' },
      { name: 'Patolpatra', latin: 'Luffa accutangula', quantity: '12.5% each' },
    ],
    dosage: 'Soak 10g of Punarnavashtak Kwath powder in 200ml of water for 8 hours. Boil until one-quarter remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Punarnavashtak Kwath used for?', a: 'Punarnavashtak Kwath is used for liver disorders, jaundice, kidney disease, urinary tract infections, diabetes and joint disorders. It is a classical eight-herb formulation from Ayurved Sar Sangrah.' },
      { q: 'Is Punarnavashtak Kwath good for jaundice?', a: 'Yes, Punarnavashtak Kwath is particularly effective for jaundice (Kamala). Punarnava and Neem work together to support liver detoxification and bile function.' },
      { q: 'Can Punarnavashtak Kwath help with kidney disease?', a: 'Yes, the formulation is traditionally used for kidney disorders and urinary tract infections. Punarnava is a classical nephroprotective herb. Use under physician supervision for chronic kidney conditions.' },
    ],
    shopifyHandle: 'punarnavashtak-kwath',
    keywords: ['punarnavashtak kwath', 'पुनर्नवाष्टक क्वाथ', 'punarnavashtak', 'punarnavastak', 'liver ayurvedic medicine', 'jaundice kwath ayurveda', 'kidney ayurvedic decoction'],
  },
  {
    slug: 'varunadi-kwath',
    name: 'Varunadi Kwath',
    hindiName: 'वरुणादि क्वाथ',
    tagline: 'Classical Decoction for Kidney Stones, Renal Calculi & Uterine Disorders',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Four-herb Ayurvedic decoction for kidney stones, urinary tract calculi, cysts and uterine diseases.',
    longDescription: `Varunadi Kwath (वरुणादि क्वाथ) is a classical Ayurvedic decoction formulation referenced in Ayurved Sar Sangrah, centred around Varun Ki Chaal (Crataeva nurvala bark). Varun is one of Ayurveda's most powerful herbs for the urinary system, particularly known for its ability to dissolve kidney and bladder stones (renal calculi).

The formulation combines Varun with Sonth (ginger), Gokhuru (Tribulus terrestris) and Passan Bhed (stone-breaker herb) — creating a synergistic combination that simultaneously dissolves urinary calculi, reduces inflammation, promotes diuresis and supports kidney function.

Varunadi Kwath is particularly effective for kidney stones, urinary tract calculi, bladder cysts and uterine diseases. Its name "Varunadi" (starting with Varun) signifies its primary therapeutic action on the urinary system.`,
    benefits: [
      'Kidney stones (renal calculi) and dissolution',
      'Urinary tract calculi and obstruction',
      'Bladder cysts',
      'Uterine diseases and disorders',
      'Liver disorder and hepatic support',
      'Urinary tract infections and difficulty urinating',
    ],
    ingredients: [
      { name: 'Varun Ki Chaal', latin: 'Crataeva nurvala', quantity: '25% each' },
      { name: 'Sonth', latin: 'Zingiber officinale', quantity: '25% each' },
      { name: 'Gokhuru', latin: 'Tribulus terrestris', quantity: '25% each' },
      { name: 'Passan Bhed', latin: 'Gentiana kurroo', quantity: '25% each' },
    ],
    dosage: 'Soak 10g of Varunadi Kwath powder in 200ml of water for 8 hours. Boil until one-quarter remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'Is Varunadi Kwath good for kidney stones?', a: 'Yes, Varunadi Kwath is one of the most effective Ayurvedic formulations for kidney stones. Varun (Crataeva nurvala) and Passan Bhed have lithotriptic (stone-dissolving) properties.' },
      { q: 'What is Varunadi Kwath used for?', a: 'Varunadi Kwath is used for kidney stones, urinary tract calculi, cysts, uterine diseases and liver disorders. It is referenced in Ayurved Sar Sangrah as a classical urinary system formulation.' },
      { q: 'How long does it take for Varunadi Kwath to work on kidney stones?', a: 'Results vary by stone size. Small stones may dissolve in 4–8 weeks of regular use. Always monitor with ultrasound and consult your physician.' },
    ],
    shopifyHandle: 'varunadi-kwath',
    keywords: ['varunadi kwath', 'वरुणादि क्वाथ', 'varunadi', 'kidney stones ayurvedic medicine', 'renal calculi ayurveda', 'pathri ayurvedic treatment', 'varun crataeva'],
  },
  {
    slug: 'dashmool-kwath',
    name: 'Dashmool Kwath',
    hindiName: 'दशमूल क्वाथ',
    tagline: 'Ten Sacred Roots Decoction for Arthritis, Asthma & Postpartum Recovery',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Classical ten-root Ayurvedic decoction powder for arthritis, asthma, postpartum disorders and Vata imbalance.',
    longDescription: `Dashmool Kwath (दशमूल क्वाथ) is one of the most celebrated classical formulations in Ayurveda, prepared from the "Dashmool" — the ten sacred roots described in Ayurvedic texts. Referenced in Ayurved Sar Sangrah, this formulation brings together all ten roots in their authentic ratio as a decoction powder.

The ten roots are divided into two groups — the five large roots (Brihad Panchamool: Bael, Agnimanth, Shyonak, Pata, Gambhari) and five small roots (Laghu Panchamool: Brhati, Kantakari, Shalpami, Prishnparmi, Gokshru) — each group contributing complementary properties to make this a comprehensive Vata-pacifying and rejuvenating formulation.

Dashmool Kwath is particularly renowned for its use in arthritis, respiratory conditions and as a classical postpartum tonic for new mothers. Himayu Care's Dashmool Kwath contains all ten roots at 2.5% each, prepared under GMP-certified conditions by Gurukul Ayurved Pharmacy, Haridwar.`,
    benefits: [
      'Arthritis and joint pain (Sandhivata)',
      'Asthma and respiratory disorders',
      'Postpartum recovery (Prasuti Rog)',
      'Phlegm and Kapha-related conditions',
      'Swelling and oedema',
      'General weakness and Vata imbalance',
    ],
    ingredients: [
      { name: 'Bilava (Bael)', latin: 'Aegle marmelos', quantity: '2.5% each' },
      { name: 'Agnimanth', latin: 'Premna mucroranta', quantity: '2.5% each' },
      { name: 'Shyonak', latin: 'Orexylum indicum', quantity: '2.5% each' },
      { name: 'Pata', latin: 'Stereospermum suaveolens', quantity: '2.5% each' },
      { name: 'Gambhan (Gambhari)', latin: 'Gmelina arborea', quantity: '2.5% each' },
      { name: 'Brhati', latin: 'Solanum indicum', quantity: '2.5% each' },
      { name: 'Kantakari', latin: 'Solanum surattense', quantity: '2.5% each' },
      { name: 'Shalpami', latin: 'Desmodium gangeticum', quantity: '2.5% each' },
      { name: 'Prishnparmi', latin: 'Uraria picta', quantity: '2.5% each' },
      { name: 'Gokshru', latin: 'Tribulus terrestris', quantity: '2.5% each' },
    ],
    dosage: 'Soak 10g of Dashmool Kwath powder in 200ml of water for 8 hours. Boil until one-quarter remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Dashmool Kwath?', a: 'Dashmool Kwath is a classical Ayurvedic decoction prepared from the ten sacred roots. It is used for arthritis, asthma, postpartum recovery and Vata disorders.' },
      { q: 'What is the difference between Dashmool Kwath and Dashmool Ark?', a: 'Dashmool Kwath is a decoction powder you prepare at home by soaking and boiling. Dashmool Ark is a distillate — a ready-to-drink liquid form. Both contain the same ten roots but in different preparations.' },
      { q: 'Is Dashmool Kwath good for postpartum recovery?', a: 'Yes, Dashmool Kwath is a classical postpartum tonic. It helps restore strength and reduce Vata imbalance after childbirth. Consult your physician before use during breastfeeding.' },
    ],
    shopifyHandle: 'dashmool-kwath',
    keywords: ['dashmool kwath', 'दशमूल क्वाथ', 'dashmoola kwath', 'dashmool decoction', 'arthritis ayurvedic kwath', 'postpartum ayurveda', 'ten roots ayurveda'],
  },
  {
    slug: 'maharasnadi-kwath',
    name: 'Maharasnadi Kwath',
    hindiName: 'महारास्नादि क्वाथ',
    tagline: 'Classical 26-Herb Decoction for Arthritis, Parkinson\'s, Sciatica & Vata Disorders',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '200g',
    description: 'Classical 26-herb decoction for Sarvangvaat, osteoarthritis, Parkinson\'s disease, sciatica, frozen shoulder and rheumatoid arthritis.',
    longDescription: `Maharasnadi Kwath (महारास्नादि क्वाथ) is one of the most potent classical Ayurvedic formulations for Vata disorders, referenced in Ayurved Sar Sangrah. The prefix "Maha" (great) indicates that this is an enhanced, comprehensive version of Rasnadi Kwath — with 26 classical herbs working together to address the full spectrum of Vata imbalance in the body.

This formulation is particularly renowned for its action on the musculoskeletal and neurological systems. It is the classical Ayurvedic treatment of choice for Sarvangvaat (paralysis affecting the whole body), Parkinson's disease, tremors, sciatica, rheumatoid arthritis and frozen shoulder. The combination of Rasna, Erand, Devdaru and Ashwagandha creates a powerful anti-inflammatory, nerve-nourishing and Vata-pacifying effect.

Maharasnadi Kwath is also used for reproductive disorders — impotency and Yoni Rog (gynaecological conditions) — making it one of the most versatile classical formulations in the Ayurvedic pharmacopoeia. Himayu Care's Maharasnadi Kwath is prepared under GMP-certified conditions by Gurukul Ayurved Pharmacy, Haridwar.`,
    benefits: [
      'Sarvangvaat — paralysis and whole-body Vata disorders',
      'Osteoarthritis and rheumatoid arthritis',
      'Parkinson\'s disease and tremors',
      'Frozen shoulder and cervical spondylosis',
      'Sciatica and lumbar pain',
      'Filaria and tympanitis',
      'Fascial paralysis (Bell\'s palsy)',
      'Impotency and male reproductive disorders',
      'Yoni Rog (gynaecological conditions)',
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
      { name: 'Shatawar (Shatavari)', latin: 'Asparagus racemosus', quantity: '3.85% each' },
      { name: 'Peepal', latin: 'Ficus religiosa', quantity: '3.85% each' },
      { name: 'Katsaraiya', latin: 'Barleria prionitis', quantity: '3.85% each' },
      { name: 'Dhaniya (Coriander)', latin: 'Coriandrum sativum', quantity: '3.85% each' },
      { name: 'Sonth (Dry Ginger)', latin: 'Zingiber officinale', quantity: '3.85% each' },
      { name: 'Haritaki', latin: 'Terminalia chebula', quantity: '3.85% each' },
      { name: 'Chavya', latin: 'Piper chaba', quantity: '3.85% each' },
      { name: 'Nagarmotha', latin: 'Cyperus scariosus', quantity: '3.85% each' },
      { name: 'Punarnava (Gadhapurna)', latin: 'Boerhaavia diffusa', quantity: '3.85% each' },
      { name: 'Giloy (Gurch)', latin: 'Tinospora speciosa', quantity: '3.85% each' },
      { name: 'Vidhara', latin: 'Argyreia speciosa', quantity: '3.85% each' },
      { name: 'Saunf (Fennel)', latin: 'Faeniculum vulgare', quantity: '3.85% each' },
      { name: 'Choti Kateli', latin: 'Solanum surattense', quantity: '3.85% each' },
      { name: 'Badi Kateli', latin: 'Solanum indicum', quantity: '3.85% each' },
    ],
    dosage: 'Soak 10g of Maharasnadi Kwath powder in 200ml of water for 8 hours. Boil until one-quarter (50ml) remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Maharasnadi Kwath used for?', a: 'Maharasnadi Kwath is used for Vata disorders including Parkinson\'s disease, tremors, osteoarthritis, sciatica, frozen shoulder, fascial paralysis and gynaecological conditions. It is a comprehensive 26-herb classical formulation.' },
      { q: 'Is Maharasnadi Kwath good for Parkinson\'s disease?', a: 'Maharasnadi Kwath is one of the classical Ayurvedic formulations used in the management of Parkinson\'s disease (Kampavata). It contains Vacha, Ashwagandha and Rasna which support nerve function. Use under physician guidance.' },
      { q: 'Can Maharasnadi Kwath help with sciatica?', a: 'Yes, Maharasnadi Kwath is a classical formulation for sciatica (Grudhrasi). The combination of Erand, Rasna and Devdaru reduces Vata and addresses the root cause of sciatic nerve pain.' },
      { q: 'How long should I take Maharasnadi Kwath?', a: 'For chronic conditions like arthritis or Parkinson\'s, consistent use for 3–6 months under physician supervision is typically recommended. Short-term results may be seen in 4–6 weeks.' },
    ],
    shopifyHandle: 'maharasnadi-kwath',
    keywords: ['maharasnadi kwath', 'महारास्नादि क्वाथ', 'maharasnadi', 'mahrsnadi kwath', 'parkinson ayurvedic medicine', 'sciatica ayurveda', 'vata disorder ayurveda', 'osteoarthritis kwath', 'frozen shoulder ayurveda'],
  },
  {
    slug: 'gojihwadi-kwath',
    name: 'Gojihwadi Kwath',
    hindiName: 'गोजिह्वादि क्वाथ',
    tagline: 'Classical 15-Herb Decoction for Cold, Cough, Asthma & Respiratory Health',
    category: 'Ayurvedic Classical Decoction',
    form: 'Kwath (Decoction Powder)',
    netWeight: '50g',
    description: 'Fifteen-herb Ayurvedic decoction for cold, cough, asthma, nasal congestion, rhinitis and diminished sense of smell and taste.',
    longDescription: `Gojihwadi Kwath (गोजिह्वादि क्वाथ) is a classical Ayurvedic formulation referenced in Ayurved Sar Sangrah, centred around Gojihwa (Onosma bracteatum) — a powerful mucolytic and respiratory herb. The formulation combines 15 classical herbs to create a comprehensive remedy for upper and lower respiratory conditions.

This formulation is particularly effective for conditions involving mucus accumulation — nasal drip, nasal blockage, loss of smell and taste, rhinitis and sinusitis. The combination of Mulethi (Glycyrrhiza), Vasa (Adhatoda vasica) and Kantkari provides bronchodilatory and expectorant action, while Gul Vanafsha (violet) and Hansraj soothe the respiratory mucosa.

Gojihwadi Kwath is also beneficial for fever and liver disorders, making it a versatile respiratory and systemic formulation. Himayu Care's Gojihwadi Kwath is prepared under GMP-certified conditions by Gurukul Ayurved Pharmacy, Haridwar.`,
    benefits: [
      'Cold and flu (Pratishyaya)',
      'Cough — acute and chronic',
      'Asthma and bronchial conditions',
      'Nasal drip and nasal blockage',
      'Rhinitis and sinusitis',
      'Diminished sense of smell and taste',
      'Fever',
      'Liver disorder support',
    ],
    ingredients: [
      { name: 'Gojihwa', latin: 'Onosma bracteatum', quantity: '6.67% each' },
      { name: 'Mulethi', latin: 'Glycyrrhiza glabra', quantity: '6.67% each' },
      { name: 'Saunf (Fennel)', latin: 'Foeniculum vulgare', quantity: '6.67% each' },
      { name: 'Draksha (Grape)', latin: 'Vitis vinifera', quantity: '6.67% each' },
      { name: 'Anjir (Fig)', latin: 'Ficus carica', quantity: '6.67% each' },
      { name: 'Unnab (Jujube)', latin: 'Zizyphus sativa', quantity: '6.67% each' },
      { name: 'Vasa', latin: 'Adhatoda vasaka', quantity: '6.67% each' },
      { name: 'Jufa (Hyssop)', latin: 'Hyssopus officinalis', quantity: '6.67% each' },
      { name: 'Khubkhalan', latin: 'Sisymbrium irio', quantity: '6.67% each' },
      { name: 'Hansraj', latin: 'Adiantum longulatem', quantity: '6.67% each' },
      { name: 'Gul Vanafsha (Violet)', latin: 'Viola odorata', quantity: '6.67% each' },
      { name: 'Alsi (Flaxseed)', latin: 'Linum usitatissimum', quantity: '6.67% each' },
      { name: 'Khatmi (Marshmallow)', latin: 'Althaea officinalis', quantity: '6.67% each' },
      { name: 'Kantkari', latin: 'Solanum surattense', quantity: '6.67% each' },
      { name: 'Maricha (Black Pepper)', latin: 'Piper nigrum', quantity: '6.67% each' },
    ],
    dosage: 'Soak 10g of Gojihwadi Kwath powder in 200ml of water for 8 hours. Boil until one-quarter remains. Filter and drink warm, or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'What is Gojihwadi Kwath used for?', a: 'Gojihwadi Kwath is used for cold, cough, asthma, nasal congestion, rhinitis, loss of smell and taste, fever and liver disorders. It is a 15-herb classical Ayurvedic respiratory formulation.' },
      { q: 'Is Gojihwadi Kwath good for loss of smell?', a: 'Yes, Gojihwadi Kwath is traditionally used for diminished sense of smell (Anosmia) and taste. The herbs work to clear nasal and sinus blockages that impair these senses.' },
      { q: 'Can Gojihwadi Kwath help with chronic sinusitis?', a: 'Yes, the formulation\'s mucolytic and anti-inflammatory herbs are effective for chronic sinusitis and rhinitis. Consistent use over 4–6 weeks typically shows improvement.' },
    ],
    shopifyHandle: 'gojihwadi-kwath',
    keywords: ['gojihwadi kwath', 'गोजिह्वादि क्वाथ', 'gojihwadi', 'gojihwa', 'cold cough ayurvedic medicine', 'asthma kwath ayurveda', 'rhinitis sinusitis ayurveda', 'nasal congestion ayurvedic treatment'],
  },
  {
    slug: 'pilolin',
    name: 'Himayu Pilolin Kit',
    tagline: 'Complete 3-in-1 Ayurvedic Solution for Piles (Haemorrhoids)',
    category: 'Ayurvedic Proprietary Formulation',
    form: 'Kit (3-in-1)',
    netWeight: '3-in-1 Kit',
    description: 'Complete Ayurvedic kit for piles — capsule, oil and powder working together for lasting relief.',
    longDescription: `Himayu Pilolin Kit is a comprehensive 3-in-1 Ayurvedic solution for haemorrhoids (piles), designed to provide complete relief through a multi-pronged approach. Unlike single-medicine treatments, the Pilolin Kit addresses piles both internally and externally — tackling the root cause while providing immediate symptomatic relief.

The kit contains three products used together:
- **Pilolin Capsules** — taken orally to reduce inflammation, stop bleeding and ease constipation from within
- **Pilolin Oil** — applied externally to shrink the piles mass, reduce pain and provide soothing relief
- **Pilolin Powder** — a classical Ayurvedic churna to support digestion and prevent recurrence

This integrated approach makes Pilolin Kit highly effective for both internal and external piles, including bleeding piles. All ingredients are 100% Ayurvedic and GMP-certified.`,
    benefits: [
      'Controls bleeding from piles (haemorrhoids)',
      'Reduces piles mass effectively',
      'Reduces swelling, pain and inflammation',
      'Eases constipation — a root cause of piles',
      'Effective for both internal and external piles',
      'Prevents recurrence with regular use',
    ],
    ingredients: [
      { name: 'Capsule', latin: 'Classical anti-haemorrhoidal herbs' },
      { name: 'Oil', latin: 'Herbal medicated oil for external application' },
      { name: 'Powder (Churna)', latin: 'Digestive & astringent herbs' },
    ],
    dosage: 'Capsules: 2 capsules twice daily with water after meals. Oil: Apply externally to the affected area twice daily after cleansing. Powder: 3–5g with warm water at bedtime. Use all three together for best results.',
    faqs: [
      { q: 'What is Himayu Pilolin Kit?', a: 'Pilolin Kit is a 3-in-1 Ayurvedic treatment for piles, containing capsules, medicated oil and herbal powder for complete internal and external relief.' },
      { q: 'How long does it take to see results?', a: 'Most patients notice relief in bleeding and pain within 1–2 weeks. For complete resolution of piles, use consistently for 4–8 weeks.' },
      { q: 'Is Pilolin Kit safe for bleeding piles?', a: 'Yes, Pilolin Kit is specifically formulated to control bleeding from haemorrhoids. The capsules have haemostatic (bleeding-stopping) properties.' },
    ],
    shopifyHandle: 'pilolin',
    keywords: ['pilolin', 'piles ayurvedic medicine', 'haemorrhoids ayurveda', 'bawaseer ayurvedic treatment', 'pilolin kit', 'ayurvedic piles kit'],
  },
  {
    slug: 'neurojoint',
    name: 'Himayu Neurojoint Care',
    tagline: 'Advanced Ayurvedic Formula for Joint Pain & Nerve Strength',
    category: 'Ayurvedic Proprietary Formulation',
    form: 'Capsule',
    netWeight: '60 Capsules',
    description: 'Ayurvedic capsule for arthritis, joint pain, paralysis, neuropathic pain, cervical & lumbar spondylosis and all Vataj disorders. Each 500mg capsule contains 6 classical preparations.',
    longDescription: `Himayu Neurojoint Care is an advanced Ayurvedic proprietary formulation for joint and nerve health. Each 500mg capsule is a precise blend of six classical Ayurvedic preparations — Ras, Guggulu and Bhasm — time-tested for their anti-inflammatory, nerve-nourishing and Vata-pacifying properties.

The formulation targets multiple root causes simultaneously: reducing inflammation, nourishing nerve tissue, strengthening muscles and improving overall mobility. It is particularly effective for arthritis (गठिया), joint pain (जोड़ों का दर्द), paralysis (लकवा), neuropathic pain (नसों का दर्द), muscular pain, cervical and lumbar spondylosis and all Vataj Vyadhi (वातज व्याधियां).

Manufactured under GMP-certified conditions, each batch is quality-tested for consistency and purity. Himayu Neurojoint Care offers a natural, side-effect-free path to lasting joint and nerve relief.`,
    benefits: [
      'Arthritis — Osteoarthritis and Rheumatoid (गठिया)',
      'Joint pain and stiffness (जोड़ों का दर्द)',
      'Paralysis and nerve weakness (लकवा)',
      'Neuropathic and muscular pain (नसों का दर्द)',
      'Cervical and lumbar spondylosis',
      'All Vataj Vyadhi (वातज व्याधियों का उपचार)',
    ],
    ingredients: [
      { name: 'Mahavatvidhvansan Ras', latin: 'Classical preparation', quantity: '40 mg' },
      { name: 'Mahayograj Guggulu', latin: 'Classical preparation', quantity: '70 mg' },
      { name: 'Ekangveer Ras', latin: 'Classical preparation', quantity: '40 mg' },
      { name: 'Singhnad Guggulu', latin: 'Classical preparation', quantity: '300 mg' },
      { name: 'Godanti Bhasm', latin: 'Classical preparation', quantity: '20 mg' },
      { name: 'Sameer Pannag Ras', latin: 'Classical preparation', quantity: '30 mg' },
    ],
    dosage: '1–2 capsules twice daily with warm water or milk, or as directed by your Ayurvedic physician. Each capsule: 500mg.',
    faqs: [
      { q: 'What is Himayu Neurojoint Care used for?', a: 'Neurojoint Care is used for arthritis, joint pain, paralysis, neuropathic pain, muscular pain, cervical and lumbar spondylosis and all Vata disorders.' },
      { q: 'What are the ingredients in Neurojoint Care?', a: 'Each 500mg capsule contains: Mahavatvidhvansan Ras 40mg, Mahayograj Guggulu 70mg, Ekangveer Ras 40mg, Singhnad Guggulu 300mg, Godanti Bhasm 20mg and Sameer Pannag Ras 30mg.' },
      { q: 'Is Neurojoint Care good for spondylosis?', a: 'Yes, Neurojoint Care is specifically indicated for both cervical and lumbar spondylosis due to its Vata-pacifying and nerve-nourishing ingredients.' },
      { q: 'How many capsules are in one pack?', a: 'Each pack contains 60 capsules.' },
    ],
    shopifyHandle: 'neurojoint',
    keywords: ['neurojoint', 'himayu neurojoint care', 'joint pain ayurvedic capsule', 'arthritis ayurvedic medicine', 'spondylosis ayurvedic treatment', 'neuropathic pain ayurveda', 'singhnad guggulu', 'mahayograj guggulu', 'vataj vyadhi'],
    image: '/neurojoint.png',
  },
  {
    slug: 'ksheerbala-tail',
    name: 'Ksheerbala Tail',
    hindiName: 'क्षीरबला तेल',
    tagline: 'Classical Ayurvedic Oil for Joint Pain, Arthritis & Nerve Weakness',
    category: 'Ayurvedic Classical Oil',
    form: 'Taila (Medicated Oil)',
    netWeight: '50ml / 450ml',
    description: 'Classical Ayurvedic medicated oil (Ashtanga Hridayam) for joint pain, arthritis, nerve weakness, paralysis and postpartum recovery.',
    longDescription: `Ksheerbala Tail (क्षीरबला तेल) is one of the most revered classical Ayurvedic medicated oils, referenced in Ashtanga Hridayam (Vatavyadhi Chikitsa Adhyaya) — the classical Ayurvedic text. The name itself reveals its composition: Ksheer (cow's milk) + Bala (Sida cordifolia) + Tail (oil). This trifecta of milk, herb and sesame oil creates a deeply nourishing, Vata-pacifying medicated oil.

Prepared through the classical Taila Pakva (oil processing) method, sesame oil is slowly cooked with Bala (Sida cordifolia root) and cow's milk until the milk evaporates and the oil absorbs the therapeutic properties of the herb. This classical process ensures maximum bioavailability of the active constituents through the skin.

Ksheerbala Tail is used both for daily Abhyanga (self-massage) and in Panchakarma therapies including Pizhichil (oil bath) and Basti (medicated enema base). It is Himayu Care's go-to external oil for all Vata-related conditions — joint pain, arthritis, nerve weakness, paralysis, postpartum recovery and general muscular strengthening.`,
    benefits: [
      'Joint pain and stiffness (Sandhivata)',
      'Osteoarthritis and Rheumatoid Arthritis',
      'Nerve weakness and neuropathy (Vata disorders)',
      'Paralysis — partial and facial',
      'Muscle weakness and fatigue',
      'Postpartum recovery and body strengthening',
      'Sciatica and lower back pain',
      'Cervical spondylosis and frozen shoulder',
    ],
    ingredients: [
      { name: 'Bala (Root)', latin: 'Sida cordifolia', quantity: 'Classical ratio' },
      { name: 'Tila Taila (Sesame Oil)', latin: 'Sesamum indicum', quantity: 'Base oil' },
      { name: 'Ksheera (Cow\'s Milk)', latin: 'Bos taurus', quantity: 'Classical ratio' },
    ],
    dosage: 'For massage (Abhyanga): Warm the oil slightly and massage into affected joints or the full body in gentle circular motions. Leave for 20–30 minutes before bathing with warm water. Use daily or as directed by your Ayurvedic physician. For Panchakarma use: as advised by your physician.',
    faqs: [
      { q: 'What is Ksheerbala Tail used for?', a: 'Ksheerbala Tail is used for joint pain, arthritis, nerve weakness, paralysis, muscle weakness and postpartum recovery. It is a classical Ayurvedic medicated oil for Vata disorders.' },
      { q: 'How do I use Ksheerbala Tail?', a: 'Warm the oil slightly and massage into the affected area or full body. Leave for 20–30 minutes, then bathe with warm water. Daily use gives the best results for chronic conditions.' },
      { q: 'Is Ksheerbala Tail good for arthritis?', a: 'Yes, Ksheerbala Tail is one of the classical Ayurvedic oils specifically indicated for arthritis (Sandhivata). Regular massage reduces pain, stiffness and improves joint mobility.' },
      { q: 'Can Ksheerbala Tail be used during postpartum recovery?', a: 'Yes, Ksheerbala Tail is a classical postpartum tonic oil. It strengthens muscles, reduces Vata imbalance and supports recovery after childbirth.' },
    ],
    shopifyHandle: 'ksheerbala-tail',
    keywords: ['ksheerbala tail', 'ksheerbala taila', 'क्षीरबला तेल', 'kheerbala oil', 'joint pain oil ayurveda', 'arthritis oil ayurvedic', 'ayurvedic massage oil joints'],
  },
  {
    slug: 'saindhavadi-tail',
    name: 'Saindhavadi Tail',
    hindiName: 'सेन्धवादि तेल',
    tagline: 'Classical Ayurvedic Oil for Joint Pain, Arthritis & Back Pain',
    category: 'Ayurvedic Classical Oil',
    form: 'Taila (Medicated Oil)',
    netWeight: '450ml',
    description: 'Classical Ayurvedic medicated oil (Ashtanga Hridayam) with Saindhava Lavana (rock salt) for joint pain, arthritis, sciatica and spinal conditions.',
    longDescription: `Saindhavadi Tail (सेन्धवादि तेल) is a time-honoured classical Ayurvedic medicated oil referenced in Ashtanga Hridayam, prepared with Saindhava Lavana (rock salt) as the primary therapeutic agent in a base of sesame oil with classical Vata-pacifying herbs. The name derives from its principal ingredient — Saindhava (Sindh rock salt), which in Ayurveda is considered the finest of all salts, specifically beneficial for Vata disorders.

This classical formulation penetrates deep into the joints and muscles, dissolving accumulated toxins (Ama), reducing inflammation and restoring proper circulation of Vata (the energy governing movement and sensation). It is highly effective for all types of joint and musculoskeletal conditions including arthritis, back pain, sciatica and cervical spondylosis.

Himayu Care's Saindhavadi Tail is prepared following authentic classical proportions, using pure Saindhava Lavana, cold-pressed sesame oil and classical herbs to ensure the highest therapeutic potency.`,
    benefits: [
      'Joint pain and stiffness (Sandhivata)',
      'Osteoarthritis and Rheumatoid Arthritis',
      'Back pain and lumbar spondylosis',
      'Sciatica and nerve pain (Gridhrasi)',
      'Cervical spondylosis and frozen shoulder',
      'Muscle spasms and stiffness',
      'Arthritis-related swelling and inflammation',
      'General body pain and fatigue',
    ],
    ingredients: [
      { name: 'Saindhava Lavana (Rock Salt)', latin: 'Sodium chloride naturale', quantity: 'Classical ratio' },
      { name: 'Tila Taila (Sesame Oil)', latin: 'Sesamum indicum', quantity: 'Base oil' },
      { name: 'Devadaru', latin: 'Cedrus deodara', quantity: 'Classical ratio' },
      { name: 'Rasna', latin: 'Pluchea lanceolata', quantity: 'Classical ratio' },
      { name: 'Bala', latin: 'Sida cordifolia', quantity: 'Classical ratio' },
      { name: 'Madhuka (Mulethi)', latin: 'Glycyrrhiza glabra', quantity: 'Classical ratio' },
    ],
    dosage: 'For massage (Abhyanga): Warm the oil slightly and massage into affected joints or painful areas in gentle circular motions. Leave for 20–30 minutes before bathing with warm water. For best results, use daily or as directed by your Ayurvedic physician. For Panchakarma: as advised by your physician.',
    faqs: [
      { q: 'What is Saindhavadi Tail used for?', a: 'Saindhavadi Tail is a classical Ayurvedic medicated oil used for joint pain, arthritis, back pain, sciatica, cervical spondylosis and muscle stiffness. It pacifies Vata dosha and relieves pain and inflammation.' },
      { q: 'How do I use Saindhavadi Tail?', a: 'Warm the oil slightly and massage into the affected area with gentle circular motions. Leave for 20–30 minutes, then bathe with warm water. Use daily for chronic conditions or as directed by your physician.' },
      { q: 'What makes Saindhavadi Tail different from other joint oils?', a: 'The key ingredient Saindhava Lavana (rock salt) is unique — in Ayurveda, it is considered the finest salt for Vata disorders. Combined with sesame oil and classical herbs, it penetrates deeply to dissolve Ama (toxins) and restore joint health.' },
      { q: 'Is Saindhavadi Tail good for sciatica?', a: 'Yes, Saindhavadi Tail is specifically indicated for Gridhrasi (sciatica) in Ayurvedic texts. Regular massage along the lower back and sciatic nerve pathway relieves pain and nerve inflammation.' },
      { q: 'Can Saindhavadi Tail be used for cervical spondylosis?', a: 'Yes, regular massage of the neck and shoulders with Saindhavadi Tail is highly beneficial for cervical spondylosis, reducing stiffness and nerve compression symptoms.' },
    ],
    shopifyHandle: 'saindhavadi-tail',
    keywords: ['saindhavadi tail', 'saindhavadi taila', 'सेन्धवादि तेल', 'saindhavadi tel', 'saindhava oil', 'joint pain oil', 'arthritis oil ayurvedic', 'back pain oil ayurveda', 'sciatica oil'],
  },
  {
    slug: 'basti-kalpa-churna',
    name: 'Himayu Basti Kalpa Churna',
    hindiName: 'बस्ती कल्प चूर्ण',
    tagline: 'Classical Eight-Herb Churna for Swelling, Inflammation & Vata Disorders',
    category: 'Ayurvedic Proprietary Medicine',
    form: 'Churna (Powder)',
    netWeight: '250g',
    description: 'Classical Ayurvedic churna useful as Basti Kalka for swelling, inflammation and Vata-related disorders. Each 10gm contains eight potent herbs at 1.25gm each.',
    longDescription: `Himayu Basti Kalpa Churna (बस्ती कल्प चूर्ण) is an Ayurvedic proprietary medicine prepared from eight classical herbs, each at an equal potency of 1.25gm per 10gm dose. The formulation is specifically designed for use as a Basti Kalka — a medicated paste or powder used in Panchakarma Basti (medicated enema) therapy.

Basti is considered one of the most powerful Panchakarma procedures for pacifying Vata dosha, which is the root cause of most inflammatory and degenerative conditions in Ayurveda. Himayu Basti Kalpa Churna combines Yavani, Madanphal, Bilwa, Kushtha, Vacha, Shatapushpa, Musta and Pippali — herbs classically prescribed for their Vata-pacifying, anti-inflammatory and digestive properties.

The formulation is useful in swelling (शोथ), abdominal colic (शूल), and all Vata-dominant conditions. It is manufactured under GMP-certified conditions by Gayatri Herbals, Haridwar, and marketed by Himayu Care, Dehradun.`,
    benefits: [
      'Useful as Basti Kalka in Panchakarma therapy',
      'Swelling and inflammation (शोथ)',
      'Abdominal colic and pain (शूल)',
      'Vata-related disorders (वात दोष)',
      'Digestive imbalance and gut health',
      'Classical Ayurvedic formulation — GMP certified',
    ],
    ingredients: [
      { name: 'यवानी (Yavani)', latin: 'Trachyspermum ammi', quantity: '1.25gm per 10gm' },
      { name: 'मदनफल (Madanphal)', latin: 'Randia dumetorum', quantity: '1.25gm per 10gm' },
      { name: 'बिल्व (Bilwa)', latin: 'Aegle marmelos', quantity: '1.25gm per 10gm' },
      { name: 'कुष्ठ (Kushtha)', latin: 'Saussurea lappa', quantity: '1.25gm per 10gm' },
      { name: 'वचा (Vacha)', latin: 'Acorus calamus', quantity: '1.25gm per 10gm' },
      { name: 'शतपुष्पा (Shatapushpa)', latin: 'Anethum sowa', quantity: '1.25gm per 10gm' },
      { name: 'मुस्ता (Musta)', latin: 'Cyperus rotundus', quantity: '1.25gm per 10gm' },
      { name: 'पिप्पली (Pippali)', latin: 'Piper longum', quantity: '1.25gm per 10gm' },
    ],
    dosage: 'As directed by the physician. मात्रा: चिकित्सक के परामर्शानुसार।',
    faqs: [
      { q: 'What is Basti Kalpa Churna used for?', a: 'Himayu Basti Kalpa Churna is used as a Basti Kalka in Panchakarma therapy. It is indicated for swelling, inflammation, abdominal colic and Vata-related disorders.' },
      { q: 'What does Basti Kalpa Churna contain?', a: 'Each 10gm contains: Yavani, Madanphal, Bilwa, Kushtha, Vacha, Shatapushpa, Musta and Pippali — each at 1.25gm, plus excipients q.s.' },
      { q: 'How is Basti Kalpa Churna used?', a: 'It is used as directed by an Ayurvedic physician, typically as part of Basti (medicated enema) Panchakarma therapy.' },
      { q: 'Is Basti Kalpa Churna GMP certified?', a: 'Yes, it is manufactured under GMP-certified conditions by Gayatri Herbals, Haridwar, Uttarakhand and marketed by Himayu Care.' },
    ],
    shopifyHandle: 'himayu-basti-kalpa-churna',
    keywords: ['basti kalpa churna', 'बस्ती कल्प चूर्ण', 'himayu basti kalpa', 'basti kalka ayurveda', 'panchakarma churna', 'vata disorder ayurvedic medicine', 'swelling ayurvedic medicine', 'basti kalpa churna price'],
    image: '/bastikalpa.jpeg',
  },
];

export function getMedicinePage(slug: string): MedicinePage | null {
  return medicinePages.find((m) => m.slug === slug) ?? null;
}
