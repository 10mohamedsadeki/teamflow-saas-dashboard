import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { useEffect, useState } from "react";
import DeleteModal from "../components/Modal/DeleteModal";
import EditModal from "../components/Modal/EditModal";
import AddModal from "../components/Modal/AddModal";
import { useFilter } from "../hooks/useFilter";
import toast from "react-hot-toast";
const Projects = () => {
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : projectsData;
  });
  const type = {
    typePage: "Project",
    status: ["Active", "Pending", "Completed"],
  };
  const projectObj = {
    name: "",
    description: "",
    status: "",
    priority: "",
    progress: 0,
    deadline: "",
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalType, setmodalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSearch = (e) => {
    let valueSearch = e.target.value;
    setSearch(valueSearch);
  };

  const handleStatus = (e) => {
    const statuValue = e.target.value;
    setStatus(statuValue);
  };

  const filteredProjects = useFilter(
    projects,
    search,
    status,
    "name",
    "status",
  );

  const totalPage = Math.ceil(filteredProjects.length / 2);
  let startIndex = (currentPage - 1) * 2;
  let endIndex = startIndex + 2;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleNext = () => {
    currentPage < totalPage ? setCurrentPage(currentPage + 1) : null;
  };

  const handlePrevious = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : null;
  };

  const closeModal = () => {
    setmodalType(null);
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter((p) => p.id !== projectId));
    toast.success("Project deleted successfully");
  };

  const addProject = (project) => {
    setProjects([...projects, project]);
    toast.success("Project Added Seccessfully");
  };

  const updateProject = (updatedProject) => {
    setProjects(
      projects.map((p) => (p.id === updatedProject.id ? updatedProject : p)),
    );
    toast.success("Project Updated successfully");
  };
  return (
    <div className="space-y-6">
      <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Projects</h1>

            <p className="mt-1 text-sm text-zinc-500">
              Manage all your team projects
            </p>
          </div>

          <button
            onClick={() => {
              setmodalType("add");
            }}
            className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            <Plus size={18} />
            New Project
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
              placeholder="Search project..."
              className="h-11 w-full rounded-2xl border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none transition focus:border-zinc-400"
              value={search}
              onChange={handleSearch}
            />
          </div>

          <select
            className="h-11 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
            onChange={handleStatus}
          >
            <option value="All">All Projects</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </section>

      <section className="hidden overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:block">
        <table className="w-full">
          <thead className="border-b border-zinc-200 bg-zinc-50">
            <tr className="text-left text-sm text-zinc-500">
              <th className="px-6 py-4">Project</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Progress</th>
              <th className="px-6 py-4">Deadline</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentProjects.map((project) => (
              <tr
                className="border-b border-zinc-100 hover:bg-zinc-50"
                key={project.id}
              >
                <td className="px-6 py-4">
                  <h3 className="font-medium text-zinc-900">{project.name}</h3>
                  <p className="text-sm text-zinc-500">{project.description}</p>
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    {project.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-700">
                  {project.priority}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-28 rounded-full bg-zinc-100">
                      <div className="h-2 w-[80%] rounded-full bg-zinc-900"></div>
                    </div>

                    <span className="text-sm text-zinc-600">
                      {project.progress}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-700">
                  {project.deadline}
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => {
                        setmodalType("edit");
                        setSelectedItem(project);
                      }}
                      className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => {
                        setmodalType("delete");
                        setSelectedItem(project);
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
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-semibold text-zinc-900">{project.name}</h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Due: {project.deadline}
                </p>
              </div>

              <span className="rounded-full whitespace-nowrap bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                {project.status}
              </span>
            </div>

            <div className="mt-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-zinc-500">Progress</span>

                <span className="font-medium text-zinc-800">
                  {project.progress}
                </span>
              </div>

              <div className="h-2 rounded-full bg-zinc-100">
                <div className="h-2 w-[80%] rounded-full bg-zinc-900"></div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                onClick={() => {
                  setmodalType("edit");
                }}
                className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => {
                  setmodalType("delete");
                  setSelectedItem(project);
                }}
                className=" text-center rounded-xl border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col lg:flex-row lg:justify-between sm:justify-center gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:flex-col sm:items-center ">
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="font-medium text-zinc-900">
            1-{filteredProjects.length}
          </span>{" "}
          of{" "}
          <span className="font-medium text-zinc-900">
            {filteredProjects.length}
          </span>{" "}
          projects
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevious}
            className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100"
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
      {modalType === "delete" && (
        <DeleteModal
          closeModal={closeModal}
          onDelete={deleteProject}
          selectedItem={selectedItem}
          type="Project"
        />
      )}
      {modalType === "edit" && (
        <EditModal
          closeModal={closeModal}
          selectedItem={selectedItem}
          type={type}
          updateItem={updateProject}
        />
      )}
      {modalType === "add" && (
        <AddModal
          closeModal={closeModal}
          type={{
            typePage: "Project",
            status: ["Active", "Pending", "Completed"],
          }}
          addItem={addProject}
          objectItem={projectObj}
        />
      )}
    </div>
  );
};

export default Projects;
