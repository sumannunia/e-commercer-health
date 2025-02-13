import React from "react";
import { Container, Group, Menu, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./SecondaryNav.module.css";
import { Link } from "react-router-dom";
// import { FaEllipsisVertical } from "react-icons/fa6";

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
  Recipes: { link: "/recipes/healthy" },
  "Gut Health Products": [
    {
      label: "Constipation , Indigestion , Loss of Apetite ",
      link: "/products/1/gastro-comfort",
    },
    { label: "Loose Motion", link: "/products/2/loose-control" },
    { label: "Acidic Reflux", link: "/products/3/soothe-gut" },
    { label: "Sleep / Stress", link: "/products/4/rest-n-calm" },
    { label: "Bloating", link: "/products/5/bloat-joy" },
  ],
  "Pre and Pro Biotic": { link: "products/pre-pro-biotic" },
};

// const ellipsisData = [
//   {
//     label: "Diagnostic Get testing",
//     link: "/diagnostic-get-testing",
//   },
//   {
//     label: "Liver Detox",
//     link: "/liver-detox",
//   },
//   {
//     label: "Individualised Diet plan",
//     link: "/dndividualised-diet-plan",
//   },
// ];
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
          {/* <Menu trigger="hover">
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
          </Menu> */}
        </Group>
      </Container>
    </div>
  );
};

export default SecondaryNav;
