import BlogLayout from "../../components/common/BlogLayout";
import img1 from "../../assets/clinical/image1.png";
import img2 from "../../assets/clinical/image2.png";
import img3 from "../../assets/clinical/image3.png";
import img4 from "../../assets/clinical/image4.png";
import { Container, Divider } from "@mantine/core";
import QRBlock from "../../components/common/QR/QRBlock";

const blogData = [
  {
    type: "title",
    content: "GUT CONDITIONS AND FOOD INTOLERANCES",
    level: 1, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    content:
      "Gut conditions and food intolerances are interconnected issues that can significantly affect an individual's overall health and well-being.",
  },
  {
    type: "paragraph",
    content:
      "A hydrogen breath test (or HBT) is used as a diagnostic tool for small intestine bacterial overgrowth and carbohydrate malabsorption, such as lactose, fructose, and sorbitol malabsorption. The test is simple, non-invasive, and is performed after a short period of fasting (typically 8–12 hours)",
  },
  {
    type: "title",
    content: "Food Intolerances",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    content:
      "Food intolerances occur when the body is unable to properly digest certain foods or food components, leading to a range of symptoms. Common intolerances include:",
  },
  {
    type: "title",
    content: "1. Lactose Intolerance:",
    level: 2,
  },

  {
    type: "list",
    items: [
      "Inability to digest lactose, a sugar found in milk and dairy products, due to insufficient levels of the enzyme lactase.",
      "Symptoms include bloating, diarrhea, and gas after consuming dairy.",
    ],
  },
  {
    type: "title",
    content: "2. Fructose Malabsorption:",
    level: 2,
  },
  {
    type: "list",
    items: [
      "Difficulty absorbing fructose, a sugar found in many fruits, vegetables, and sweeteners.",
      "Symptoms include abdominal pain, bloating, and diarrhea.",
      "Consume foods rich in omega-3 fatty acids.",
    ],
  },
  {
    type: "title",
    content: "Diagnosis",
    level: 2,
  },
  {
    type: "paragraph",
    content:
      "Breath test is quicker and non-invasive compared to more traditional methods, such as a blood test. The bacteria in your gut will produce more hydrogen and/or methane when it is reacting badly to something you have ingested",
  },
  {
    type: "paragraph",
    content: "Breath Testing  can help reach a diagnosis for:",
  },
  {
    type: "title",
    content: "Hydrogen Breath Tests",
    level: 2,
  },
  {
    type: "list",
    items: [
      "Lactose breath test – for lactose intolerance (lactase deficiency)",
      "Fructose breath test – for fructose intolerance",
      "Sorbitol breath test – for sorbitol intolerance",
      "Mannitol breath test – for mannitol intolerance",
      "Sucrose breath test – for sucrose intolerance (sucrase-isomaltose deficiency",
    ],
  },

  {
    type: "imageArr",
    src: [img2, img1],
    alt: "Fiber-rich foods",
  },

  {
    type: "title",
    content: "Hydrogen Breath Tests",
    level: 2,
  },
  {
    type: "paragraph",
    content:
      "Common dietary sugars such as lactose and fructose are normally absorbed in the small intestine. However, some people do not completely absorb these sugars and they pass into the colon (large intestine) where they are fermented by bacteria to produce either hydrogen (H2) or methane (CH4) gas, or a combination of both.",
  },
  {
    type: "paragraph",
    content:
      "In FODMAP intolerance an orally ingested test sugar will be incompletely absorbed in the small intestine, leading to fermentation and gas production in the colon. These gases are absorbed into the bloodstream and expired via the lungs, allowing detection by breath testing. As these gases are not produced by humans, they are evidence of sugar fermentation by intestinal bacteria and hence breath tests are highly specific.",
  },
  {
    type: "paragraph",
    content:
      "Intolerance and SIBO is indicated by a significant rise in breath hydrogen or methane levels above baseline during the test. As a quantitative test it can also provide some information on the degree of intolerance.",
  },
  {
    type: "imageArr",
    src: [img3, img4],
    alt: "Fiber-rich foods",
  },
  {
    type: "table",
    data: [
      {
        test: "Lactose Intolerance Test",
        points: [
          "Intolerance of milk, dairy products, pastries or chocolate",
          "Suspected primary or secondary lactose intolerance",
          "Investigation of irritable bowel syndrome",
          "Investigation of bloating, meteorism, flatulence, diarrhea, steatorrhea (fatty stools)",
          "Monitoring celiac disease and other conditions with villous atrophy if primary LI has been ",
          "excluded via molecular genetic tests",
          "Chronic inflammatory bowel diseases (often combined with carbohydrate malabsorption)",
        ],
      },
      {
        test: "Lactulose Intolerance Test",
        points: [
          "Establishing oro-cecal transit time",
          "Establishing non-H2-producers",
          "Small intestine bacterial overgrowth (SIBO)",
          "Investigation of constipation",
        ],
      },
    ],
  },
  {
    type: "table",
    data: [
      {
        test: "Fructose Intolerance Test",
        points: [
          "Intolerance of sweets, honey, or fruits",
          "Suspected gastro-intestinal fructose intolerance",
          "Investigation of irritable bowel syndrome",
          "Investigation of bloating, meteorism, flatulence, diarrhea, steatorrhea (fatty stools)",
          "Monitoring celiac disease and other conditions that may be associated with villous atrophy",
          "Chronic inflammatory bowel diseases (often combined with carbohydrate malabsorption)",
        ],
      },
      {
        test: "Glucose Intolerance Test",
        points: [
          "Intolerance of sugar and sweets",
          "Suspected SIBO",
          "Exocrine pancreatic insufficiency",
          "Cirrhosis of the liver",
          "Secondary lactose intolerance",
          "Irritable bowel syndrome",
          "Duodenal diverticula",
          "Investigation of steatorrhea (fatty stools) or creator rhea (foul-smelling stools with protein)",
        ],
      },
    ],
  },
  {
    type: "table",
    data: [
      {
        test: "Sorbitol Intolerance Test",
        points: [
          "Intolerance of sweets, diabetic products and honey",
          "Intolerance of fruit, berries",
          "Suspected sorbitol intolerance (intolerance of chewing gum, boiled sweets etc.)",
          "Borderline positive result in the fructose tolerance test",
          "Investigation of irritable bowel syndrome",
          "Investigation of bloating, meteorism, flatulence",
          "Investigation of diarrhea or chronically recurring bouts of diarrhea",
          "Investigation of steatorrhea (fatty stools)",
          "Investigation of celiac disease and other conditions that may accompany villous atrophy",
        ],
      },
      {
        test: "Xylitol Intolerance Test",
        points: [
          "Suspected xylitol intolerance (intolerance of chewing gum, boiled sweets etc.)",
          "Investigation of sweets, diabetic products or processed food that is labeled ‘sugar-free’",
          "Borderline positive result in the fructose tolerance test and/or sorbitol tolerance test",
          "Investigation of bloating, meteorism, flatulence",
          "Investigation of diarrhea or chronically recurring bouts of diarrhea",
          "Investigation of steatorrhea (fatty stools)",
          "Investigation of ‘therapy refractory’ celiac disease and similar conditions that may villous atrophy",
          " ",
          "Chronic inflammatory bowel disease (are often associated with CH malabsorption)",
        ],
      },
    ],
  },
  {
    type: "title",
    content: "Management strategies may include:",
    level: 2,
  },

  {
    type: "paragraph",
    content:
      "Common dietary sugars such as lactose and fructose are normally absorbed in the small intestine. However, some people do not completely absorb these sugars and they pass into the colon (large intestine) where they are fermented by bacteria to produce either hydrogen (H2) or methane (CH4) gas, or a combination of both.",
  },

  {
    type: "list",
    items: [
      "Diet Modification: Identifying and avoiding trigger foods.",
      "Probiotics and Prebiotics: Supporting gut health with beneficial bacteria and dietary fibers.",
      "Medications: Anti-inflammatory drugs, antidiarrheals, or probiotics, depending on the condition.",
      "Lifestyle Changes: Stress management techniques, exercise, and adequate hydration.",
    ],
  },
  {
    type: "title",
    content: "Conclusion",
    level: 2,
  },
  {
    type: "paragraph",
    content:
      "To aid in the detection of gastro-intestinal disorders Investigate functional gut conditions:",
  },
  {
    type: "list",
    items: ["Food intolerances", "SIBO", "IBS"],
  },
];

const ClinicalGutTest = () => {
  return (
    <>
      <Container mt={"xl"}>
        <QRBlock />
        <Divider mt={"lg"} />
      </Container>
      <BlogLayout data={blogData} />;
    </>
  );

  // return <InfoCards />;
};

export default ClinicalGutTest;
