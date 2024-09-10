import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../../components/Benefits";
import Collaboration from "../../components/Collaboration";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Pricing from "../../components/Pricing";
import Roadmap from "../../components/Roadmap";
import Services from "../../components/Services";


export  const Home = () => {
  return (
      <div className=" overflow-hidden">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>

  );
};

