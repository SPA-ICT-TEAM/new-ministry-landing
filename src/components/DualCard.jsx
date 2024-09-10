export const DualCard = () =>{
    const service2 = "https://ensg-egovernance.s3.eu-west-2.amazonaws.com/62b9664d-7cef-41cb-a9c2-bd4bc1d34ec1/commissioner-photos/8156bbc1-322b-45c0-88f9-402ab3046eb8.png"
    return (
        <div className="relative z-1 grid gap-5 lg:grid-cols-2 md:py-24">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

            </div>

            <div className="p-4  rounded-3xl bg-white shadow-[20px_20px_62px_#aaaaaa,-20px_-20px_62px_#ffffff] overflow-hidden lg:min-h-[46rem] ">
              <div className="py-12 px-4 xl:px-8 ">
                <h4 className="h4 mb-4">Leadership</h4>
                <h4>Hon. Dr. Sir Martin Chukwunweike (KSP)</h4>
                <p className="body-2 mb-[2rem] text-n-3 pt-2">
                Dr. Martin Chukwunweike hails from Isu-Awaa in Awgu Local Government Area of Enugu State. Born in 1958, had his Primary, Secondary and Tertiary education in Nigeria. Trained in Medical Sciences and established one of the notable Medical Centres in Nigeria. He had also been involved in Politics where he has held positions of trust in different capacities
                </p>
              </div>
            </div>
          </div>
    )
}