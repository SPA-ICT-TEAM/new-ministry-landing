import { useContext } from "react";
import Benefits from "../../components/Benefits";
import Faq from "../../components/Faq";
import Hero from "../../components/Hero";
import Roadmap from "../../components/Roadmap";
import Services from "../../components/Services";
import { UserContext } from "../../UserContext";
import SplashLoader from "../../components/SplashLoader";


const HomePage = () => {
  const { ministry, loading } = useContext(UserContext);

  if (loading) return(
    <SplashLoader/>
  );

  return (
    <>
      <Hero ministry={ministry} />
      <Roadmap ministry={ministry} />
      <Benefits ministry={ministry} />
      <Services ministry={ministry} />
      <Faq />
    </>
  );
};

export default HomePage;
