import { useContext } from "react";
import { Hero } from "../../components/About/Hero";
import { ContactForm } from "../../components/Contact/Form";
import { UserContext } from "../../UserContext";

export const ContactUs = () => {
  const { ministry, loading } = useContext(UserContext);

  return (
    <div className=" text-black mt-[100px] overflow-hidden max-w-screen ">
      <div className="container">
        <Hero
          title="Get in Touch"
          text="Have a question or want to work together? Fill out the form below and we'll get back to you"
        />
      </div>
      <ContactForm ministry={ministry} loading={loading} />
    </div>
  );
};
