import {
  Avatar,
  Drawer,
  List,
  Switch,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../context/DrawerContext";
import { useAppThemeContext } from "../../context/ThemeContext";
import { OptionsDrawerLink } from "./OptionsDrawerLink";

interface ISideBarProps {
  children: React.ReactNode;
}

export const SideBar = ({ children }: ISideBarProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <Drawer
        onClose={toggleDrawerOpen}
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              alt="Avatar"
              src="https://images.freeimages.com/vhq/images/previews/248/vintage-logo-mockup-psd-397079.jpg"
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <OptionsDrawerLink
                icon="home"
                label="Página Inicial"
                to="/home"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            </List>
          </Box>
          <Box>
            <Switch onChange={() => toggleTheme()} />
          </Box>
        </Box>
      </Drawer>
      <Box
        height="100vh"
        marginLeft={smDown ? theme.spacing(0) : theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  );
};
