import PropTypes from "prop-types";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import Button from "./Button";
import logo from "../assets/logo.png";
import { useLocation } from "react-router";
import { useMemo } from "react";

const trimText = (text, maxLength) =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

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
  const routeType = useMemo(() => {
    const { pathname } = location;
    return {
      isService: pathname === "/eServices" || pathname === "/",
      isProject: pathname === "/project",
      isNews: pathname === "/news",
      isServicePage: pathname === "/services",
    };
  }, [location]);

  const trimmedTitle = useMemo(
    () => (title ? trimText(title, 40) : ""),
    [title]
  );
  const trimmedText = useMemo(() => (text ? trimText(text, 70) : ""), [text]);

  const handleButtonClick = (e) => {
    if (location.pathname === "/eServices") {
      e.preventDefault();
      window.open("https://irs.en.gov.ng/pay/flutterwave", "_blank");
    } else if (buttonProps?.onClick) {
      buttonProps.onClick(e);
    }
  };

  return (
    <div
      className={`block relative p-0.5 border border-green-500 rounded-3xl bg-no-repeat w-full bg-cover ${
        routeType.isProject ? "h-[30rem]" : ""
      } ${
        routeType.isNews || routeType.isServicePage ? "w-full" : "w-[300px]"
      }`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div
        className={`relative z-2 flex flex-col p-[2.4rem] ${
          routeType.isService || routeType.isNews ? "pt-[220px]" : ""
        } ${routeType.isProject ? "pt-[250px]" : ""}`}
      >
        {headerImage && (
          <div
            className={`w-full absolute top-0 left-0 overflow-hidden ${
              routeType.isNews
                ? "h-full rounded-3xl"
                : "h-[250px] rounded-t-3xl"
            }`}
          >
            <img
              src={headerImage}
              alt={trimmedTitle}
              className="w-full h-full object-cover"
            />
            {routeType.isNews && (
              <div
                onClick={handleButtonClick}
                className="absolute cursor-pointer flex flex-col items-center justify-end inset-0 bg-black bg-opacity-50 p-3"
              >
                <h2 className="text-white font-bold text-xl text-center">
                  {trimmedText}
                </h2>
              </div>
            )}
          </div>
        )}

        {trimmedTitle && !routeType.isNews && (
          <h5 className="h5 mb-5">{trimmedTitle}</h5>
        )}
        {trimmedText && !routeType.isNews && (
          <p className="body-2 mb-6 text-n-3">{trimmedText}</p>
        )}

        <div className="flex items-center mt-auto">
          {iconUrl && (
            <img src={iconUrl} width={48} height={48} alt={trimmedTitle} />
          )}
          {seeMore && (
            <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
              {seeMore}
            </p>
          )}

          {buttonProps?.buttonText && !routeType.isNews && (
            <div className="flex items-center">
              <Button onClick={handleButtonClick} className="bg-green-400">
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
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
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
  iconUrl: "",
  backgroundUrl: "",
  light: false,
  seeMore: "",
  buttonProps: null,
  headerImage: null,
};

export default Card;