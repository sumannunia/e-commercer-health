import { useEffect } from "react";
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
import logoText from "../../../assets/logos/logo_text.png";
import logoIcon from "../../../assets/logos/logo_icon.png";
import { useDisclosure } from "@mantine/hooks";
import SecondaryNav from "./SecondaryNav";
const ellipsisData = [
  {
    label: "WEIGHT LOSS",
    link: "/products/6/shred-max",
  },
  {
    label: "Diagnostic Gut testing",
    link: "/products/1/diagnostic-gut-testing",
  },
  {
    label: "Liver Detox",
    link: "/products/7/liver-comfy",
  },
  {
    label: "Individualised Diet plan",
    link: "/products/1/individualized-diet-plan",
  },
];

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
          <Logo close={close} />
          <Group>
            {/* <Image src={logo2} width={"90px"} className={styles.logoCenter} /> */}
          </Group>

          {/* Icons Section (Aligned to the Right) */}
          <div className={styles.rightSectionMobile}>
            <RightSection close={close} />
          </div>
          <ActionIcon
            variant="default"
            onClick={open}
            className={styles.hamburger}
          >
            <RxHamburgerMenu />
          </ActionIcon>
        </Container>
        <Drawer opened={opened} onClose={close} title={<Logo close={close} />}>
          {/* Drawer content */}

          <RightSection close={close} />

          <SecondaryNav close={close} />
        </Drawer>
      </div>
      <div className={styles.secondaryNavDesktop}>
        <SecondaryNav close={close} />
      </div>
    </>
  );
};

const Logo = ({ close }: { close: any }) => {
  return (
    <div className={styles.logo}>
      <Link to={"/"} className={styles.logoLink} onClick={close}>
        <Image
          src={logoIcon}
          alt="Gutexpert Logo"
          // width={230}
          // height={80}
          className={styles.logoMain}
        />
        <Image
          src={logoText}
          alt="Gutexpert Logo"
          // width={230}
          // height={80}
          className={styles.logoMainText}
        />
      </Link>
    </div>
  );
};
const RightSection = ({ close }: { close: any }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => {
    if (state.auth.user) {
      return state?.cart?.items?.cartItems;
    }
    return state?.cart?.items;
  });
  console.log({ cartItems });

  return (
    <Group gap="md" className={styles.icons}>
      {ellipsisData.map((elepseItem: { link: string; label: string }) => (
        <Link to={elepseItem.link} className={styles.linkItem} onClick={close}>
          <Text className={styles.topLinks}>{elepseItem.label}</Text>
        </Link>
      ))}
      <UserMenu />
      <Indicator
        onClick={close}
        label={cartItems?.length}
        size={16}
        color="yellow"
        offset={5}
      >
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
