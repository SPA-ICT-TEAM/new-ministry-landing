import { useContext } from "react";
import { Hero } from "../../components/About/Hero";
import { Project } from "../../components/Project/Project";
import { UserContext } from "../../UserContext";

export const Projects = () => {
  const { ministry, loading } = useContext(UserContext);

  return (
    <div className="md:pt-24 md:p-5 pt-20 p-3 text-black overflow-hidden max-w-screen min-h-screen">
      <div className="container">
        <Hero
          title="Our Projects"
          text="Explore a selection of our latest and greatest projects. Each one showcases our commitment to innovation and design excellence."
        />
        <Project ministry={ministry} loading={loading} />
      </div>
    </div>
  );
};
