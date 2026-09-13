import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import type { Technology } from "./types/technology";
import TechnologyCard from "./components/TechnologyCard";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);
  const addToStack = (technology: Technology) => {
    setStack([...stack, technology]);
  };

  useEffect(() => {
    fetch("/public/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {loading && <p className="text-center py-10">Loading...</p>}

      {!loading && (
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                addToStack={addToStack}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default App;
