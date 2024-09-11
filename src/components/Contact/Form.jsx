import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../Button';

export const ContactForm = ({ ministry }) => {
    const [captchaVerified, setCaptchaVerified] = useState(false);
    console.log(ministry);
  
    const handleCaptchaChange = (value) => {
      if (value) {
        setCaptchaVerified(true);
      }
    };
  
    return (
      <div className="w-full min-w-full  md:p-0 relative flex items-center justify-center">
        <div className="py-[6rem] container bg-white mb-15 rounded-3xl relative lg:px-[6.5rem] md:px-10 flex flex-col md:flex-row items-start justify-between gap-[2rem] w-full">
          <div className='absolute  w-full flex justify-center z-0'>
              <h1 className="text-transparent text-9xl md:text-9xl lg:text-[200px] font-bold border-[#808080] opacity-10" 
                  style={{ WebkitTextStroke: '1px white', textStroke: '1px white' }}>
                  Contact Us
              </h1>
          </div>
          <div className="h-full flex flex-col justify-between gap-20 text-white z-10">
            <div>
              <h2 className="font-bold text-black">Our Office Address</h2>
              <p className="text-sm md:pt-2 font-thin text-gray-600">{ministry?.ministryDetailsTwo?.address}</p>
            </div>
            <div>
              <h2 className="font-bold text-black">Phone Number</h2>
              <p className="text-sm md:pt-2 font-thin text-gray-600">{ministry?.ministryDetailsTwo?.phone}</p>
            </div>
            <div>
              <h2 className="font-bold text-black">E-Mail Address</h2>
              <p className="text-sm md:pt-2 font-thin text-gray-600">{ministry?.ministryDetailsTwo?.email}</p>
            </div>
            <div>
              <h2 className="font-bold text-black">Office Hour</h2>
              <p className="text-sm md:pt-2 font-thin text-gray-600">{ministry?.ministryDetailsTwo?.office_hours}</p>
            </div>
          </div>
  
          <div className="w-full md:w-[50%] relative z-10">
            <form className="flex flex-col items-start text-black">
              {[
                { label: 'Your Name', id: 'name', type: 'text' },
                { label: 'Your Email', id: 'email', type: 'email' },
                { label: 'Your Phone Number', id: 'phone', type: 'tel' },
                { label: 'Your Message', id: 'message', type: 'text' },
              ].map((input, index) => (
                <div key={index} className="mb-12 w-full md:w-[70%] text-black sm:w-[70%]">
                  <label htmlFor={input.id} className="text-black pb-1">
                    {input.label}
                  </label>
                  <input
                    required
                    type={input.type}
                    id={input.id}
                    className="border-b border-gray-600 bg-transparent text-white w-full outline-none"
                  />
                </div>
              ))}
  
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaChange}
              />
  
              <Button
                type="submit"
                disabled={!captchaVerified}
                className={` text-white bg-green-700 py-2 px-4 rounded ${
                  !captchaVerified ? 'mt-3 cursor-not-allowed' : 'hover:bg-opacity-80'
                }`}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  };
