import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { useState, useEffect } from "react";


const Services = ({ ministry }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % ministry?.news?.length);
    }, 3000);

    const projectsInterval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % ministry?.projects?.length);
    }, 3000);

    return () => {
      clearInterval(newsInterval);
      clearInterval(projectsInterval);
    };
  }, []);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="News & Projects" />

        <div className="relative grid gap-5 lg:grid-cols-2">

          {/* News Section */}
          <div className="flex flex-col items-center">
            <div className="relative h-[60vh] max-h-[700px] w-full border border-n-1/10 rounded-3xl overflow-hidden">
              <img
                src={ministry?.news[currentNewsIndex]?.image}
                className="h-full w-full object-cover"
                alt="News Image"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-black/50 to-black/90">
                <h4 className="h4 mb-4 text-white">{ministry?.news[currentNewsIndex]?.title}</h4>
                <p className="body-2 mb-[3rem] text-white">{ministry?.news[currentNewsIndex]?.content}</p>
              </div>

              {/* News Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {ministry?.news?.map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-2 h-2 rounded-full ${index === currentNewsIndex ? "bg-green-600" : "bg-gray-400"}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Centered Button under the News Section */}
            <div className="mt-6">
              <Button className="bg-green-600 text-white" href="/news">
                View All News
              </Button>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex flex-col items-center">
            <div className="relative h-[60vh] max-h-[700px] w-full border border-n-1/10 rounded-3xl overflow-hidden">
              <img
                src={ministry?.projects[currentProjectIndex]?.image_path}
                className="h-full w-full object-cover"
                alt="Project Image"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-black/50 to-black/90">
                <h4 className="h4 mb-4 text-white">{ministry?.projects[currentProjectIndex]?.name}</h4>
                <p className="body-2 mb-[3rem] text-white">{ministry?.projects[currentProjectIndex]?.description}</p>
              </div>

              {/* Project Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {ministry?.projects?.map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-2 h-2 rounded-full ${index === currentProjectIndex ? "bg-green-600" : "bg-gray-400"}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Centered Button under the Projects Section */}
            <div className="mt-6">
              <Button className="bg-green-600 text-white" href="/projects">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
