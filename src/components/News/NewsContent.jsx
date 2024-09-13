import { useState } from "react";
import Card from "../Card";
import logo from "../../assets/logo.png";
import Button from "../Button";

const Drawer = ({ isOpen, onClose, selectedNews }) => {

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
              News update
            </h2>
            <Button onClick={onClose} className="bg-red-400">
              Close
            </Button>
          </div>

          {selectedNews ? (
            <div className="pt-11">
              <div>
                <img
                  src={selectedNews.image || logo}
                  alt={selectedNews.name}
                  className="w-full object-cover rounded-3xl mb-4"
                />
                <h2 className="text-xl font-bold">{selectedNews.title}</h2>
                <h3>{selectedNews.content}</h3>
              </div>
            </div>
          ) : (
            <p className="pt-24">No news selected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const NewsContent = ({ ministry, ministryNews, isLoading }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const newss = (ministry?.news?.length > 0 ? ministry.news : ministryNews?.news) || [];
  console.log(newss);

  console.log(ministry);
  console.log(ministryNews);

  const handleButtonClick = (news) => {
    setSelectedNews(news);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <Drawer isOpen={drawerOpen} onClose={closeDrawer} selectedService={selectedNews} />

      <div className="flex flex-wrap bg-white rounded-3xl px-10 py-10 gap-10 mb-10">
        {newss?.length > 0 ? (
          newss?.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.content}
              light={item.light}
              buttonProps={{
                buttonText: "See more",
                onClick: () => handleButtonClick(item),
              }}
              headerImage={item.image || logo}
            />
          ))
        ) : (
          <p className="text-center font-bold">No News available at the moment.</p>
        )}
      </div>
    </div>
  );
};
