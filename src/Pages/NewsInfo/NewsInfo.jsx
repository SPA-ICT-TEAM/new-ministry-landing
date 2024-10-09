import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import logo from "../../assets/logo.png";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../../components/Button";

export const NewsInfo = () => {
  const { id } = useParams();
  console.log("Selected news ID:", id);
  const { ministry } = location.state || { ministry: null };
  const { ministry: ministryNews } = useContext(UserContext);
  console.log(ministryNews, "this");

  const newsData =
    ministry?.news?.length > 0 ? ministry.news : ministryNews?.news || [];
  const selectedNews = newsData.find((news) => String(news.id) === id);

  if (!selectedNews) {
    return <p className="pt-36 text-black p-8">No news selected.</p>;
  }

  return (
    <div className="">
      <div className="w-full mt-16 lg:mt-20 flex flex-col justify-center items-center">
        <div
          className="w-full relative h-[300px] lg:h-[40vh] bg-cover bg-center bg-no-repeat flex items-center border-b-4 border-t-0 border-[#ffffff]"
          style={{ backgroundImage: `url(${selectedNews.image || logo})` }}
        ></div>
      </div>
      <div className="container mx-auto p-5 pt-0 text-black relative h-[600px]">
        <div className="left-0 w-full flex absolute justify-center items-center md:-mt-16 -mt-11 flex-col gap-1">
     
          <div className="shadow-2xl p-8 bg-white w-full md:w-[70%] rounded-t-xl h-[640px] overflow-y-scroll">
          <div className="flex px-3 md:px-0 text-green-600 items-center w-full md:w-[70%] gap-3">
            <Link to="/" className="cursor-pointer hover:text-green-800">Home</Link>
            <RiArrowRightSLine />
            <Link to="/news" className="cursor-pointer hover:text-green-800">News</Link>
            <RiArrowRightSLine />
            <h1 className="cursor-pointer">{selectedNews.title}</h1>
          </div>

            <h2 className="text-2xl font-extrabold">{selectedNews.title}</h2>
            <h3 className="mt-2 font-extralight">{selectedNews.content}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
