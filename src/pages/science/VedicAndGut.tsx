import BlogLayout from "../../components/common/BlogLayout";
import img1 from "../../assets/vedic-and-gut/image1.png";
import img2 from "../../assets/vedic-and-gut/image2.png";
import img3 from "../../assets/vedic-and-gut/image3.png";
import img4 from "../../assets/vedic-and-gut/image4.png";
import img5 from "../../assets/vedic-and-gut/image5.png";

const blogData = [
  {
    type: "title",
    content: "Vedic and Gut ",
    level: 1, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    content:
      "Vedic medicine, rooted in ancient Indian traditions, emphasizes the holistic connection between the mind, body, and spirit. Central to this approach is the understanding of the gut's vital role in overall health. The gut, often referred to as the 'second brain,' is not only crucial for digestion but also significantly influences mental and emotional ",
  },
  {
    type: "image",
    src: img1,
    alt: "Fiber-rich foods",
  },
  {
    type: "image",
    src: img2,
    alt: "Fiber-rich foods",
  },
  {
    type: "image",
    src: img3,
    alt: "Fiber-rich foods",
  },
  {
    type: "paragraph",
    content:
      "In Vedic medicine, the concept of 'Agni,' or digestive fire, is foundational. A balanced Agni is believed to promote optimal digestion, nutrient absorption, and the elimination of toxins (ama). When the gut is healthy, it supports a harmonious balance of the three doshas: Vata, Pitta, and Kapha. Imbalances in these doshas can lead to digestive issues, fatigue, and even psychological disturbances.",
  },
  {
    type: "imageArr",
    src: [img4, img5],
    alt: "Fiber-rich foods",
  },

  {
    type: "paragraph",

    content:
      "Dietary practices in Vedic medicine emphasize the consumption of fresh, whole foods, tailored to an individual's dosha. Herbal remedies, such as turmeric and ginger,   ( Akash add pics of these ingredients ) are also frequently used to boost digestive health and combat inflammation. Furthermore, mindfulness practices like yoga and meditation are integrated to reduce stress, which can negatively impact gut health. By nurturing the gut through Vedic principles, individuals can achieve holistic wellness, enhancing both physical vitality and mental clarity.",
  },
];

const VedicAndGut = () => {
  return <BlogLayout data={blogData} />;
  // return <InfoCards />;
};

export default VedicAndGut;
