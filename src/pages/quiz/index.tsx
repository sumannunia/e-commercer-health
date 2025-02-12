import { useNavigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Group,
  List,
  Paper,
  Radio,
  Stepper,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";

const questions = [
  { id: 1, question: "What is your name?", type: "text" },
  { id: 2, question: "What is your age?", type: "text" },
  { id: 3, question: "Phone Number", type: "text" },
  { id: 4, question: "Email", type: "text" },
  { id: 5, question: "Height", type: "text" },
  { id: 6, question: "Weight", type: "text" },

  {
    id: 7,
    question: "7. Tick your regional preference for Indian Diet?  ",
    type: "single-choice",
    options: ["North", "South", "West", "East"],
  },
  {
    id: 8,
    question: " What type of food do you prefer?  ",
    type: "single-choice",
    options: ["Vegetarian", "Non-vegetarian"],
  },
  {
    id: 9,
    question: "Tick any condition that you may be suffering from  ",
    type: "single-choice",
    options: [
      "Non Alcoholic Fatty Liver Disease",
      "Diabetes",
      "Cardiovascular disease",
      "Obesity",
      "Arthiritis",
      "Hypertension",
      "Hyperlipidemia/ cholestrol",
      "Thyroid (Hyperthyroidism, Hypoparathyroidism, Hypothyroidism)",
      "None",
    ],
  },
  {
    id: 10,
    question: "Tick the type of meals that you consume ",
    type: "single-choice",
    options: [
      "Small & frequent meals (more than 4 meals a day)",
      "Small & fewer meals (less than 4 meals a day)",
      "Large & frequent meals (more than 4 meals a day)",
      "Large & fewer meals (less than 4 meals a day)",
    ],
  },
  {
    id: 11,
    question:
      "How often do you cosume fiber-rich foods (Fresh fruit/ Dry Fruits / Oats / Millets / Daliya)?",
    type: "single-choice",
    options: ["Daily", "3-4 times a week", "Once a week", "Rarely", "Never"],
  },
  {
    id: 12,
    question:
      "13. How often do you consume junk food (eg fast food, chips, sugary snacks, Sugary Beverages, processed foods) ?",
    type: "single-choice",
    options: ["Daily", "3-4 times a week", "Once a week", "Rarely", "Never"],
  },
  {
    id: 13,
    question: " How much water do you drink in a typical day?",
    type: "single-choice",
    options: [
      "More than 8 glasses",
      "6-8 glasses",
      "4-5 glasses",
      "2-3 glasses",
      "Less than 2 glasses",
    ],
  },
  {
    id: 14,
    question: "Mark all the food intolerances you have ",
    type: "single-choice",
    options: [
      "Lactose intolerence",
      "Fructose intolerance ",
      "Glucose intolerance",
      "Gluten Sensitivity",
      "Soyaean and Peanuts intolerence",
      "Eggs intolerance",
      "Fish intolerance",
      "Seafood intolerance",
      "I don’t know",
    ],
  },
  {
    id: 15,
    question: "Tick one or more statements true for you",
    type: "single-choice",
    options: [
      "Smoking",
      "Alcohol consumption (more than 3 drinks per week)",
      "Eating late at night (within 2 hours of bedtime)",
      "Consuming large portions of food in one sitting (overeating)",
      "Stress or anxiety that affects your eating habits (e.g.,skipping meals / overeating)",
      "You are night bird = Sleep by mid night ",
      "Sedentary life style - You have desk job",
      "None of the above ",
    ],
  },

  {
    id: 16,
    question:
      "How often do you engage in physical activity (e.g., walking, running, yoga, cycling)?",
    type: "single-choice",
    options: ["Daily", "3-4 times a week", "Once a week", "Rarely", "Never"],
  },

  {
    id: 17,
    question: "18. Are you suffereing from any of the condition given below",
    type: "single-choice",
    options: [
      "Nausea",
      "Indigestion",
      "Gas / Bloating",
      "Acidity",
      "Irritable bowel syndrome",
      "Constipation",
      "Diarrhea",
      "All of the above",
      "None",
    ],
  },

  // {
  //   id: 13,
  //   question: "Do you take any health supplements?",
  //   type: "multiple-choice",
  //   options: [
  //     "Protein supplements",
  //     "Iron supplements",
  //     "Calcium supplements",
  //     "Vitamin D supplements",
  //     "Multivitamins",
  //     "Calorie supplements",
  //     "Pre-workout supplement",
  //     "Post-workout supplement",
  //     "Creatine",
  //     "Caffeine",
  //     "Amino acids",
  //     "Probiotics",
  //   ],
  // },
  // {
  //   id: 14,
  //   question: "What do you consume in a day?",
  //   type: "textarea",
  // },
  // {
  //   id: 15,
  //   question: "Do you smoke?",
  //   type: "single-choice",
  //   options: ["Yes", "No", "Occasionally"],
  // },
  // {
  //   id: 16,
  //   question: "Do you drink alcohol?",
  //   type: "single-choice",
  //   options: ["Yes", "No", "Occasionally"],
  // },
  // {
  //   id: 17,
  //   question:
  //     "How often do you consume junk food/processed food (pizza, burger, fries, etc.)?",
  //   type: "single-choice",
  //   options: ["Everyday", "Sometimes", "Once or twice a week", "Once a month"],
  // },
];
import QRCodeCustom from "../../components/common/QR";
const Quiz = () => {
  return (
    <Container size="md" px="md">
      <Text ta={"center"} size="xl" fw={600} mb="md">
        Take the Quiz
      </Text>

      {/* <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 200,
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <QRCodeCustom />
      </div> */}
      <Grid>
        <Grid.Col span={{ md: 4, lg: 3, xl: 3 }}>
          <QRCodeCustom />
        </Grid.Col>
        <Grid.Col span={{ md: 8, lg: 9, xl: 9 }}>
          <Title size={"md"}>To Avial Free Services: </Title>
          <List>
            <List.Item>Free diet plan.</List.Item>
            <List.Item>Free calorie counter.</List.Item>
            <List.Item>Free step / physical activity counter.</List.Item>
            <List.Item>Free gut friendly recipies.</List.Item>
            <List.Item>Free yoga exercises content.</List.Item>
          </List>
        </Grid.Col>
      </Grid>

      <QuizStepperQuestion />
    </Container>
  );
};

export default Quiz;
function QuizStepperQuestion() {
  const [active, setActive] = useState(0);
  const nextStep = () => {
    setActive((current) => (current < 2 ? current + 1 : current));
    window.scrollTo(0, 200);
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
    window.scrollTo(0, 200);
  };

  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const navigate = useNavigate();

  const handleInputChange = (id: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  console.log({ active });
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
    <>
      <Divider my={"lg"} />
      <Stepper active={active} onStepClick={setActive} my={"xl"} pb={"lg"}>
        <Stepper.Step label="User Details" description="Basic user details">
          {questions.slice(0, 6).map((q) => (
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
        </Stepper.Step>
        <Stepper.Step label="Preferences" description="Enter your preferences">
          {questions.slice(6, 12).map((q) => (
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
        </Stepper.Step>
        <Stepper.Step label="Diet Plan" description="Get full access">
          {questions.slice(12, 18).map((q) => (
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
        </Stepper.Step>
      </Stepper>

      <Group justify="center" my="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>

        {active === 2 ? (
          <Button color="teal" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button onClick={nextStep}>Next step</Button>
        )}
      </Group>
    </>
  );
}
