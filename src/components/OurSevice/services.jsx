import { serviceData } from "../../constants"
import Card from "../Card";

export const Services = () => {
    return (
      <div className="flex flex-wrap gap-10 mb-10">
        {serviceData.length > 0 ? (
          serviceData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              light={item.light} 
            />
          ))
        ) : (
          <p>No Service available at the Moment.</p>
        )}
      </div>
    );
  };