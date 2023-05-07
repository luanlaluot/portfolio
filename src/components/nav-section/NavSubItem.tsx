import { Box, ListItemText } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

import Iconify from "components/iconify";
import { StyledNavItem, StyledNavItemIcon } from "./styles";

export function isExternalLink(path: string) {
  return path.includes("http");
}

export function NavSubItem({
  item,
  open = false,
  active = false,
  onOpen,
}: any) {
  const { title, path, info, children } = item;

  const renderContent = (
    <>
      <DotIcon active={active} />
      <ListItemText disableTypography primary={title} />
      {info && info}
      {children && <ArrowIcon open={open} />}
    </>
  );

  if (children) {
    return (
      <StyledNavItem subActive={active} onClick={onOpen}>
        {renderContent}
      </StyledNavItem>
    );
  }

  return isExternalLink(path) ? (
    <StyledNavItem href={path}>{renderContent}</StyledNavItem>
  ) : (
    <StyledNavItem subActive={active} component={RouterLink} to={path}>
      {renderContent}
    </StyledNavItem>
  );
}

export function DotIcon({ active }: { active: boolean }) {
  return (
    <StyledNavItemIcon>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "text.disabled",
          transition: (theme) =>
            theme.transitions.create("transform", {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: "scale(2)",
            bgcolor: "primary.main",
          }),
        }}
      />
    </StyledNavItemIcon>
  );
}

export function ArrowIcon({ open }: { open: boolean }) {
  return (
    <Iconify
      icon={open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"}
      sx={{ width: 16, height: 16, ml: 1 }}
    />
  );
}
