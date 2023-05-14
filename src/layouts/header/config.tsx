// component
import Iconify from "components/iconify";

// ----------------------------------------------------------------------

const icon = (name: string) => <Iconify icon={`eva:${name}`} />; //Base icon : Tabler

type TNavSubItem = {
  title: string;
  path: string;
  info?: string;
  icon?: JSX.Element | any;
};

export type TNavItem = {
  id: string;
  title: string;
  path: string;
  subMenu?: TNavSubItem[];
};
const navConfig: TNavItem[] = [
  {
    id: "home-section",
    title: "Home",
    path: "/home",
  },
  {
    id: "about-section",
    title: "About me",
    path: "/about-me",
  },
  {
    id: "timeline-section",
    title: "Timeline",
    path: "/timeline",
  },
  {
    id: "project-section",
    title: "Project",
    path: "/project",
  },
];

export default navConfig;
