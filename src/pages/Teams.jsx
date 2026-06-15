import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import { teamsData } from "../data/teamsData";
import { useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import AddModal from "../components/Modal/AddModal";
import DeleteModal from "../components/Modal/DeleteModal";
import EditModal from "../components/Modal/EditModal";
import toast from "react-hot-toast";

const Teams = () => {
  const [teams, setTeams] = useState(() => {
    const storedTeams = localStorage.getItem("teams");
    return storedTeams ? JSON.parse(storedTeams) : teamsData;
  });
  const type = {
    typePage: "Teams",
    status: ["Active", "Busy", "Offline"],
  };
  const teamObject = {
    name: "",
    email: "",
    role: "Member",
    status: "Active",
    position: "",
    avatar: "",
  };

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);
  const [search, setSearch] = useState("");
  const [statu, setStatu] = useState("All");
  const [modalType, setModalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };
  const handleStatu = (e) => {
    const value = e.target.value;
    setStatu(value);
  };
  const filteredTeams = useFilter(teams, search, statu, "name", "role");
  const closeModal = () => {
    setModalType(null);
  };
  const totalPage = Math.ceil(filteredTeams.length / 2);
  const handleNext = () => {
    currentPage < totalPage ? setCurrentPage(currentPage + 1) : null;
  };

  const handlePrevious = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : null;
  };

  let startIndex = (currentPage - 1) * 2;
  let endIndex = startIndex + 2;
  const currentTeams = filteredTeams.slice(startIndex, endIndex);

  const deleteMember = (membreId) => {
    setTeams(teams.filter((membre) => membre.id !== membreId));
    toast.success("Member deleted successfully");
  };
  const addMembre = (membre) => {
    setTeams([...teams, membre]);
    toast.success("Member Added successfully");
  };
  const updateMembre = (updatedMembre) => {
    setTeams(teams.map((m) => (m.id === updatedMembre.id ? updatedMembre : m)));
    toast.success("Member Updated successfully");
  };
  return (
    <div className="mt-4 space-y-6">
      <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">Team Members</h1>

            <p className="mt-1 text-sm text-zinc-500">
              Manage your team members and roles
            </p>
          </div>

          <button
            onClick={() => setModalType("add")}
            className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            <Plus size={18} />
            Add Member
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
              placeholder="Search member..."
              className="h-11 w-full rounded-2xl border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none transition focus:border-zinc-400"
            />
          </div>

          <select
            onChange={handleStatu}
            className="h-11 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none lg:w-fit"
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Member">Member</option>
          </select>
        </div>
      </section>

      <section className="hidden overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:block">
        <table className="w-full">
          <thead className="border-b border-zinc-200 bg-zinc-50">
            <tr className="text-left text-sm text-zinc-500">
              <th className="px-6 py-4">Member</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Projects</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentTeams.map((team) => (
              <tr
                key={team.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={team.avatar}
                      alt=""
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-medium text-zinc-900">{team.name}</h3>

                      <p className="text-sm text-zinc-500">{team.role}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-700">
                  {team.email}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {team.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {team.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-700">
                  {team.projects} Projects
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => {
                        setModalType("edit");
                        setSelectedItem(team);
                      }}
                      className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => {
                        setModalType("delete");
                        setSelectedItem(team);
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
        {currentTeams.map((team) => (
          <div
            key={team.id}
            className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="flex  items-start gap-4">
              <img
                src={team.avatar}
                alt=""
                className="h-14 w-14 rounded-full object-cover"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-zinc-900">{team.name}</h2>

                    <p className="text-sm text-zinc-500">{team.email}</p>
                  </div>
                  <span className="rounded-full  bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {team.status}
                  </span>
                </div>

                <div className="mt-4  flex items-center justify-between text-sm text-zinc-500">
                  <span>Role: {team.role}</span>
                  <span>{team.projects} Projects</span>
                </div>

                <div className="mt-5 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setModalType("edit");
                      setSelectedItem(team);
                    }}
                    className="rounded-xl border border-zinc-200 p-2 transition hover:bg-zinc-100"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => {
                      setModalType("delete");
                      setSelectedItem(team);
                    }}
                    className="rounded-xl border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          Showing <span className="font-medium text-zinc-900">1-4</span> of{" "}
          <span className="font-medium text-zinc-900">12</span> members
        </p>

        <div className="flex items-center gap-2 overflow-x-auto">
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
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${currentPage === index + 1 ? "bg-zinc-900 text-white" : "border border-zinc-200 text-sm font-medium transition hover:bg-zinc-100"}`}
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
          type={type}
          addItem={addMembre}
          objectItem={teamObject}
        />
      )}
      {modalType === "delete" && (
        <DeleteModal
          closeModal={closeModal}
          selectedItem={selectedItem}
          onDelete={deleteMember}
          type="Member"
        />
      )}
      {modalType === "edit" && (
        <EditModal
          closeModal={closeModal}
          selectedItem={selectedItem}
          type={type}
          updateItem={updateMembre}
        />
      )}
    </div>
  );
};

export default Teams;
