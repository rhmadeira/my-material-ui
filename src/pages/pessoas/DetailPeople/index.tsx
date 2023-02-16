import { Box, Button, TextField } from "@mui/material";
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
interface IFormData {
  nomeCompleto: string;
  cidadeId: number;
  email: string;
}

export default function DetailPeople() {
  const { id = "nova" } = useParams<RouteParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, control, setValue } = useForm<IFormData>();
  const [detail, setDetail] = useState<IFormData>();

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
          setValue("nomeCompleto", response.nomeCompleto);
          setValue("email", response.email);
          setValue("cidadeId", response.cidadeId);
          // setDetail(response);
        }
      });
    }
  }, [id]);

  // useEffect(() => {
  //   if (detail) {
  //     setValue("nomeCompleto", detail.nomeCompleto);
  //     setValue("email", detail.email);
  //     setValue("cidadeId", detail.cidadeId);
  //   }
  // }, [detail]);

  function handleSave(data: IFormData) {
    setIsLoading(true);
    if (id === "nova") {
      PessoasService.create(data).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert("Registro salvo com sucesso!");
          navigate("/pessoas");
        }
      });
    } else {
      PessoasService.updateById(+id, { id: +id, ...data }).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
        }
      });
    }
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
          handleClickButtonSave={() => {}}
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
        <Box
          component="form"
          display="flex"
          gap={1}
          onSubmit={handleSubmit(handleSave)}
        >
          <InputControlled
            controller={{
              name: "nomeCompleto",
              control,
              defaultValue: nome,
            }}
            label="Nome"
            fullWidth
          />
          <InputControlled
            controller={{
              name: "email",
              control,
              defaultValue: nome,
            }}
            label="Email"
            fullWidth
          />
          <InputControlled
            controller={{
              name: "cidadeId",
              control,
              defaultValue: nome,
            }}
            label="Cidade"
            fullWidth
          />
          <Button type="submit">Enviar</Button>
        </Box>
      )}
    </LayoutBasePage>
  );
}
