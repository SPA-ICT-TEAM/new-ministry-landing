import { useState } from "react";
import { serviceData } from "../../constants";
import Card from "../Card";
import logo from "../../assets/logo.png";
import Button from "../Button";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-80 bg-white h-full p-5 shadow-lg relative">
        <Button onClick={onClose} className="absolute top-2 right-2 bg-green-400">
          Close
        </Button>
        {children}
      </div>
    </div>
  );
};

export const EServices = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleButtonClick = (service) => {
    setSelectedService(service);
    setDrawerOpen(true); 
  };

  const closeDrawer = () => {
    setDrawerOpen(false); 
  };

  return (
    <div>
      <Drawer isOpen={drawerOpen} onClose={closeDrawer}>
        {selectedService ? (
          <div className="pt-8">
            <h2>{selectedService.title}</h2>
          </div>
        ) : (
          <p>No service selected.</p>
        )}
      </Drawer>

      <div className="flex flex-wrap gap-10 mb-10">
        {serviceData.length > 0 ? (
          serviceData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              light={item.light}
              buttonProps={{
                buttonText: "Pay",
                onClick: () => handleButtonClick(item),
              }}
              headerImage={item.image || logo} 
            />
          ))
        ) : (
          <p>No service available at the moment.</p>
        )}
      </div>
    </div>
  );
};
