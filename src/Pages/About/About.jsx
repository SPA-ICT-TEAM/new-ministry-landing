import { useContext } from "react";
import { AboutUs } from "../../components/About/AboutUs";
import { Background } from "../../components/About/Background";
import { Hero } from "../../components/About/Hero";
import { Mission } from "../../components/About/Mission";
import { DualCard } from "../../components/DualCard";
import { UserContext } from "../../UserContext";
import { useLocation } from "react-router";

export const About = () => {
  const { ministry, loading } = useContext(UserContext);
  const location = useLocation();
  const { ministry: ministryAbout, loading: isLoading } = location.state || { ministry: null };
  return (
    <div className="md:pt-24 pt-20 text-black overflow-hidden max-w-screen min-h-screen">
      <div>
        <Hero title="About Us" />
        <Mission ministry={ministry} loading={loading} ministryAbout={ministryAbout} isLoading={isLoading} />
        <AboutUs ministry={ministry} loading={loading} ministryAbout={ministryAbout} isLoading={isLoading} />
        <DualCard ministry={ministry} loading={loading} ministryAbout={ministryAbout} isLoading={isLoading}/>
        <Background ministry={ministry} loading={loading} ministryAbout={ministryAbout} isLoading={isLoading}/>
      </div>
    </div>
  );
};
