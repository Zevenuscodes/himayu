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
      { name: 'Haritaki', latin: 'Terminalia chebula' },
      { name: 'Vibhitaki', latin: 'Terminalia bellarica' },
      { name: 'Amalaki', latin: 'Emblica Officinalis' },
      { name: 'Daruharidra', latin: 'Berberis aristata' },
      { name: 'Indrayan', latin: 'Citrullus colocynthis' },
      { name: 'Nagarmotha', latin: 'Cyperus rotundus' },
    ],
    dosage: 'Soak 5g of Phalatrikadi Kwath powder in 200ml of water for 8 hours (overnight). Boil the soaked mixture until only 50ml (one-quarter) remains. Filter and drink warm on an empty stomach in the morning. Or as directed by your Ayurvedic physician.',
    faqs: [
      { q: 'Is Phalatrikadi Kwath good for diabetes?', a: 'Yes, Phalatrikadi Kwath is a classical Ayurvedic formulation used in the management of diabetes mellitus (Madhumeh). It helps regulate blood sugar and supports metabolic health.' },
      { q: 'How do I prepare Phalatrikadi Kwath?', a: 'Soak 5g in 200ml water overnight. Boil until 50ml remains. Filter and drink warm. This is the classical decoction preparation method.' },
      { q: 'Can I take Phalatrikadi Kwath alongside my diabetes medication?', a: 'Please consult your physician before combining with diabetes medication as it may affect blood sugar levels synergistically.' },
    ],
    shopifyHandle: 'phalatrikadi-kwath',
    keywords: ['phalatrikadi kwath', 'फलत्रिकादि क्वाथ', 'phalatrikadi', 'ayurvedic medicine for diabetes', 'madhumeh ayurveda', 'diabetes kwath'],
  },
  {
    slug: 'pilolin',
    name: 'Himayu Pilolin Kit',
    tagline: 'Complete 3-in-1 Ayurvedic Solution for Piles (Haemorrhoids)',
    category: 'Ayurvedic Proprietary Formulation',
    form: 'Kit (Capsule + Oil + Powder)',
    netWeight: '60 Caps + 100ml Oil + 100g Powder',
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
    description: 'New Ayurvedic capsule formulation for joint pain, nerve weakness and lasting mobility — Coming Soon.',
    longDescription: `Himayu Neurojoint Care is Himayu Care's newest Ayurvedic proprietary formulation, developed for individuals suffering from joint pain, nerve weakness and restricted mobility. Combining six time-tested herbs known for their anti-inflammatory, nerve-nourishing and Vata-pacifying properties, Neurojoint offers a natural path to lasting relief.

The formulation addresses multiple aspects of joint and nerve health simultaneously — reducing inflammation, nourishing nerve tissue, strengthening muscles and improving overall mobility. This makes it particularly effective for conditions like osteoarthritis, rheumatoid arthritis, sciatica and general joint degeneration.

Formulated under GMP-certified conditions at Hans Herbals Pvt Ltd, Haridwar, Himayu Neurojoint Care is currently in its final stages before launch. Each capsule delivers a precise, therapeutic dose of potent Himalayan botanicals.`,
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
    dosage: 'Coming Soon — dosage instructions will be provided on the product label.',
    faqs: [
      { q: 'What is Himayu Neurojoint Care?', a: 'Neurojoint Care is an Ayurvedic capsule formulation for joint pain, nerve weakness and mobility. It contains 6 classical herbs including Ashwagandha, Shallaki and Guggulu.' },
      { q: 'When will Neurojoint Care be available?', a: 'Himayu Neurojoint Care is launching shortly. Follow us on Instagram @himayucare for updates.' },
      { q: 'Is Neurojoint Care good for arthritis?', a: 'Yes, Neurojoint Care is formulated to address both osteoarthritis and rheumatoid arthritis through its anti-inflammatory and Vata-pacifying herbs.' },
    ],
    shopifyHandle: 'neurojoint',
    keywords: ['neurojoint', 'himayu neurojoint care', 'joint pain ayurvedic medicine', 'arthritis capsule ayurveda', 'nerve weakness ayurveda', 'ashwagandha shallaki guggulu'],
    image: '/neurojoint.png',
  },
];

export function getMedicinePage(slug: string): MedicinePage | null {
  return medicinePages.find((m) => m.slug === slug) ?? null;
}
