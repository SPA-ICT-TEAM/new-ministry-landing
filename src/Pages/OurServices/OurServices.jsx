import { Hero } from "../../components/About/Hero"
import { Services } from "../../components/OurSevice/services"
import { Tomorrow } from "../../components/Tomorrow"

export const OurServices = () =>{
    return(
        <div className="text-black ">
            <div className="container md:pt-24 md:p-5  pt-20 p-3  overflow-hidden max-w-screen">

            <Hero title="Our Sevices"/>
            <Services />
            </div>
            <Tomorrow />
        </div>
    )
}