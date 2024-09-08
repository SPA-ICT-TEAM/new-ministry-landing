import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import { bg } from "../assets";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 text-black mb-6 relative text-center">
          Building Homes, Housing for Everyone
          <img
            src={curve}
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-[200px] xl:-mt-2"
            width={200}
            height={28}
            alt="Curve"
          />
        </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-black text-opacity-60 lg:mb-8">
          We focus on innovative development, community planning, and ensuring access to safe and secure homes across the State.
          </p>
          <Button className="text-green-600" href="/pricing" white>
            Learn more
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl">
          <div className="aspect-[33/40] rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            <img
              src={bg}
              className="w-full h-full object-cover"
              alt="AI"
            />
          </div>
        </div>
          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
