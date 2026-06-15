import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";


const Analytics = () => {
  const totalProjects =
    JSON.parse(localStorage.getItem("projects"))?.length || 0;
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const totalMembers = JSON.parse(localStorage.getItem("teams"))?.length || 0;
  const totalTasks = tasks?.length || 0;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const productivityRate = Math.round((completedTasks / totalTasks) * 100);

  const tasksOverview = [
    {
      name: "Pending",
      value: tasks.filter((task) => task.status === "Pending").length,
    },
    {
      name: "In Progress",
      value: tasks.filter((task) => task.status === "In Progress").length,
    },
    {
      name: "Completed",
      value: tasks.filter((task) => task.status === "Completed").length,
    },
  ];

  const projectsOverview = [
    {
      name: "Active",
      value: JSON.parse(localStorage.getItem("projects"))?.filter(
        (project) => project.status === "Active",
      ).length,
    },
    {
      name: "Pending",
      value: JSON.parse(localStorage.getItem("projects"))?.filter(
        (project) => project.status === "Pending",
      ).length,
    },
    {
      name: "Completed",
      value: JSON.parse(localStorage.getItem("projects"))?.filter(
        (project) => project.status === "Completed",
      ).length,
    },
  ];

  const teamRoles = [
    {
      name: "Admin",
      value: JSON.parse(localStorage.getItem("teams"))?.filter(
        (member) => member.role === "Admin",
      ).length,
    },
    {
      name: "Team Lead",
      value: JSON.parse(localStorage.getItem("teams"))?.filter(
        (member) => member.role === "Team Lead",
      ).length,
    },
    {
      name: "Member",
      value: JSON.parse(localStorage.getItem("teams"))?.filter(
        (member) => member.role === "Member",
      ).length,
    },
  ];

  const weeklyPerformance = [
    { day: "Mon", tasks: 4 },
    { day: "Tue", tasks: 6 },
    { day: "Wed", tasks: 8 },
    { day: "Thu", tasks: 7 },
    { day: "Fri", tasks: 10 },
    { day: "Sat", tasks: 5 },
    { day: "Sun", tasks: 9 },
  ];

  const recentActivity = [
    "Ahmed completed API Integration task",
    "Sara created a new project",
    "Yacine updated Dashboard UI",
    "Amine moved task to In Progress",
  ];

  return (
    <div className="mt-4 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Analytics</h1>

        <p className="mt-1 text-zinc-500">
          Track performance and team progress.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Total Projects</p>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900">
            {totalProjects}
          </h2>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Completed Tasks</p>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900">
            {completedTasks}
          </h2>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Team Members</p>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900">
            {totalMembers}
          </h2>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Productivity Rate</p>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900">
            {productivityRate}%
          </h2>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-zinc-900">
            Tasks Overview
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tasksOverview}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-zinc-900">
            Projects Status
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectsOverview}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {projectsOverview.map((_, index) => (
                    <Cell key={index} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-zinc-900">
            Team Distribution
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamRoles}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-zinc-900">
            Weekly Performance
          </h2>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />

                <Line type="monotone" dataKey="tasks" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">Recent Activity</h2>

        <div className="mt-4 space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-sm text-zinc-600"
            >
              {activity}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Analytics;
