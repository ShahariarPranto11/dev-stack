import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologyGridProps {
  technologies: Technology[];
  addToStack: (technology: Technology) => void;
}

const TechnologyGrid = ({
  technologies,
  addToStack,
}: TechnologyGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          addToStack={addToStack}
        />
      ))}
    </div>
  );
};

export default TechnologyGrid;