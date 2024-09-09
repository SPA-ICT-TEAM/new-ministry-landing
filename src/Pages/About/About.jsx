import { AboutUs } from "../../components/About/AboutUs";
import { Background } from "../../components/About/Background";
import { Hero } from "../../components/About/Hero";
import { Mission } from "../../components/About/Mission";
import { DualCard } from "../../components/DualCard";

export const About = () => {
  return (
    <div className="md:pt-24 md:p-5 pt-20 p-1 text-black overflow-hidden max-w-screen min-h-screen">
      <div className="container">
        <Hero title="About Us" text="MINISTRY OF HOUSING" />
        <Mission />
        <AboutUs />
        <DualCard />
        <Background />
      </div>
    </div>
  );
};
