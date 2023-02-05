import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import { useDrawerContext } from "../../context/DrawerContext";

interface LayoutBasePageProps {
  title: string;
  children: React.ReactNode;
  toolbar?: React.ReactNode;
}

export default function LayoutBasePage({
  children,
  title,
  toolbar,
}: LayoutBasePageProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={
          smDown
            ? theme.spacing(12)
            : mdDown
            ? theme.spacing(10)
            : theme.spacing(8)
        }
        display="flex"
        alignItems="center"
        gap={1}
      >
        {smDown ? (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        ) : null}

        <Typography
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
      </Box>
      <Box>{toolbar}</Box>
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
}
