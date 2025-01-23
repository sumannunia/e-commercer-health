import BlogLayout from "../../components/common/BlogLayout";
import prebiotics from "../../assets/diet-and-gut/prebiotics.webp";
import variety from "../../assets/diet-and-gut/variety.webp";
import fermented from "../../assets/diet-and-gut/fermented.webp";
import fermented2 from "../../assets/diet-and-gut/fermented_2.webp";
import processed from "../../assets/diet-and-gut/processed_food.webp";
import balanced from "../../assets/diet-and-gut/balanced.webp";
import hydration from "../../assets/diet-and-gut/hydration.webp";
import a_sugar from "../../assets/diet-and-gut/artificial_sugar.webp";
import omega from "../../assets/diet-and-gut/omega.webp";
import mindful_eating from "../../assets/diet-and-gut/mindful_wating.webp";
import personilazation from "../../assets/diet-and-gut/personilazation.webp";
import dairy from "../../assets/diet-and-gut/dairy.webp";
// import InfoCards from "../home/components/InfoCards";

const blogData = [
  {
    type: "title",
    content: "Diet and Gut Health",
    level: 1, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    content:
      "Diet and gut health are closely interconnected, as the foods we consume can significantly influence the composition and function of our gut microbiota—the diverse community of microorganisms living in our intestines. A healthy gut microbiome is essential for digestion, immune function, mental health, and overall well-being. Here are some key aspects of how diet affects gut health:",
  },
  {
    type: "title",
    content: "1. Fiber-Rich Foods",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "Probiotics",
    content:
      "Foods high in dietary fiber serve as prebiotics, which are non-digestible food components that feed beneficial gut bacteria. Sources include fruits, vegetables, whole grains, legumes, and nuts.",
  },
  {
    type: "image",
    src: prebiotics,
    alt: "Fiber-rich foods",
  },
  {
    type: "paragraph",
    strong: "Variety",
    content:
      "A diet high in diverse plant-based foods can promote a more diverse microbiome, which is generally considered healthier. ",
  },
  {
    type: "image",
    src: variety,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "2. Fermented Foods:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "Probiotics",
    content:
      "Foods like yogurt, sauerkraut, kimchi, kefir, and kombucha contain live beneficial bacteria that can help maintain or restore gut health.",
  },
  {
    type: "image",
    src: fermented,
    alt: "Fiber-rich foods",
  },
  {
    type: "paragraph",
    strong: "Benefits",
    content:
      "Consuming fermented foods can improve digestion, reduce symptoms of irritable bowel syndrome (IBS), and may enhance immune function.",
  },
  {
    type: "image",
    src: fermented2,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "3. Limit Processed Foods",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "High intake of processed foods, added sugars, and unhealthy fats can negatively impact gut health by promoting the growth of harmful bacteria and reducing microbial diversity.",
  },
  {
    type: "image",
    src: processed,
    alt: "Fiber-rich foods",
  },

  {
    type: "title",
    content: "4. Balanced Diet:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "A balanced diet rich in vitamins, minerals, and antioxidants supports overall gut health. Foods like leafy greens, cruciferous vegetables, berries, and nuts contribute to a healthier microbiome.",
  },
  {
    type: "image",
    src: balanced,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "5. Hydration:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Drinking plenty of water is essential for digestion and helps maintain a healthy mucosal lining in the intestines, supporting the growth of beneficial microbiota.",
  },
  {
    type: "image",
    src: hydration,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "6. Avoiding Artificial Sweeteners:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Some studies suggest that artificial sweeteners can negatively affect gut bacteria and lead to metabolic issues.",
  },
  {
    type: "image",
    src: a_sugar,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "7. Omega-3 Fatty Acids:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Found in fatty fish, flaxseeds, and walnuts, omega-3 fatty acids have anti-inflammatory properties that can benefit gut health.",
  },
  {
    type: "image",
    src: omega,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "8. Mindful Eating:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Stress can negatively impact gut health, so practicing mindful eating, which involves paying attention to hunger cues and eating slowly, can benefit digestion and gut function.",
  },
  {
    type: "image",
    src: mindful_eating,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "9. Personalization:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Individual responses to certain foods can vary widely. It may be helpful to keep a food diary or consult with a healthcare professional or dietitian to tailor dietary choices based on personal health needs.",
  },
  {
    type: "image",
    src: personilazation,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "10. Dairy Sensitivity:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "While fermented dairy may be beneficial, some individuals may be lactose intolerant or sensitive to dairy, which could lead to digestive issues.",
  },
  {
    type: "image",
    src: dairy,
    alt: "Fiber-rich foods",
  },
  {
    type: "title",
    content: "Conclusion:",
    level: 2,
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Maintaining good gut health requires a holistic approach to diet and lifestyle. A focus on whole, unprocessed foods with a sufficient intake of prebiotics and probiotics, combined with proper hydration and stress management, can enhance gut health. If you have specific health concerns or conditions, it's always a good idea to consult with a healthcare professional for personalized advice.",
  },
];

const DietAndGut = () => {
  return <BlogLayout data={blogData} />;
  // return <InfoCards />;
};

export default DietAndGut;
