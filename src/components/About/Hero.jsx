export const Hero = ({ title , text}) => {
    return (
      <div className="md:py-16 py-8">
        <h1 className="md:text-5xl text-3xl">{title}</h1>
        <p className="text-[14px] md:pt-4 md:max-w-[40%]">{text}</p>
      </div>
    );
  };
  
  