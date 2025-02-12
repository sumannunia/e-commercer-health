import { Container, Grid, Title, Text, Button, Group } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./AboutUs.module.css"; // Custom CSS for responsiveness

const AboutUs = () => {
  return (
    <section className={styles.aboutSectionWrapper}>
      <Container size="lg" className={styles.aboutUs}>
        <Grid gutter="xl" align="center">
          {/* Left Section - Title & Button */}
          <Grid.Col span={{ sm: 12, md: 5 }}>
            <Title order={2} className={styles.title}>
              A Brief <br />
              <span className={styles.highlight}>Introduction</span> To <br />
              Who We Are
            </Title>
            <Button
              size="md"
              className={styles.aboutButton}
              rightSection={<IconArrowRight size={16} />}
            >
              About Us
            </Button>
          </Grid.Col>

          {/* Right Section - Text & Stats */}
          <Grid.Col span={{ sm: 12, md: 7 }} className={styles.content}>
            <Text className={styles.description}>
              Poor gut health may manifest as fatigue, upset stomach, Bloating ,
              Indigestion , Acidity , constipation , Weight Gain , skin
              conditions, and autoimmune challenges.
            </Text>
            <Text className={styles.description} mt={"xs"}>
              Solution is not simple. Solution is not just a Probiotic or an
              Antibiotic. Solution is a mix of Diet, calorie counting, exercise,
              natural Gut health supplements and expert advise.
            </Text>
            <Text className={styles.description} mt={"xs"}>
              We will handhold you through this scientific process of Happy Gut
              and Wellness.
            </Text>
            <Group gap="xl" mt="md">
              <div>
                <Title className={styles.statNumber}>120k</Title>
                <Text className={styles.statLabel}>Happy Customer</Text>
              </div>
              <div>
                <Title className={styles.statNumber}>90+</Title>
                <Text className={styles.statLabel}>Products</Text>
              </div>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUs;
