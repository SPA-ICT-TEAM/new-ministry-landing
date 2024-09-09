import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { mainLogo } from "../assets";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container">
      <Heading title="About & Leadership" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4">
        {roadmap.map((item) => {
          return (
            <div
              className={`p-0.25 rounded-[2.5rem]`}
              key={item.id}
            >
              {/* Image container with gradient and border */}
              <div className="rounded-[2.4375rem] overflow-hidden border-2 border-green-300">
                <img
                  className="w-full h-auto object-cover rounded-t-[2.4375rem]"
                  src={mainLogo}
                  alt={item.title}
                />
              </div>

              {/* Text and button container */}
              <div className="rounded-[2.4375rem] text-left">
                <p className="body-2 pt-10 px-5 mb-6 text-black">{item.text}</p>

                {/* Padding between text and button */}
                <div className="pt-4 flex justify-center">
                  <Button className="bg-green-600" href="/roadmap">Read more</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default Roadmap;