import { useState } from "react";
import { Card, Group, Badge, Text, Button, Container } from "@mantine/core";
import styles from "./SelectablePlans.module.css";
import ComboCart from "../ComboCart";

const SelectablePlans = ({
  data,
  combos = [],
}: {
  data: any[];
  combos: any[];
}) => {
  const [selectedPlan, setSelectedPlan] = useState<null | string | number>(1);

  const handleSelect = (planId: string | number) => {
    setSelectedPlan(planId);
  };

  return (
    <Container size="lg" className={styles.container} px={0}>
      <Group gap="xs" justify="center" className={styles.planGroup}>
        {data.map((plan) => (
          <Card
            key={plan.id}
            shadow="sm"
            radius="md"
            withBorder
            className={`${styles.planCard} ${
              selectedPlan === plan.id ? styles.selected : ""
            }`}
            onClick={() => handleSelect(plan.id)}
          >
            <Badge
              color="green"
              size="sm"
              variant="filled"
              className={styles.saveBadge}
            >
              Save {plan.save}
            </Badge>
            <Text fw={500} mt="md">
              {plan.duration}
            </Text>
            <Text color="dimmed" size="sm">
              {plan.sticks}
            </Text>
            <Group justify="center" mt="md" gap="xs" wrap="nowrap">
              <Text fw={700} size="lg" style={{ color: "black" }}>
                {plan.price}
              </Text>
              <Text
                size="sm"
                color="dimmed"
                style={{ textDecoration: "line-through" }}
              >
                {plan.oldPrice}
              </Text>
            </Group>

            {plan.badge && (
              <Button
                size="xs"
                radius="sm"
                className={styles.badgeButton}
                fullWidth
                mt="md"
              >
                {plan.badge}
              </Button>
            )}
          </Card>
        ))}
      </Group>
      {combos.length > 0 ? (
        <ComboCart data={combos} selectedPlan={selectedPlan} />
      ) : null}
    </Container>
  );
};

export default SelectablePlans;
