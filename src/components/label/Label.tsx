import { forwardRef, PropsWithChildren, ReactNode } from "react";
// @mui
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
//
import { StyledLabel } from "./styles";

// ----------------------------------------------------------------------

type TLabelProps = {
  color:
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  variant: "filled" | "outlined" | "ghost" | "soft";
  startIcon: ReactNode;
  endIcon: ReactNode;
  sx: {};
} & PropsWithChildren;

const Label = forwardRef((props: TLabelProps, ref) => {
  const {
    children,
    color = "default",
    variant = "soft",
    startIcon,
    endIcon,
    sx,
    ...other
  } = props;
  const theme = useTheme();

  const iconStyle = {
    width: 16,
    height: 16,
    "& svg, img": { width: 1, height: 1, objectFit: "cover" },
  };

  return (
    <StyledLabel
      ref={ref}
      component="span"
      // ownerState={{ color, variant }}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
      theme={theme}
      {...other}
    >
      {startIcon && <Box sx={{ mr: 0.75, ...iconStyle }}> {startIcon} </Box>}

      {children}

      {endIcon && <Box sx={{ ml: 0.75, ...iconStyle }}> {endIcon} </Box>}
    </StyledLabel>
  );
});

export default Label;
