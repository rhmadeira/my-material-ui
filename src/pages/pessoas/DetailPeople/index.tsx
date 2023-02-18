import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { DetailTool } from "../../../shared/components/DetailTool";
import InputControlled from "../../../shared/form/InputControlled";
import LayoutBasePage from "../../../shared/layouts/LayoutBasePage";
import { PessoasService } from "../../../shared/services/api/pessoas";
import * as yup from "yup";

type RouteParams = {
  id: string;
};

const formValidateSchema = yup.object().shape({
  nomeCompleto: yup.string().required("Nome é obrigatório"),
  cidadeId: yup.number().required("Cidade é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
});

type IFormData = yup.InferType<typeof formValidateSchema>;

// interface IFormData {
//   nomeCompleto: string;
//   cidadeId: number;
//   email: string;
// }

export default function DetailPeople() {
  const { id = "nova" } = useParams<RouteParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, control, setValue, reset } = useForm<IFormData>();
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
    } else {
      setValue("nomeCompleto", "");
      setValue("email", "");
      setValue("cidadeId", 0);
    }
  }, [id]);

  function handleSave(data: IFormData) {
    formValidateSchema
      .validate(data, { abortEarly: false })
      .then((dataValidate) => {
        setIsLoading(true);
        if (id === "nova") {
          PessoasService.create(dataValidate).then((result) => {
            setIsLoading(false);
            if (result instanceof Error) {
              alert(result.message);
            } else {
              alert("Registro salvo com sucesso!");
              // navigate(`/pessoas/detalhes/${result}`);
              navigate("/pessoas/detalhes/nova");
            }
          });
        } else {
          PessoasService.updateById(+id, { id: +id, ...dataValidate }).then(
            (result) => {
              setIsLoading(false);
              if (result instanceof Error) {
                alert(result.message);
              }
            }
          );
        }
      })
      .catch((err: yup.ValidationError) => {
        const ValidateErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (!error.path) return;
          ValidateErrors[error.path] = error.message;
        });
      });
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
        <Box component="form" onSubmit={handleSubmit(handleSave)}>
          <Box
            display="flex"
            flexDirection="column"
            margin={1}
            component={Paper}
            variant="outlined"
          >
            <Grid container padding={2} spacing={2}>
              {isLoading && (
                <Grid item>
                  <LinearProgress variant="indeterminate" />
                </Grid>
              )}
              <Grid item>
                <Typography variant="h6">Dados Pessoais</Typography>
              </Grid>
              <Grid container item direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                  <InputControlled
                    controller={{
                      name: "nomeCompleto",
                      control,
                      defaultValue: nome,
                    }}
                    label="Nome"
                    size="small"
                    fullWidth
                    {...(id === "nova" && { autoFocus: true })}
                    disabled={isLoading}
                  />
                </Grid>
              </Grid>
              <Grid container item direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                  <InputControlled
                    controller={{
                      name: "email",
                      control,
                      defaultValue: nome,
                    }}
                    label="Email"
                    size="small"
                    fullWidth
                    disabled={isLoading}
                  />
                </Grid>
              </Grid>
              <Grid container item direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                  {" "}
                  <InputControlled
                    controller={{
                      name: "cidadeId",
                      control,
                      defaultValue: nome,
                    }}
                    label="Cidade"
                    size="small"
                    fullWidth
                    disabled={isLoading}
                  />
                </Grid>
              </Grid>

              <Button size="small" type="submit">
                Salvar
              </Button>
            </Grid>
          </Box>
        </Box>
      )}
    </LayoutBasePage>
  );
}
