import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListingTool } from "../../../shared/components/ListingTool";
import LayoutBasePage from "../../../shared/layouts/LayoutBasePage";

export default function CityList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);
  return (
    <LayoutBasePage
      title="Cidades"
      toolbar={
        <ListingTool
          textBottom="Nova"
          showSearch
          textSearch={busca}
          handleTextSearch={(text) =>
            setSearchParams({ busca: text }, { replace: true })
          }
        />
      }
    ></LayoutBasePage>
  );
}
