import { FaPhoneAlt } from "react-icons/fa";

export const Tomorrow = () => {
  return (
    <div className="flex items-center md:p-24 py-24 px-8 justify-center bg-green-100">

    <div className="flex flex-col items-center gap-4 md:max-w-[500px]">
      <h1 className="text-green-900 font-extrabold text-[28px]">Our tomorrow is Here</h1>
      <p className="text-center">
        Take the first step towards a sustainable future. Contact us today for a
        free consultation.
      </p>
      <div>
        <button className="bg-green-400 flex item-center text-white p-3 px-11 md:px-16 gap-3 rounded-lg">
          <FaPhoneAlt />
          Contact Us
        </button>
      </div>
    </div>
    </div>
  );
};
