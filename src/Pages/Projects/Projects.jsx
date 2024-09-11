import { Hero } from "../../components/About/Hero";
import { Project } from "../../components/Project/Project";
import { Tomorrow } from "../../components/Tomorrow";

export const Projects = () => {
  return (
    <div className=" text-black ">
      <div className="container md:pt-24 md:p-5 pt-20 p-3 overflow-hidden max-w-screen min-h-screen">
        <Hero
          title="Our Projects"
          text="Explore a selection of our latest and greatest projects. Each one showcases our commitment to innovation and design excellence."
        />
        <Project />
      </div>
      <Tomorrow />
    </div>
  );
};
