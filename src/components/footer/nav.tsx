import { Combine, Home, Projector, Timer, User } from "lucide-react";

export const FOOTER_NAV = [
  {
    id: 0,
    name: "Project",
    to: "/project",
    icon: <Projector className="inline-block mb-1 h-5 w-5" />,
    show: true,
  },
  {
    id: 1,
    name: "Profile",
    to: "/profile",
    icon: <User className="inline-block mb-1 h-5 w-5" />,
    show: true,
  },
];
