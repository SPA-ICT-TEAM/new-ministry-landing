import { useState } from "react";
import Card from "../Card";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { cashFormater } from "../../utils/helpers";

const Drawer = ({ isOpen, onClose, selectedService }) => {
  const amount = selectedService?.amount ? selectedService.amount : "0.00"; 

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-80 bg-white h-full p-5 shadow-lg relative">
        <h2 className="absolute top-2 w-full right-0 text-center shadow-md p-3 md:text-[24px] font-bold">
          Checkout Now
        </h2>
        {selectedService ? (
          <div className="pt-11">
            <img
              src={selectedService.image || logo}
              alt={selectedService.title}
              className="w-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{selectedService.title}</h2>
            <h3>{selectedService.text}</h3>
            <Button onClick={onClose} className="mt-4 bg-green-400">
              Pay &#8358;{amount}
            </Button>
          </div>
        ) : (
          <p>No service selected.</p>
        )}
      </div>
    </div>
  );
};

export const EServices = ({ ministry }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  console.log(ministry);


  const handleButtonClick = (service) => {
    setSelectedService(service);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <Drawer isOpen={drawerOpen} onClose={closeDrawer} selectedService={selectedService} />

      <div className="flex flex-wrap bg-white rounded-3xl px-10 py-10 gap-10 mb-10">
        {ministry?.services?.length > 0 ? (
          ministry?.services?.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              text={item.description}
              light={item.light}
              buttonProps={{
                buttonText: `Pay ₦${cashFormater(item?.price)}`,
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
