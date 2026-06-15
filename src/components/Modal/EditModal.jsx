import { useEffect, useState } from "react";
import Modal from "./Modal";

const EditModal = ({ closeModal, selectedItem, type, updateItem }) => {
  const isTeam = type.typePage === "Teams";

  const isTask = type.typePage === "Tasks";

 const [formData, setFormData] = useState({});

useEffect(() => {
  if (selectedItem) {
    setFormData(selectedItem);
  }
}, [selectedItem]);



  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    updateItem(formData);

    closeModal();
  };

  if (!selectedItem) return null;

  return (
    <Modal closeModal={closeModal}>
      <div>
        <h2 className="text-2xl font-bold text-zinc-900">
          Edit {isTeam ? "Member" : type.typePage}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Update information and save changes.
        </p>

        <form className="mt-4 space-y-4" onSubmit={handleOnSubmit}>
          {isTeam ? (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleOnChange}
                  placeholder="Enter member name..."
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleOnChange}
                  placeholder="Enter email..."
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Role
                  </label>

                  <select
                    name="role"
                    value={formData.role || ""}
                    onChange={handleOnChange}
                    className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
                  >
                    <option>Admin</option>
                    <option>Team Lead</option>
                    <option>Member</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status || ""}
                    onChange={handleOnChange}
                    className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
                  >
                    {type.status.map((statu) => (
                      <option key={statu}>{statu}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Position
                </label>

                <input
                  type="text"
                  name="position"
                  value={formData.position || ""}
                  onChange={handleOnChange}
                  placeholder="Frontend Developer..."
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Avatar URL
                </label>

                <input
                  type="text"
                  name="avatar"
                  value={formData.avatar || ""}
                  onChange={handleOnChange}
                  placeholder="https://example.com/avatar.jpg"
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  {type.typePage} Name
                </label>

                <input
                  type="text"
                  name={isTask ? "title" : "name"}
                  value={isTask ? formData.title || "" : formData.name || ""}
                  onChange={handleOnChange}
                  placeholder={`Enter ${type.typePage.toLowerCase()} name...`}
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Description
                </label>

                <textarea
                  rows="3"
                  name="description"
                  value={formData.description || ""}
                  onChange={handleOnChange}
                  placeholder="Enter description..."
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status || ""}
                    onChange={handleOnChange}
                    className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
                  >
                    {type.status.map((statu) => (
                      <option key={statu}>{statu}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={formData.priority || ""}
                    onChange={handleOnChange}
                    className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Deadline
                </label>

                <input
                  type="date"
                  required
                  name="deadline"
                  value={formData.deadline || ""}
                  onChange={handleOnChange}
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>
            </>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 rounded-2xl border border-zinc-200 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-2xl bg-zinc-900 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
