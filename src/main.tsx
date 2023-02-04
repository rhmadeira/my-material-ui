import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DrawerProvider } from "./shared/context/DrawerContext";
import { AppThemeProvider } from "./shared/context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
