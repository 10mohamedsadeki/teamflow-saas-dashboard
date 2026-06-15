import { useUser } from "@clerk/react";
import { FolderKanban, CheckSquare, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const projects = JSON.parse(localStorage.getItem("projects")) || [];

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const teams = JSON.parse(localStorage.getItem("teams")) || [];

const completedTasks = tasks.filter(
  (task) => task.status === "Completed",
).length;

const productivity =
  tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

const statsData = [
  {
    title: "Total Projects",
    value: projects.length,
    trend: `${projects.length} projects`,
    icon: FolderKanban,
    url:"projects"
  },
  {
    title: "Completed Tasks",
    value: completedTasks,
    trend: `${tasks.length} total tasks`,
    icon: CheckSquare,
    url:"tasks"
  },
  {
    title: "Team Members",
    value: teams.length,
    trend: `${teams.length} members`,
    icon: Users,
    url:"teams"
  },
  {
    title: "Productivity",
    value: `${productivity}%`,
    trend: `${completedTasks}/${tasks.length} completed`,
    icon: TrendingUp,
     url:"tasks"
  },
];
const Dashboard = () => {
  const { user } = useUser();
  return (
    <div>
      <section className="rounded-3xl border border-zinc-200 mt-4 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-500">Good Morning 👋</p>

            <h1 className="mt-1 text-2xl font-bold text-zinc-900 md:text-3xl">
              Welcome back, {user?.firstName || "User"}
            </h1>

            <p className="mt-2 max-w-md text-sm text-zinc-600">
              Manage projects, track tasks, and collaborate with your team
              efficiently.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">
                  {stat.title}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-zinc-900">
                  {stat.value}
                </h2>
                <p className="mt-2 text-sm text-emerald-600">{stat.trend}</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
                  <stat.icon />
                </div>
                <Link to={stat.url} className="rounded-2xl bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
                  View All
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Recent Projects
            </h2>
            <p className="text-sm text-zinc-500">
              Manage your ongoing projects
            </p>
          </div>

          <Link to="projects" className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">
            View All
          </Link>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 p-4 transition hover:bg-zinc-50">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900">
                  Website Redesign
                </h3>
                <p className="text-sm text-zinc-500">Due: Jun 20, 2026</p>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Active
              </span>
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-zinc-500">Progress</span>
                <span className="font-medium text-zinc-800">80%</span>
              </div>

              <div className="h-2 rounded-full bg-zinc-100">
                <div className="h-2 w-[80%] rounded-full bg-zinc-900"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm mt-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-zinc-900">Today's Tasks</h2>
          <p className="text-sm text-zinc-500">Your scheduled work today</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3">
            <input type="checkbox" />
            <span className="text-sm text-zinc-700">Fix dashboard UI</span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3">
            <input type="checkbox" />
            <span className="text-sm text-zinc-700">Team meeting at 2 PM</span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3">
            <input type="checkbox" />
            <span className="text-sm text-zinc-700">Review analytics</span>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm mt-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-zinc-900">Activity Feed</h2>
          <p className="text-sm text-zinc-500">Recent workspace activity</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></div>

            <div>
              <p className="text-sm font-medium text-zinc-800">
                Ahmed completed a task
              </p>
              <span className="text-xs text-zinc-500">2 min ago</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>

            <div>
              <p className="text-sm font-medium text-zinc-800">
                Sarah created a new project
              </p>
              <span className="text-xs text-zinc-500">10 min ago</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-orange-500"></div>

            <div>
              <p className="text-sm font-medium text-zinc-800">
                Mohamed updated dashboard
              </p>
              <span className="text-xs text-zinc-500">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
