import { Hero } from "../../components/About/Hero";
import { Tomorrow } from "../../components/Tomorrow";
import { NewsContent } from "../../components/News/NewsContent";
import { useLocation } from "react-router";
import SplashLoader from "../../components/SplashLoader";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

export const News = () => {
  const location = useLocation();
  const { ministry, loading } = location.state || { ministry: null };
  const { ministry: ministryNews, loading: isLoading } = useContext(UserContext);

  if (loading) {
    return <SplashLoader />;
  }

  return (
    <div className="text-black overflow-hidden max-w-screen">
      <div className="md:pt-24 md:p-5 pt-20 p-3 container">
        <Hero
          title="News"
          text="Stay updated with the latest developments and insights from around the state. Explore our curated news articles to keep you informed and ahead."
        />
        <NewsContent ministry={ministry} ministryNews={ministryNews} />
      </div>
      <Tomorrow />
    </div>
  );
};
