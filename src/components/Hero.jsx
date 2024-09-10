import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useRef } from "react";
// import { bg } from "../assets";

const Hero = ({ ministry }) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ministry?.heroDetails?.hero_image})`,
        }}
        ref={parallaxRef}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="h1 text-white mb-6 relative">
            {ministry?.heroDetails?.title}
            <img
              src={curve}
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-[200px] xl:-mt-2"
              width={200}
              height={28}
              alt="Curve"
            />
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-white text-opacity-60 lg:mb-8">
          {ministry?.heroDetails?.subtitle}
          </p>

          <Button className="text-green-600 font-extrabold bg-white" href="/pricing">
          {ministry?.heroDetails?.button_text}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;