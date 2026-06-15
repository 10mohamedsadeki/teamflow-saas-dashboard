import Modal from "./Modal";
import { TriangleAlert } from "lucide-react";

const DeleteModal = ({ closeModal, onDelete, selectedItem, type }) => {
  console.log(selectedItem);
  return (
    <Modal closeModal={closeModal}>
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <TriangleAlert className="text-red-500" size={38} />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-zinc-900">Delete {type}</h2>

        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
          Are you sure you want to delete this {type.toLowerCase()}? This action cannot be
          undone.
        </p>

        <div className="mt-8 flex w-full gap-3">
          <button
            onClick={closeModal}
            className="flex-1 rounded-2xl border border-zinc-200 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onDelete(selectedItem.id);
              closeModal();
            }}
            className="flex-1 rounded-2xl bg-red-500 py-3 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
