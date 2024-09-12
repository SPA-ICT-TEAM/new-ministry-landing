import { useContext } from "react";
import { Hero } from "../../components/About/Hero";
import { EServices } from "../../components/Eservices/Esevices";
import { UserContext } from "../../UserContext";
import { Tomorrow } from "../../components/Tomorrow";
import { useLocation } from "react-router";

export const Eservices = () => {

  const { ministry: ministryProject, loading: isLoading } = useContext(UserContext);
  const location = useLocation();
  const { ministry, loading } = location.state || { ministry: null};

  return (
    <div className=" text-black overflow-hidden max-w-screen ">
      <div className="md:pt-24 md:p-5 pt-20 p-3 container">
        <Hero
          title="e-Services"
          text="Discover our e-Services, for fast and easy access."
        />
        <EServices ministry={ministry} loading={loading} ministryProject={ministryProject} isLoading={isLoading}  />
      </div>
      <Tomorrow />
    </div>
  );
};
