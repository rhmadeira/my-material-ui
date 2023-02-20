import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./shared/components/Login";
import { DrawerProvider } from "./shared/context/DrawerContext";
import { AppThemeProvider } from "./shared/context/ThemeContext";
import { AuthProvider } from "./shared/hooks/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AppThemeProvider>
        <DrawerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DrawerProvider>
      </AppThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
