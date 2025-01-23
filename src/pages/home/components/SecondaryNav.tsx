import React from "react";
import { Container, Group, Menu, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./SecondaryNav.module.css";
import { Link } from "react-router-dom";
import { FaEllipsisVertical } from "react-icons/fa6";

const menuItems: any = {
  Science: [
    { label: "Diet and Gut", link: "/science/diet-and-gut" },
    { label: "Vedic and GUT", link: "/science/vedic-and-gut" },
    { label: "Clinical Gut Test", link: "/science/clinical-gut-test" },
  ],
  "Shop All": { link: "/products/all" },
  Fitness: [
    { label: "Yoga", link: "/fitness/yoga" },
    { label: "Exercise", link: "/fitness/exercise" },
  ],
  Recipes: [
    { label: "Healthy Recipes", link: "/recipes/healthy" },
    { label: "Quick Meals", link: "/recipes/quick-meals" },
  ],

  "Gut Health Products": [
    {
      label: "Constipation , Indigestion , Loss of Apetite ",
      link: "/gut-health/diet-and-gut",
    },
    { label: "Loose Motion", link: "/gut-health/loose-motion" },
    { label: "Acidic Reflux", link: "/gut-health/acidic-reflux" },
    { label: "Sleep / Stress", link: "/gut-health/sleep-stress" },
    { label: "Bloating", link: "/gut-health/bloating" },
  ],
  "Pre and Pro Biotic": { link: "products/pre-pro-biotic" },
};
const ellipsisData = [
  {
    label: "Diagnostic Get testing",
    link: "/diagnostic-get-testing",
  },
  {
    label: "Liver Detox",
    link: "/liver-detox",
  },
  {
    label: "Individualised Diet plan",
    link: "/dndividualised-diet-plan",
  },
];

const SecondaryNav: React.FC = () => {
  return (
    <div className={styles.secondaryNav}>
      <Container size="lg">
        <Group gap="xl" className={styles.navGroup} justify="center">
          {Object.keys(menuItems).map((label) =>
            Array.isArray(menuItems[label as keyof typeof menuItems]) ? (
              <Menu key={label} trigger="hover">
                <Menu.Target>
                  <div className={styles.navItem}>
                    <Text className={styles.label}>{label}</Text>
                    <IconChevronDown size={16} />
                  </div>
                </Menu.Target>
                <Menu.Dropdown>
                  {menuItems[label as keyof typeof menuItems]?.map(
                    (item: any) => (
                      <Link to={item.link} className={styles.menuLink}>
                        <Menu.Item key={item.link}>{item.label}</Menu.Item>
                      </Link>
                    )
                  )}
                </Menu.Dropdown>
              </Menu>
            ) : (
              <>
                <Link
                  className={styles.directLinks}
                  to={`${menuItems[label as keyof typeof menuItems]?.link}`}
                >
                  {label}
                </Link>
              </>
            )
          )}
          <Menu trigger="hover">
            <Menu.Target>
              <div className={styles.navItem}>
                <FaEllipsisVertical size={16} />
              </div>
            </Menu.Target>
            <Menu.Dropdown>
              {ellipsisData.map((item) => (
                <Link to={item.link} className={styles.menuLink}>
                  <Menu.Item key={item.link}>{item.label}</Menu.Item>
                </Link>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
};

export default SecondaryNav;
