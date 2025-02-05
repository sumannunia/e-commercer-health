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
          You have done well. Your gut score report is being processed. Our
          expert is soon going to reach out to explain the report and give you
          access to free diet plan.
        </Text>
      </Card>
    </Container>
  );
};

export default QuizSuccessPage;
