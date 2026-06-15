import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { tasksData } from "../data/tasksData";
import { useEffect, useState } from "react";
import AddModal from "../components/Modal/AddModal";
import EditModal from "../components/Modal/EditModal";
import DeleteModal from "../components/Modal/DeleteModal";
import { useFilter } from "../hooks/useFilter";
import toast from "react-hot-toast";

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTask = localStorage.getItem("tasks");
    return storedTask ? JSON.parse(storedTask) : tasksData;
  });
  const type = {
    typePage: "Tasks",
    status: ["In Progress", "Pending", "Completed"],
  };
  const taskObject = {
    title: "",
    description: "",
    status: "To Do",
    priority: "Medium",
    deadline: "",
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [modalType, setModalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [statu, setStatu] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const closeModal = () => {
    setModalType(null);
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleStatu = (e) => {
    const value = e.target.value;
    setStatu(value);
  };

  const filteredTasks = useFilter(tasks, search, statu, "title", "status");

  const totalPage = Math.ceil(filteredTasks.length / 2);
  const handleNext = () => {
    currentPage < totalPage ? setCurrentPage(currentPage + 1) : null;
  };

  const handlePrevious = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : null;
  };

  let startIndex = (currentPage - 1) * 2;
  let endIndex = startIndex + 2;
  const currentTasks = filteredTasks.slice(startIndex, endIndex);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.success("Task deleted successfully");
  };
  const addTask = (task) => {
    setTasks([...tasks, task]);
    toast.success("Task Added Seccessfully");
  };
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    toast.success("Task Updated successfully");
  };
  return (
    <div className="mt-4 space-y-6">
      <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Tasks</h1>

            <p className="mt-1 text-sm text-zinc-500">
              Manage and track all team tasks
            </p>
          </div>

          <button
            onClick={() => setModalType("add")}
            className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            <Plus size={18} />
            New Task
          </button>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search task..."
              className="h-11 w-full rounded-2xl border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none transition focus:border-zinc-400"
            />
          </div>

          <select
            onChange={handleStatu}
            className="h-11 overflow-clip rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
          >
            <option value="All">All Tasks</option>
            <option value="Pending">Pending</option>
            <option value="Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </section>

      <section className="hidden overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:block">
        <table className="w-full">
          <thead className="border-b border-zinc-200 bg-zinc-50">
            <tr className="text-left text-sm text-zinc-500">
              <th className="px-6 py-4">Task</th>
              <th className="px-6 py-4">Assigned To</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Deadline</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentTasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-6 py-4">
                  <h3 className="font-medium text-zinc-900">{task.title}</h3>

                  <p className="text-sm text-zinc-500">{task.description}</p>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-700">
                  {task.assignedTo}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    {task.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-700">
                  {task.priority}
                </td>

                <td className="px-6 py-4 text-sm text-zinc-700">
                  {task.deadline}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => {
                        setModalType("edit");
                        setSelectedItem(task);
                      }}
                      className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => {
                        setModalType("delete");
                        setSelectedItem(task);
                      }}
                      className="rounded-xl border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="space-y-4 lg:hidden">
        {currentTasks.map((task) => (
          <div
            key={task.id}
            className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-zinc-900">{task.title}</h2>

                <p className="mt-1 text-sm text-zinc-500">{task.description}</p>
              </div>

              <span className="rounded-full whitespace-nowrap bg-amber-100 px-4 py-1 text-xs font-medium text-amber-700">
                {task.status}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-zinc-500">Priority: {task.priority}</span>

              <span className="text-zinc-500">Due: {task.deadline}</span>
            </div>

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                onClick={() => {
                  setModalType("edit");
                  setSelectedItem(task);
                }}
                className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => {
                  setModalType("delete");
                  setSelectedItem(task);
                }}
                className="rounded-xl border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="font-medium text-zinc-900">
            1-{filteredTasks.length}
          </span>{" "}
          of{" "}
          <span className="font-medium text-zinc-900">
            {currentTasks.length}
          </span>{" "}
          tasks
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevious}
            className="rounded-xl border border-zinc-200  px-4 py-2 text-sm font-medium transition hover:bg-zinc-100"
          >
            Previous
          </button>
          {Array.from({ length: totalPage }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${currentPage === index + 1 ? "bg-zinc-900 hover:bg-zinc-700 text-white" : ""} border-zinc-200 text-sm font-medium transition hover:bg-zinc-100`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPage}
            onClick={handleNext}
            className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100"
          >
            Next
          </button>
        </div>
      </section>
      {modalType === "add" && (
        <AddModal
          closeModal={closeModal}
          type={{
            typePage: "Task",
            status: ["In Progress", "Pending", "Completed"],
          }}
          addItem={addTask}
          objectItem={taskObject}
        />
      )}
      {modalType === "edit" && (
        <EditModal
          closeModal={closeModal}
          selectedItem={selectedItem}
          type={type}
          updateItem={updateTask}
        />
      )}
      {modalType === "delete" && (
        <DeleteModal
          closeModal={closeModal}
          onDelete={deleteTask}
          selectedItem={selectedItem}
          type="Task"
        />
      )}
    </div>
  );
};

export default Tasks;
