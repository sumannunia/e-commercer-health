import { useNavigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  Radio,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

const questions = [
  { id: 1, question: "What is your name?", type: "text" },
  { id: 2, question: "What is your age?", type: "text" },
  {
    id: 3,
    question: "What is your gender?",
    type: "single-choice",
    options: ["Male", "Female", "Non-binary", "Prefer not to say"],
  },
  {
    id: 4,
    question: "What is your height? (in cm)",
    type: "text",
  },
  {
    id: 5,
    question: "What is your weight? (in kg)",
    type: "text",
  },
  {
    id: 6,
    question: "Where are you from?",
    type: "single-choice",
    options: ["USA", "India", "Canada", "UK", "Australia", "Other"],
  },
  {
    id: 7,
    question: "From which region? (if India)",
    type: "single-choice",
    options: ["East", "West", "North", "South"],
  },
  {
    id: 8,
    question: "What type of food do you prefer?",
    type: "single-choice",
    options: [
      "Vegetarian",
      "Non-vegetarian",
      "Eggetarian",
      "Vegan/Plant-based diet",
    ],
  },
  {
    id: 9,
    question: "Mark all the food allergies you have:",
    type: "multiple-choice",
    options: [
      "Gluten/Wheat",
      "Lactose Intolerant",
      "Eggs",
      "Fish",
      "Crustaceans Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Soybeans",
      "Sesame Seeds",
    ],
  },
  {
    id: 10,
    question: "What type of physical activity do you do in a day?",
    type: "multiple-choice",
    options: [
      "Not at all",
      "Walking/Jogging",
      "Dancing",
      "Swimming",
      "Climbing",
      "Playing sports",
      "Lifting weights",
      "Gyming",
      "Cycling",
      "Yoga",
    ],
  },
  {
    id: 11,
    question: "What conditions are you suffering from?",
    type: "multiple-choice",
    options: [
      "Diabetes",
      "Hypertension",
      "Cardiovascular disease",
      "Thyroid",
      "Obesity",
      "Osteoporosis",
      "Arthritis",
      "Overeating/Binge eating",
      "Skipping meals",
      "Chronic stress",
    ],
  },
  {
    id: 12,
    question: "Do you take any medication for the same?",
    type: "single-choice",
    options: ["Yes", "No"],
  },
  {
    id: 13,
    question: "Do you take any health supplements?",
    type: "multiple-choice",
    options: [
      "Protein supplements",
      "Iron supplements",
      "Calcium supplements",
      "Vitamin D supplements",
      "Multivitamins",
      "Calorie supplements",
      "Pre-workout supplement",
      "Post-workout supplement",
      "Creatine",
      "Caffeine",
      "Amino acids",
      "Probiotics",
    ],
  },
  {
    id: 14,
    question: "What do you consume in a day?",
    type: "textarea",
  },
  {
    id: 15,
    question: "Do you smoke?",
    type: "single-choice",
    options: ["Yes", "No", "Occasionally"],
  },
  {
    id: 16,
    question: "Do you drink alcohol?",
    type: "single-choice",
    options: ["Yes", "No", "Occasionally"],
  },
  {
    id: 17,
    question:
      "How often do you consume junk food/processed food (pizza, burger, fries, etc.)?",
    type: "single-choice",
    options: ["Everyday", "Sometimes", "Once or twice a week", "Once a month"],
  },
];
import QRCode from "react-qr-code";
const Quiz = () => {
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const navigate = useNavigate();

  const handleInputChange = (id: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (id: number, value: string) => {
    const currentAnswers = answers[id] || [];
    const updatedAnswers = currentAnswers.includes(value)
      ? currentAnswers.filter((answer: string) => answer !== value)
      : [...currentAnswers, value];

    setAnswers((prev) => ({
      ...prev,
      [id]: updatedAnswers,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers: ", answers);
    navigate("/quiz-success");
  };

  return (
    <Container size="md" px="md">
      <Text size="xl" fw={600} mb="md">
        Take the Quiz
      </Text>

      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 200,
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"http://gutexpert.in/quiz"}
          viewBox={`0 0 256 256`}
        />
      </div>
      {questions.map((q) => (
        <Paper
          key={q.id}
          shadow="sm"
          radius="md"
          p="lg"
          mb="lg"
          withBorder
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <Text fw={500} size="lg" mb="sm">
            {q.question}
          </Text>
          {q.type === "text" && (
            <TextInput
              placeholder="Your answer"
              value={answers[q.id] || ""}
              onChange={(e) => handleInputChange(q.id, e.target.value)}
            />
          )}
          {q.type === "textarea" && (
            <Textarea
              placeholder="Your answer"
              value={answers[q.id] || ""}
              onChange={(e) => handleInputChange(q.id, e.target.value)}
            />
          )}
          {q.type === "single-choice" && q.options && (
            <Radio.Group
              value={answers[q.id] || ""}
              onChange={(value) => handleInputChange(q.id, value)}
            >
              {q.options.map((option, index) => (
                <Radio key={index} value={option} label={option} />
              ))}
            </Radio.Group>
          )}
          {q.type === "multiple-choice" && q.options && (
            <Group justify="column" gap="sm">
              {q.options.map((option, index) => (
                <Checkbox
                  key={index}
                  label={option}
                  checked={answers[q.id]?.includes(option) || false}
                  onChange={() => handleCheckboxChange(q.id, option)}
                />
              ))}
            </Group>
          )}
        </Paper>
      ))}

      <Group justify="center" mt="lg">
        <Button color="teal" size="lg" onClick={handleSubmit}>
          Submit
        </Button>
      </Group>
    </Container>
  );
};

export default Quiz;
