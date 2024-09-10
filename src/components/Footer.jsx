import Section from "./Section";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import Button from "./Button";
import { companyLinks, links, socials } from "../utils/helpers";

const Footer = () => {
  return (
    <Section  className=" bg-green-700/90">
      <div className="">
      <div className=" pb-20 lg:px-20 md:px-9 sm-max:px-5">
        <div className="pb-6">
          <Link to="/features">
            <img
              src={logo}
              alt="enugu logo"
              className="w-19 h-15"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mx-2">
          <div>
            <h2 className="font-bold pb-4">Links</h2>
            <ul className="flex flex-col items-start gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold pb-4">Enugu State</h2>
            <ul className="flex flex-col items-start gap-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold pb-4">Follow Us</h2>
            <ul className="flex gap-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" bg-white text-green-700 flex items-center justify-center w-10 h-10 rounded-full p-2 hover:bg-gray-300 transition-all duration-300">
                      {social.icon}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center mt-4 md-max:flex md-max:flex-col md-max:items-start md-max:gap-1">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-md text-black focus:outline-none mr-1"
              />
              <Button
                to="/"
                className="text-black bg-green-800 px-4 py-2"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Section>
  );
};

export default Footer;
