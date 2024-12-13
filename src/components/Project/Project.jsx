import { useState } from "react";
import Card from "../Card";
import logo from "../../assets/logo.png";
import Button from "../Button";

const ProjectDrawer = ({ isOpen, onClose, selectedProject }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] bg-white h-screen pb-6  p-5 shadow-lg absolute right-0 top-0 flex flex-col justify-between">
        <div>
          <div className="absolute top-2 w-full right-0  shadow-md p-3 px-6 flex items-center justify-between">
            <h2 className="text-center md:text-[24px] font-bold">
              Project Details
            </h2>
            <Button onClick={onClose} className="bg-red-400">
              Close
            </Button>
          </div>

          {selectedProject ? (
            <div className="mt-16  overflow-y-scroll max-h-screen">
              <div className="mt-11" >
                <img
                  src={selectedProject.image_path || logo}
                  alt={selectedProject.name}
                  className="w-full object-cover rounded-3xl mb-4"
                />
                <h2 className="text-xl font-bold">{selectedProject.name}</h2>
                <h3>{selectedProject.description}</h3>
              </div>
            </div>
          ) : (
            <p>No project selected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const Project = ({ ministry, ministryProject, isLoading }) => {
  console.log(ministry );
  console.log(ministryProject);

  const serviceData = (ministry?.projects?.length > 0 ? ministry.projects : ministryProject?.projects) || [];
  console.log(serviceData);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSeeMoreClick = (project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <ProjectDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        selectedProject={selectedProject}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {serviceData.length > 0 ? (
          serviceData.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              text={item.description}
              light={item.light}
              buttonProps={{
                buttonText: "See More",
                onClick: () => handleSeeMoreClick(item),
              }}
              headerImage={item.image_path || logo}
            />
          ))
        ) : (
          <p className="text-center font-bold">
            No Project available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};
