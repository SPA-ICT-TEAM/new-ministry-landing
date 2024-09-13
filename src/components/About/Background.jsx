export const Background = ({ ministry, isLoading }) => {
  return (
    <div className="w-full bg-white border border-n-1/10 overflow-hidden p-8 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5">
          <h4 className="h4 mb-4">Professional Background and Qualifications</h4>
          <ol className="list-decimal pl-5 body-2 mb-[3rem] text-n-3">
            <li>First School Leaving Certificate (FSLC)</li>
            <li>West African School Certificate (WASC)</li>
            <li>Bachelor of Medicine, Bachelor of Surgery (MBBS)</li>
            <li>Primary Fellowship in O & G (National)</li>
            <li>Member Nigerian Medical Association (MNMA)</li>
          </ol>
        </div>

        <div>
          <h4 className="h4 mb-4">Achievements and Initiatives</h4>
          <ol className="list-decimal pl-5 body-2 mb-[3rem] text-n-3">
            <li>
              Setting up Strategic Smart Target of the Ministry
              <ol className="list-disc pl-5 pb-4 max-w-[500px]">
                <li>Completion of all outstanding housing developments in the already established Estates of the Ministry.</li>
                <li>Establishment of Mass Housing Estates for Low and Middle-income earners in the State.</li>
                <li>Housing Slum Elimination: 25 Slum Settlements identified and 2 chosen for the pilot programme.</li>
                <li>Establishment of Slum resettlement of Mass Housing at Satellite Estate Akpuoga Nike, Enugu.</li>
                <li>Development of Enugu State Housing Policy.</li>
              </ol>
            </li>
            <li>
              Verification of all allocations in the Ministry’s Estates to eliminate double allocations and other irregularities and establish a functional Land Registry for the Ministry.
            </li>
            <li>
              Establishment of e-governance office for the Ministry
              <ol className="list-disc pl-5 pb-4 max-w-[500px]">
                <li>Innovation Estate, Coal Camp Enugu</li>
                <li>New Town Housing Estate Oji River</li>
                <li>Up Hill Housing Estate Agbogugu Awgu Local Government Area</li>
                <li>Reviving Rectors Garden Estate, Independence Layout Enugu</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};