import { Box } from "@mui/material";
import { useAuthContext } from "../../hooks/AuthContext";

interface ILoginProps {
  children: React.ReactNode;
}

export default function Login({ children }: ILoginProps) {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Box>LOGIN</Box>;
}
