import { useEffect, useState } from "react";
import {
  Container,
  Image,
  Indicator,
  Group,
  ActionIcon,
  Menu,
  rem,
  Button,
  Divider,
  Text,
  Title,
  Drawer,
} from "@mantine/core";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  IconUser,
  // IconSearch,
  IconShoppingCart,
  IconMessageCircleUser,
} from "@tabler/icons-react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { fetchCart } from "../../../redux/slices/cartSlice";

import { MdLogout } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import logo from "../../../assets/logo.png";
import { useDisclosure } from "@mantine/hooks";
import SecondaryNav from "./SecondaryNav";

const Header = () => {
  const dispatch = useAppDispatch();
  const [opened, { open, close }] = useDisclosure(false);

  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate("/"); // Redirect to login page after logout
  // };
  useEffect(() => {
    dispatch(fetchCart()); // Fetch cart items on component mount
  }, [dispatch]);

  return (
    <>
      <div className={styles.header}>
        <Container px="md" size={"xl"} className={styles.container}>
          {/* Empty Group to push logo to center */}
          {/* <Group className={styles.spacer} /> */}

          {/* Centered Logo Section */}
          <Logo />
          <Title></Title>

          {/* Icons Section (Aligned to the Right) */}
          <div className={styles.rightSectionMobile}>
            <RightSection />
          </div>
          <ActionIcon
            variant="default"
            onClick={open}
            className={styles.hamburger}
          >
            <RxHamburgerMenu />
          </ActionIcon>
        </Container>
        <Drawer opened={opened} onClose={close} title={<Logo />}>
          {/* Drawer content */}

          <RightSection />

          <SecondaryNav />
        </Drawer>
      </div>
      <div className={styles.secondaryNavDesktop}>
        <SecondaryNav />
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <Image
          src={logo}
          // src="https://www.cureveda.com/cdn/shop/files/logo_fea5eacc-99d3-464f-b814-8af6b2aac4a8.png?v=1705557999&width=250"
          alt="Cureveda Logo"
          width={230}
          height={80}
        />
      </Link>
    </div>
  );
};
const RightSection = () => {
  const [cartItemsCount] = useState(0); // Example count state
  const navigate = useNavigate();
  return (
    <Group gap="md" className={styles.icons}>
      <UserMenu />
      {/* <ActionIcon variant="transparent" size="lg">
            <IconSearch size={24} stroke={1.5} />
          </ActionIcon> */}
      <Indicator label={cartItemsCount} size={16} color="yellow" offset={5}>
        <ActionIcon
          variant="transparent"
          size="lg"
          onClick={() => navigate("/cart")}
        >
          <IconShoppingCart size={24} stroke={1.5} />
        </ActionIcon>
      </Indicator>
    </Group>
  );
};
export function UserMenu() {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state?.auth.user);

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirect to login page after logout
  };
  useEffect(() => {
    dispatch(fetchCart()); // Fetch cart items on component mount
  }, [dispatch]);
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="subtle">
          {/* <FaUser size={20} className="header-icon" /> */}
          <IconUser size={24} stroke={1.5} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {user ? (
          <Menu.Item
            disabled
            leftSection={
              <IconMessageCircleUser
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            User
          </Menu.Item>
        ) : (
          <Menu.Item
            leftSection={
              <CiLogin style={{ width: rem(14), height: rem(14) }} />
            }
          >
            <Link to={"/login"}>
              <Button>Login</Button>
            </Link>
          </Menu.Item>
        )}

        {user ? (
          <>
            <Divider />
            <Menu.Item>
              <Link to={"/orders"}>
                <Text> My Orders</Text>
              </Link>
            </Menu.Item>
            <Menu.Item
              onClick={handleLogout}
              leftSection={
                <MdLogout style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Logout
            </Menu.Item>
          </>
        ) : null}

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}

export default Header;
