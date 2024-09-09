import { BenefitCard } from "../Benefits"
import { serviceData } from "../../constants"

export const Services = () => {
    return (
      <div className="flex flex-wrap gap-10 mb-10">
        {serviceData.length > 0 ? (
          serviceData.map((item) => (
            <BenefitCard
              key={item.id}
              title={item.title}
              text={item.text}
              light={item.light} 
            />
          ))
        ) : (
          <p>No mission details available.</p>
        )}
      </div>
    );
  };