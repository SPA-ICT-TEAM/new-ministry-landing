import Card from "../Card";

export const Services = ({ ministry, ministryService, isLoading, loading }) => {
  const services = (ministry?.ourServices?.length > 0 ? ministry.ourServices : ministryService?.ourServices) || [];

  return (
    <div className="flex flex-wrap gap-10 bg-white rounded-3xl px-10 py-10 mb-10">
      {services.length > 0 ? (
        services.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            text={item.description}
            light={item.light} 
          />
        ))
      ) : (
        <p>No Service available at the Moment.</p>
      )}
    </div>
  );
};