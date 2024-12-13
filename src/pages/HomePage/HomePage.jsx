import { useContext } from "react";
import Benefits from "../../components/Benefits";
import Faq from "../../components/Faq";
import Hero from "../../components/Hero";
import Roadmap from "../../components/Roadmap";
import Services from "../../components/Services";
import { UserContext } from "../../UserContext";
import SplashLoader from "../../components/SplashLoader";
import LatestNews from "../../components/LatestNews";


const HomePage = () => {
  const { ministry, loading } = useContext(UserContext);

  if (loading) return(
    <SplashLoader/>
  );

  return (
    <>
      <Hero ministry={ministry} loading={loading} />
      <Roadmap ministry={ministry} loading={loading} />
      <Benefits ministry={ministry} loading={loading} />
      <Services ministry={ministry} loading={loading} />
      <LatestNews ministry={ministry} loading={loading} />
      <Faq ministry={ministry} loading={loading} />
    </>
  );
};

export default HomePage;
