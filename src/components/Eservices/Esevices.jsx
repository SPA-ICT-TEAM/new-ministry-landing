import { useState } from "react";
import Card from "../Card";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { cashFormater } from "../../utils/helpers";

const Drawer = ({ isOpen, onClose, selectedService }) => {
  const amount = selectedService?.price ? selectedService.price : "0.00";

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] bg-white h-full p-5 shadow-lg absolute right-0 top-0 flex flex-col justify-between">
        <div>
          <div className="absolute top-2 w-full right-0 shadow-md p-3 px-6 flex items-center justify-between">
            <h2 className="text-center md:text-[24px] font-bold">Checkout</h2>
            <Button onClick={onClose} className="bg-red-400">
              Close
            </Button>
          </div>

          {selectedService ? (
            <div className="pt-11">
              <div className="mt-11" >
                <img
                  src={selectedService.image || logo}
                  alt={selectedService.name}
                  className="w-full object-cover rounded-3xl mb-4"
                />
                <h2 className="text-xl font-bold">{selectedService.name}</h2>
                <h3>{selectedService.description}</h3>
              </div>
            </div>
          ) : (
            <p>No service selected.</p>
          )}
        <div className="flex justify-between mt-auto pt-11">
          <Button className="bg-green-400 w-full">
            Pay &#8358;{cashFormater(amount)}
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export const EServices = ({ ministry }) => {
  console.log(ministry);
  
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
    <div className="flex flex-col items-center">
      <Drawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        selectedService={selectedService}
      />

      {/* E-Services Container */}
      <div className="mb-10 w-full max-w-7xl">
        <div className="flex justify-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded-xl mb-5">
            Paid-Services
          </div>
        </div>
        <div className="flex flex-wrap bg-white rounded-3xl px-6 py-10 gap-2 justify-start">
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
            <p className="text-center font-bold">
              No e-service available at the moment.
            </p>
          )}
        </div>
      </div>

      {/* Our Services Container */}
      <div className="w-full max-w-7xl">
        <div className="flex justify-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded-xl mb-10 mt-5">
            Services
          </div>
        </div>
        <div className="flex flex-wrap bg-white rounded-3xl px-10 py-10 gap-10 justify-start">
          {ministry?.ourServices?.length > 0 ? (
            ministry?.ourServices?.map((item) => (
              <div key={item.id} className="border border-green-400 p-4 rounded-lg w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)] xl:w-[calc(20%-20px)]">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-n-3">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center font-bold">
              No service available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};