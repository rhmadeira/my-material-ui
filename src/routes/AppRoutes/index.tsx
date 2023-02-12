import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import CityList from "../../pages/cidades/CityList";
import { Home } from "../../pages/Home";
import { useDrawerContext } from "../../shared/context/DrawerContext";
import { useAppThemeContext } from "../../shared/context/ThemeContext";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cidades" element={<CityList />} />
      {/* <Route path="/cidades/detalhes/:id" element={<CityList />} /> */}

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
