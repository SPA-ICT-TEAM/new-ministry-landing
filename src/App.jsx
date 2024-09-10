import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./Pages/About"; 
import { OurServices} from "./Pages/OurServices/OurServices";
import { Eservices } from "./Pages/Eservicess";
import { Projects } from "./Pages/Projects/Projects";
import { ContactUs } from "./Pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import { UserProvider } from "./UserContext";
import { DomainProvider } from "./DomainContext";

const App = () => {
  return (
    <DomainProvider>
      <UserProvider>
        <Router>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<OurServices />} />
              <Route path="/eServices" element={<Eservices />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </DomainProvider>
  );
};

export default App;