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
