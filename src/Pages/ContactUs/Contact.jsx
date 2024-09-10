import { Hero } from "../../components/About/Hero";
import { ContactForm } from "../../components/Contact/Form";

export const ContactUs = () => {
  return (
    <div className="md:pt-24 md:p-5 pt-20 p-3 text-black overflow-hidden max-w-screen min-h-screen">
      <div className="container">
        <Hero
          title="Get in Touch"
          text="Have a question or want to work together? Fill out the form below and we'll get back to you"
        />
      <ContactForm />
      </div>
    </div>
  );
};
