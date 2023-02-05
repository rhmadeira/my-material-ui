import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { useDrawerContext } from "../../shared/context/DrawerContext";
import { useAppThemeContext } from "../../shared/context/ThemeContext";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
