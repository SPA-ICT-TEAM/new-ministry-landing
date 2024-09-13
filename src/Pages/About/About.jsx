import { useContext } from "react";
import { AboutUs } from "../../components/About/AboutUs";
import { Background } from "../../components/About/Background";
import { Hero } from "../../components/About/Hero";
import { Mission } from "../../components/About/Mission";
import { DualCard } from "../../components/DualCard";
import { UserContext } from "../../UserContext";

export const About = () => {
  const { ministry, loading } = useContext(UserContext);
  return (
    <div className="md:pt-24 pt-20 text-black overflow-hidden max-w-screen min-h-screen">
      <div>
        <Hero title="About Us" />
        <Mission ministry={ministry} loading={loading} />
        <AboutUs ministry={ministry} loading={loading} />
        <DualCard ministry={ministry} loading={loading} />
        <Background ministry={ministry} loading={loading} />
      </div>
    </div>
  );
};
