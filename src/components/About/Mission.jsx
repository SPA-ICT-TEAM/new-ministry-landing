export const Mission = ({ ministry, loading }) => {
  return (
    <div className="container flex flex-col md:flex-row justify-between gap-10 mb-10">
      {/* First container for mission data */}
      <div className="flex flex-col justify-center border-4 rounded-xl border-green-600 px-10 items-center w-full md:w-1/2 min-h-[300px]">
        {ministry?.ministryDetailsTwo?.mission ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p
              className="text-black"
              dangerouslySetInnerHTML={{ __html: ministry?.ministryDetailsTwo?.mission }}
            />
          </div>
        ) : (
          <p>No mission details available.</p>
        )}
      </div>

      {/* Second container for vision data */}
      <div className="flex flex-col justify-center border-4 rounded-xl border-green-600 px-10 items-center w-full md:w-1/2 min-h-[300px]">
        {ministry?.ministryDetailsTwo?.vision ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p
              className="text-black"
              dangerouslySetInnerHTML={{ __html: ministry?.ministryDetailsTwo?.vision }}
            />
          </div>
        ) : (
          <p>No vision details available.</p>
        )}
      </div>
    </div>
  );
};