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
        <div className="absolute top-2 w-full right-0  shadow-md p-3 px-6 flex items-center justify-between">
            <h2 className="text-center md:text-[24px] font-bold">
              Checkout
            </h2>
            <Button onClick={onClose} className="bg-red-400">
              Close
            </Button>
          </div>

          {selectedService ? (
            <div className="pt-11">
              <div>
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
        <div className="flex justify-between mt-auto pt-11 ">
          <Button className="bg-green-400 w-full">Pay &#8358;{cashFormater(amount)}</Button>
        </div>
        </div>

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
          <p className="text-center font-bold" >No service available at the moment.</p>
        )}
      </div>
    </div>
  );
};
