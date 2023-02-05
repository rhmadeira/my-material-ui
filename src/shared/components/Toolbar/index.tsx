import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";

interface IToolbarProps {
  textSearch?: string;
  showSearch?: boolean;
  handleTextSearch?: (text: string) => void;
  textBottom?: string;
  showBottom?: boolean;
  handleClickBottom?: () => void;
}

export function ToolBar({
  textSearch = "",
  handleTextSearch,
  showSearch = false,
  textBottom = "Novo",
  showBottom = true,
  handleClickBottom,
}: IToolbarProps) {
  const theme = useTheme();
  return (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      height={theme.spacing(5)}
    >
      {showSearch ? (
        <TextField
          size="small"
          placeholder="Pesquisar"
          value={textSearch}
          onChange={(e) => handleTextSearch?.(e.target.value)}
        />
      ) : null}
      <Box display="flex" flex={1} justifyContent="end">
        {showBottom ? (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<Icon>add</Icon>}
          >
            {textBottom}
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}
