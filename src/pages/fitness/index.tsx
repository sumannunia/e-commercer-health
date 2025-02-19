import BlogLayout from "../../components/common/BlogLayout";
import yogaPdf from "../../assets/pdf/30-days-of-yoga.pdf";
import PdfJs from "../../components/common/Pdf/PdfReader";
import { Container, Divider } from "@mantine/core";
import QRBlock from "../../components/common/QR/QRBlock";

const blogData = [
  {
    type: "title",
    content: "YOGA",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    content:
      "Yoga plays a significant role in promoting gut health through various mechanisms. Here are several ways in which yoga can contribute positively to digestive function and overall gut health:",
  },
  {
    type: "paragraph",
    strong: "Stress Reduction",
    content:
      "Chronic stress can negatively affect digestion and lead to issues like bloating, constipation, or irritable bowel syndrome (IBS). Yoga practices, particularly those focusing on breath control (pranayama) and relaxation, help reduce stress hormones and promote a sense of calm, which can positively influence gut health.",
  },
  {
    type: "paragraph",
    strong: "Improved Blood Circulation",
    content:
      "Many yoga poses enhance blood flow to the abdominal organs, improving the delivery of oxygen and nutrients to these areas, which can enhance digestive function.",
  },
  {
    type: "paragraph",
    strong: "Activation of the Vagus Nerve",
    content:
      "Certain yoga poses and breathing techniques stimulate the vagus nerve, which plays a critical role in the parasympathetic nervous system. This activation helps to promote the 'rest and digest' state, encouraging better digestion and reducing symptoms related to gastrointestinal distress.",
  },
  {
    type: "paragraph",
    strong: "Increased Awareness of Body Signals",
    content:
      "Practicing yoga enhances body awareness, leading individuals to better understand their bodily sensations and responses. This awareness can help individuals identify foods that may cause discomfort and encourage healthier eating habits.",
  },
  {
    type: "paragraph",
    strong: "Encouragement of Healthy Habits",
    content:
      "Engaging in a regular yoga practice often motivates individuals to adopt a healthier lifestyle overall, including better dietary choices, hydration, and sleep, all of which are essential for maintaining good gut health.",
  },
  {
    type: "paragraph",
    strong: "Poses that Aid Digestion",
    content:
      "Specific yoga poses can directly stimulate the digestive organs and help alleviate symptoms related to digestive issues. For example, poses like seated forward bends, twists, and certain restorative poses can promote movement in the intestines and alleviate discomfort.",
  },
  {
    type: "paragraph",
    strong: "Mind-Body Connection",
    content:
      "Yoga encourages a strong mind-body connection, which can help individuals manage symptoms of gastrointestinal disorders more effectively by focusing on mindfulness practices that enhance emotional well-being.",
  },
  {
    type: "paragraph",
    strong: "Regularity and Routine",
    content:
      "The physical component of yoga encourages a regular practice that can help regulate bowel movements and improve overall digestive health due to consistent physical manifestation and movement of the body.",
  },
  {
    type: "paragraph",
    strong: "Inflammation Reduction",
    content:
      "Regular yoga practice has been shown to reduce markers of inflammation in the body, which may help in managing inflammatory gastrointestinal conditions.",
  },
  {
    type: "paragraph",
    strong: "Support for Gut Microbiome",
    content:
      "While more research is needed, there's emerging evidence that yoga and similar movement practices may positively influence the gut microbiome, potentially improving gut flora diversity, which is crucial for overall gut health.",
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "In summary, incorporating yoga into a regular routine can lead to various improvements in gut health, primarily by reducing stress, improving digestion, enhancing body awareness, and promoting healthy lifestyle habits. Each individual's experience may vary, so it's always good practice to consult healthcare providers when managing specific digestive issues.",
  },
];

const Fitness = () => {
  return (
    <>
      <Container mt={"xl"}>
        <QRBlock />
        <Divider mt={"lg"} />
      </Container>
      <BlogLayout data={blogData} />
      <PdfJs src={yogaPdf} />
    </>
  );
};

export default Fitness;
