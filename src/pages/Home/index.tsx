import { ToolBar } from "../../shared/components/Toolbar";
import LayoutBasePage from "../../shared/layouts/LayoutBasePage";

export function Home() {
  return (
    <LayoutBasePage
      title="Página Inicial"
      toolbar={<ToolBar />}
    ></LayoutBasePage>
  );
}
