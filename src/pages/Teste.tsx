import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import InputControlled from "../shared/form/InputControlled";

export default function Teste() {
  const { control, handleSubmit } = useForm();

  function teste(data: any) {
    console.log(data);
  }
  return (
    <Box component="form" onSubmit={handleSubmit(teste)}>
      <InputControlled name="teste" control={control} defaultValue="" />
    </Box>
  );
}
