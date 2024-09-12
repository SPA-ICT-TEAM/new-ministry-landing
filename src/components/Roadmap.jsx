import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { mainLogo } from "../assets";


const trimDescription = (text) => {
  return text.length > 10 ? text.substring(0, 100) + "..." : text;
};

const Roadmap = ({ ministry }) => (

  <Section className="overflow-hidden" id="roadmap">
    <div className="container">
      <Heading title="About & Leadership" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4">
        {/* Commissioner Details */}
        {ministry?.ministryDetails && (
          <div className="p-0.25 rounded-[2.5rem]">
            <div className="rounded-[2.4375rem] overflow-hidden border-2 border-green-300">
              <div className="w-full h-[350px] md:h-64 lg:h-[450px]">
                <img
                  className="w-full h-full object-cover rounded-t-[2.4375rem]"
                  src={ministry?.ministryDetailsTwo?.photo || mainLogo}
                  alt="About-Us"
                />
              </div>
            </div>

            {/* Text and button container */}
            <div className="rounded-[2.4375rem] text-left">
              <h2 className="px-5 pt-5 text-black font-bold" >{ministry?.ministryDetails?.name.toUpperCase()}</h2>
              <p className="body-2 pt-5 px-5 mb-6 text-black"
                dangerouslySetInnerHTML={{ __html: trimDescription(ministry?.ministryDetailsTwo?.about) }}
              />

              <div className="pt-4 flex justify-center">
                <Button className="bg-green-600" href="/commissioner">Read more</Button>
              </div>
            </div>
          </div>
        )}

        {/* Ministry Details */}
        {ministry?.commissionerDetails && (
          <div className="p-0.25 rounded-[2.5rem]">
            {/* Image container with gradient and border */}
            <div className="rounded-[2.4375rem] overflow-hidden border-2 border-green-300">
              <div className="w-full h-[350px] md:h-64 lg:h-[450px]">
                <img
                  className="w-full h-full object-cover rounded-t-[2.4375rem]"
                  src={ministry?.commissionerDetails?.photo || mainLogo}
                  alt={ministry.ministryDetailsTwo.title}
                />
              </div>
            </div>

            {/* Text and button container */}
            <div className="rounded-[2.4375rem] text-left">
              <h2 className="px-5 pt-5 text-black font-bold" >{ministry?.commissionerDetails?.name.toUpperCase()}</h2>
              <p className="body-2 pt-5 px-5 mb-6 text-black"
                dangerouslySetInnerHTML={{ __html: trimDescription(ministry?.commissionerDetails?.biography) }}
              />

              <div className="pt-4 flex justify-center">
                <Button className="bg-green-600" href="/ministry-details">Read more</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </Section>
);

export default Roadmap;