import { useState } from "react";
import Modal from "./Modal";

const AddModal = ({ closeModal, type, addItem, objectItem }) => {
  const isTeam = type.typePage === "Teams";

  const [formData, setFormData] = useState(objectItem);

 const handleSubmit = (e) => {
  e.preventDefault();

  const newItem = {
    ...formData,
    id: Date.now(),
  };

  addItem(newItem);

  setFormData(objectItem);

  closeModal();
};
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
console.log(type, "type");
  const fields = Object.keys(objectItem);

  return (
    <Modal closeModal={closeModal}>
      <div>
        <h2 className="text-2xl font-bold text-zinc-900">
          Create New {isTeam ? "Member" : type.typePage}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          {isTeam
            ? "Add a new member to your workspace."
            : `Add a new ${type.typePage.toLowerCase()} to your workspace.`}
        </p>

        <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
          {isTeam ? (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                  placeholder="Enter member name..."
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
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
                    value={formData.role}
                    onChange={handleOnChange}
                    className="h-10 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
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
                    value={formData.status}
                    onChange={handleOnChange}
                    className="h-10 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
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
                  value={formData.position}
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
                  value={formData.avatar}
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
                  name={fields[0]}
                  value={formData[fields[0]]}
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
                  name={fields[1]}
                  value={formData[fields[1]]}
                  onChange={handleOnChange}
                  placeholder={`Enter ${type.typePage.toLowerCase()} description...`}
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-700">
                    Status
                  </label>

                  <select
                    name={fields[2]}
                    value={formData[fields[2]]}
                    onChange={handleOnChange}
                    className="h-10 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
                  >
                    {type.status.map((statu) => (
                      <option key={statu}>{statu}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-700">
                    Priority
                  </label>

                  <select
                    name={fields[3]}
                    value={formData[fields[3]]}
                    onChange={handleOnChange}
                    className="h-10 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">
                  Deadline
                </label>

                <input
                  name={fields[4]}
                  required
                  value={formData[fields[4]]}
                  onChange={handleOnChange}
                  type="date"
                  className="h-10 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-400"
                />
              </div>
            </>
          )}

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 rounded-2xl border border-zinc-200 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-2xl bg-zinc-900 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Create {isTeam ? "Member" : type.typePage}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddModal;
