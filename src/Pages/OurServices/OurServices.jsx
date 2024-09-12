import { useContext } from "react";
import { Hero } from "../../components/About/Hero";
import { Services } from "../../components/OurSevice/services";
import { UserContext } from "../../UserContext";
import { Tomorrow } from "../../components/Tomorrow";
import { useLocation } from "react-router";

export const OurServices = () => {
  const { ministry: ministryService, loading: isLoading } = useContext(UserContext);
  const location = useLocation();
  const { ministry, loading } = location.state || { ministry: null};

    return(
        <div className=" text-black overflow-hidden max-w-screen">
            <div className="container md:pt-24 md:p-5 pt-20 p-3">

            <Hero
                title="Our Services"
                text="Explore our comprehensive range of services designed to support and enhance your operations."
                />
                <Services ministry={ministry} ministryService={ministryService} isLoading={isLoading} loading={loading} />
            </div>
            <Tomorrow />
        </div>
    )
}