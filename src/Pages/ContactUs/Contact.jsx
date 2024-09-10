import { Hero } from "../../components/About/Hero";
import { ContactForm } from "../../components/Contact/Form";

export const ContactUs = () => {
  return (
    <div className=" text-black overflow-hidden max-w-screen ">
      <div className="container">
        <Hero
          title="Get in Touch"
          text="Have a question or want to work together? Fill out the form below and we'll get back to you"
        />
      </div>
      <ContactForm />
    </div>
  );
};
