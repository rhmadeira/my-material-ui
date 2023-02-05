import { Box, Button, TextField } from "@mui/material";

interface IToolbarProps {
  children: React.ReactNode;
}

export function BarraDeFerramentas({ children }: IToolbarProps) {
  return (
    <Box>
      <TextField />
      <Button />
    </Box>
  );
}
