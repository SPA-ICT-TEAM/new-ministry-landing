/* eslint-disable no-unused-vars */

export const Mission = ({ ministry, loading, ministryAbout, isLoading }) => {
  const getMissionData = () => {
    if (ministry?.ministryDetailsTwo?.mission) {
      return ministry.ministryDetailsTwo.mission;
    } else if (ministryAbout?.ministryDetailsTwo?.mission) {
      return ministryAbout.ministryDetailsTwo.mission;
    }
    return null;
  };

  const getVisionData = () => {
    if (ministry?.ministryDetailsTwo?.vision) {
      return ministry.ministryDetailsTwo.vision;
    } else if (ministryAbout?.ministryDetailsTwo?.vision) {
      return ministryAbout.ministryDetailsTwo.vision;
    }
    return null;
  };

  const missionData = getMissionData();
  const visionData = getVisionData();

  return (
    <div className="container flex flex-col md:flex-row justify-between gap-10 mb-10">
      {/* First container for mission data */}
      <div className="flex flex-col justify-center border-4 rounded-xl border-green-600 px-10 py-5 items-center w-full md:w-1/2 min-h-[300px] shadow-lg">
        {missionData ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p
              className="text-black"
              dangerouslySetInnerHTML={{ __html: missionData }}
            />
          </div>
        ) : (
          <p>No mission details available.</p>
        )}
      </div>

      {/* Second container for vision data */}
      <div className="flex flex-col justify-center border-4 rounded-xl border-green-600 px-10 py-5 items-center w-full md:w-1/2 min-h-[300px] shadow-lg">
        {visionData ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p
              className="text-black"
              dangerouslySetInnerHTML={{ __html: visionData }}
            />
          </div>
        ) : (
          <p>No vision details available.</p>
        )}
      </div>
    </div>
  );
};