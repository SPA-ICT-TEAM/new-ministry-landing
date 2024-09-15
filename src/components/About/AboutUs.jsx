export const AboutUs = ({ ministry, loading }) => {
  console.log(ministry);
    return(
        <div className="z-1 flex mb-5 p-8 border bg-gray-200 overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="container ">
            <p
              className="text-black body-2 mb-[3rem]"
              dangerouslySetInnerHTML={{ __html: ministry?.ministryDetailsTwo?.vision }}
            />
          </div>

        </div>
    )
}