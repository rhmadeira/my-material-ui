import { useEffect, useMemo, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { ListingTool } from "../../../shared/components/ListingTool";
import useDebounce from "../../../shared/hooks/useDebounce";
import LayoutBasePage from "../../../shared/layouts/LayoutBasePage";
import { PessoasService } from "../../../shared/services/api/pessoas";

interface IPeopleListing {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

export default function PeopleListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rows, setRows] = useState<IPeopleListing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { debounce } = useDebounce();

  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      PessoasService.getAll(1, busca).then((response) => {
        setIsLoading(false);
        if (response instanceof Error) {
          alert(response.message);
        } else {
          console.log(response);
          setRows(response.data);
          setTotalCount(response.totalCount);
        }
      });
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
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome Completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>Ações</TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBasePage>
  );
}
