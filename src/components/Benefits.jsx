import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";  // Assuming you have a Button component

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Services"
        />

        {/* Grid layout for 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => (
            <div
              className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* Content container with rounded corners */}
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[2.4rem] pointer-events-none rounded-2xl bg-white">
                <h5 className="h5 mb-5 text-n-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-3 uppercase tracking-wider">
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
            </div>
          ))}
        </div>

        {/* Centered button after services mapping */}
        <div className="flex justify-center mt-10">
          <Button href="/more-services" className="bg-green-600 text-white px-6 py-2 rounded-lg">
            View More Services
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
