"use client";

export default function Dialog({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
