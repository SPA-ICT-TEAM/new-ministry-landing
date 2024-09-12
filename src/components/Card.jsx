import PropTypes from "prop-types";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import Button from "./Button";
import logo from "../assets/logo.png";
import { useLocation } from "react-router";

const trimText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const Card = ({
  title,
  text,
  iconUrl,
  backgroundUrl,
  light,
  seeMore,
  buttonProps,
  headerImage,
}) => {
  const location = useLocation();
  const isService = location.pathname == "/eServices";
  const isProject = location.pathname == "/project";
  const isNews = location.pathname == "/news";

  const trimmedTitle = title ? trimText(title, 40) : "";
  const trimmedText = text ? trimText(text,70) : "";

  return (
    <div
      className={`block relative p-0.5 border border-green-500 rounded-3xl bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem] ${isProject ? "h-[30rem]" : ""}`}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div
        className={`relative z-2 flex ${isService || isNews ? "pt-[220px]":""} flex-col p-[2.4rem] ${isProject ? "pt-[250px]":""}   ${
          buttonProps ? "" : "pointer-events-none"
        }`}
      >
        {headerImage && (
          <div className="w-full h-[200px] rounded-t-3xl absolute top-0 left-0 overflow-hidden">
            <img
              src={headerImage}
              alt={trimmedTitle}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {trimmedTitle && <h5 className="h5 mb-5">{trimmedTitle}</h5>}
        {trimmedText && <p className="body-2 mb-6 text-n-3">{trimmedText}</p>}
        <div className="flex items-center mt-auto">
          {iconUrl && <img src={iconUrl} width={48} height={48} alt={trimmedTitle} />}
          {seeMore && (
            <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
              {seeMore}
            </p>
          )}

          {buttonProps?.buttonText && (
            <div className="flex items-center">
              <Button onClick={buttonProps?.onClick} className="bg-green-400">
                {buttonProps.buttonText}
              </Button>
              <Arrow />
            </div>
          )}
        </div>
      </div>

      {light && <GradientLight />}

      <div
        className="absolute rounded-3xl inset-0.5 bg-white z-1"
        style={{ clipPath: "url(#benefits)" }}
      >
        {logo && (
          <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 z-[-1]">
            <img
              src={logo}
              width={380}
              height={362}
              alt={trimmedTitle}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* <ClipPath /> */}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  iconUrl: PropTypes.string,
  backgroundUrl: PropTypes.string,
  light: PropTypes.bool,
  seeMore: PropTypes.string,
  buttonProps: PropTypes.shape({
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
  }),
  headerImage: PropTypes.string, 
};

Card.defaultProps = {
  title: "",
  text: "",
  imageUrl: "",
  iconUrl: "",
  backgroundUrl: "",
  light: false,
  seeMore: "",
  buttonProps: null,
  headerImage: null, 
};

export default Card;
