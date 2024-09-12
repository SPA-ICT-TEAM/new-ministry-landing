import { useContext } from "react";
import { Hero } from "../../components/About/Hero";
import { UserContext } from "../../UserContext";
import { Tomorrow } from "../../components/Tomorrow";
import { NewsContent } from "../../components/News/NewsContent";

export const News = () => {

  const { ministry, loading } = useContext(UserContext);

  return (
    <div className=" text-black overflow-hidden max-w-screen ">
      <div className="md:pt-24 md:p-5 pt-20 p-3 container">
        <Hero
          title="News"
          text="Stay updated with the latest developments and insights from around the state. Explore our curated news articles to keep you informed and ahead."
        />
        <NewsContent ministry={ministry} loading={loading}  />
      </div>
      <Tomorrow />
    </div>
  );
};
