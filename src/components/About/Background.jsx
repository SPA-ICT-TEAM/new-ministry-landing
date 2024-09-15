export const Background = ({ ministry, isLoading }) => {
  return (
    <div className="w-full bg-white border border-n-1/10 overflow-hidden p-8 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5">
          <h4 className="h4 mb-4">Professional Background and Qualifications</h4>
          <p
            className="text-n-3 body-2 mb-[3rem]"
            dangerouslySetInnerHTML={{ __html: ministry?.commissionerDetails?.professional }}
          />
        </div>

        <div>
          <h4 className="h4 mb-4">Achievements and Initiatives</h4>
          <p
            className="text-n-3 body-2 mb-[3rem]"
            dangerouslySetInnerHTML={{ __html: ministry?.commissionerDetails?.achievements }}
          />
        </div>
      </div>
    </div>
  );
};