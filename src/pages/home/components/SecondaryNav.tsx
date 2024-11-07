import React from "react";
import { Container, Group, Menu, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./SecondaryNav.module.css";

const menuItems = {
  Cureveda: ["About Us", "Our Story", "Blog"],
  Shop: ["All Products", "Best Sellers", "New Arrivals"],
  Category: ["Supplements", "Ayurvedic", "Personal Care"],
  "Health Combos": ["Combo 1", "Combo 2", "Combo 3"],
  Offer: ["Discounts", "Clearance Sale", "Coupons"],
};

const SecondaryNav: React.FC = () => {
  return (
    <div className={styles.secondaryNav}>
      <Container size="lg">
        <Group gap="xl" className={styles.navGroup} justify="center">
          {Object.keys(menuItems).map((label) => (
            <Menu key={label} trigger="hover">
              <Menu.Target>
                <div className={styles.navItem}>
                  <Text className={styles.label}>{label}</Text>
                  <IconChevronDown size={16} />
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                {menuItems[label as keyof typeof menuItems].map((item) => (
                  <Menu.Item key={item}>{item}</Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          ))}
        </Group>
      </Container>
    </div>
  );
};

export default SecondaryNav;
