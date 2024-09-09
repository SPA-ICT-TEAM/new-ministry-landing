import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button"; // Assuming you have a Button component
import { service2, service3, service1 } from "../assets";
import { useState, useEffect } from "react";

const newsData = [
  {
    id: 1,
    title: "Breaking News",
    text: "Stay informed with the latest updates around the world.",
    imageUrl: service1,
  },
  {
    id: 2,
    title: "Tech Advancements",
    text: "Discover the future of technology with our in-depth analysis.",
    imageUrl: service2,
  },
  {
    id: 3,
    title: "Tech Advancements",
    text: "Discover the future of technology with our in-depth analysis.",
    imageUrl: service3,
  },
];

const projectsData = [
  {
    id: 1,
    title: "AI Revolution",
    text: "Building the next wave of AI-driven projects.",
    imageUrl: service1,
  },
  {
    id: 2,
    title: "Smart Homes",
    text: "Creating homes that think for themselves.",
    imageUrl: service2,
  },
  {
    id: 3,
    title: "Smart Homes",
    text: "Creating homes that think for themselves.",
    imageUrl: service3,
  },
];

const Services = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Auto-scroll for news and projects
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 3000); // 3 seconds

    const projectsInterval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, 3000); // 3 seconds

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
                src={newsData[currentNewsIndex].imageUrl}
                className="h-full w-full object-cover"
                alt={newsData[currentNewsIndex].title}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-black/50 to-black/90">
                <h4 className="h4 mb-4 text-white">{newsData[currentNewsIndex].title}</h4>
                <p className="body-2 mb-[3rem] text-white">{newsData[currentNewsIndex].text}</p>
              </div>

              {/* News Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {newsData.map((item, index) => (
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
                src={projectsData[currentProjectIndex].imageUrl}
                className="h-full w-full object-cover"
                alt={projectsData[currentProjectIndex].title}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-black/50 to-black/90">
                <h4 className="h4 mb-4 text-white">{projectsData[currentProjectIndex].title}</h4>
                <p className="body-2 mb-[3rem] text-white">{projectsData[currentProjectIndex].text}</p>
              </div>

              {/* Project Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {projectsData.map((item, index) => (
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
