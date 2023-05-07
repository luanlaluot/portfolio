import { ListItemText } from "@mui/material";
import Iconify from "components/iconify";
import { NavLink as RouterLink } from "react-router-dom";
import { StyledNavItem, StyledNavItemIcon } from "./styles";

export function NavItem({
  item,
  isCollapse,
  open = false,
  active,
  onOpen,
}: any) {
  const { title, path, icon, info, children } = item;
  const renderContent = (
    <>
      {icon && <StyledNavItemIcon>{icon}</StyledNavItemIcon>}
      <ListItemText disableTypography primary={title} />
      {!isCollapse && (
        <>
          {info && info}
          {children && <ArrowIcon open={open} />}
        </>
      )}
    </>
  );

  if (children) {
    return (
      <StyledNavItem active={active} onClick={onOpen}>
        {renderContent}
      </StyledNavItem>
    );
  }

  return (
    <StyledNavItem active={active} component={RouterLink} to={path}>
      {renderContent}
    </StyledNavItem>
  );
}

export function ArrowIcon({ open }: { open: boolean }) {
  return (
    <Iconify
      icon={open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"}
      sx={{ width: 16, height: 16, ml: 0 }}
    />
  );
}
