import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useRef } from "react";
import { landingDefault } from "../assets";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({ ministry }) => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Example slider images - replace with your actual images
  const sliderImages = [
    './image1.jpg',
    './news_default.jpg',
    './landing_default.jpg',
    // Add more images as needed
  ];

  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="relative w-full h-screen">
        <Slider {...settings} className="h-full">
          {sliderImages.map((image, index) => (
            <div key={index} className="h-screen">
              <div
                className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{
                  // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ministry?.heroDetails?.hero_image || landingDefault})`
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center">
                  <h1 className="h1 text-[#bcd149] mb-6 relative">
                    {ministry?.heroDetails?.title}
                    <img
                      src={curve}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-[200px] xl:-mt-2"
                      width={200}
                      height={28}
                      alt="Curve"
                    />
                  </h1>

                  <p className="body-1 max-w-3xl mx-auto mb-6 text-white lg:mb-8">
                    {ministry?.heroDetails?.subtitle}
                  </p>

                  <Button
                    className="!text-green-700 font-extrabold bg-white"
                    onClick={() => navigate("/about-us", { state: { ministry } })}
                  >
                    {ministry?.heroDetails?.button_text}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Hero;