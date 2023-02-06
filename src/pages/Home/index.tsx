import { ListingTool } from "../../shared/components/ListingTool";
import LayoutBasePage from "../../shared/layouts/LayoutBasePage";

export function Home() {
  return (
    <LayoutBasePage
      title="Página Inicial"
      toolbar={<ListingTool />}
    ></LayoutBasePage>
  );
}
