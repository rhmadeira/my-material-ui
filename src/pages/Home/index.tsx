import { DetailTool } from "../../shared/components/DetailTool";
import { ListingTool } from "../../shared/components/ListingTool";
import LayoutBasePage from "../../shared/layouts/LayoutBasePage";

export function Home() {
  return (
    <LayoutBasePage
      title="Página Inicial"
      toolbar={<DetailTool showButtonAdd showButtonBack />}
    ></LayoutBasePage>
  );
}
