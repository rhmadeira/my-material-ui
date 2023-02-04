import {
  Avatar,
  Drawer,
  Icon,
  List,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../context/DrawerContext";

interface ISideBarProps {
  children: React.ReactNode;
}

export const SideBar = ({ children }: ISideBarProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
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
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </List>
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
