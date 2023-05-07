// @mui
import { AppBar, Box, Button, ListItemButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// components
import DescriptionIcon from "@mui/icons-material/Description";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import navConfig from "./config";
import { CV_EN } from "file";

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...(bgBlur({ color: theme.palette.background.default }) as any),
  boxShadow: "none",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  padding: theme.spacing(2, 2),
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(2, 5),
  },
}));

const NavTitle = styled((props: any) => <ListItemButton {...props} />)<{
  active: boolean;
}>(({ theme, active }: any) => ({
  fontWeight: "bold",
  color: active ? theme.palette.primary.main : "black",
  cursor: "pointer",
  ":hover": {
    color: theme.palette.primary.main,
    backgroundColor: "#00000000",
  },
  borderBottom: active ? `1px solid ${theme.palette.primary.main}` : 0,
}));

// ----------------------------------------------------------------------

export function getActive(path?: string, pathname?: string) {
  return path ? !!matchPath({ path, end: false }, pathname || "") : false;
}
export default function Header({ onOpenNav }: any) {
  const { pathname } = useLocation();

  return (
    <StyledRoot>
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mr: 4,
          }}
        >
          {navConfig.map((nav) => {
            const active = getActive(nav.path, pathname);
            return (
              <Box
                sx={{
                  p: 2,
                }}
              >
                <NavTitle
                  disableRipple
                  active={active}
                  component={NavLink}
                  to={nav.path}
                >
                  {nav.title}
                </NavTitle>
              </Box>
            );
          })}
        </Box>

        <Button
          variant="contained"
          startIcon={<DescriptionIcon />}
          sx={{
            px: 7,
            borderRadius: "25px",
          }}
          target="_blank"
          download="CV.pdf"
          rel="noopener noreferrer"
          href={CV_EN}
        >
          Download CV
        </Button>
      </StyledToolbar>
    </StyledRoot>
  );
}
