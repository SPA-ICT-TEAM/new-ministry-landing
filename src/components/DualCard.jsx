export const DualCard = ({ ministry }) => {
    return (
        <div className="relative container z-1 grid gap-5 lg:grid-cols-2 md:py-24">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={ministry?.commissionerDetails?.photo}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

            </div>

            <div className="p-4  rounded-3xl bg-white shadow-[20px_20px_62px_#aaaaaa,-20px_-20px_62px_#ffffff] overflow-hidden lg:min-h-[46rem] ">
              <div className="py-12 px-4 xl:px-8 ">
                <h4 className="h4 fonte-bold font-black text-green-700 mb-4">Leadership</h4>
                <div className="text-n-3"
                  dangerouslySetInnerHTML={{ __html: ministry?.commissionerDetails?.biography }}
                />
              </div>
            </div>
          </div>
    )
}