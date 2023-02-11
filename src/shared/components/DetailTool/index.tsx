import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IDetailToolProps {
  textButtonSave?: "Novo" | "Nova";
  showButtonAdd?: boolean;
  showButtonDelete?: boolean;
  showButtonBack?: boolean;
  showButtonSave?: boolean;
  showButtonSaveAndBack?: boolean;

  loadingButtonAdd?: boolean;
  loadingButtonDelete?: boolean;
  loadingButtonBack?: boolean;
  loadingButtonSave?: boolean;
  loadingButtonSaveAndBack?: boolean;

  handleClickButtonAdd?: () => void;
  handleClickButtonDelete?: () => void;
  handleClickButtonBack?: () => void;
  handleClickButtonSave?: () => void;
  handleClickButtonSaveAndBack?: () => void;
}

export function DetailTool({
  textButtonSave = "Novo",

  showButtonAdd = true,
  showButtonBack = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveAndBack = true,

  loadingButtonAdd = false,
  loadingButtonDelete = false,
  loadingButtonBack = false,
  loadingButtonSave = false,
  loadingButtonSaveAndBack = false,

  handleClickButtonSave,
  handleClickButtonAdd,
  handleClickButtonSaveAndBack,
  handleClickButtonBack,
  handleClickButtonDelete,
}: IDetailToolProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
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
      {" "}
      {showButtonSave && !loadingButtonSave && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={handleClickButtonSave}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}
      {loadingButtonSave && <Skeleton width={110} height={60} />}
      {showButtonAdd && !loadingButtonAdd && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={handleClickButtonAdd}
        >
          {textButtonSave}
        </Button>
      )}
      {loadingButtonAdd && <Skeleton width={110} height={60} />}
      {showButtonSaveAndBack &&
        !loadingButtonSaveAndBack &&
        !smDown &&
        !mdDown && (
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<Icon>add</Icon>}
            onClick={handleClickButtonSaveAndBack}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e voltar
            </Typography>
          </Button>
        )}
      {loadingButtonSaveAndBack && <Skeleton width={110} height={60} />}
      {showButtonDelete && !loadingButtonDelete && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={handleClickButtonDelete}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}
      {loadingButtonDelete && <Skeleton width={110} height={60} />}
      <Divider variant="middle" orientation="vertical" />
      {showButtonBack && !loadingButtonBack && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={handleClickButtonBack}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
        </Button>
      )}
      {loadingButtonBack && <Skeleton width={110} height={60} />}
    </Box>
  );
}
