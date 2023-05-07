// @mui
import { alpha, styled } from "@mui/material/styles";
import { ListItemIcon, ListItemButton } from "@mui/material";

// ----------------------------------------------------------------------

export const StyledNavItem = styled((props: any) => (
  <ListItemButton disableGutters {...props} />
))(({ theme, active, subActive }: any) => {
  return {
    ...theme.typography.body2,
    height: 48,
    position: "relative",
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1.5),
    ...(active && {
      color: theme.palette.primary.main,
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
      fontWeight: "bold",
    }),
    ...(subActive && {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    }),
  };
});

export const StyledNavItemIcon = styled(ListItemIcon)(({ theme }) => ({
  height: 22,
  width: 22,
  marginRight: theme.spacing(2),
  minWidth: "auto",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
