import { BenefitCard } from "../Benefits"
import { missionData } from "../../constants"

export const Mission = () => {
    return (
      <div className="flex flex-wrap gap-10 mb-10">
        {missionData.length > 0 ? (
          missionData.map((item) => (
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