import Section from "./Section";
import { socials } from "../constants";
import { Link } from "react-router-dom";
import {links} from "../constants/index"
import logo from "../assets/logo.png"
import Button from "./Button";

const Footer = () => {
  return (
    <Section  className="py-0 bg-green-700/90">
      <div className="">
      <div className=" pb-20 lg:px-20 md:px-9 sm-max:px-5">
        <div className="pb-6">
          <Link to="/features">
            <img
              src={logo}
              alt="recheix-games"
              className="w-16 h-16"
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
                    className="hover:text-[#227EF3]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold pb-4">Company</h2>
            {/* <ul className="flex flex-col items-start gap-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-[#227EF3]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          <div>
            <h2 className="font-bold pb-4">Follow Us</h2>
            {/* <ul className="flex gap-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white flex items-center justify-center w-10 h-10 rounded-full p-2 hover:bg-gray-300 transition-all duration-300">
                      {social.icon}
                    </div>
                  </a>
                </li>
              ))}
            </ul> */}

            <div className="flex items-center mt-4 md-max:flex md-max:flex-col md-max:items-start md-max:gap-1">
              <input
                type="email"
                placeholder="Email"
                className="bg-white px-4 py-2 rounded-md text-black focus:outline-none mr-1"
              />
              <Button
                to="/"
                className="text-white bg-[#227EF3] px-4 py-2"
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
