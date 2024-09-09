import { benefits } from "../constants"; 
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

export const BenefitCard = ({ title, text, imageUrl, iconUrl, backgroundUrl, light, seeMore }) => {
  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
        <h5 className="h5 mb-5">{title || "Default Title"}</h5>
        <p className="body-2 mb-6 text-n-3">{text || "Default description goes here."}</p>
        <div className="flex items-center mt-auto">
          {iconUrl && (
            <img
              src={iconUrl}
              width={48}
              height={48}
              alt={title || "Default Title"}
            />
          )}
          {seeMore && (
            <>
              <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                {seeMore}
              </p>
              <Arrow />
            </>
          )}
        </div>
      </div>

      {light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-white"
        style={{ clipPath: "url(#benefits)" }}
      >
        {/* {imageUrl && (
          <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
            <img
              src={imageUrl}
              width={380}
              height={362}
              alt={title || "Default Title"}
              className="w-full h-full object-cover"
            />
          </div>
        )} */}
      </div>

      <ClipPath />
    </div>
  );
};

const Benefits = ({ title, benefitsData = benefits }) => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={title || "Default Section Title"}
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefitsData.length > 0 ? (
            benefitsData.map((item) => (
              <BenefitCard
                key={item.id}
                title={item.title}
                text={item.text}
                imageUrl={item.imageUrl}
                iconUrl={item.iconUrl}
                backgroundUrl={item.backgroundUrl}
                light={item.light}
                seeMore="Explore more"
              />
            ))
          ) : (
            <p>No benefits available.</p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
