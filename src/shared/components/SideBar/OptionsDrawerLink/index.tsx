import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IOptionsDrawerProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  onClick?: () => void | undefined;
}

export function OptionsDrawerLink({
  to,
  icon,
  label,
  onClick,
}: IOptionsDrawerProps) {
  const navigate = useNavigate();

  const resolverPath = useResolvedPath(to);
  const match = useMatch({ path: resolverPath.pathname, end: false });

  const handleClick = () => {
    onClick?.();
    navigate(to);
  };
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
