import { useContext } from "react";
import { Hero } from "../../components/About/Hero"
import { Services } from "../../components/OurSevice/services"
import { UserContext } from "../../UserContext";
import { Tomorrow } from "../../components/Tomorrow";

export const OurServices = () => {
  const { ministry } = useContext(UserContext);

    return(
        <div className=" text-black overflow-hidden max-w-screen">
            <div className="container md:pt-24 md:p-5 pt-20 p-3">

            <Hero
                title="Our Services"
                text="Explore our comprehensive range of services designed to support and enhance your operations."
                />
                <Services ministry={ministry} />
            </div>
            <Tomorrow />
        </div>
    )
}