import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { useDrawerContext } from "../../shared/context/DrawerContext";
import { useAppThemeContext } from "../../shared/context/ThemeContext";
import PeopleListing from "../../pages/pessoas/PeopleListing";
import DetailPeople from "../../pages/pessoas/DetailPeople";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/pessoas" element={<PeopleListing />} />
      <Route path="/pessoas/detalhes/:id" element={<DetailPeople />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
