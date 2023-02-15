import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";
import { Environment } from "../../environments";

interface IListingToolProps {
  textSearch?: string;
  showSearch?: boolean;
  handleTextSearch?: (text: string) => void;
  textBottom?: string;
  showBottom?: boolean;
  handleClickBottom?: () => void;
}

export function ListingTool({
  textSearch = "",
  handleTextSearch,
  showSearch = false,
  textBottom = "Novo",
  showBottom = true,
  handleClickBottom,
}: IListingToolProps) {
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
          placeholder={Environment.INPUT_DE_PESQUISA}
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
            onClick={handleClickBottom}
          >
            {textBottom}
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}
