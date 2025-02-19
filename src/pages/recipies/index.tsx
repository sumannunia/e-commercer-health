import BlogLayout from "../../components/common/BlogLayout";
import impOfDiet from "../../assets/fitness/imp_of_diet.png";
import vegetables from "../../assets/fitness/vegetables.png";
import QRBlock from "../../components/common/QR/QRBlock";
import { Container, Divider, Group, Select } from "@mantine/core";

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
      "Incorporate millets such as ragi, jowar, bajra, and foxtail millet for their high fiber, iron, and calcium content.",
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
      "Infused Water: Add cucumber slices, mint leaves, and lemon wedges to a pitcher of water for a refreshing drink.",
    ],
  },
  {
    type: "paragraph",
    strong: "General Tips for Healthy Cooking",
    content: "",
  },
  {
    type: "list",
    items: [
      "Portion Control: Use appropriate serving sizes to avoid overeating",
      "Cooking Methods: Prefer steaming, grilling, or boiling over deep frying to preserve nutrients and reduce fat intake",
      "Avoid Excess Salt and Sugar: Use natural sweeteners like honey or jaggery sparingly.",
      "Meal Preparation: Plan meals in advance to include all food groups and reduce reliance on processed foods.",
    ],
  },
  {
    type: "title",
    level: 2,
    content: "Example: A Balanced Plate Using Healthy Ingredients",
  },
  {
    type: "paragraph",
    strong: "Breakfast",
    content: "",
  },
  {
    type: "list",
    items: [
      "Vegetable Poha with groundnuts (cereals, vegetables, fats).",
      "A glass of unsweetened almond milk (calcium, protein).",
    ],
  },
  {
    type: "paragraph",
    strong: "Lunch",
    content: "",
  },
  {
    type: "list",
    items: [
      "Brown rice (cereals), dal (pulses), sautéed spinach (vegetables), and curd (dairy).",
      "A small portion of seasonal fruit like papaya or watermelon.",
    ],
  },
  {
    type: "paragraph",
    strong: "Dinner",
    content: "",
  },
  {
    type: "list",
    items: [
      "Whole wheat roti, grilled chicken/tofu, steamed broccoli, and carrot salad",
    ],
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "By focusing on fresh, diverse, and minimally processed ingredients, you can create meals that are both nutritious and delicious",
  },
  {
    type: "title",
    level: 2,
    content: "Conclusion",
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Achieving optimal nutrition involves clear goals, actionable guidelines, and understanding dietary needs across life stages. By maintaining a balanced diet, ensuring maternal and infant nutrition, supporting growth, and preventing chronic diseases, individuals can promote health and longevity.",
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "Following the dietary guidelines—such as eating a variety of foods, moderating fats, consuming vegetables and fruits, and adopting safe cooking practices—helps meet nutritional needs. Tools like the My Plate (NIN) framework and mindful ingredient selection make creating healthy, balanced meals simple and effective.",
  },
  {
    type: "paragraph",
    strong: "",
    content:
      "A holistic approach to nutrition fosters physical and mental well-being, improving quality of life at every stage.",
  },
];
const regions = [
  { value: "north_veg_main_course", label: "North Veg Main Course" },
  { value: "north_non_veg_main_course", label: "North Non Veg Main Course" },
  { value: "south_veg_main_course", label: "South Veg Main Course" },
  { value: "south_non_veg_main_course", label: "South Non Veg Main Course" },
  { value: "west_veg_main_course", label: "West Veg Main Course" },
  { value: "west_non_veg_main_course", label: "West Non Veg Main Course" },
  { value: "east_veg_main_course", label: "East Veg Main Course" },
  { value: "east_non_veg_main_course", label: "East Non Veg Main Course" },
  { value: "north_breads_rice", label: "North Breads and Rice" },
  { value: "north_snacks", label: "North Snacks" },
  { value: "north_beverages", label: "North Beverages" },
  { value: "north_desserts", label: "North Desserts" },
  { value: "north_side_dishes", label: "North Side Dishes" },
  { value: "south_breads_rice", label: "South Breads and Rice" },
  { value: "south_snacks", label: "South Snacks" },
  { value: "south_beverages", label: "South Beverages" },
  { value: "south_desserts", label: "South Desserts" },
  { value: "south_side_dishes", label: "South Side Dishes" },
  { value: "west_breads_rice", label: "West Breads and Rice" },
  { value: "west_snacks", label: "West Snacks" },
  { value: "west_beverages", label: "West Beverages" },
  { value: "west_desserts", label: "West Desserts" },
  { value: "west_side_dishes", label: "West Side Dishes" },
  { value: "east_breads_rice", label: "East Breads and Rice" },
  { value: "east_snacks", label: "East Snacks" },
  { value: "east_beverages", label: "East Beverages" },
  { value: "east_desserts", label: "East Desserts" },
  { value: "east_side_dishes", label: "East Side Dishes" },
  { value: "jain_main_course", label: "Jain Main Course" },
  { value: "jain_breads_rice", label: "Jain Breads and Rice" },
  { value: "jain_snacks", label: "Jain Snacks" },
  { value: "jain_beverages", label: "Jain Beverages" },
  { value: "jain_desserts", label: "Jain Desserts" },
  { value: "jain_side_dishes", label: "Jain Side Dishes" },
  { value: "tiffin_veg_recipes", label: "Tiffin Veg Recipes" },
  { value: "tiffin_non_veg_recipes", label: "Tiffin Non Veg Recipes" },
  { value: "fermented_foods", label: "Fermented Foods" },
  { value: "travellers_recipes", label: "Travellers Recipes" },
  {
    value: "specialized_diets_dash_diet",
    label: "Specialized Diets DASH Diet",
  },
];
const categories = [
  { value: "north", label: "North" },
  { value: "south", label: "South" },
  { value: "west", label: "West" },
  { value: "east", label: "East" },
  { value: "jain", label: "Jain" },
  { value: "dash_diet", label: "DASH Diet" },
  { value: "tiffin_recipes", label: "Tiffin Recipes" },
  { value: "fermented_food", label: "Fermented Food" },
  { value: "traveller_diet", label: "Traveller Diet" },
  { value: "mediterranean_diet", label: "Mediterranean Diet" },
  { value: "nordic_diet", label: "Nordic Diet" },
  { value: "whole_360_diet", label: "Whole 360 Diet" },
  { value: "japanese_diet", label: "Japanese Diet" },
  { value: "flexitarian_diet", label: "Flexitarian Diet" },
  { value: "vegan_diet", label: "Vegan Diet" },
];
const Recipies = () => {
  return (
    <>
      <Container mt={"xl"}>
        <QRBlock />
        <Divider mt={"lg"} />
      </Container>
      <Container>
        <Group my={"md"}>
          <Select
            defaultValue={"north"}
            data={categories}
            label={"Select Category"}
            searchable
            nothingFoundMessage="Not found"
            checkIconPosition="right"
          />
          <Select
            defaultValue={"north_veg_main_course"}
            checkIconPosition="right"
            data={regions}
            label={"Select region"}
            searchable
            nothingFoundMessage="Not found"
          />
        </Group>
      </Container>
      <BlogLayout data={blogData} />
    </>
  );
};

export default Recipies;
