import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button, createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App.tsx";

// core styles are required for all packages
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
const theme = createTheme({
  colors: {
    orange: [
      "#fff6e3",
      "#fcecd0",
      "#f6d8a3",
      "#f1c273",
      "#ecaf4a",
      "#e9a42f",
      "#e89e20", //primary color
      "#cf8912",
      "#b87909",
      "#a06800",
    ],
  },
  fontFamily: `"Gotham", sans-seri`,

  // primaryColor: "black",
  headings: {
    fontFamily: `"Gotham", sans-seri`,
    fontWeight: "700",
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "black",
        variant: "filled",
        radius: 11,
        h: 50,
        style: {
          boxShadow: "8px 8px 0px 0px #E73C56",
        },
      },
    }),
  },
  /** Put your mantine theme override here */
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Notifications />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </StrictMode>
);
