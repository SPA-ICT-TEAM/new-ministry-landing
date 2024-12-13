import { useNavigate } from "react-router-dom";
import Card from "../Card";
import logo from "../../assets/logo.png";

export const NewsContent = ({ ministry, ministryNews }) => {
  const navigate = useNavigate();
  const newss = (ministry?.news?.length > 0 ? ministry.news : ministryNews?.news) || [];

  const handleCardClick = (news) => {
    navigate(`/news/${news.id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
      {newss?.length > 0 ? (
        newss?.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.content}
            light={item.light}
            buttonProps={{
              buttonText: "See more",
              onClick: () => handleCardClick(item),
            }}
            headerImage={item.image || logo}
          />
        ))
      ) : (
        <p className="text-center font-bold">No News available at the moment.</p>
      )}
    </div>
  );
};
