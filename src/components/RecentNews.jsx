import Heading from "./Heading"
import { useNavigate } from "react-router-dom";
// import Card from "../Card";
import logo from "./../assets/logo.png";
import Card from "./Card2";

const RecentNews = ({ ministry, ministryNews }) => {
    const navigate = useNavigate();
    const newss = (ministry?.news?.length > 0 ? ministry.news : ministryNews?.news) || [];
    const news = [...(newss || [])]?.sort((a,b)=>{
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB.getTime() - dateA.getTime();
      })
    const handleCardClick = (news) => {
      navigate(`/news/${news.id}`);
    };

    // console.log("news", newss)

  return (
    <div className="container relative z-2 text-black">
       <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Recent News"
        />

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
      {news?.length > 0 ? (
        news?.map((item) => (
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
    </div>
  )
}

export default RecentNews
