import { Combine, Home, Projector, Timer, User } from "lucide-react";

export const NAV = [
  {
    id: 0,
    name: "Home",
    to: "/",
    icon: <Home className="inline-block mb-1 h-5 w-5" />,
    show: true,
  },
  {
    id: 1,
    name: "Skill",
    to: "/skill",
    icon: <Combine className="inline-block mb-1 h-5 w-5" />,
    show: true,
  },
  {
    id: 2,
    name: "Project",
    to: "/project",
    icon: <Projector className="inline-block mb-1 h-5 w-5" />,
    show: true,
  },
  {
    id: 3,
    name: "Profile",
    to: "/profile",
    icon: <User className="inline-block mb-1 h-5 w-5" />,
    show: true,
  },
];
