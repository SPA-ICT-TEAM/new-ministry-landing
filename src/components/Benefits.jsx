import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";
import { benefitIcon3, mainLogo } from "../assets";
import { useNavigate } from "react-router";
import Card from "./Card";
import { cashFormater } from "../utils/helpers";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Benefits = ({ ministry, loading }) => {
  const navigate = useNavigate();

  // Check if both service arrays are empty or undefined
  if (!ministry?.services?.length && !ministry?.ourServices?.length) {
    return null; // Don't render anything if both are empty
  }

  // Determine which services to use and limit to 4 items
  const servicesToUse = ministry?.services?.length > 0
    ? ministry.services.slice(0, 4)
    : ministry?.ourServices?.slice(0, 4) || [];

  // Don't render the section if no services are available after slicing
  if (servicesToUse.length === 0) {
    return null;
  }

  const handleButtonClick = (item) => {
    const buttonText = `Pay ₦${cashFormater(item?.price)}`;
    if (buttonText.toLowerCase().includes('price') ||
      buttonText.toLowerCase().includes('pay') ||
      buttonText.includes(cashFormater(item?.price))) {
      window.open('https://irs.en.gov.ng/pay/flutterwave', '_blank');
    } else {
      // Handle regular button click
      // You can add your custom logic here
    }
  };

  const renderServiceItem = (item) => {
    if (ministry?.services?.length > 0) {
      // Render using Card component for ministry.services
      return (
        <SwiperSlide>
        <Card
          key={item.id}
          title={item.name}
          text={item.description}
          light={item.light}
          buttonProps={{
            buttonText: `Pay ₦${cashFormater(item?.price)}`,
            onClick: () => handleButtonClick(item),
          }}
          headerImage={item.image || mainLogo}
        />
        </SwiperSlide>
      );
    } else {
      // Render using the existing layout for ministry.ourServices
      return (

        <SwiperSlide
          className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
          style={{
            backgroundImage: `url(${item.backgroundUrl})`,
          }}
          key={item.id}
        >
          <div className="relative z-2 flex flex-col min-h-[20rem] p-[2.4rem] pointer-events-none rounded-2xl bg-white">
            <h5 className="h5 mb-5 text-n-5">{item.name}</h5>
            <p className="body-2 mb-6 text-n-3">{item.description}</p>
            <div className="flex items-center mt-auto">
              <img
                src={benefitIcon3}
                width={48}
                height={48}
                alt={item.title}
              />
              <p className="ml-auto text-xs font-bold text-n-3 uppercase tracking-wider">
                Learn more
              </p>
              <Arrow />
            </div>
          </div>

          {item.light && <GradientLight />}

          <div
            className="absolute inset-0.5 bg-white rounded-2xl"
          ></div>

          <ClipPath />
        </SwiperSlide>
      );
    }
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Services"
        />

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: { 
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          className=""
        >
          {servicesToUse.map(renderServiceItem)}
        </Swiper>



        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesToUse.map(renderServiceItem)}
        </div> */}

        <div className="flex justify-center mt-10">
          <Button
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
            onClick={() => navigate("/eServices", { state: { ministry, loading } })}
          >
            View More Services
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;