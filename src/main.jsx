import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { BrowserRouter, } from "react-router-dom";
import { ScrollRestoration } from "react-router";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <FluentProvider theme={webLightTheme}>
        <App user={"grumpy19"} />
      </FluentProvider>
  </BrowserRouter>
);
