const Modal = ({children,closeModal}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-4xl border border-zinc-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-end">
          <button onClick={closeModal} className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 text-zinc-500 transition hover:bg-zinc-100">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;