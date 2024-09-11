import { serviceData } from "../../constants"
import Card from "../Card";
import logo from "../../assets/logo.png"

export const EServices = () => {
    return (
      <div className="flex flex-wrap gap-10 mb-10">
        {serviceData.length > 0 ? (
          serviceData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              light={item.light} 
              buttonProps={{
                buttonText: "Pay",
                onClick: () => console.log(item.id)
              }}
              headerImage={item.image || logo}
            
            />
          ))
        ) : (
          <p>No Service available at the Moment.</p>
        )}
      </div>
    );
  };