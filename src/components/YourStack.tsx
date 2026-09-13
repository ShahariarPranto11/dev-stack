import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="w-full lg:w-80 shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Your Stack</h2>

          <p className="text-sm text-slate-500">
            {stack.length} Technology Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
            🧰
          </div>

          <h3 className="font-semibold text-slate-700">
            Your stack is empty
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        /* Selected Items */
        <div className="mt-4 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-10 w-10 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-slate-700">
                  {technology.name}
                </h3>

                <p className="text-xs text-slate-400">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-lg font-bold text-slate-400 transition hover:text-red-500"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;