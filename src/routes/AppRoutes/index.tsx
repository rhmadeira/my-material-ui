import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { useDrawerContext } from "../../shared/context/DrawerContext";
import { useAppThemeContext } from "../../shared/context/ThemeContext";
import PeopleListing from "../../pages/pessoas/PeopleListing";
import DetailPeople from "../../pages/pessoas/DetailPeople";
import CityListing from "../../pages/cidades/CityListing";
import DetailCity from "../../pages/cidades/DetailCity";

export const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pessoas" element={<PeopleListing />} />
      <Route path="/pessoas/detalhes/:id" element={<DetailPeople />} />
      <Route path="/cidades" element={<CityListing />} />
      <Route path="/cidades/detalhes/:id" element={<DetailCity />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
