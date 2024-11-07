import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App.tsx";

// core styles are required for all packages
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
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
  primaryColor: "orange",
  /** Put your mantine theme override here */
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Notifications />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
