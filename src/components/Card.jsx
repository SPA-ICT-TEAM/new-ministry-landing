import PropTypes from "prop-types";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";
import logo from "../assets/logo.png";

const Card = ({
  title,
  text,
  imageUrl,
  iconUrl,
  backgroundUrl,
  light,
  seeMore,
  buttonProps,
  headerImage,
}) => {
  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div
        className={`relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]  ${
          buttonProps ? "" : "pointer-events-none"
        }`}
      >
        {headerImage && (
          <div>
            <img
              src={headerImage}
              width={380}
              height={362}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {title && <h5 className="h5 mb-5">{title}</h5>}
        {text && <p className="body-2 mb-6 text-n-3">{text}</p>}
        <div className="flex items-center mt-auto">
          {iconUrl && <img src={iconUrl} width={48} height={48} alt={title} />}
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
              alt={title}
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
