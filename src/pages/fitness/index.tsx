import BlogLayout from "../../components/common/BlogLayout";
import PdfToImages from "../../components/common/Pdf";
import yogaPdf from "../../assets/pdf/30-days-of-yoga.pdf";
import impOfDiet from "../../assets/fitness/imp_of_diet.png";
import vegetables from "../../assets/fitness/vegetables.png";

const blogData = [
  {
    type: "title",
    content: "Dietary Goals",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    content:
      "To achieve optimal nutrition and health, the following goals should guide dietary behaviour:",
  },
  {
    type: "list",
    items: [
      "Positive Health and Performance: Maintain ideal body weight to support physical and mental performance.",
      "Maternal Nutrition: Ensure adequate nutritional intake for pregnant and lactating women to support maternal and infant health.",
      "Growth and Development: Promote healthy birth weights and ensure infants, children, and adolescents achieve their genetic growth potential.",
      "Adequate Nutrient Intake: Achieve nutritional adequacy to prevent deficiencies in macronutrients and micronutrients.",
      "Chronic Disease Prevention: Reduce the risk of diet-related disorders like obesity, diabetes, and cardiovascular diseases",
      "Elderly Health and Longevity: Support elderly health through nutrient-rich diets to improve quality of life and increase life expectancy.",
    ],
  },
  {
    type: "title",
    content: "Dietary Guidelines",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    content:
      "To achieve these goals, the following 15 dietary guidelines provide actionable steps:",
  },
  {
    type: "list",
    items: [
      "Eat a Variety of Foods: Incorporate diverse foods from different groups (cereals, pulses, vegetables, fruits, milk, and oils) to meet nutritional needs.",
      "Special Care for Pregnant and Lactating Women: Provide extra food and healthcare to meet their increased energy and nutrient requirements.",
      "Promote Breastfeeding: Exclusively breastfeed infants for six months, followed by complementary feeding, continuing breastfeeding for two years or more.",
      "Introduce Complementary Foods: Start home-based, semi-solid foods for infants after six months alongside breast milk.",
      "Ensure Adequate Diets for Children and Adolescents: Provide balanced diets for growth, development, and immunity during these critical phases.",
      "Consume Vegetables and Fruits: Aim for at least 300–400 grams daily, focusing on seasonal and locally available options.",
      "Moderate Use of Fats and Oils: Use edible oils in moderation and minimize ghee, butter, and vanaspati.",
      "Avoid Overeating: Practice portion control to maintain a healthy weight and prevent obesity",
      "Exercise Regularly: Incorporate physical activity into daily life to complement a healthy diet.",
      "Limit Salt Intake: Restrict salt to no more than 5 grams per day to prevent hypertension.",
      "Ensure Food Safety: Use clean, safe, and uncontaminated food and water.",
      "Adopt Healthy Cooking Practices: Use methods like steaming, grilling, or boiling to preserve nutrients.",
      "Stay Hydrated: Drink adequate water daily; consume tea, coffee, and other beverages in moderation.",
      "Minimize Processed Foods: Reduce intake of processed items high in salt, sugar, and unhealthy fats.",
      "Focus on Micronutrients for the Elderly: Include iron, calcium, and vitamin-rich foods to support fitness and active aging.",
    ],
  },
  {
    type: "title",
    content: "Importance of Diet During Different Stages of Life",
    level: 2, // Represents heading level (h1, h2, etc.)
  },
  {
    type: "paragraph",
    strong: "Infancy",
    content: "",
  },
  {
    type: "list",
    items: [
      "Dietary Needs: Breastmilk for growth, immune protection, and brain development",
      "Supplementation: Introduce energy-rich, semi-solid foods after six months.",
    ],
  },
  {
    type: "paragraph",
    strong: "Childhood",
    content: "",
  },
  {
    type: "list",
    items: [
      "Dietary Focus: Nutrient-dense foods to support growth, cognitive development, and immunity.",
      "Key Foods: Milk, pulses, vegetables, fruits, and whole grains",
    ],
  },

  {
    type: "image",
    src: impOfDiet,
    alt: "Fiber-rich foods",
  },
  {
    type: "paragraph",
    strong: "Adolescence",
    content: "",
  },
  {
    type: "list",
    items: [
      "Nutritional Priority: Adequate calcium, protein, and iron for bone growth, hormonal changes, and muscle development.",
      "Active Lifestyle: Pair with regular physical activity for healthy body composition.",
    ],
  },
  {
    type: "paragraph",
    strong: "Pregnancy and Lactation",
    content: "",
  },
  {
    type: "list",
    items: [
      "Energy and Nutrients: Additional calories, proteins, iron, folic acid, and calcium to support fetal development and milk production.",
      "Dietary Guidance: Include milk, eggs, green leafy vegetables, fruits, and fortified foods.",
    ],
  },
  {
    type: "paragraph",
    strong: "Adulthood",
    content: "",
  },
  {
    type: "list",
    items: [
      "Maintenance: Balanced intake of macronutrients and micronutrients for sustained health and productivity.",
      "Chronic Disease Prevention: Avoid processed foods and maintain an active lifestyle.",
    ],
  },
  {
    type: "paragraph",
    strong: "Elderly",
    content: "",
  },
  {
    type: "list",
    items: [
      "Focus Areas: Nutrient-dense, low-calorie foods rich in calcium, vitamins D and B12, and antioxidants to prevent frailty and chronic diseases.",
    ],
  },
  {
    type: "paragraph",
    strong: "Using My Plate (NIN) to Make Healthy Choices",
    content:
      "The My Plate (NIN) framework is a visual guide to creating balanced meals:",
  },
  {
    type: "paragraph",
    strong: "Using My Plate (NIN) to Make Healthy Choices",
    content: "Half the Plate (Vegetables and Fruits)",
  },
  {
    type: "list",
    items: [
      "Fill 50% of the plate with seasonal, colourful vegetables and fruits for vitamins, minerals, and fibre.",
      "Example: Spinach, carrots, tomatoes, bananas, and citrus fruits.",
    ],
  },
  {
    type: "paragraph",
    strong: "Quarter of the Plate (Cereals and Millets)",
    content: "",
  },
  {
    type: "list",
    items: [
      "Choose whole grains like brown rice, millets (ragi, jowar), and whole wheat for sustained energy",
      "Limit refined grains like white bread and polished rice.",
    ],
  },
  {
    type: "paragraph",
    strong: "Quarter of the Plate (Proteins)",
    content: "",
  },
  {
    type: "list",
    items: [
      "Include pulses, lentils, eggs, fish, chicken, or soy products to meet protein requirements",
      "For vegetarians: Combine cereals and pulses (e.g., rice and dal) for complete protein.",
    ],
  },
  {
    type: "paragraph",
    strong: "Small Portion (Fats and Oils)",
    content: "",
  },
  {
    type: "list",
    items: [
      "Use healthy oils like mustard, sunflower, or olive oil",
      "Limit saturated fats like butter, ghee, and vanaspati.",
    ],
  },
  {
    type: "paragraph",
    strong: "Additional Elements",
    content: "",
  },
  {
    type: "list",
    items: [
      "Dairy: Add milk, yogurt, or paneer for calcium and protein.",
      "Hydration: Drink water frequently; limit sugary drinks.",
      "Spices and Herbs: Use turmeric, ginger, and cumin for antioxidants and flavor.",
    ],
  },
  {
    type: "paragraph",
    strong: "Practical Tips for Ingredient Selection",
    content: "",
  },
  {
    type: "list",
    items: [
      "Choose Fresh and Local: Prioritize fresh, seasonal produce to maximize nutrients and reduce costs.",
      "Look for Whole Foods: Opt for unprocessed or minimally processed options (e.g., whole grains, fresh meats).",
      "Read Labels: Check for low sugar, salt, and trans fats in packaged products.",
      "Plan Meals: Use a weekly plan to incorporate all food groups and avoid repetitive diets.",
    ],
  },
  {
    type: "paragraph",
    strong: "Choosing Healthy Ingredients and Making Healthy Recipes",
    content:
      "Eating healthily starts with choosing the right ingredients. Below are comprehensive steps and tips for selecting healthy ingredients and using them to create nutritious and delicious recipes.",
  },
  {
    type: "paragraph",
    strong: "Cereals and Millets",
    content: "",
  },
  {
    type: "list",
    items: [
      "Choose whole grains like brown rice, oats, quinoa, and whole wheat flour over refined grains (white rice, white bread).",
      "ncorporate millets such as ragi, jowar, bajra, and foxtail millet for their high fiber, iron, and calcium content.",
      "Opt for unpolished grains for better nutrient retention",
      "Vegetable Millet Khichdi: Combine millets, lentils, and mixed vegetables; cook with minimal oil and spices for a one-pot meal rich in protein and fiber",
      "Whole Grain Breakfast Bowl: Mix cooked quinoa with yogurt, nuts, and fresh fruits for a quick and wholesome start to the day",
    ],
  },
  {
    type: "paragraph",
    strong: "Pulses and Legumes",
    content: "",
  },
  {
    type: "list",
    items: [
      "Use a variety of pulses (red lentils, moong dal, chana dal) and legumes (kidney beans, chickpeas, black-eyed peas) to ensure diverse nutrient intake.",
      "Opt for sprouted legumes for enhanced bioavailability of vitamins and minerals.",
      "Sprouted Moong Salad: Mix sprouted moong beans with chopped cucumbers, tomatoes, and a dash of lemon juice.",
      "Lentil Soup: Prepare a hearty soup with lentils, spinach, and mild spices for a comforting meal rich in protein and iron.",
    ],
  },
  {
    type: "image",
    src: vegetables,
  },
  {
    type: "paragraph",
    strong: "Vegetables",
    content: "",
  },
  {
    type: "list",
    items: [
      "Prioritize seasonal and locally grown vegetables to maximize freshness and affordability.",
      "Choose a variety of colors (green leafy vegetables, orange carrots, red tomatoes, purple brinjals) to cover a range of vitamins and antioxidants.",
      "Avoid pre-cut or processed vegetables to reduce nutrient loss.",
      "Mixed Vegetable Stir-Fry: Sauté broccoli, bell peppers, zucchini, and spinach in olive oil with garlic and herbs.",
      "Vegetable Soup: Combine carrots, tomatoes, beans, and onions with a low-sodium broth for a light and nutritious appetizer",
    ],
  },
  {
    type: "paragraph",
    strong: "Fruits",
    content: "",
  },
  {
    type: "list",
    items: [
      "Opt for fresh, whole fruits instead of canned or processed ones with added sugars",
      "Choose fruits rich in vitamin C (oranges, guavas), fiber (apples, pears), and antioxidants (berries, pomegranates).",
      "Fruit Chaat: Toss chopped seasonal fruits with a pinch of chaat masala and lime juice for a tangy, refreshing snack.",
      "Smoothie: Blend bananas, spinach, and berries with unsweetened almond milk for a nutrient-dense drink",
    ],
  },
  {
    type: "paragraph",
    strong: "Milk and Dairy Products",
    content: "",
  },
  {
    type: "list",
    items: [
      "Choose low-fat or skimmed milk and dairy products to reduce saturated fat intake.",
      "Include curd, paneer, and yogurt for probiotics and calcium.",
      "Paneer Tikka: Marinate low-fat paneer in yogurt and spices, then grill or bake for a protein-rich snack.",
      "Yogurt Dip: Blend yogurt with mint, coriander, and garlic for a flavourful dip to pair with whole-grain snacks.",
    ],
  },
  {
    type: "paragraph",
    strong: "Fats and Oils",
    content: "",
  },
  {
    type: "list",
    items: [
      "Use healthy cooking oils like mustard oil, sunflower oil, or olive oil in moderation",
      "Avoid hydrogenated fats like vanaspati and limit saturated fats like butter and ghee.",
      "Nut and Seed Mix: Roast almonds, walnuts, and sunflower seeds in a teaspoon of olive oil with light seasoning for a healthy snack.",
      "Homemade Salad Dressing: Mix olive oil, lemon juice, and a pinch of black pepper for a light, nutritious salad topping.",
    ],
  },
  {
    type: "paragraph",
    strong: "Protein Sources",
    content: "",
  },
  {
    type: "list",
    items: [
      "ncorporate lean meats (chicken, fish) and plant-based proteins (tofu, soy chunks, nuts, seeds)",
      "Avoid processed meats like sausages and salami to reduce sodium and preservative intake.",
      "Grilled Chicken with Veggies: Marinate chicken with herbs and spices; grill and serve with steamed vegetables.",
      "Tofu and Vegetable Stir-Fry: Toss tofu cubes with bok choy, bell peppers, and sesame seeds for a protein-packed meal.",
    ],
  },
  {
    type: "paragraph",
    strong: "Spices and Herbs",
    content: "",
  },
  {
    type: "list",
    items: [
      "Use turmeric, cumin, ginger, and garlic for their anti-inflammatory and antioxidant properties.",
      "Avoid excessive salt; use natural flavor enhancers like lemon juice or tamarind.",
      "Golden Milk: Mix turmeric and black pepper with warm milk for a calming, immune-boosting drink.",
      "Herb Infused Soup: Add fresh coriander, basil, and mint to vegetable soup for a fragrant, flavorful twist.",
    ],
  },
  {
    type: "paragraph",
    strong: "Snacks and Beverages",
    content: "",
  },
  {
    type: "list",
    items: [
      "Replace fried snacks with baked or roasted options.",
      "Choose unsweetened herbal teas, coconut water, or infused water over sugary sodas.",
      "Roasted Chickpeas: Toss boiled chickpeas with olive oil and spices; roast until crispy",
      "Herb Infused Soup: Add fresh coriander, basil, and mint to vegetable soup for a fragrant, flavorful twist.",
    ],
  },
];

const Fitness = () => {
  return (
    <>
      <BlogLayout data={blogData} />
      <PdfToImages fileUrl={yogaPdf} />
    </>
  );
};

export default Fitness;
