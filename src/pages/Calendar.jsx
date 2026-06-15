import { useMemo, useState } from "react";
import Calendar from "react-calendar";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const allDeadlines = useMemo(() => {
    const projects = JSON.parse(localStorage.getItem("projects"))?.map(
      (project) => ({
        id: project.id,
        title: project.name,
        type: "Project",
        deadline: project.deadline,
        status: project.status,
      }),
    );

    const tasks = JSON.parse(localStorage.getItem("tasks"))?.map((task) => ({
      id: task.id,
      title: task.title,
      type: "Task",
      deadline: task.deadline,
      status: task.status,
    }));

    return [...projects, ...tasks];
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const selectedDayEvents = allDeadlines.filter(
    (item) => formatDate(item.deadline) === formatDate(selectedDate),
  );

  const hasDeadline = (date) => {
    return allDeadlines.some(
      (item) => formatDate(item.deadline) === formatDate(date),
    );
  };

  return (
    <div className=" mt-4 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Calendar</h1>

        <p className="mt-1 text-zinc-500">Track tasks and project deadlines.</p>
      </div>

      <section className="grid gap-5 xl:grid-cols-[1.5fr_400px]">
        <div className="rounded-[2rem] border flex justify-center border-zinc-200 bg-white p-5 shadow-sm">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="w-full rounded-lg "
            tileContent={({ date, view }) =>
              view === "month" && hasDeadline(date) ? (
                <div className="mt-1 flex justify-center">
                  <div className="h-2 w-2 rounded-full bg-zinc-900" />
                </div>
              ) : null
            }
          />
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Schedule</h2>

          <p className="mt-1 text-sm text-zinc-500">
            {selectedDate.toDateString()}
          </p>

          <div className="mt-5 space-y-4">
            {selectedDayEvents.length > 0 ? (
              selectedDayEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        {event.title}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">{event.type}</p>
                    </div>

                    <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                      {event.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-zinc-200 p-8 text-center">
                <p className="text-sm text-zinc-500">
                  No deadlines for this day
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
