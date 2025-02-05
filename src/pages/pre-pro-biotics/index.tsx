import BlogLayout from "../../components/common/BlogLayout";
import otherBenifits from "../../assets/pre-pro-biotic/otherbenifits.png";
import organisms from "../../assets/pre-pro-biotic/organisms.png";
import preProbiotic from "../../assets/pre-pro-biotic/health.png";
import typesProbiotics from "../../assets/pre-pro-biotic/proTypes.png";
import proBioticFood from "../../assets/pre-pro-biotic/probioticfood.png";

const blogData = [
  {
    type: "title",
    content: "Prebiotics and Probiotics",
    level: 1, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "title",
    content: "What Are Prebiotics and Probiotics?",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    strong: "Prebiotics",
    type: "paragraph",
    content:
      "Non-digestible food ingredients that promote the growth or activity of beneficial gut bacteria, primarily in the colon. Prebiotics act as food for probiotics, enhancing their effectiveness.",
  },
  {
    strong: "Probiotics",
    type: "paragraph",
    content:
      "Live microorganisms that, when consumed in adequate amounts, confer health benefits to the host by balancing gut microflora.",
  },
  {
    type: "title",
    content: "Types of Prebiotics and Probiotics",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    strong: "Prebiotics",
    type: "paragraph",
    content: "",
  },
  {
    type: "list",
    items: [
      "Oligosaccharides (e.g., fructooligosaccharides, galactooligosaccharides): Found in onion, garlic, and chicory root.",
      "Inulin: Found in leeks, bananas, asparagus, and wheat",
      "Soybean Oligosaccharides: Found in soy milk and tofu",
      "Xylooligosaccharides: Found in fruits, vegetables, and honey.",
    ],
  },
  {
    strong: "Probiotics",
    type: "paragraph",
    content: "",
  },
  {
    type: "list",
    items: [
      "Lactobacillus (e.g., L. acidophilus, L. reuteri, L. rhamnosus): Found in yogurt, fermented milk, and supplements.",
      "Bifidobacterium (e.g., B. longum, B. bifidum): Found in the gut and fermented dairy products.",
      "Saccharomyces boulardii: A yeast effective in managing diarrhea.",
      "Streptococcus thermophilus: Produces lactase, aiding lactose digestion.",
      "Leuconostoc mesenteroides: Used in fermented foods like kimchi and sauerkraut",
      "Enterococcus faecium: Helps manage diarrhea and supports gut health.",
    ],
  },
  {
    strong: "Relation to Gut Health",
    type: "paragraph",
    content: "",
  },
  {
    strong: "",
    type: "paragraph",
    content:
      "The gut is home to over 400 species of microorganisms that play vital roles in digestion, immunity, and overall health. Probiotics and prebiotics significantly impact gut health through the following mechanisms:",
  },
  {
    strong: "Prebiotics",
    type: "paragraph",
    content: "",
  },
  {
    type: "list",
    items: [
      "Enhance beneficial bacteria like Bifidobacteria and Lactobacilli",
      "Reduce harmful bacteria and toxins by promoting colonization resistance",
      "Improve gut barrier function and immunity.",
    ],
  },
  {
    strong: "Probiotics",
    type: "paragraph",
    content: "",
  },
  {
    type: "list",
    items: [
      "Restore microbial balance in conditions like diarrhea, irritable bowel syndrome (IBS), and inflammatory bowel diseases (IBD).",
      "nhibit the growth of harmful pathogens through competition for adhesion sites in the gut lining.",
      "Produce short-chain fatty acids (e.g., butyrate) that nourish gut cells and reduce inflammation.",
    ],
  },
  {
    type: "title",
    content: "Health Benefits",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    strong: "Prebiotics",
    content: "",
  },

  {
    type: "list",
    items: [
      "Improve mineral absorption, particularly calcium.",
      "Enhance bone density and overall bone health.",
      "Regulate bowel movements and prevent constipation.",
      "Reduce the risk of colon cancer by sweeping up carcinogens.",
      "Suppress appetite and support weight management.",
    ],
  },
  {
    type: "image",
    src: preProbiotic,
  },

  {
    type: "title",
    level: 1,
    content: "Probiotics",
  },
  {
    type: "paragraph",
    strong: "Digestive Health",
    content: "",
  },
  {
    type: "list",
    items: [
      "Prevent and treat diarrhea (e.g., Lactobacillus rhamnosus for rotavirus diarrhea).",
      "Relieve symptoms of IBS and IBD (e.g., Lactobacillus plantarum for inflammation).",
    ],
  },
  {
    type: "paragraph",
    strong: "Immune System",
    content: "",
  },
  {
    type: "list",
    items: [
      "Enhance immune response through gut microbial balance.",
      "Help prevent respiratory infections.",
    ],
  },
  {
    type: "paragraph",
    strong: "Urogenital Health",
    content: "",
  },
  {
    type: "list",
    items: [
      "Prevent urinary and vaginal infections (Lactobacillus fermentum and Lactobacillus rhamnosus).",
    ],
  },
  {
    type: "paragraph",
    strong: "Other Benefits:",
    content: "",
  },
  {
    type: "list",
    items: [
      "Reduce cholesterol levels (Lactobacillus acidophilus).",
      "Prevent allergies and improve skin conditions like eczema",
      "Lower blood pressure with fermented milk products.",
    ],
  },

  {
    type: "image",
    src: otherBenifits,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "Food Sources of Prebiotics and Probiotics",
    level: 1,
  },
  {
    type: "paragraph",
    strong: "Prebiotic Foods",
    content: "",
  },

  {
    type: "list",
    items: [
      "Chicory root, garlic, onions, asparagus, bananas, wheat bran, and soy products.",
    ],
  },
  {
    type: "image",
    src: typesProbiotics,
  },
  {
    type: "paragraph",
    strong: "Probiotic Foods:",
    content: "",
  },
  {
    type: "list",
    items: [
      "Yogurt with live cultures, kefir, miso, tempeh, sauerkraut, kimchi, and fermented soy drinks.",
    ],
  },
  {
    type: "paragraph",
    strong: "Specific Strains of Probiotics and Their Uses",
    content: "",
  },
  {
    type: "image",
    src: proBioticFood,
  },
  {
    type: "table",
    data: [
      {
        test: "Probiotic Strain",
        points: [
          "Lactobacillus acidophilus",
          "SLactobacillus rhamnosus",
          "Bifidobacterium longum",
          "Saccharomyces boulardii",
          "Streptococcus thermophilus",
          "Leuconostoc mesenteroides",
          "Chronic inflammatory bowel diseases (often combined with carbohydrate malabsorption)",
        ],
      },
      {
        test: "Lactulose Intolerance Test",
        points: [
          "Prevents yeast infections, supports digestion, and relieves lactose intolerance.",
          "Helps with diarrhea and supports immune health.",
          "Reduces bloating, supports gut health, and alleviates IBS symptoms.",
          "Effective against antibiotic-associated and traveler's diarrhea.",
          "Improves lactose digestion and helps prevent respiratory infections.",
          "Protects against foodborne pathogens and supports fermented food production.",
        ],
      },
    ],
  },
  {
    type: "image",
    src: organisms,
  },

  {
    type: "titile",
    content: "Creating a Balanced Diet with Prebiotics and Probiotics",
    level: 1,
  },

  {
    type: "paragraph",
    content: "Meals to Combine Prebiotics and Probiotics:",
  },

  {
    type: "list",
    items: [
      "Breakfast: Yogurt with banana slices and a sprinkle of wheat bran.",
      "Lunch: Miso soup with steamed asparagus and a side of kimchi.",
      "Snack: Kefir smoothie blended with garlic and chicory root.",
      "Dinner: Grilled tempeh with sautéed leeks and whole-grain rice",
    ],
  },
  {
    type: "titile",
    content: "Cautions and Side Effects",
    level: 1,
  },
  {
    type: "list",
    items: [
      "Excessive prebiotic intake can cause bloating, gas, and abdominal discomfort.",
      "Probiotics may cause mild digestive issues initially (e.g., bloating or gas).",
      "People with weakened immune systems or critical illnesses should consult a healthcare provider before using probiotics.",
    ],
  },
  {
    type: "titile",
    content: "Conclusion",
    level: 1,
  },
  {
    type: "paragraph",
    content:
      "Prebiotics and probiotics work synergistically to maintain gut health, support immunity, and improve overall well-being. Incorporating a combination of prebiotic-rich and probiotic-rich foods in daily meals is a practical and effective way to harness their benefits. However, their use should be tailored to individual needs, considering health conditions and dietary preferences.",
  },
  {
    type: "reference",
    reference: [
      {
        text: "Davani-Davari, D., Negahdaripour, M., Karimzadeh, I., Seifan, M., Mohkam, M., Masoumi, S., Berenjian, A., & Ghasemi, Y. (2019). Prebiotics: definition, types, sources, mechanisms, and clinical applications. Foods, 8(3), 92.",
        link: " https://doi.org/10.3390/foods8030092",
      },
      {
        text: "Kaur, H., Kaur, G., & Ali, S. A. (2022). Dairy-Based Probiotic-Fermented Functional Foods: An update on their Health-Promoting properties. Fermentation, 8(9), 425. ",
        link: "https://doi.org/10.3390/fermentation8090425",
      },
      {
        text: "Markowiak, P., & Śliżewska, K. (2017). Effects of probiotics, prebiotics, and synbiotics on human health. Nutrients, 9(9), 1021. https://doi.org/10.3390/nu9091021",
        link: "https://doi.org/10.3390/nu9091021",
      },
      {
        text: "Pandey, K. R., Naik, S. R., & Vakil, B. V. (2015). Probiotics, prebiotics and synbiotics- a review. Journal of Food Science and Technology, 52(12), 7577–7587. ",
        link: "https://doi.org/10.1007/s13197-015-1921-1",
      },
    ],
  },
];
const PreProBiotics = () => {
  return (
    <>
      <BlogLayout data={blogData} />
    </>
  );
};

export default PreProBiotics;
