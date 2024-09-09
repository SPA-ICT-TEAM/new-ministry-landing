import { Hero } from "../../components/About/Hero";

export const Projects = () => {
  return (
    <div className="md:pt-24 md:p-5 pt-20 p-3 text-black overflow-hidden max-w-screen min-h-screen">
      <div className="container">
        <Hero
          title="Our Projects"
          text="Explore a selection of our latest and greatest projects. Each one showcases our commitment to innovation and design excellence."
        />
      </div>
    </div>
  );
};
