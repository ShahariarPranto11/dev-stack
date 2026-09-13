import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import type { Technology } from "./types/technology";

import TechnologyGrid from "./components/TechnologyGrid";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);
  const addToStack = (technology: Technology) => {
    setStack([...stack, technology]);
  };

  useEffect(() => {
    fetch("/technologies.json")
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
          <TechnologyGrid technologies={technologies} addToStack={addToStack} />
        </section>
      )}
    </>
  );
}

export default App;
