import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { mainLogo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { ministry, loading } = useContext(UserContext); // Access ministry and loading
  const location = useLocation(); 
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  // Helper function to determine if the link is active
  const isActive = (url) => {
    if (url === "/") {
      // Exact match for the home path
      return location.pathname === "/";
    } else if (url === "/news") {
      // Check if the path starts with /news, but not exactly /news to avoid highlighting on /news/something
      return location.pathname.startsWith("/news") && location.pathname !== "/";
    } else {
      // General case for other paths
      return location.pathname === url;
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:bg-green-700/90 lg:backdrop-blur ${
        openNavigation ? "bg-green-700/90" : "bg-green-700/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-3">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={mainLogo} width={50} height={45} alt="Logo" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) =>
              item.url.startsWith("#") ? (
                // Use <a> tag for anchor links
                <a
                  key={item.id}
                  href={item.url} // Anchors work with href
                  onClick={handleClick}
                  className={`block relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    isActive(item.url)
                      ? "z-2 lg:text-white font-bold"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ) : (
                // Use Link for regular routes
                <Link
                  key={item.id}
                  to={{
                    pathname: item.url,
                    state: { ministry, loading }, // Pass ministry and loading as state
                  }}
                  onClick={handleClick}
                  className={`block relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    isActive(item.url)
                      ? "z-2 lg:text-white font-bold"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          <HamburgerMenu />
        </nav>

        <Button 
          className="hidden lg:flex !text-green-700 bg-white" 
          onClick={() => window.open('https://egovernance.enugustate.gov.ng/login', '_blank')}
        >
          Login
        </Button>


        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
