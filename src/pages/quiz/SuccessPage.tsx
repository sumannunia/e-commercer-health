import { Container, Card, Text } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
const QuizSuccessPage = () => {
  // const navigate = useNavigate();

  // const handleViewSummary = () => {
  //   navigate("/quiz-summary"); // Navigate to a summary page
  // };

  // const handleGoHome = () => {
  //   navigate("/"); // Navigate back to the homepage
  // };

  return (
    <Container size="sm" my="xl">
      <Card
        shadow="sm"
        radius="md"
        p="xl"
        withBorder
        style={{
          textAlign: "center",
          backgroundColor: "#f9fafb",
        }}
      >
        {/* Success Icon */}
        <FaCheck
          size={80}
          color="#4f805d"
          style={{ margin: "0 auto", marginBottom: "1rem" }}
        />

        {/* Success Message */}
        <Text size="xl" fw={700} color="dark" mb="sm">
          Congratulations!
        </Text>
        <Text size="md" mb="lg" style={{ fontWeight: "700" }}>
          You’ve successfully completed the quiz. Thank you for sharing your
          responses. We’re excited to provide personalized insights tailored
          just for you!
        </Text>
      </Card>
    </Container>
  );
};

export default QuizSuccessPage;
