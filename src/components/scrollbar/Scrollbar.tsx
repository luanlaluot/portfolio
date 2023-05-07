import { memo, PropsWithChildren } from "react";
// @mui
import { Box } from "@mui/material";
//
import { StyledRootScrollbar, StyledScrollbar } from "./styles";

// ----------------------------------------------------------------------

type TScrollBarProps = {
  sx?: {};
} & PropsWithChildren;

function Scrollbar({ children, sx, ...other }: TScrollBarProps) {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        timeout={500}
        style={{ maxHeight: "calc(100vh - 112px)" }}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
}

export default memo(Scrollbar);
