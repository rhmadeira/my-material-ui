import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListingTool } from "../../../shared/components/ListingTool";
import { useDebounce } from "../../../shared/hooks/useDebounce";
import LayoutBasePage from "../../../shared/layouts/LayoutBasePage";
import { PessoasService } from "../../../shared/services/api/pessoas";

export default function PeopleListing() {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    PessoasService.getAll(1, busca).then((response) => {
      if (response instanceof Error) {
        alert(response.message);
      } else {
        console.log(response);
      }
    });
  }, [busca]);
  return (
    <LayoutBasePage
      title="Listagem de Pessoas"
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
