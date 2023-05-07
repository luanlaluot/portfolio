// component
import Iconify from "components/iconify";

// ----------------------------------------------------------------------

const icon = (name: string) => <Iconify icon={`eva:${name}`} />; //Base icon : Tabler

type TNavSubChildrenItem = {
  title?: string;
  path?: string;
  level: 1 | 2 | 3;
  children?: TNavSubChildrenItem[];
};
type TNavSubItem = {
  title: string;
  path: string;
  level: 1 | 2 | 3;
  info?: string;
  icon?: JSX.Element | any;
  children?: TNavSubChildrenItem[];
};

export type TNavItem = {
  id: string;
  title: string;
  path: string;
  subMenu?: TNavSubItem[];
};
const navConfig: TNavItem[] = [
  {
    id: "general-nav-section",
    title: "General",
    path: "/general",
    subMenu: [
      {
        icon: icon("calendar-fill"),
        title: "Calendar",
        path: "/general/calendar",
        level: 1,
      },
      {
        icon: icon("book-fill"),
        title: "Note",
        path: "/general/note",
        level: 1,
      },
    ],
  },
];

export default navConfig;
