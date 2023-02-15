import { Box, TextField } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { DetailTool } from "../../../shared/components/DetailTool";
import InputControlled from "../../../shared/form/InputControlled";
import LayoutBasePage from "../../../shared/layouts/LayoutBasePage";
import { PessoasService } from "../../../shared/services/api/pessoas";

type RouteParams = {
  id: string;
};
interface FormData {
  id: number;
  nomeCompleto: string;
  cidadeId: number;
  email: string;
}

export default function DetailPeople() {
  const { id = "nova" } = useParams<RouteParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);
      PessoasService.getById(+id).then((response) => {
        setIsLoading(false);
        if (response instanceof Error) {
          alert("Erro ao buscar pessoa");
          navigate("/pessoas");
        } else {
          setNome(response.nomeCompleto);
          console.log(response);
        }
      });
    }
  }, [id]);

  function handleSave(data: FormData) {
    alert("Salvando");
    // console.log(data);
  }

  function handleDelete(id: number) {
    if (confirm("Realmente deseja apagar?")) {
      PessoasService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert("Registro apagado com sucesso!");
          navigate("/pessoas");
        }
      });
    }
  }

  return (
    <LayoutBasePage
      title={id === "nova" ? "Nova Pessoa" : nome}
      toolbar={
        <DetailTool
          textButtonSave="Nova"
          showButtonSave
          showButtonAdd={id !== "nova"}
          showButtonBack
          showButtonDelete={id !== "nova"}
          showButtonSaveAndBack
          // handleClickButtonSaveAndBack={handleSave}
          handleClickButtonDelete={() => handleDelete(+id)}
          handleClickButtonSave={handleSave}
          handleClickButtonAdd={() => {
            navigate("/pessoas/detalhes/nova");
          }}
          handleClickButtonBack={() => {
            navigate("/pessoas");
          }}
        />
      }
    >
      {isLoading ? (
        <LinearProgress variant="indeterminate" />
      ) : (
        <Box component="form" onSubmit={handleSubmit(handleSave)}>
          <InputControlled
            controller={{
              name: "nomeCompleto",
              control,
              defaultValue: nome,
            }}
            label="Nome"
            fullWidth
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </Box>
      )}
    </LayoutBasePage>
  );
}
