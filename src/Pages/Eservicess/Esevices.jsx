import { useContext } from "react";
import { Hero } from "../../components/About/Hero";
import { EServices } from "../../components/Eservices/Esevices";
import { UserContext } from "../../UserContext";

export const Eservices = () => {

  const { ministry, loading } = useContext(UserContext);

  return (
    <div className="md:pt-24 md:p-5 pt-20 p-3 text-black overflow-hidden max-w-screen min-h-screen">
      <div className="container">
        <Hero
          title="e-Services"
          text="Discover our e-Services, for fast and easy access."
        />
        <EServices ministry={ministry} loading={loading}  />
      </div>
    </div>
  );
};
