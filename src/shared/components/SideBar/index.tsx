import { Drawer, useTheme } from "@mui/material";
import { Box } from "@mui/system";

interface ISideBarProps {
  children: React.ReactNode;
}

export const SideBar = ({ children }: ISideBarProps) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent">Teste</Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
