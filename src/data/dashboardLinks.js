import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Calendar,
  Settings,
  BarChart3,
} from "lucide-react";
export const dashboardLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    desc:"Welcome Back"
  },
  {
    name: "Projects",
    path: "/dashboard/projects",
    icon: FolderKanban,
    desc:"Here are your projects"
  },
  {
    name: "Tasks",
    path: "/dashboard/tasks",
    icon: CheckSquare,
    desc:"Here are your tasks"
  },
  {
    name: "Team",
    path: "/dashboard/teams",
    icon: Users,
    desc:"Here is your team"
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: BarChart3,
    desc:"Here is your analytics"
  },
  {
    name: "Calendar",
    path: "/dashboard/calendar",
    icon: Calendar,
    desc:"Here is your calendar"
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
    desc:"Here are your settings"
  },
];
