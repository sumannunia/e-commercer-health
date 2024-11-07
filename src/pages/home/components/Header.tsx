import { useState } from "react";
import { Container, Image, Indicator, Group, ActionIcon } from "@mantine/core";
import { IconUser, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartItemsCount] = useState(0); // Example count state

  return (
    <div className={styles.header}>
      <Container px="md" className={styles.container}>
        {/* Empty Group to push logo to center */}
        <Group className={styles.spacer} />

        {/* Centered Logo Section */}
        <div className={styles.logo}>
          <Link to={"/"}>
            <Image
              src="https://www.cureveda.com/cdn/shop/files/logo_fea5eacc-99d3-464f-b814-8af6b2aac4a8.png?v=1705557999&width=250"
              alt="Cureveda Logo"
              width={230}
              height={58}
            />
          </Link>
        </div>

        {/* Icons Section (Aligned to the Right) */}
        <Group gap="md" className={styles.icons}>
          <ActionIcon variant="transparent" size="lg">
            <IconUser size={24} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <IconSearch size={24} stroke={1.5} />
          </ActionIcon>
          <Indicator label={cartItemsCount} size={16} color="yellow" offset={5}>
            <ActionIcon variant="transparent" size="lg">
              <IconShoppingCart size={24} stroke={1.5} />
            </ActionIcon>
          </Indicator>
        </Group>
      </Container>
    </div>
  );
};

export default Header;
