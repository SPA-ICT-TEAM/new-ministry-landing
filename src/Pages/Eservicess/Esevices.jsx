import { Hero } from "../../components/About/Hero";
import { EServices } from "../../components/Eservices/Esevices";

export const Eservices = () => {
  return (
    <div className="md:pt-24 md:p-5 pt-20 p-3 text-black overflow-hidden max-w-screen min-h-screen">
      <div className="container">
        <Hero
          title="e-Services"
          text="Discover our e-Services, for fast and easy access."
        />
        <EServices />
      </div>
    </div>
  );
};
