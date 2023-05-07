import {
  matchPath,
  useLocation,
  NavLink as RouterLink,
} from "react-router-dom";
// @mui
import {
  Box,
  Collapse,
  List,
  ListSubheader,
  styled,
  Typography,
} from "@mui/material";
//
import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { NavItem } from "./NavItem";
import { StyledNavItem } from "./styles";
import { NavSubItem } from "./NavSubItem";
import { TNavItem } from "layouts/sidebar/nav/config";

// ----------------------------------------------------------------------

type TNavSectionProps = {
  data: TNavItem[];
  children?: React.ReactNode;
};

export const ListSubheaderStyle = styled((props: any) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }: any) => ({
  ...theme.typography.overline,
  fontWeight: "bold",
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
}));

export default function NavSection(props: TNavSectionProps) {
  const { data, children, ...other } = props;
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        <>
          {data.map((item, i) => (
            <Fragment key={"nav-section-item" + i.toString()}>
              <ListSubheaderStyle>{item.title}</ListSubheaderStyle>
              {item.subMenu?.map((list, i) => (
                <NavListItem key={list.title + i} list={list} item={item} />
              ))}
            </Fragment>
          ))}
          {children}
        </>
      </List>
    </Box>
  );
}

export function getActive(path?: string, pathname?: string) {
  return path ? !!matchPath({ path, end: false }, pathname || "") : false;
}
export function NavListItem({ list }: any) {
  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <Fragment>
        <NavItem
          item={list}
          open={open}
          onOpen={() => setOpen(!open)}
          active={active}
        />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(list.children || []).map((item: any, i: number) => (
              <NavListSub key={item.title + i} list={item} active={active} />
            ))}
          </List>
        </Collapse>
      </Fragment>
    );
  }

  return <NavItem active={active} item={list} />;
}

function NavListSub({ list }: any) {
  const { pathname } = useLocation();

  const active = getActive(list?.path, pathname);

  const [open, setOpen] = useState(active);

  const hasChildren = list?.children;

  if (hasChildren) {
    return (
      <Fragment>
        <NavSubItem
          item={list}
          active={active}
          onOpen={() => setOpen(!open)}
          open={open}
        />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(list.children || []).map((item: any, i: number) => (
              <NavListSub key={item.title + i} list={item} active={active} />
            ))}
          </List>
        </Collapse>
      </Fragment>
    );
  }

  return <NavSubItem item={list} active={active} />;
}
