import { missionData } from "../../constants"
import Card from "../Card";

export const Mission = () => {
    return (
      <div className="flex flex-wrap gap-10 mb-10">
        {missionData.length > 0 ? (
          missionData.map((item) => (
            <Card
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