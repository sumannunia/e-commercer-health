import {
  Container,
  Grid,
  Text,
  Image,
  Paper,
  Group,
  Title,
} from "@mantine/core";
import styles from "./Certification.module.css";
import gmp from "../../../assets/certifications/GMP_BW.webp";
import fda from "../../../assets/certifications/FDA_BW.avif";
import sugar from "../../../assets/certifications/No_Added_Sugar.webp";
import fssc from "../../../assets/certifications/FSSC_22000_BW.webp";
import fssai from "../../../assets/certifications/FSSAI.webp";
import clinicallyTested from "../../../assets/certifications/Clinically_Tested_Ingredients.webp";
import crueltyFree from "../../../assets/certifications/Cruelty_Free.webp";
import haccp from "../../../assets/certifications/HACCP_BW.webp";

const certifications = [
  { id: 1, image: gmp, name: "GMP Certified" },
  { id: 2, image: haccp, name: "HACCP Certified" },
  {
    id: 3,
    image: sugar,
    name: "No Added Sugar",
  },
  { id: 4, image: fda, name: "FDA Registered" },
  { id: 5, image: fssc, name: "FSSC 22000" },
  {
    id: 6,
    image: clinicallyTested,
    name: "Clinically Tested",
  },
  {
    id: 7,
    image: crueltyFree,
    name: "Cruelty Free",
  },
  { id: 8, image: fssai, name: "FSSAI Certified" },
];

const CertificationBlock = () => {
  return (
    <Paper className={styles.certificationSection} radius={0} p="md">
      <Container size="lg">
        {/* Top Text Section */}
        <Group justify="center" className={styles.statsGroup} mt="md" mb="lg">
          <div className={styles.statItem}>
            <Title fw={700}>No. 1</Title>
            <Text size="sm" color="dimmed">
              Nutritionist Recommended Brand
            </Text>
          </div>

          <div className={styles.statItem}>
            <Title fw={600}>5,00,000</Title>
            <Text size="sm" color="dimmed">
              Sticks Consumed
            </Text>
          </div>

          <div className={styles.statItem}>
            <Title fw={600}>Clinically</Title>
            <Text size="sm" color="dimmed">
              Proven Strains
            </Text>
          </div>

          <div className={styles.statItem}>
            <Title fw={600}>US FDA</Title>
            <Text size="sm" color="dimmed">
              Licensed
            </Text>
          </div>
        </Group>

        {/* Icons Section */}
        <Grid
          className={styles.certificationsGrid}
          gutter="xl"
          justify="center"
        >
          {certifications.map((cert) => (
            <Grid.Col
              span={{ xs: 6, sm: 3, md: 2, xl: 2 }}
              key={cert.id}
              className={styles.certItem}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={60}
                  height={60}
                  fit="contain"
                />
              </div>
              <Text size="xs" mt="xs" fw={500}>
                {cert.name}
              </Text>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default CertificationBlock;
