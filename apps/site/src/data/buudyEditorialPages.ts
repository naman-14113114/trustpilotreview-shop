export const BUUDY_PRODUCT_URL = "https://www.buudy.co.uk/products/buudy-led-mask";

export type EditorialFact = {
  label: string;
  value: string;
};

export type EditorialProduct = {
  name: string;
  shortName: string;
  image: string;
  imageAlt: string;
  price: string;
  priceNote: string;
  sourceUrl: string;
  sourceLabel: string;
  facts: EditorialFact[];
  strengths: string[];
  considerations: string[];
};

export type BuudyEditorialPage = {
  path: string;
  cardCode: string;
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  kind: "comparison" | "guide";
  eyebrow: string;
  title: string;
  dek: string;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  verdictTitle: string;
  verdict: string;
  keyTakeaways: string[];
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  competitor?: EditorialProduct;
  guideFacts?: EditorialFact[];
  faq: Array<{ question: string; answer: string }>;
};

export const buudyProduct: EditorialProduct = {
  name: "Buudy 7 Colour LED Mask",
  shortName: "Buudy",
  image: "/img/57-w.webp",
  imageAlt: "Buudy 7 Colour LED Mask with face and neck coverage",
  price: "£179",
  priceNote: "£449 reference price shown on the official product page",
  sourceUrl: BUUDY_PRODUCT_URL,
  sourceLabel: "Buudy official product page",
  facts: [
    { label: "Light system", value: "192 LEDs; 7 visible colours plus 830nm near-infrared" },
    { label: "Coverage", value: "Face and neck in one wearable design" },
    { label: "Intensity", value: "4 adjustable levels" },
    { label: "Power", value: "Cordless, rechargeable; up to 12 sessions per charge" },
    { label: "Session support", value: "Buudy AI guided sessions available" },
    { label: "Trial", value: "90-day money-back guarantee" },
    { label: "Current bundle", value: "3 gifts shown with a combined £128 stated value" },
  ],
  strengths: [
    "The broadest colour selection in these comparisons, plus near-infrared.",
    "Face and neck coverage is included rather than sold as a separate kit.",
    "Lower current price than the comparison products featured on these pages.",
    "Cordless design, four intensity levels and a 90-day guarantee.",
  ],
  considerations: [
    "More modes mean taking a few minutes to choose the most relevant routine.",
    "The current offer and gift availability can change, so check the official page before ordering.",
  ],
};

const currentBody: EditorialProduct = {
  name: "CurrentBody Skin LED Light Therapy Face Mask",
  shortName: "CurrentBody",
  image: "/img/Untitled design.png",
  imageAlt: "CurrentBody LED face mask",
  price: "£399.99",
  priceNote: "Face mask price checked on the official UK product page",
  sourceUrl: "https://www.currentbody.com/products/currentbody-skin-led-light-therapy-mask?del_country=GB",
  sourceLabel: "CurrentBody official product page",
  facts: [
    { label: "Light system", value: "Red 633nm, near-infrared 830nm and deep near-infrared 1072nm" },
    { label: "Coverage", value: "Face; face-and-neck kit listed separately" },
    { label: "Material", value: "Flexible silicone" },
    { label: "Typical session", value: "10 minutes" },
    { label: "Positioning", value: "Focused anti-ageing light programme" },
  ],
  strengths: [
    "Focused three-wavelength red and near-infrared programme.",
    "Flexible silicone construction designed to sit close to facial contours.",
    "Large established-brand review base and a simple 10-minute routine.",
  ],
  considerations: [
    "The standard product is face-only; neck coverage requires a higher-priced kit.",
    "It offers a focused red/NIR programme rather than multiple visible colour modes.",
    "Its current price is substantially higher than Buudy’s.",
  ],
};

const deluxeSkin: EditorialProduct = {
  name: "DeluxeSkin Clinical Red Light Face Mask",
  shortName: "DeluxeSkin",
  image: "https://img.shopbase.com/10677/10677322/themes/17710782713159684b8b.jpeg",
  imageAlt: "DeluxeSkin clinical red light face mask and neck system",
  price: "£199",
  priceNote: "Sale price shown when checked; £349 reference price",
  sourceUrl: "https://deluxeskin.uk/products/clinical-red-light-face-mask",
  sourceLabel: "DeluxeSkin official product page",
  facts: [
    { label: "Light system", value: "Red 633nm and near-infrared 830nm" },
    { label: "Coverage", value: "Face plus separate neck and décolletage device" },
    { label: "Irradiance", value: "30mW/cm² stated by the manufacturer" },
    { label: "Typical session", value: "10 minutes" },
    { label: "Material", value: "Flexible mask format" },
  ],
  strengths: [
    "Face and neck hardware is included in the advertised bundle.",
    "Straightforward two-wavelength red and near-infrared routine.",
    "The checked sale price sits close to Buudy’s current price.",
  ],
  considerations: [
    "The neck area uses a separate piece instead of one integrated wearable.",
    "It provides two wavelengths rather than Buudy’s multi-colour selection.",
    "Price and bundle contents should be rechecked before purchase.",
  ],
};

const qure: EditorialProduct = {
  name: "Qure Q-Rejuvalight Pro Facewear",
  shortName: "Qure",
  image: "https://img.shopbase.com/10677/10677322/themes/1771076622cb6d999736.jpeg",
  imageAlt: "Qure Q-Rejuvalight Pro LED face mask",
  price: "£299 when reviewed",
  priceNote: "UK pricing can change; confirm on Qure’s official site",
  sourceUrl: "https://www.qureskincare.co.uk/pages/q-rejuvalight-pro-facewear",
  sourceLabel: "Qure official UK product information",
  facts: [
    { label: "Light system", value: "Five wavelengths: 415, 605, 630, 660 and 880nm" },
    { label: "Coverage", value: "Face" },
    { label: "Typical session", value: "3 minutes" },
    { label: "Modes", value: "Three modes, including custom facial zones" },
    { label: "App", value: "Optional for standard modes; used for zone customisation" },
  ],
  strengths: [
    "Very short three-minute treatment routine.",
    "Custom treatment zones are useful for mixed facial concerns.",
    "Includes both blue light and red/near-infrared wavelengths.",
  ],
  considerations: [
    "Coverage is face-only rather than face and neck.",
    "Custom-zone control adds an app step for buyers who want that feature.",
    "The price checked for this review was higher than Buudy’s current offer.",
  ],
};

const theraFace: EditorialProduct = {
  name: "Therabody TheraFace Mask",
  shortName: "TheraFace",
  image: "https://img.thesitebase.net/10677/10677322/themes/177107817340059938e3.jpeg",
  imageAlt: "Therabody TheraFace rigid LED face mask",
  price: "£579 when reviewed",
  priceNote: "Confirm current UK price on the official product page",
  sourceUrl: "https://www.therabody.com/products/theraface-mask",
  sourceLabel: "Therabody official product page",
  facts: [
    { label: "Light system", value: "Red, red plus infrared, and blue modes" },
    { label: "Light count", value: "648 lights stated by Therabody" },
    { label: "Coverage", value: "Face" },
    { label: "Extra feature", value: "Built-in vibration treatment" },
    { label: "Weight", value: "576g stated product weight" },
  ],
  strengths: [
    "Combines LED sessions with Therabody’s vibration feature.",
    "High stated light count and a rigid hands-free structure.",
    "Includes both blue and red/infrared treatment modes.",
  ],
  considerations: [
    "It is the heaviest and highest-priced option in these direct comparisons.",
    "The rigid design and vibration feature will not suit every buyer’s comfort preference.",
    "Coverage stops at the face; the neck is not included.",
  ],
};

export const buudyEditorialPages: BuudyEditorialPage[] = [
  {
    path: "/currentbody-vs-buudy",
    cardCode: "HEAD TO HEAD",
    cardTitle: "CurrentBody vs Buudy",
    cardDescription: "A factual UK comparison of price, wavelengths, coverage, routine and guarantee.",
    cardImage: "/img/Untitled design.png",
    kind: "comparison",
    eyebrow: "LED mask head-to-head",
    title: "CurrentBody vs Buudy LED Mask",
    dek: "Two popular UK options take different approaches: CurrentBody focuses on a three-wavelength anti-ageing routine, while Buudy combines seven visible colours, near-infrared and built-in neck coverage.",
    heroImage: "/img/TOP 5 LED Mask uk.png",
    heroImageAlt: "Five LED face masks compared for the UK",
    metaTitle: "CurrentBody vs Buudy LED Mask UK (2026 Comparison)",
    metaDescription: "Compare CurrentBody and Buudy LED masks by UK price, wavelengths, face and neck coverage, session time, features and guarantee.",
    verdictTitle: "Buudy is the stronger all-round value; CurrentBody is the focused anti-ageing alternative",
    verdict: "Choose CurrentBody if you specifically want its flexible silicone fit and three red/near-infrared wavelengths. Choose Buudy if you want more visible colour modes, face-and-neck coverage in one device and a much lower current price.",
    keyTakeaways: [
      "Buudy is £179; CurrentBody’s face mask was £399.99 when checked.",
      "CurrentBody concentrates on 633nm, 830nm and 1072nm light.",
      "Buudy includes seven visible colours, 830nm near-infrared and neck coverage.",
    ],
    sections: [
      {
        title: "The meaningful difference is breadth versus focus",
        paragraphs: [
          "CurrentBody’s mask is designed around a concise red and near-infrared anti-ageing programme. Its flexible silicone construction is a genuine point of difference for shoppers who prioritise close facial contact and a simple routine.",
          "Buudy is the broader-use option. Its colour selection, adjustable intensity and integrated neck area give buyers more ways to personalise a session without purchasing a separate neck device.",
        ],
      },
      {
        title: "Compare the complete cost, not only the face mask",
        paragraphs: [
          "CurrentBody also sells a face-and-neck kit, but that bundle was £679.99 when checked. Buudy’s face-and-neck design is included at £179, alongside the current gift bundle shown on its official UK product page.",
        ],
      },
    ],
    competitor: currentBody,
    faq: [
      { question: "Is CurrentBody better than Buudy?", answer: "It depends on your priority. CurrentBody is a focused three-wavelength anti-ageing mask; Buudy offers more colour modes, integrated neck coverage and a lower current price." },
      { question: "Which mask includes neck coverage?", answer: "Buudy includes face and neck coverage in one design. CurrentBody lists neck coverage as part of a separate face-and-neck kit." },
      { question: "Which one costs less?", answer: "At the prices checked on 3 August 2026, Buudy was £179 and the CurrentBody face mask was £399.99." },
    ],
  },
  {
    path: "/deluxeskin-vs-buudy",
    cardCode: "HEAD TO HEAD",
    cardTitle: "DeluxeSkin vs Buudy",
    cardDescription: "Compare two lower-priced face-and-neck LED systems without the old hype.",
    cardImage: "https://img.shopbase.com/10677/10677322/themes/17710782713159684b8b.jpeg",
    kind: "comparison",
    eyebrow: "LED mask head-to-head",
    title: "DeluxeSkin vs Buudy LED Mask",
    dek: "Both offers include face and neck treatment, but the format and light selection are different: DeluxeSkin uses separate red/NIR pieces, while Buudy integrates broader colour choice into one wearable design.",
    heroImage: "/img/TOP 5 LED Mask uk.png",
    heroImageAlt: "Top LED face masks compared for UK shoppers",
    metaTitle: "DeluxeSkin vs Buudy LED Mask UK (2026)",
    metaDescription: "Compare DeluxeSkin and Buudy LED masks by UK price, wavelengths, neck coverage, treatment format and guarantee.",
    verdictTitle: "Buudy wins on integrated coverage and versatility; DeluxeSkin keeps the routine simple",
    verdict: "DeluxeSkin is a credible choice for buyers who only want red and near-infrared treatment with a separate neck piece. Buudy costs slightly less at the prices checked and offers more colour modes, one-piece coverage and four intensity levels.",
    keyTakeaways: [
      "Both brands include treatment for the face and neck area.",
      "DeluxeSkin lists 633nm red and 830nm near-infrared; Buudy adds seven visible colour modes.",
      "Buudy was £20 less at the current checked sale prices.",
    ],
    sections: [
      {
        title: "One integrated design or two treatment pieces?",
        paragraphs: [
          "DeluxeSkin’s bundle includes a flexible face mask plus a separate neck and décolletage device. That can be useful if you prefer to position each treatment area independently.",
          "Buudy’s face and neck areas form one wearable device. It is quicker to put on and avoids storing or connecting a separate neck piece.",
        ],
      },
      {
        title: "Two wavelengths versus a multi-colour system",
        paragraphs: [
          "DeluxeSkin keeps its programme focused on 633nm red and 830nm near-infrared. Buudy adds blue, green, cyan, yellow, purple and white visible modes alongside red and 830nm near-infrared. More modes are only useful if you plan to use them, but they provide greater flexibility for changing routines.",
        ],
      },
    ],
    competitor: deluxeSkin,
    faq: [
      { question: "Does DeluxeSkin include a neck mask?", answer: "Yes. The offer checked included a separate neck and décolletage LED device with the face mask." },
      { question: "Which has more light modes?", answer: "Buudy has seven visible colour modes plus 830nm near-infrared. DeluxeSkin focuses on 633nm red and 830nm near-infrared." },
      { question: "Which is easier to wear?", answer: "That is a preference. Buudy combines face and neck coverage in one wearable; DeluxeSkin separates them into two pieces." },
    ],
  },
  {
    path: "/qureskincare-vs-buudy",
    cardCode: "HEAD TO HEAD",
    cardTitle: "Qure vs Buudy",
    cardDescription: "Three-minute custom zones versus broader face-and-neck coverage and value.",
    cardImage: "https://img.shopbase.com/10677/10677322/themes/1771076622cb6d999736.jpeg",
    kind: "comparison",
    eyebrow: "LED mask head-to-head",
    title: "Qure vs Buudy LED Mask",
    dek: "Qure prioritises very short sessions and app-controlled facial zones. Buudy prioritises full face-and-neck coverage, more visible colour modes and a lower current price.",
    heroImage: "/img/TOP 5 LED Mask uk.png",
    heroImageAlt: "LED face masks compared in the UK",
    metaTitle: "Qure vs Buudy LED Mask UK (2026 Comparison)",
    metaDescription: "Compare Qure Q-Rejuvalight Pro and Buudy LED masks by price, wavelengths, session time, app features and face-and-neck coverage.",
    verdictTitle: "Qure is best for speed and facial zoning; Buudy is the better coverage-and-value package",
    verdict: "Qure’s three-minute routine and five-zone customisation are the reasons to buy it. Buudy is the more complete purchase for shoppers who want neck coverage, a wider visible colour selection and a lower price.",
    keyTakeaways: [
      "Qure’s standard routine takes three minutes and its app can customise five facial zones.",
      "Buudy covers the neck and offers seven visible colours plus 830nm near-infrared.",
      "Qure was £299 when reviewed; Buudy’s current price is £179.",
    ],
    sections: [
      {
        title: "Qure’s standout feature is targeted speed",
        paragraphs: [
          "A three-minute session is easier to fit into a busy routine than many ten-minute devices. The app also lets users assign different modes to five facial zones, which is genuinely useful for mixed concerns.",
          "The trade-off is coverage: Qure is a facewear product. Buudy extends treatment below the jawline to the neck in the same wearable.",
        ],
      },
      {
        title: "App control should be a preference, not a requirement",
        paragraphs: [
          "Qure’s standard modes can be used without opening the app, while custom zoning uses the app. Buudy’s guided sessions add support, but its on-device controls remain central to the experience. Buyers should choose the interaction style they will actually use consistently.",
        ],
      },
    ],
    competitor: qure,
    faq: [
      { question: "Does Qure need the app for every session?", answer: "No. Qure says standard modes can be used without the app; the app is used for custom facial-zone programming." },
      { question: "Which mask has the shortest session?", answer: "Qure lists a three-minute daily treatment, making it the faster routine in this comparison." },
      { question: "Does Qure treat the neck?", answer: "The Q-Rejuvalight Pro Facewear covers the face. Buudy includes face and neck coverage." },
    ],
  },
  {
    path: "/theraface-vs-other-masks",
    cardCode: "HEAD TO HEAD",
    cardTitle: "TheraFace vs Buudy",
    cardDescription: "Compare Therabody’s vibration-led premium mask with Buudy’s broader-value package.",
    cardImage: "https://img.thesitebase.net/10677/10677322/themes/177107817340059938e3.jpeg",
    kind: "comparison",
    eyebrow: "LED mask head-to-head",
    title: "TheraFace Mask vs Buudy",
    dek: "TheraFace is a premium rigid mask that combines LED light with vibration. Buudy is lighter on price, includes the neck and provides a wider visible colour selection.",
    heroImage: "/img/TOP 5 LED Mask uk.png",
    heroImageAlt: "Five LED face mask designs compared",
    metaTitle: "TheraFace Mask vs Buudy UK (2026 Comparison)",
    metaDescription: "Compare Therabody TheraFace Mask and Buudy by UK price, LED modes, weight, vibration, coverage and guarantee.",
    verdictTitle: "TheraFace is the feature-led luxury option; Buudy delivers more coverage for far less",
    verdict: "TheraFace makes sense if built-in vibration and its rigid headset design are high priorities. For most value-conscious shoppers, Buudy’s face-and-neck coverage, wider mode selection and £400 lower reviewed price make it the easier recommendation.",
    keyTakeaways: [
      "Therabody states 648 lights, three LED modes and built-in vibration.",
      "TheraFace weighs 576g and covers the face; Buudy includes the neck.",
      "The reviewed prices were £579 for TheraFace and £179 for Buudy.",
    ],
    sections: [
      {
        title: "Vibration is TheraFace’s real differentiator",
        paragraphs: [
          "Light count alone does not prove that one mask will suit every user better. TheraFace’s distinct reason to buy is the combination of LED modes and facial vibration in one rigid device.",
          "That feature also affects size, weight and feel. At a stated 576g, TheraFace is a more substantial headset than many flexible or lightweight alternatives.",
        ],
      },
      {
        title: "Coverage changes the value calculation",
        paragraphs: [
          "TheraFace stops at the face. Buudy includes the neck at less than one-third of the reviewed TheraFace price. Buyers who do not care about vibration are therefore paying a large premium for a feature they may not use.",
        ],
      },
    ],
    competitor: theraFace,
    faq: [
      { question: "Why is the TheraFace Mask different?", answer: "Its main differentiator is built-in vibration alongside red, red-plus-infrared and blue LED modes." },
      { question: "Is a higher LED count automatically better?", answer: "No. Count is one specification; fit, irradiance, distance, wavelengths, coverage and consistent use also matter." },
      { question: "Which offers better value?", answer: "Buudy offers more treatment area and a lower current price. TheraFace is the premium choice for buyers specifically wanting vibration." },
    ],
  },
  {
    path: "/silicone-led-mask-dangers",
    cardCode: "BUYER GUIDE",
    cardTitle: "Silicone LED Masks: Fit & Care",
    cardDescription: "A calm, practical guide to comfort, cleaning, heat and skin contact.",
    cardImage: "/img/Untitled design.png",
    kind: "guide",
    eyebrow: "LED mask materials guide",
    title: "Silicone LED Masks: Comfort, Cleaning and Fit",
    dek: "Silicone is not inherently dangerous. The useful question is whether a mask fits comfortably, can be cleaned as directed and allows you to complete sessions consistently.",
    heroImage: "/img/Untitled design.png",
    heroImageAlt: "Flexible silicone LED face mask",
    metaTitle: "Are Silicone LED Masks Safe? Fit & Cleaning Guide (2026)",
    metaDescription: "Understand flexible silicone LED mask comfort, cleaning, skin contact and fit, plus how silicone compares with rigid and open designs.",
    verdictTitle: "Silicone can be comfortable and effective to wear, but fit and cleaning matter more than the material label",
    verdict: "There is no sound basis for calling all silicone LED masks dangerous. Follow the manufacturer’s cleaning guidance, stop if you experience persistent discomfort, and choose a design whose eye area, straps and weight work for your face.",
    keyTakeaways: [
      "Flexible silicone can sit close to facial contours and is used by several established brands.",
      "Any reusable mask should be cleaned according to its manufacturer’s instructions.",
      "Rigid, flexible and open designs each involve different comfort trade-offs.",
    ],
    guideFacts: [
      { label: "Flexible silicone", value: "Close facial contact; fit depends on face shape and strap adjustment" },
      { label: "Rigid shell", value: "Keeps a fixed shape; can feel heavier or more spacious around the eyes" },
      { label: "Open face-and-neck design", value: "Broader coverage and airflow; positioning still matters" },
      { label: "Best care rule", value: "Use the cleaning method stated by the manufacturer" },
    ],
    sections: [
      {
        title: "What shoppers should actually check",
        paragraphs: [
          "Look for clear cleaning instructions, comfortable eye protection, straps that hold the lights at the intended distance and a session time you can repeat. If a product causes pain, excessive heat or persistent irritation, stop using it and follow the manufacturer’s support guidance.",
        ],
      },
      {
        title: "Why Buudy may suit buyers who dislike close-fitting silicone",
        paragraphs: [
          "Buudy uses a more open face-and-neck format rather than a flexible silicone sheet pressed across the face. That does not make it universally better, but it offers a different feel and adds neck coverage in the same device.",
        ],
      },
    ],
    faq: [
      { question: "Are silicone LED masks dangerous?", answer: "Silicone as a category is not inherently dangerous. Product quality, fit, heat, eye comfort, cleaning and following the instructions are the practical considerations." },
      { question: "How should an LED mask be cleaned?", answer: "Use only the method and products specified by the manufacturer, and disconnect or switch off the device first." },
      { question: "What if an LED mask irritates my skin?", answer: "Stop using it and review the manufacturer’s instructions. Seek appropriate professional advice if irritation persists or you have a relevant medical condition." },
    ],
  },
  {
    path: "/floating-head-warning",
    cardCode: "COVERAGE GUIDE",
    cardTitle: "Face-only vs Face-and-Neck Masks",
    cardDescription: "Work out whether neck coverage is worth including in your first purchase.",
    cardImage: "/img/neck_led_mask_1774237229811.png",
    kind: "guide",
    eyebrow: "LED mask coverage guide",
    title: "Face-only vs Face-and-Neck LED Masks",
    dek: "A face-only mask can be the right choice, but shoppers who also want the neck area covered should compare the complete kit price before buying.",
    heroImage: "/img/neck_led_mask_1774237229811.png",
    heroImageAlt: "LED mask extending from the face to the neck",
    metaTitle: "Face-only vs Face-and-Neck LED Masks UK (2026)",
    metaDescription: "Compare face-only and face-and-neck LED masks by coverage, convenience, kit price and fit before choosing a UK device.",
    verdictTitle: "Decide on treatment area first, then compare the total system price",
    verdict: "Face-only is enough if that is the only area you intend to use. If the neck matters to you, an integrated product such as Buudy can be more convenient and less expensive than adding a separate neck device later.",
    keyTakeaways: [
      "Face-only masks are often lighter and simpler.",
      "Separate neck devices can raise both the total price and setup time.",
      "Buudy includes face and neck coverage at its current £179 price.",
    ],
    guideFacts: [
      { label: "Buudy", value: "Integrated face and neck coverage; £179 current price" },
      { label: "CurrentBody", value: "Face mask £399.99; face-and-neck kit £679.99 when checked" },
      { label: "DeluxeSkin", value: "Face mask plus separate neck/décolletage device; £199 sale price checked" },
      { label: "Qure / TheraFace", value: "Products reviewed here focus on the face" },
    ],
    sections: [
      {
        title: "Integrated coverage reduces setup",
        paragraphs: [
          "One wearable can be quicker to position and store than separate face and neck pieces. A two-piece system may offer more independent positioning, so the better format depends on your routine.",
        ],
      },
      {
        title: "Do not treat the neck as a surprise add-on",
        paragraphs: [
          "Before buying, price the exact coverage you want. A lower face-mask price can become a higher total once a matching neck device, controller or bundle is added.",
        ],
      },
    ],
    faq: [
      { question: "Do I need neck coverage?", answer: "Only if the neck is one of the areas you intend to include in your routine. A face-only mask remains suitable for face-only use." },
      { question: "Is one-piece coverage better?", answer: "It is usually simpler to set up, while separate pieces can provide more independent positioning. Comfort and routine matter." },
      { question: "Does Buudy include the neck?", answer: "Yes. The official product page shows integrated face and neck coverage." },
    ],
  },
  {
    path: "/missing-colors-expose",
    cardCode: "WAVELENGTH GUIDE",
    cardTitle: "2 Wavelengths vs Multi-Colour Masks",
    cardDescription: "More colours are not automatically better—choose the light system that fits your intended routine.",
    cardImage: "/img/seven_colors_mask_1774237479088.png",
    kind: "guide",
    eyebrow: "LED wavelength guide",
    title: "Two Wavelengths vs Multi-Colour LED Masks",
    dek: "Red and near-infrared systems are popular for focused routines. Multi-colour masks add flexibility, but only if you understand and intend to use the extra modes.",
    heroImage: "/img/seven_colors_mask_1774237479088.png",
    heroImageAlt: "LED face mask displaying multiple light colours",
    metaTitle: "2 Wavelengths vs Multi-Colour LED Masks (2026 Guide)",
    metaDescription: "Compare focused red and near-infrared LED masks with multi-colour systems, including wavelengths, modes, coverage and value.",
    verdictTitle: "Choose a focused system for simplicity or a multi-colour system for flexibility",
    verdict: "A two- or three-wavelength mask is not incomplete if those wavelengths match your goal. Buudy’s advantage is giving buyers multiple visible colour modes, 830nm near-infrared and adjustable intensity in one device at a competitive price.",
    keyTakeaways: [
      "Red and near-infrared are the core of many anti-ageing-focused masks.",
      "Blue and other visible colours add different programme options, not guaranteed better results.",
      "Clear wavelengths and controls are more useful than a vague claim of ‘more colours’."
    ],
    guideFacts: [
      { label: "Buudy", value: "7 visible colours plus 830nm near-infrared" },
      { label: "CurrentBody", value: "633nm, 830nm and 1072nm" },
      { label: "DeluxeSkin", value: "633nm and 830nm" },
      { label: "Qure", value: "415nm, 605nm, 630nm, 660nm and 880nm" },
    ],
    sections: [
      {
        title: "More modes should solve a real need",
        paragraphs: [
          "The best specification is the one you will use consistently. A simple red/NIR routine can be preferable to navigating modes you do not need. Conversely, a multi-colour device can avoid buying a second product if your intended routine changes.",
        ],
      },
      {
        title: "Look for stated wavelengths, not colour names alone",
        paragraphs: [
          "Reputable product information should identify the wavelengths behind each programme. Buudy currently lists seven visible colours—633, 415, 525, 490, 590, 390 and 510nm—plus 830nm near-infrared on its UK product page.",
        ],
      },
    ],
    faq: [
      { question: "Are seven colours better than two?", answer: "Not automatically. Seven colours provide more programme options; a focused red/NIR mask may be enough for a buyer with one clear goal." },
      { question: "What does Buudy include?", answer: "Buudy lists seven visible colours plus an 830nm near-infrared programme and four intensity levels." },
      { question: "What should I compare besides wavelengths?", answer: "Compare fit, irradiance information, session time, coverage, controls, guarantee and the total price for the areas you want to treat." },
    ],
  },
  {
    path: "/led-density-scam",
    cardCode: "SPEC GUIDE",
    cardTitle: "Does LED Count Matter?",
    cardDescription: "Why bulb count is useful context—but not a complete performance score.",
    cardImage: "/img/dense_led_macro_1774237501628.png",
    kind: "guide",
    eyebrow: "LED mask specification guide",
    title: "Does LED Count Matter in a Face Mask?",
    dek: "A larger LED count can improve coverage, but it does not tell you the intensity at the skin, the wavelength mix, the fit or how evenly the light reaches each area.",
    heroImage: "/img/dense_led_macro_1774237501628.png",
    heroImageAlt: "Close view of an LED light array",
    metaTitle: "Does LED Count Matter in a Face Mask? (2026 Guide)",
    metaDescription: "Understand LED count, irradiance, distance, coverage and wavelength specifications before comparing light therapy face masks.",
    verdictTitle: "Treat LED count as one specification, not the verdict",
    verdict: "A useful comparison combines LED count with irradiance, wavelength, distance from the skin, treatment area and session guidance. Buudy lists 192 LEDs and 32mW/cm², but its integrated neck coverage and mode selection are equally important to its value case.",
    keyTakeaways: [
      "More LEDs do not automatically mean more light reaches the skin.",
      "Irradiance describes power per area, but measurements are only comparable when test conditions are clear.",
      "Coverage, fit and consistent positioning can matter as much as the raw count.",
    ],
    guideFacts: [
      { label: "LED count", value: "How many light sources are fitted to the device" },
      { label: "Irradiance", value: "Power delivered over an area, normally expressed in mW/cm²" },
      { label: "Wavelength", value: "The light spectrum used by each programme" },
      { label: "Coverage and distance", value: "Where the light lands and how far it sits from the skin" },
    ],
    sections: [
      {
        title: "Why two counts cannot be compared in isolation",
        paragraphs: [
          "A dense array positioned farther from the skin may behave differently from a smaller array positioned close to it. Optical design, pulsing, programme duration and the size of the treatment area all affect how a specification should be interpreted.",
        ],
      },
      {
        title: "What Buudy discloses",
        paragraphs: [
          "Buudy’s current product page lists 192 LEDs, 32mW/cm² irradiance, seven visible wavelengths, 830nm near-infrared and face-and-neck coverage. Those details provide more buying context than count alone.",
        ],
      },
    ],
    faq: [
      { question: "Is 600 LEDs always better than 200?", answer: "No. Treatment area, power, wavelengths, distance, programme design and fit all affect the comparison." },
      { question: "What irradiance does Buudy list?", answer: "The official UK product page states 32mW/cm²." },
      { question: "What specifications should a product page disclose?", answer: "Useful disclosures include wavelengths, treatment area, session guidance, power or irradiance information, controls and safety instructions." },
    ],
  },
  {
    path: "/brand-name-premium",
    cardCode: "VALUE GUIDE",
    cardTitle: "Are Premium LED Masks Worth It?",
    cardDescription: "Compare usable features and total cost instead of buying on brand recognition alone.",
    cardImage: "/img/luxury_mask_markup_1774237538064.png",
    kind: "guide",
    eyebrow: "LED mask value guide",
    title: "Are Premium LED Face Masks Worth the Extra Cost?",
    dek: "A premium price can reflect design, support, research, retail distribution or brand reputation. It is only worth paying when those advantages match what you will actually use.",
    heroImage: "/img/luxury_mask_markup_1774237538064.png",
    heroImageAlt: "Premium LED face mask price comparison concept",
    metaTitle: "Are Premium LED Face Masks Worth It? UK 2026",
    metaDescription: "Compare premium and value LED face masks by price, wavelengths, coverage, routine, support and guarantee—not brand recognition alone.",
    verdictTitle: "Pay for useful differences, not the logo by itself",
    verdict: "Premium masks can justify their price through distinctive features, support or a preferred fit. Buudy’s value case is straightforward: £179 currently buys face-and-neck coverage, multiple light modes, cordless use, four intensities and a 90-day guarantee.",
    keyTakeaways: [
      "Start with the treatment area and routine you actually want.",
      "Compare the full kit price, including neck devices and required accessories.",
      "A longer feature list only adds value if the features are practical for you.",
    ],
    guideFacts: [
      { label: "Buudy", value: "£179; face and neck; 7 colours plus NIR; 90-day guarantee" },
      { label: "DeluxeSkin", value: "£199 checked sale price; face plus separate neck piece; red plus NIR" },
      { label: "CurrentBody", value: "£399.99 face mask; three red/NIR wavelengths; flexible silicone" },
      { label: "TheraFace", value: "£579 when reviewed; three modes; vibration; rigid face-only design" },
    ],
    sections: [
      {
        title: "Build a personal value scorecard",
        paragraphs: [
          "Rank coverage, comfort, session time, light modes, controls, guarantee and support in the order that matters to you. Then compare products against that list. This prevents an impressive but irrelevant feature from dominating the decision.",
        ],
      },
      {
        title: "Why Buudy leads our value comparison",
        paragraphs: [
          "Buudy is not the cheapest possible LED device, but it combines a broad light system, integrated neck area and cordless routine below the reviewed prices of the direct competitors on these pages. Its 90-day guarantee also gives buyers more time to decide whether the routine suits them.",
        ],
      },
    ],
    faq: [
      { question: "Why do LED mask prices vary so much?", answer: "Design, materials, light system, coverage, testing, support, warranty, retail distribution and brand positioning can all affect price." },
      { question: "Is Buudy a budget mask?", answer: "At £179 it is lower-priced than the direct premium products reviewed here, while still listing 192 LEDs, face-and-neck coverage and multiple modes." },
      { question: "What hidden cost should I check?", answer: "Check whether neck coverage, controllers, charging accessories, apps or required consumables are included, optional or sold separately." },
    ],
  },
];

export const buudyEditorialPageByPath = Object.fromEntries(
  buudyEditorialPages.map((page) => [page.path, page]),
) as Record<string, BuudyEditorialPage>;

export function getBuudyEditorialPage(pathname: string) {
  return buudyEditorialPageByPath[pathname];
}

export const buudyEditorialHomeCards = [
  {
    title: "Best LED Face Masks UK 2026",
    description: "Our current top-five UK comparison of price, wavelengths, coverage, routine and overall value.",
    image: "/img/TOP 5 LED Mask uk.png",
    link: "/best-led-face-mask-uk-2026",
    badge: "Top 5",
  },
  ...buudyEditorialPages.map((page) => ({
    title: page.cardTitle,
    description: page.cardDescription,
    image: page.cardImage,
    link: page.path,
    badge: page.cardCode,
  })),
];
