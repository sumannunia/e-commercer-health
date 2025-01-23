import { useState } from "react";
import {
  Container,
  Grid,
  Progress,
  Text,
  Button,
  Group,
  Paper,
  Rating,
} from "@mantine/core";
import styles from "./customerReviews.module.css";
import ReviewModal from "./ReviewModal";

const reviewsData = {
  averageRating: 3.8,
  totalRatings: 1496,
  ratingsBreakdown: [
    { stars: 5, percentage: 43 },
    { stars: 4, percentage: 23 },
    { stars: 3, percentage: 14 },
    { stars: 2, percentage: 6 },
    { stars: 1, percentage: 14 },
  ],
  topReviews: [
    {
      name: "Divya",
      date: "16 November 2024",
      title: "The Perfect Bottle",
      body: "I was very doubtful while ordering this but I am glad I did. It's really worth the money. One important thing I loved about this is the lid of the bottle which is perfectly tight so that water doesn't leak at all. Just go for it.",
      helpfulCount: 1,
    },
    {
      name: "Paresh Ranjan Ray",
      date: "4 August 2023",
      title: "Good",
      body: "Product is good but not the cap strong 😌",
      helpfulCount: 0,
    },
    {
      name: "Placeholder",
      date: "3 October 2024",
      title: "Good product",
      body: "The product is good, similar product bought from local shop was bad, cap went loose and leaked water. This one is best.",
      helpfulCount: 1,
    },
  ],
};

const CustomerReviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Container fluid size="lg" className={styles.reviewsContainer}>
      <Grid gutter="xl">
        {/* Left Section: Ratings Breakdown */}
        <Grid.Col span={{ xs: 12, md: 5, lg: 5, xl: 3 }}>
          <Paper className={styles.ratingsSection} p="md" radius="md">
            <Text fw={700} size="lg" mb="xs">
              Customer reviews
            </Text>
            <Text size="lg" fw={600} className={styles.averageRating}>
              {reviewsData.averageRating} out of 5
            </Text>
            <Text color="dimmed" size="sm" mb="md">
              {reviewsData.totalRatings.toLocaleString()} global ratings
            </Text>

            {/* Ratings Breakdown */}
            {reviewsData.ratingsBreakdown.map((item) => (
              <Group key={item.stars} align="center" mb="xs">
                <Text size="sm" className={styles.starLabel}>
                  {item.stars} star
                </Text>
                <Progress
                  value={item.percentage}
                  className={styles.progressBar}
                  color="yellow"
                />
                <Text size="sm" className={styles.percentageLabel}>
                  {item.percentage}%
                </Text>
              </Group>
            ))}

            <Button variant="subtle" className={styles.howRatingsCalculated}>
              How are ratings calculated?
            </Button>
          </Paper>

          {/* Review This Product Section */}
          <Paper
            mt="md"
            className={styles.reviewProductSection}
            p="md"
            radius="md"
          >
            <Text fw={600} size="sm" mb="xs">
              Review this product
            </Text>
            <Text color="dimmed" size="xs" mb="md">
              Share your thoughts with other customers
            </Text>
            <Button
              variant="outline"
              color="dark"
              radius="md"
              fullWidth
              onClick={() => setIsModalOpen(true)} // Open modal on click
            >
              Write a product review
            </Button>
          </Paper>
        </Grid.Col>

        {/* Right Section: Top Reviews */}
        <Grid.Col span={{ xs: 12, md: 7 }}>
          <Paper className={styles.topReviewsSection} p="md" radius="md">
            <Text fw={700} size="lg" mb="lg">
              Top reviews from India
            </Text>
            {reviewsData.topReviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <Text fw={600} size="sm">
                  {review.name}
                </Text>
                <Rating value={5} size="sm" readOnly mt="xs" mb="xs" />
                <Text fw={500} size="sm" mt="xs" mb="xs">
                  {review.title}
                </Text>
                <Text color="dimmed" size="xs" mb="sm">
                  Reviewed in India on {review.date}
                </Text>
                <Text size="sm" mb="xs">
                  {review.body}
                </Text>
                {/* <Group mt="xs" gap="sm">
                  <Button
                    size="xs"
                    variant="outline"
                    color="dark"
                    className={styles.helpfulButton}
                  >
                    Helpful
                  </Button>
                  <Button size="xs" variant="subtle" color="gray">
                    Report
                  </Button>
                </Group> */}
              </div>
            ))}
          </Paper>
        </Grid.Col>
      </Grid>
      {/* Invoke Independent Modal Component */}
      <ReviewModal opened={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
};

export default CustomerReviews;
