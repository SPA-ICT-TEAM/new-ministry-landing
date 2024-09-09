import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About"; 
import ButtonGradient from "./assets/svg/ButtonGradient";
import { OurServices} from "./Pages/OurServices/OurServices";
import { Eservices } from "./Pages/Eservicess";
import { Projects } from "./Pages/Projects/Projects";
import { ContactUs } from "./Pages/ContactUs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/eservices" element={<Eservices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
      <ButtonGradient />
      <Footer />
    </>
  );
};

export default App;
