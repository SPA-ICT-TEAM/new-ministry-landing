import { Hero } from "../../components/About/Hero";
import { EServices } from "../../components/Eservices/Esevices";
import { Tomorrow } from "../../components/Tomorrow";

export const Eservices = () => {
  return (
    <div className=" text-black overflow-hidden max-w-screen min-h-screen">
      <div className="md:pt-24 md:p-5 pt-20 p-3 container">
        <Hero
          title="e-Services"
          text="Discover our e-Services, for fast and easy access."
        />
        <EServices />
      </div>
      <Tomorrow />
    </div>
  );
};
