import Section from "./Section";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import { companyLinks, links, socials } from "../utils/helpers";

const Footer = () => {
  return (
    <Section className="py-0 bg-green-700/90">
      <div className="">
        <div className="pb-20 lg:px-20 md:px-9 sm-max:px-5">
          {/* Logo */}
          <div className="pt-4">
            <Link to="/features">
              <img src={logo} alt="enugu logo" className="w-19 h-15" />
            </Link>
          </div>

          {/* Rest of the content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mx-2 text-center md:text-left pt-10">
            {/* Links */}
            <div>
              <h2 className="font-bold underline pb-4">Links</h2>
              <ul className="flex flex-col items-center md:items-start gap-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enugu State */}
            <div>
              <h2 className="font-bold underline pb-4">Enugu State</h2>
              <ul className="flex flex-col items-center md:items-start gap-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="font-bold underline pb-4">Follow Us</h2>
              <ul className="flex gap-4 justify-center md:justify-start">
                {socials.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white text-green-700 flex items-center justify-center w-10 h-10 rounded-full p-2 hover:bg-gray-300 transition-all duration-300">
                        {social.icon}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Subscribe Section */}
              <div className="flex items-center justify-center sm:justify-center md:justify-start lg:justify-start md:flex-row mt-4 gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-md text-black focus:outline-none"
                />
                <Button to="/" className="text-black bg-green-800 px-4 py-2">
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
