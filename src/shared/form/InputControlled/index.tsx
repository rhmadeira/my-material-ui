import { TextField, TextFieldProps } from "@mui/material";
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
  useForm,
} from "react-hook-form";

// type TInputProps = {
//   name: string;
//   control: Control<FieldValues>;
//   defaultValue?: string;
// };

type TInputProps<T extends object> = TextFieldProps & {
  controller: UseControllerProps<T>;
};

export default function InputControlled<T extends object>({
  controller,
  ...props
}: TInputProps<T>) {
  return (
    <Controller
      {...controller}
      render={({ field }) => <TextField {...props} {...field} />}
    />
  );
}
