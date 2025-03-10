import jaifal from "../../assets/images/ingredients/jai_fal.webp";
import kutaj from "../../assets/images/ingredients/kutaj.webp";
import bel from "../../assets/images/ingredients/bel_leaf.webp";
import musta from "../../assets/images/ingredients/musta.webp";
import sonth from "../../assets/images/ingredients/sonth.webp";
import jeera from "../../assets/images/ingredients/jeera.webp";
import dhania from "../../assets/images/ingredients/dhania.webp";
import pusp from "../../assets/images/ingredients/dhatki_pusp.webp";
import triphala from "../../assets/images/ingredients/triphala.webp";
import trikatu from "../../assets/images/ingredients/trikatu.webp";
import shilajit from "../../assets/images/ingredients/shilajit.webp";
import kutaki from "../../assets/images/ingredients/kutaki.webp";
import rohini from "../../assets/images/ingredients/rohini.webp";
import patol from "../../assets/images/ingredients/parwal.webp";
import ajmoda from "../../assets/images/ingredients/ajmoda.webp";
import padma from "../../assets/images/ingredients/padma.webp";
// import cumin from "../../assets/images/ingredients/cumin_jeera.webp";
// banners
import constipationBanner from "../../assets/images/indigestion_banner.webp";
import motionBanner from "../../assets/images/loosemotion_banner.webp";
import acidReflux from "../../assets/images/acid_reflux.webp";
import sleepAndStressBanner from "../../assets/images/sleep_stress_banner.webp";
import bloatingBanner from "../../assets/images/bloating_banner.webp";
import weightLoassBanner from "../../assets/images/weight_loss_banner.webp";
import liverBanner from "../../assets/images/liver_banner.png";
import prebioticBanner from "../../assets/images/prebiotic_banner.webp";
import dietPlan from "../../assets/diet-and-gut/diet_plan.webp";
const product1 = {
  name: "GUT EXPERT - Gastro Comfort",
  id: 1,
  description:
    "Gastro Comfort is an Ayurvedic 100% herbal product used for  loss of appetite,indigestion and eases bowel movement .  The capusles uses extracts of herbs in ratio of 10:1 making it 10 times more effective than the powder form . It has anti-inflammatory, antacid,  digestive stimulant and diuretic properties. ",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: ["Constipation", "indigestion", "loss of apetite "],
  principalIngredients:
    "s an antacid .  Reduces burning discomfort and has a soothing effect . Mulethi has active compounds glycyrrhizin and carbenoxolone that are known to relieve constipation and  stomach discomfort .                                                                                                                                               Triphala is a powerful herbal remedy that consists of Haritaki, Bibhitaki and amla. It is used in traditional Ayurvedic medicine to prevent diseases and treat a number of symptoms, including constipation and inflammation. It balances all Vata, Pitta , kapha ( Tridosha)",
  benefits: [
    "Eases bowel movement",
    "Improves digestion",
    "Capsule uses Extract and hence 10X more effective",
    "No Chemicals",
    "100% Natural Ingredients",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],
  bannerImage: constipationBanner,
  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Trifala",
    "Trikatu",
    "Mulethi",
    "Trivrit",
    "Long",
    "Musta",
    "Vidang",
    "Eliachi",
    "Tej Patra",
    "Kala Namak",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "1 Month",
      sticks: "",
      price: "₹956",
      oldPrice: "₹1,275",
      save: "₹319",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹1,785",
      oldPrice: "₹2,550",
      save: "₹1,011",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        { question: "Do u feel full always?", answer: "" },
        { question: "Do u have infrequent Bowel Movements?", answer: "" },
        { question: "Do u have difficulty passing stool?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Gastro Comfort immediately for 2 months",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question:
            "Has anti-inflammatory, antacid,  digestive stimulant and diuretic properties. ",
          answer: "",
        },
        { question: "It uses extracts with 10 times more power ", answer: "" },
        {
          question:
            "Has Mulethi to  reduce burning discomfort and gives soothing effect",
          answer: "",
        },
        {
          question:
            "Has Triphala to balance all Vata, Pitta , kapha ( Tridosha)",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Gastro Comfort",
    info: [
      "has anti-inflammatory, antacid,  digestive stimulant and diuretic properties.",
      "It uses extracts with 10 times more power ",
      "Has Mulethi to  reduce burning discomfort and gives soothing effect",
      "Has Triphala to balance all Vata, Pitta , kapha ( Tridosha)",
    ],
  },
  combos: [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Indigestion Management Pack Gastro Comfort + Gutsy Gut( Pre Probiotic )",
      price: 360,
      priceOnSelection: {
        1: {
          original: "2477",
          offer: "1858",
          saving: "619",
        },
        2: {
          original: "4954",
          offer: "3468",
          saving: "1486",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Comprehensive Gut care plan Individualised Diet plan + unrestricted yoga + calorie counter + Gastro Comfort + Gutsy Gut + Free Dietician Access",
      price: 3149,
      priceOnSelection: {
        1: {
          original: "4140",
          offer: "3105",
          saving: "1035",
        },
        2: {
          original: "8280",
          offer: "5796",
          saving: "2484",
        },
      },
    },
    {
      id: 3,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,

      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
          duration: 1,
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
          duration: 2,
        },
      },
    },
  ],
};

const product2 = {
  id: 2,
  name: "GUT EXPERT - LOOSE CONTROL",
  bannerImage: motionBanner,
  description:
    "LOOSE CONTROL is an Ayurvedic 100% herbal product, supports Digestive Health by regulating Bowel movement, It controls loose motion / diaorhea/ dysentery . It reduces inflamation in the interstines and controls loose stool. It is also effective in treating gastrointerstinal infections caused by bacteria , viruses or parasites .  The capusles uses extracts of herbs in ratio of 10:1 making it 10 times more effective than the powder form .",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: ["Loose Stool", "Watery stool", "Nausea and Vomiting"],
  principalIngredients:
    "Jaiphal / Nutmeg is known to have antibacterial properties .                                                                                                     The unripe Bael fruit helps to cure disorders caused due to impaired gut health. it helps in balancing gut health and enhances digestive power and other metabolic activities significantly.",
  benefits: [
    " Regulates Bowel movement",
    " Improves digestion",
    "Treats Gastrointerstinal infections",
    "Capsules uses extracts and hence 10X more effective",
    "100% Natural ingredients",
    "No Chemicals",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Jai Fal",
    "Bilav",
    "Musta",
    "Kutaj",
    "Sonth",
    "Jeera",
    "Dhania",
    "dhataki pushp",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [
        "Regulates Bowel movement ",
        "Improves digestion",
        "Treats Gastrointerstinal infections",
        "Capsules uses extracts and hence 10X more effective",
        "100% Natural ingredients",
        "No Chemicals ",
      ],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "1 Month",
      sticks: "",
      price: "₹956",
      oldPrice: "₹1,275",
      save: "₹319",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹1,785",
      oldPrice: "₹2,550",
      save: "₹765",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        { question: "Do u have liquid stools?", answer: "" },
        { question: "Do u get Abdominal cramps?", answer: "" },
        { question: "Do u also have Fever with the above ?", answer: "" },
        {
          question:
            "Do you have an Intense urge to have a bowel movement often ?",
          answer: "",
        },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Loose Control immediately for 3 months",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question:
            "Has anti-inflammatory, antacid,  digestive stimulant and diuretic properties. ",
          answer: "",
        },
        { question: "It uses extracts with 10 times more power ", answer: "" },
        {
          question:
            "Has Mulethi to  reduce burning discomfort and gives soothing effect",
          answer: "",
        },
        {
          question:
            "Has Triphala to balance all Vata, Pitta , kapha ( Tridosha)",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "LOOSECONTROL",
    info: [
      "egulates Bowel movement.",
      "reduces inflamation in the interstines and controls loose stool.",
      "treats gastrointerstinal infections ",
      "uses extracts of herbs hence 10 times more effective than the powder form .",
      "Jaiphal / Nutmeg and Bael fruit  enhances digestive power",
    ],
  },
  combos: [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Loose control + Gutsy Gut( Pre Probiotic )",
      price: 360,
      priceOnSelection: {
        oneMonth: {
          original: "2477",
          offer: "1858",
          saving: "619",
        },
        twoMonth: {
          original: "4954",
          offer: "3468",
          saving: "1486",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,
      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
        },
      },
    },
  ],
};
const product3 = {
  id: 3,
  name: "GUT EXPERT - Soothe Gut",
  bannerImage: acidReflux,
  description:
    "Soothe Gut is an Ayurvedic 100% herbal product used as an antacid .  The capusles uses extracts of herbs in ratio of 10:1 making it 10 times more effective than the powder form . It has anti-inflammatory, antacid,  digestive stimulant and diuretic properties.",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: ["Heart Burn", "Acid Reflux", "Chest pain"],
  principalIngredients:
    "Mulethi is an antacid .  Reduces burning discomfort and has a soothing effect . Mulethi has active compounds glycyrrhizin and carbenoxolone that are known to relieve constipation, stomach discomfort . Triphala is a powerful herbal remedy that consists of Haritaki, Bibhitaki and amla. It is used in traditional Ayurvedic medicine to prevent diseases and treat a number of symptoms, including constipation and inflammation.It balances all Vata, Pitta , kapha ( Tridosha), Katuki (Picrorhiza kurroa) is known to be a cooling agent, helps to remove excessive fire energy from the body. It reliefs pitta and kapha, which can cause digestion problems, acidity and fat",
  benefits: [
    "Has anti inflammatory properties",
    "Has anti Acid properties",
    "Improves overall digestion",
    "100% Natural ingredients",
    "No Chemicals",
    "capsules uses extracts and hence 10x more effective ",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Trifala",
    "Trikatu",
    "Mulethi",
    "Trivrit",
    "Long",
    "Eliachi",
    "Trivrit",
    "Katuki",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "1 Month",
      sticks: "",
      price: "₹956",
      oldPrice: "₹1,275",
      save: "₹319",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹1,785",
      oldPrice: "₹2,550",
      save: "₹765",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "Do you have  Burning sensation and pain in the stomach?",
          answer: "",
        },
        {
          question: "Do you Burning sensation and pain in the throat?",
          answer: "",
        },
        {
          question:
            "Do you have Difficulty swallowing or the sensation of food being stuck in your throat?",
          answer: "",
        },
        { question: "Do you Frequent burping or hiccups?", answer: "" },
        { question: "Do you get Heartburn?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start Soothe Gut immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "has  antacid properties. ",
          answer: "",
        },
        { question: "It uses extracts with 10 times more power ", answer: "" },
        {
          question:
            "Has Mulethi to  reduce burning discomfort and gives soothing effect",
          answer: "",
        },
        {
          question:
            "Has Triphala to balance all Vata, Pitta , kapha ( Tridosha)",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Gastro Comfort",
    info: [
      "has anti-inflammatory, antacid,  digestive stimulant and diuretic properties.",
      "It uses extracts with 10 times more power ",
      "Has Mulethi to  reduce burning discomfort and gives soothing effect",
      "Has Triphala to balance all Vata, Pitta , kapha ( Tridosha)",
    ],
  },
  combos: [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Acid Reflux management pack Soothe Gut + Gutsy Gut (Pre Probiotic)",
      price: 360,
      priceOnSelection: {
        1: {
          original: "2477",
          offer: "1858",
          saving: "619",
        },
        2: {
          original: "4954",
          offer: "3468",
          saving: "1486",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Acid Reflux management pack Soothe Gut + Gutsy Gut (Pre Probiotic)",
      price: 3149,
      priceOnSelection: {
        1: {
          original: "4140",
          offer: "3105",
          saving: "1035",
        },
        2: {
          original: "8280",
          offer: "5796",
          saving: "2484",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,

      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
          duration: 1,
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
          duration: 2,
        },
      },
    },
  ],
};
const product4 = {
  id: 4,
  name: "GUT EXPERT - Rest n Calm",
  bannerImage: sleepAndStressBanner,
  description:
    "Rest n Calm  contains 100 Natural Ayurveda compounds that help to calm the nervous system , reduce anxiety and treat loss of sleep. It serves as a soothing ritual, after a long day. The gentle, calming effect of SLEEP GOOD can help to lower cortisol levels, the hormone associated with stress, and enhance overall well-being.The capusles uses extracts of herbs in ratio of 10:1 making it 10 times more effective than the powder form .",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: ["Lack of sleep", "Stress", "Fatigue"],
  principalIngredients:
    "atamansi- Jatamansi is an herb that is useful to induce sound sleep. Jatamansi calms the nervous system due to its Tridosha balancing property and helps in sound sleep because of its unique Nidrajanana (sleep inducing) effect                                                                                                             Brahmi - Brahmi (Centella asiatica), also called gotu kola, is one of the most powerful brain tonics in the Ayurvedic apothecary. This adaptogen supports restful sleep, calms emotional turbulence, and simultaneously improves concentration and alertness.                                                                                                   Lotus - It’s been used in traditional medicine for thousands of years as a natural , sleep aid, and anxiety reliever.",
  benefits: [
    "Calms the nervous system and reduces anxiety ",
    "Lowers cortisol levels",
    "Enhances overall wellbeing",
    "100% Natural ingredients",
    "No Chemicals",
    "Capsules uses extracts and hence 10x more effective ",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Jatamansi",
    "Brahmi",
    "Padma Beej",
    "Padma Keshar",
    "Padma Mrinala",
    "Padma Kanda",
    "Padma Moola",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "1 Month",
      sticks: "",
      price: "₹2,699",
      oldPrice: "₹4,194",
      save: "₹1,495",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹1,849",
      oldPrice: "₹2,796",
      save: "₹947",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "Do you have Lack of sleep?",
          answer: "",
        },
        {
          question: "Do you have Irregular sleep cycle?",
          answer: "",
        },
        {
          question: "Do you have Loss of energy?",
          answer: "",
        },
        { question: "Do you have Headaches , depression?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Rest N Calm immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "calm the nervous system",
          answer: "",
        },
        {
          question:
            "lower cortisol levels, the hormone associated with stress, and enhance overall well-being.",
          answer: "",
        },
        {
          question: "It uses extracts with 10 times more power",
          answer: "",
        },
        {
          question:
            "Jatamansi calms the nervous system due to its Tridosha balancing property",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Rest n Calm",
    info: [
      "calm the nervous system",
      "ower cortisol levels, the hormone associated with stress, and enhance overall well-being.",
      "It uses extracts with 10 times more power",
      "Jatamansi calms the nervous system due to its Tridosha balancing property",
    ],
  },
  combos: [
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,
      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
        },
      },
    },
  ],
};
const product5 = {
  id: 5,
  name: "GUT EXPERT - BloatJoy",
  bannerImage: bloatingBanner,
  description:
    "BloatJoy is a Ayurvedic 100% herbal product with carminative properties to alleviate indigestion, bloating, and gas by promoting optimal digestion and easing discomfort after meals.Its digestive benefits extend to reducing flatulence, minimizing abdominal distension and discomfort. The capusles uses extracts of herbs in ratio of 10:1 making it 10 times more effective than the powder form .",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: ["Abdominal Fullnes", "Abdominal Tightness", "Burping"],
  principalIngredients:
    "Ajamoda's potent digestive properties make it a popular choice for soothing stomach discomfort and promoting healthy digestion. Its active compounds help in breaking down complex foods, thereby reducing the risk of digestive issues. Saunf Ark (Fennel Distillate) is a digestive and carminative medicine in ayurveda. Haritaki has long been used for purgation, detoxification and for improving overall gut function and digestion. The capusles uses extracts of herbs which is 10X more effective than the power form",
  benefits: [
    "Alleviate indigestion",
    "Reduces / removes bloating and gas",
    "Promotes optimal digestion and eases discomfort after meals",
    "100% Natural ingredients",
    "No Chemicals",
    "Capsules uses extracts and hence 10x more effective ",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Ajmoda",
    "Haritki",
    "Saunf",
    "kala namak",
    "Vidang",
    "Shunthi",
    "Maricha",
    "Pippali",
    "Pippali Moola",
    "Chitraka",
    "Varidhadaru Root",
    "Devadaru ",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [
        "Alleviate indigestion",
        "Reduces / removes bloating and gas",
        "Promotes optimal digestion and eases discomfort after meals",
        "100% Natural ingredients",
        "No Chemicals",
        "Capsules uses extracts and hence 10x more effective ",
      ],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "1 Month",
      sticks: "",
      price: "₹956",
      oldPrice: "₹1275",
      save: "₹319",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹1785",
      oldPrice: "₹2550",
      save: "765",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "Abdominal discomfort or pain?",
          answer: "",
        },
        {
          question: "abdominal distension (increased girth) ?",
          answer: "",
        },
        {
          question: "Abdominal noises (gurgling)?",
          answer: "",
        },
        { question: "Belching (burping)?", answer: "" },
        { question: "Feeling full ", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Bloat Joy immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "Ajmoda soothes the nerves",
          answer: "",
        },
        {
          question:
            "Ajmoda helps in breaking down complex foods, thereby reducing the risk of digestive issues",
          answer: "",
        },
        {
          question: "Haritaki imporves overall GUT function",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Bloat Joy",
    info: [
      "Ajmoda soothes the nerves",
      "Ajmoda helps in breaking down complex foods, thereby reducing the risk of digestive issues",
      "Haritaki imporves overall GUT function",
    ],
  },
  combos: [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Bloating Relief management Pack Bloat Joy + Gutsy Gut( Pre Probiotic )",
      price: 360,
      priceOnSelection: {
        oneMonth: {
          original: "2477",
          offer: "1858",
          saving: "619",
        },
        twoMonth: {
          original: "4954",
          offer: "3468",
          saving: "1486",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Comprehensive Bloat care plan Individualised Diet plan + unrestricted yoga + calorie counter + Bloat",
      price: 3149,
      priceOnSelection: {
        1: {
          original: "4140",
          offer: "3105",
          saving: "1035",
        },
        2: {
          original: "8280",
          offer: "5796",
          saving: "2484",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,

      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
          duration: 1,
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
          duration: 2,
        },
      },
    },
  ],
};
const product6 = {
  id: 6,
  name: "GUT EXPERT - Shred Max",
  bannerImage: weightLoassBanner,
  description:
    "Shred Max is a 100% Ayurvedic Natural composition for weight loss . It is known to increase metabolic rates by helping the body burn more calories. The advantage will be observed in burning fat faster. The capusles uses extracts of herbs in ratio of 10:1 making it 10 times more effective than the powder form .  Shred Max uses Shilajit with 80% purity ( 80% Fulvik Acid )",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: ["Wieght Loss", "Improved Metabolism"],
  principalIngredients:
    "Shilajit-  Shilajit's with a high 80% purity level impacts on weight loss is intricately linked to its key component, fulvic acid. Scientifically, fulvic acid appears to enhance metabolic processes by improving mitochondrial function, leading to increased energy production and a subsequently heightened metabolic rate.                                                                                                                                                                                  Triphala is a powerful herbal remedy that consists of Haritaki, Bibhitaki and amla. It is used in traditional Ayurvedic medicine to prevent diseases and treat a number of symptoms, including constipation and inflammation. It balances all Vata, Pitta , kapha ( Tridosha)  ",
  benefits: [
    "helps Increases metabolic rates",
    "Helps burn more calories",
    "Burns fat faster",
    "100% Natural ingredients",
    "No Chemicals",
    "Capsules uses extracts and hence 10x more effective ",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Shudh Shilajeet",
    "Trifala",
    "Trikatu",
    "Musta",
    "Vidang",
    "Chitrak",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [
        "helps Increases metabolic rates",
        "Helps burn more calories",
        "Burns fat faster",
        "100% Natural ingredients",
        "No Chemicals",
        "Capsules uses extracts and hence 10x more effective ",
      ],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "8 Month",
      sticks: "",
      price: "₹1,219",
      oldPrice: "₹1,625",
      save: "₹406",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹2,275",
      oldPrice: "₹3,250",
      save: "₹975",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "Changes in fat distribution?",
          answer: "",
        },
        {
          question: "Changes in weight?",
          answer: "",
        },
        {
          question: "Increased waist circumference?",
          answer: "",
        },
        { question: "Swollen feet and ankles?", answer: "" },
        { question: "Faster pulse", answer: "" },
        { question: "Heavy breathing", answer: "" },
        { question: "High blood pressure", answer: "" },
        { question: "Memory loss", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Gastro Comfort immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "Increases body metabolism",
          answer: "",
        },
        {
          question: "Helps body burn fat faster  issues",
          answer: "",
        },
        {
          question:
            "High Purity Shilajit 80% purity helps improve metabolism with Fulvic acid",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Shred Max",
    info: [
      "Increases body metabolism",
      "Helps body burn fat faster  issues",
      "High Purity Shilajit 80% purity helps improve metabolism with Fulvic acid",
    ],
  },
  combos: [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Weight Loss pack Shred Max  + Gutsy Gut( Pre Probiotic )",
      price: 360,
      priceOnSelection: {
        1: {
          original: "2795",
          offer: "2097",
          saving: "698",
        },
        2: {
          original: "5590",
          offer: "3914",
          saving: "1676",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Comprehensive Weight Loss  plan Individualised Diet plan + unrestricted yoga + calorie counter + Shred Max + Pre-Probiotic + Free Dietician access",
      price: 3149,
      priceOnSelection: {
        1: {
          original: "4613",
          offer: "3459",
          saving: "1154",
        },
        2: {
          original: "9226",
          offer: "6458",
          saving: "2768",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,

      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
          duration: 1,
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
          duration: 2,
        },
      },
    },
  ],
};
const product7 = {
  id: 7,
  name: "GUT EXPERT - LIVER Comfy",
  bannerImage: liverBanner,
  description:
    "Liver Comfy is a 100% Ayurvedic Natural composition that can help support liver functions and loss of appetite.   It is very specific composition that improves liver function and regulates bile secretion.  This is also very specific drug for Jaundice .",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: [
    "Yellowing of Skin",
    "Liver Damage",
    "Loss of APPETITE",
    "Chronic Fatigue",
  ],
  principalIngredients:
    "Kutki (Picrorhiza kurroa) is commonly used in Ayurvedic medicine to promote liver health and has been found to have potential benefits for liver detox and fatty liver. The capusles uses extracts of herbs in ratio of 10:1 making it 10 times more effective than the powder form. Kalmeg strongly promotes liver health in multiple ways - it stimulates bile acid secretion to improve digestion and eliminate toxins. It also boosts levels of necessary liver enzymes, signifying improved hepatic function.",
  benefits: [
    "Supports Liver function and Loss of appetite",
    "Has benefits for Liver Detox and fatty liver",
    "100% Natural ingredients",
    "No Chemicals",
    "Capsules uses extracts and hence 10x more effective ",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Kutaki",
    "Rohini",
    "Patol",
    "Kalmegh",
    "Bhumya Malaki",
    "Kumari",
    "Trifla",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [
        "Supports Liver function and Loss of appetite",
        "Has benefits for Liver Detox and fatty liver",
        "100% Natural ingredients",
        "No Chemicals",
        "Capsules uses extracts and hence 10x more effective ",
      ],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "1 Month",
      sticks: "",
      price: "₹2,699",
      oldPrice: "₹4,194",
      save: "₹1,495",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹1,849",
      oldPrice: "₹2,796",
      save: "₹947",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "You crave sugar often?",
          answer: "",
        },
        {
          question: "You have digestive problems?",
          answer: "",
        },
        {
          question: "You’re more prone to allergies?",
          answer: "",
        },
        { question: "You don’t feel healthy?", answer: "" },
        { question: "Your skin isn’t clear?", answer: "" },
        { question: "You feel tired all the time?", answer: "" },

        { question: "You have regular joint pain?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Liver Comfy immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "Liver Comfy",
          answer: "",
        },
        {
          question: "regulates Bile Function to improve Liver Function ",
          answer: "",
        },
        {
          question:
            "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
          answer: "",
        },
        {
          question: "It eliminates toxins",
          answer: "",
        },
        {
          question: "It also boosts liver enzymes levels",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Liver Comfy",
    info: [
      "regulates Bile Function to improve Liver Function",
      "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
      "It eliminates toxins ",
      "It also boosts liver enzymes levels",
    ],
  },
  combos: [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Liver Detox Overdrive Pack Liver Comfy  + Gutsy Gut( Pre Probiotic )",
      price: 360,
      priceOnSelection: {
        1: {
          original: "2795",
          offer: "2097",
          saving: "698",
        },
        2: {
          original: "5590",
          offer: "3914",
          saving: "1676",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet plan + unrestricted yoga + calorie counter + Liver Comfy + Gutsy Gut Pre Pro Biotic  + Free Dietician Access",
      price: 3149,
      priceOnSelection: {
        2: {
          original: "9226",
          offer: "6458",
          saving: "2768",
        },
        1: {
          original: "4613",
          offer: "3459",
          saving: "1154",
        },
      },
    },
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,

      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
          duration: 1,
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
          duration: 2,
        },
      },
    },
  ],
};
const product8 = {
  id: 8,
  name: "GUT EXPERT - Gutsy Gut (PRE PROBIOTIC) ",
  bannerImage: constipationBanner,
  description:
    "GUT EXPERT - Gutsy Gut PRE+PROBIOTIC--- is a probiotic and Prebiotic combination with 20 Billion IU . The combination of 19 strains of Bacteria makes it one of the most effective Pre-Probiotic combination available . You GUT needs a Prebiotic and Probiotic combination and not just any one because probiotics are live beneficial organisms, and prebiotics are the food that they need to survive . ",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: ["Pre and Pro Biotic capsule "],
  principalIngredients:
    "Unique Pre-Probiotic combined formula with 50 Billion and 19 key bacteria strains  that Indian Gut requires. Prebiotics will promote the growth or activity of beneficial gut bacteria, primarily in the colon. Prebiotics will act as food for probiotics, enhancing their effectiveness. Probiotics:balances the gut microflora which is required for the Gut health and wellness",
  benefits: [
    "Speeds up recovery after Antibiotics",
    "Restore Gut Balance",
    "Improves absorption and Digestion",
    "Improves immunity",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Kutaki",
    "Rohini",
    "Patol",
    "Kalmegh",
    "Bhumya Malaki",
    "Kumari",
    "Trifla",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [
        "Serve as a food source for gut microorganisms ",
        "improve the growth of native bacteria and reduce pathogenic bacteria",
        "Prebiotics support a healthy immune response and overall gut health",
        "Probiotics help balance the friendly bacteria in your digestive system",
        "Has benefits for Liver Detox and fatty liver",
        "100% Natural ingredients",
        "No Chemicals",
        "Capsules uses extracts and hence 10x more effective ",
      ],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "10 Month",
      sticks: "",
      price: "₹1,088",
      oldPrice: "₹1,450",
      save: "₹362",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹1,160",
      oldPrice: "₹2,030",
      badge: "MOST POPULAR",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "Do you have Digestive issues?",
          answer: "",
        },
        {
          question: "Do u have loss of appetite?",
          answer: "",
        },
        {
          question: "Are you often constipated?",
          answer: "",
        },
        { question: "Do u feel bloated?", answer: "" },
        { question: "Your skin isn’t clear?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Gastro Comfort immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question:
            "Maintain and Improve the Good Bacteria in the GUT ( NORMAL MICROFLORA )",
          answer: "",
        },
        {
          question: "regulates Bile Function to improve Liver Function ",
          answer: "",
        },
        {
          question:
            "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
          answer: "",
        },
        {
          question: "It eliminates toxins",
          answer: "",
        },
        {
          question: "It also boosts liver enzymes levels",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "---",
    info: [
      "Maintain and Improve the Good Bacteria in the GUT ( NORMAL MICROFLORA )",
      "Probiotics are live micro organisms intended to improve good bacteria in the body  digestion",
      "Prebiotics are the food on which the good bacteria grow",
    ],
  },
  combos: [
    {
      id: 1,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 360,
      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
        },
      },
    },
  ],
};
const product9 = {
  id: 9,
  name: "Dignostic Gut Testing - Breath Test",
  bannerImage: liverBanner,
  description:
    "GUT EXPERT - Home Breath test: A hydrogen breath test (or HBT) is a diagnostic tool for small intestine bacterial overgrowth and carbohydrate malabsorption, such as lactose, fructose, and sorbitol malabsorption. The test is simple, non-invasive, and is performed after a short period of fasting (typically 8–12 hours) . You just need to breath out into the breath analyser",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: [
    "Intolerance to food",
    "Bloating after tea and coffee",
    "Bloating and Flatulence ( passing gas )",
  ],
  principalIngredients: "N/A",
  benefits: ["NO BLOOD SAMPLE", "NO STOOL SAMPLE", "SIMPLE BREATH SAMPLE"],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Kutaki",
    "Rohini",
    "Patol",
    "Kalmegh",
    "Bhumya Malaki",
    "Kumari",
    "Trifla",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "For Lactose Intolerances ( Milk and Milk Products )",
      sticks: "",
      price: "₹2500",
      oldPrice: "₹2500",
      save: "₹0",
      badge: "Lactose Breath Test",
    },
    {
      id: 2,
      duration: "For Fructose Intolerances",
      sticks: "",
      price: "₹2500",
      oldPrice: "₹2500",
      save: "₹0",
      badge: "Fructose  Breath Test",
    },
    {
      id: 3,
      duration: "For Sorbitol  Intolerances",
      sticks: "",
      price: "₹2500",
      oldPrice: "₹2500",
      save: "₹0",
      badge: "Sorbitol  Breath Test",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "You crave sugar often?",
          answer: "",
        },
        {
          question: "You have digestive problems?",
          answer: "",
        },
        {
          question: "You’re more prone to allergies?",
          answer: "",
        },
        { question: "You don’t feel healthy?", answer: "" },
        { question: "Your skin isn’t clear?", answer: "" },
        { question: "You feel tired all the time?", answer: "" },
        { question: "You have regular joint pain?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  breath test immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "Liver Comfy",
          answer: "",
        },
        {
          question: "regulates Bile Function to improve Liver Function ",
          answer: "",
        },
        {
          question:
            "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
          answer: "",
        },
        {
          question: "It eliminates toxins",
          answer: "",
        },
        {
          question: "It also boosts liver enzymes levels",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Liver Comfy",
    info: [
      "regulates Bile Function to improve Liver Function",
      "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
      "It eliminates toxins ",
      "It also boosts liver enzymes levels",
    ],
  },
  combos: [],
};
const product11 = {
  id: 9,
  name: "Individualized Diet Plans",
  bannerImage: dietPlan,
  description:
    "We specialize in creating individualized diet plans tailored to address a wide range of health conditions. Whether you suffer from digestive issues like nausea, indigestion, or bloating, or more complex conditions such as diabetes, cardiovascular disease, or obesity, our expert team crafts personalized nutrition strategies designed to support your unique health needs.",
  price: 1037,
  oldPrice: 1595,
  rating: 4.4,
  reviews: 2233,
  indications: [
    "Digestive Issues",
    "Diabetes",
    "Cardiovascular Disease",
    "Obesity",
  ],
  principalIngredients: "N/A",
  benefits: [
    "Targeted Plans",
    "Holistic Approach",
    "Comprehensive Support",
    "Sustainable Results",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Kutaki",
    "Rohini",
    "Patol",
    "Kalmegh",
    "Bhumya Malaki",
    "Kumari",
    "Trifla",
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",
  saver: [
    {
      id: 1,
      duration: "For Lactose Intolerances ( Milk and Milk Products )",
      sticks: "",
      price: "₹2500",
      oldPrice: "₹2500",
      save: "₹0",
      badge: "Lactose Breath Test",
    },
    {
      id: 2,
      duration: "For Fructose Intolerances",
      sticks: "",
      price: "₹2500",
      oldPrice: "₹2500",
      save: "₹0",
      badge: "Fructose  Breath Test",
    },
    {
      id: 3,
      duration: "For Sorbitol  Intolerances",
      sticks: "",
      price: "₹2500",
      oldPrice: "₹2500",
      save: "₹0",
      badge: "Sorbitol  Breath Test",
    },
  ],
  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "You crave sugar often?",
          answer: "",
        },
        {
          question: "You have digestive problems?",
          answer: "",
        },
        {
          question: "You’re more prone to allergies?",
          answer: "",
        },
        { question: "You don’t feel healthy?", answer: "" },
        { question: "Your skin isn’t clear?", answer: "" },
        { question: "You feel tired all the time?", answer: "" },
        { question: "You have regular joint pain?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Diet Plan immediately for 3 months.",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "Liver Comfy",
          answer: "",
        },
        {
          question: "regulates Bile Function to improve Liver Function ",
          answer: "",
        },
        {
          question:
            "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
          answer: "",
        },
        {
          question: "It eliminates toxins",
          answer: "",
        },
        {
          question: "It also boosts liver enzymes levels",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Liver Comfy",
    info: [
      "regulates Bile Function to improve Liver Function",
      "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
      "It eliminates toxins ",
      "It also boosts liver enzymes levels",
    ],
  },
  combos: [],
};
const product10 = {
  id: 10,
  name: "GUT EXPERT - Gutsy Gut ( Pre Probiotic )",
  bannerImage: prebioticBanner,
  description:
    "Unique Pre-Probiotic combined formula with 50 Billion and 19 key bacteria strains  that Indian Gut requires. Prebiotics will promote the growth or activity of beneficial gut bacteria, primarily in the colon. Prebiotics will act as food for probiotics, enhancing their effectiveness. Probiotics:balances the gut microflora which is required for the Gut health and wellness",
  price: 1088,
  oldPrice: 1420,
  rating: 4.4,
  reviews: 2233,
  indications: [
    "Overall Gut Balance",
    "Gut cleansing",
    "Long term digestive and immune health",
    "Optimises digestion and reduces discomfort",
  ],
  principalIngredients: "N/A",
  benefits: [
    "Speeds up recovery after Antibiotics",
    "Restore Gut Balance",
    "Improves absorption and Digestion",
    "Improves immunity",
  ],
  certification: [
    "AYUSH License",
    "FSSAI,US FDA - MoCra Registration",
    "Ayush GMP",
    "ISO 22000",
    "WHO - GMP certificate",
  ],

  sizes: [
    { name: "Starter Pack", weight: "500 gm", price: 1037 },
    { name: "Results Pack", weight: "1 kg", price: 1279 },
    { name: "Value Pack", weight: "1.5 kg", price: 1749 },
  ],
  formula:
    "500 mg capsule - Trifala 90mg , Trikatu -60mg , Mulethi -100mg , Trivrit -100mg , Long -100mg , Musta -10mg , Vidang -10mg , Eliachi -10mg , Tej Patra - 10mg , Kala Namak -10mg ",
  ingredients: [
    "Kutaki",
    "Rohini",
    "Patol",
    "Kalmegh",
    "Bhumya Malaki",
    "Kumari",
    "Trifla",
  ],
  saver: [
    {
      id: 1,
      duration: "1 Month",
      sticks: "",
      price: "₹1450",
      oldPrice: "₹1088",
      save: "₹362",
      badge: "BEST RESULT",
    },
    {
      id: 2,
      duration: "2 Month",
      sticks: "",
      price: "₹2,900",
      oldPrice: "₹2,030",
      save: "₹870",
      badge: "MOST POPULAR",
    },
  ],
  images: [
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
    {
      type: "img",
      link: "https://thegutco.com.au/cdn/shop/files/TheGutCo_Multitasker_Multivitamin_2048x2048.png?v=1711325874",
      description: [],
    },
  ],
  discountBanner: "FLAT 40% OFF *INCLUDES 5% OFF ON PREPAID ORDERS",

  manufacturers:
    "AYUSH License , FSSAI,US FDA - MoCra Registration , Ayush GMP , ISO 22000, WHO - GMP certificate   ",
  questions: [
    {
      title: "Questions on your mind ?",
      data: [
        {
          question: "You crave sugar often?",
          answer: "",
        },
        {
          question: "You have digestive problems?",
          answer: "",
        },
        {
          question: "You’re more prone to allergies?",
          answer: "",
        },
        { question: "You don’t feel healthy?", answer: "" },
        { question: "Your skin isn’t clear?", answer: "" },
        { question: "You feel tired all the time?", answer: "" },
        { question: "You’re always fogg?", answer: "" },
        { question: "You have regular joint pain?", answer: "" },
      ],
      meta: "If the answer to even 3 of the above is yes then you need to start  Gastro Comfort immediately for 3 months to start",
    },
  ],
  questions2: [
    {
      title: "How do we help ?",
      data: [
        {
          question: "Liver Comfy",
          answer: "",
        },
        {
          question: "regulates Bile Function to improve Liver Function ",
          answer: "",
        },
        {
          question:
            "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
          answer: "",
        },
        {
          question: "It eliminates toxins",
          answer: "",
        },
        {
          question: "It also boosts liver enzymes levels",
          answer: "",
        },
      ],
      meta: "",
    },
  ],
  howDoWeHelp: {
    title: "Liver Comfy",
    info: [
      "regulates Bile Function to improve Liver Function",
      "Kutki and Kalmeg stimulates bile acid secretion to improve digestion",
      "It eliminates toxins ",
      "It also boosts liver enzymes levels",
    ],
  },
  combos: [
    {
      id: 2,
      image:
        "https://www.cureveda.com/cdn/shop/files/chocolate.jpg?v=1724138121&width=1200",
      name: "Individualised Diet Plan Diet Plan + recipe Library + calorie counter",
      price: 3149,

      priceOnSelection: {
        1: {
          original: "2050",
          offer: "1350",
          saving: "700",
          duration: 1,
        },
        2: {
          original: "4100",
          offer: "1975",
          saving: "2125",
          duration: 2,
        },
      },
    },
  ],
};

export const ingredients = [
  {
    id: 1,
    image: jaifal,
    title: "Jai Fal",
    description:
      "Aromatic spice known for its warming properties and digestive benefits.",
    hiddenText:
      "Jai Fal, commonly known as nutmeg, is used to enhance digestion, improve appetite, and provide relief from bloating and gas. It's also known for its calming effect on the nervous system.",
  },
  {
    id: 2,
    image: bel,
    title: "Bilav",
    description: "Sacred fruit with detoxifying and digestive properties.",
    hiddenText:
      "Bilav, also known as Bael fruit, helps maintain gut health, supports digestion, and detoxifies the body. It is particularly effective in managing gastrointestinal disorders like constipation and diarrhea.",
  },
  {
    id: 3,
    image: musta,
    title: "Musta",
    description:
      "An Ayurvedic herb known for its anti-inflammatory and digestive benefits.",
    hiddenText:
      "Musta, or Cyperus rotundus, is highly effective in improving digestion, reducing inflammation, and alleviating menstrual discomfort. It is often used for its cooling effect and ability to soothe the stomach.",
  },
  {
    id: 4,
    image: kutaj,
    title: "Kutaj",
    description: "Herbal remedy for digestive and intestinal issues.",
    hiddenText:
      "Kutaj is widely recognized for its ability to treat diarrhea, dysentery, and irritable bowel syndrome (IBS). It helps restore gut flora and ensures a healthy gastrointestinal tract.",
  },
  {
    id: 5,
    image: sonth,
    title: "Sonth",
    description: "Dried ginger with anti-inflammatory and digestive benefits.",
    hiddenText:
      "Sonth is an excellent remedy for nausea, indigestion, and inflammation. It is also effective in boosting metabolism, providing relief from cold symptoms, and improving overall gut health.",
  },
  {
    id: 6,
    image: jeera,
    title: "Jeera",
    description:
      "Common spice known for its carminative and digestive properties.",
    hiddenText:
      "Jeera, or cumin, is known to improve digestion, reduce bloating, and enhance nutrient absorption. It is also helpful in managing acid reflux and improving metabolism.",
  },
  {
    id: 7,
    image: dhania,
    title: "Dhania",
    description: "Coriander seeds with cooling and digestive benefits.",
    hiddenText:
      "Dhania, or coriander, is effective in relieving indigestion, reducing bloating, and detoxifying the liver. It is also known for its antioxidant properties and its ability to improve digestion.",
  },
  {
    id: 8,
    image: pusp,
    title: "Dhataki Pushp",
    description: "Flower with powerful astringent and digestive properties.",
    hiddenText:
      "Dhataki Pushp is widely used in Ayurvedic formulations to support digestion, improve gut health, and promote overall wellness. It is particularly beneficial in managing diarrhea and other intestinal disorders.",
  },
  {
    id: 9,
    image: triphala,
    title: "Triphala",
    description: "It balances all Vata, Pitta , kapha.",
    hiddenText:
      "Triphala is a powerful herbal remedy that consists of Haritaki, Bibhitaki and amla. It is used in traditional Ayurvedic medicine to prevent diseases and treat a number of symptoms, including constipation and inflammation. It balances all Vata, Pitta , kapha ( Tridosha)",
  },
  {
    id: 8,
    image: trikatu,
    title: "Trikatu",
    description:
      "Trikatu is an ayurvedic formulation of long pepper, black pepper, and ginger",
    hiddenText:
      "Trikatu is a classical ayurvedic formulation that combines the goodness of three herbs or spices, mainly, long pepper, black pepper, and ginger to create an absolute remedy for most Vata and Kapha derangements like digestive anomalies",
  },
  {
    id: 8,
    image: shilajit,
    title: "Shilajit",
    description: "Ayurvedic Natural composition for weight loss",
    hiddenText:
      "Shilajit is a 100% Ayurvedic Natural composition for weight loss . It is known to increase metabolic rates by helping the body burn more calories. The advantage will be observed in burning fat faster",
  },
  {
    id: 8,
    image: kutaki,
    title: "Kutaki",
    description: "Ayurvedic medicine to promote liver health",
    hiddenText:
      "Kutki (Picrorhiza kurroa) is commonly used in Ayurvedic medicine to promote liver health and has been found to have potential benefits for liver detox and fatty liver.",
  },
  {
    id: 8,
    image: rohini,
    title: "Rohini",
    description: "Ayurvedic medicine to promote liver health",
    hiddenText:
      "Kutki (Picrorhiza kurroa) is commonly used in Ayurvedic medicine to promote liver health and has been found to have potential benefits for liver detox and fatty liver.",
  },
  {
    id: 8,
    image: patol,
    title: "Patol",
    description:
      "Plant is used for treating constipation, fever, skin infection.",
    hiddenText:
      "Parwal, Patol or Pointed-gourd(Trichosanthes dioica) plant is used for treating several diseases such as constipation, fever, skin infection, wounds, low appetite and digestion problems",
  },
  {
    id: 8,
    image: ajmoda,
    title: "Ajmoda",
    description: "Believed to stimulate the digestive fire",
    hiddenText:
      "Ajamoda is highly regarded for its carminative and digestive properties. It is believed to stimulate the digestive fire (agni) and alleviate indigestion, bloating, and acidity. ",
  },
  {
    id: 8,
    image: padma,
    title: "Padma Beej ",
    description: "Can help reduce stress, anxiety, and promote relaxation",
    hiddenText:
      "Consuming Padma seeds can help reduce stress, anxiety, and promote relaxation. In today's fast-paced world, finding ways to alleviate stress is crucial for maintaining mental health. Padma seeds can be a natural remedy, inducing a sense of calm and tranquility.",
  },
];

export const products = {
  "gastro-comfort": product1,
  "loose-control": product2,
  "soothe-gut": product3,
  "rest-n-calm": product4,
  "bloat-joy": product5,
  "shred-max": product6,
  "liver-comfy": product7,
  "flora-pre-probiotic": product8,
  "diagnostic-gut-testing": product9,
  "pre-pro-biotic": product10,
  "individualized-diet-plan": product11,
};
