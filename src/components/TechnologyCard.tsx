import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
        {technology.badge}
      </span>
      <img src={technology.icon} alt={technology.name} className="w-12 h-12" />
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
          {technology.category}
        </span>

        <span className="text-sm text-slate-600">⭐ {technology.rating}</span>
      </div>

      <button className="mt-4 w-full rounded-md bg-slate-900 py-2.5 text-sm font-medium text-white">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
