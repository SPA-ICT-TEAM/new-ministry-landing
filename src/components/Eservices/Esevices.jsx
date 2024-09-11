import { useState } from "react";
import { serviceData } from "../../constants";
import Card from "../Card";
import logo from "../../assets/logo.png";
import Button from "../Button";

const Drawer = ({ isOpen, onClose, selectedService }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-80 bg-white h-full p-5 shadow-lg relative">
        <h2 className="absolute top-2 w-full right-0 text-center shadow-md p-3 md:text-[24px] font-bold">
          Checkout Now
        </h2>
        {selectedService ? (
          <div className="pt-11 ">
            <img
              src={selectedService.image || logo}
              alt={selectedService.title}
              className="size-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{selectedService.title}</h2>
            <h2 className=" ">{selectedService.text}</h2>
            <Button onClick={onClose} className="mt-4 bg-green-400">
              Pay &#8358;{selectedService.amount}
            </Button>
          </div>
        ) : (
          <p>No service selected.</p>
        )}
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
      {/* Drawer */}
      <Drawer isOpen={drawerOpen} onClose={closeDrawer} selectedService={selectedService} />

      {/* Service Cards */}
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
