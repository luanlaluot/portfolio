import PropTypes from "prop-types";
import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
// mock
// import account from "../../../_mock/account";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
// import Logo from "../../../components/logo";
// import NavSection from "../../../components/nav-section";
// import Scrollbar from "../../../components/scrollbar";
//
import navConfig from "./config";
import Scrollbar from "components/scrollbar/Scrollbar";
import Logo from "components/logo/Logo";
import account from "_mock/account";
import NavSection, {
  ListSubheaderStyle,
  NavListItem,
} from "components/nav-section/NavSection";
import Iconify from "components/iconify";
import { NavItem } from "components/nav-section/NavItem";
import { StyledNavItemIcon } from "components/nav-section/styles";
import { useTheme } from "@mui/system";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2, 2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }: any) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 1, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box
              sx={{ ml: 2, display: "flex", flex: 1, flexDirection: "column" }}
            >
              <Typography
                fontWeight={"bold"}
                variant="subtitle2"
                sx={{ color: "text.primary" }}
              >
                {account.displayName}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {account.role}
              </Typography>
            </Box>
            <IconButton>
              <Iconify icon="tabler:logout" />
            </IconButton>
          </StyledAccount>
        </Link>
      </Box>
      <NavSection data={navConfig} children={<Board />} />
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

const Board = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: theme.spacing(3),
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          paddingBottom: theme.spacing(1),
        }}
      >
        <BoardTitle>Board</BoardTitle>
        <IconButton>
          <Iconify icon="eva:plus-circle-outline" />
        </IconButton>
      </Box>
      {[
        {
          title: "Calendar",
          path: "/board/1234",
          icon: <Iconify icon="eva:layout-outline" />,
        },
        {
          title: "Note",
          path: "/board/abcd",
          icon: <Iconify icon="eva:layout-outline" />,
        },
      ].map((list, i) => (
        <NavListItem list={list} />
      ))}
    </>
  );
};
export const BoardTitle = styled((props: any) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }: any) => ({
  ...theme.typography.overline,
  fontWeight: "bold",

  color: theme.palette.text.primary,
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
}));
