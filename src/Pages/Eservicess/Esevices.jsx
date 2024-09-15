import { useContext } from "react";
import { Hero } from "../../components/About/Hero";
import { EServices } from "../../components/Eservices/Esevices";
import { UserContext } from "../../UserContext";
import { Tomorrow } from "../../components/Tomorrow";

export const Eservices = () => {

  const { ministry, loading: isLoading } = useContext(UserContext);

  return (
    <div className=" text-black overflow-hidden max-w-screen ">
      <div className="md:pt-24 md:p-5 pt-20 p-3 container">
        <Hero
          title="Services"
          text="Discover our e-Services, for fast and easy access."
        />
        <EServices ministry={ministry} isLoading={isLoading}  />
      </div>
      <Tomorrow />
    </div>
  );
};
