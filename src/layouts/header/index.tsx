// @mui
import {
  AppBar,
  Box,
  Button,
  ListItemButton,
  Switch,
  Theme,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { bgBlur } from "../../utils/cssStyles";
// components
import DescriptionIcon from "@mui/icons-material/Description";
import { useAppContext } from "context/AppContext";
import { CV_EN } from "file";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import navConfig from "./config";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  padding: theme.spacing(2, 2),
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(2, 30),
  },
}));

const NavTitle = styled((props: any) => <ListItemButton {...props} />)<{
  active: boolean;
}>(({ theme, active }: { theme: Theme; active: boolean }) => ({
  fontWeight: "bold",
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
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
export default function Header() {
  const { themeMode, toggleTheme } = useAppContext();
  const { pathname } = useLocation();

  return (
    <StyledRoot>
      <StyledToolbar>
        <Box>
          <DarkModeToggle
            mode={themeMode}
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={toggleTheme}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mr: 4,
            justifyContent: "center",
            alignItems: "center",
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
          <Button
            variant="contained"
            startIcon={<DescriptionIcon />}
            sx={{
              px: 7,
              borderRadius: "25px",
              ml: 2,
            }}
            target="_blank"
            download="CV.pdf"
            rel="noopener noreferrer"
            href={CV_EN}
          >
            Download CV
          </Button>
        </Box>
        <Box>
          {/* <Switch value={themeMode === "light"} onChange={toggleTheme} /> */}
        </Box>
      </StyledToolbar>
    </StyledRoot>
  );
}
