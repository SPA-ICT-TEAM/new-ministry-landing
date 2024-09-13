import { Hero } from "../../components/About/Hero";
import { Project } from "../../components/Project/Project";
import { Tomorrow } from "../../components/Tomorrow";
import SplashLoader from "../../components/SplashLoader";
import { useLocation } from "react-router";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

export const Projects = () => {
  
  const location = useLocation();
  const { ministry, loading } = location.state || { ministry: null};
  const { ministry: ministryProject, loading: isLoading } = useContext(UserContext);
  console.log(ministry);

  if(loading) {
    return <SplashLoader/>
  }

  return (
    <div className=" text-black ">
      <div className="container md:pt-24 md:p-5 pt-20 p-3 overflow-hidden max-w-screen ">
        <Hero
          title="Our Projects"
          text="Explore a selection of our latest and greatest projects. Each one showcases our commitment to innovation and design excellence."
        />
        <Project ministry={ministry} ministryProject={ministryProject} isLoading={isLoading} />
      </div>
      <Tomorrow />
    </div>
  );
};
