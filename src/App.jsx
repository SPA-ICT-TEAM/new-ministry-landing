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
import { ProjectProvider } from "./ProjectContext";
import { News } from "./Pages/News/News";
import { NewsInfo } from "./Pages/NewsInfo";

const App = () => {
  return (
    <DomainProvider>
      <UserProvider>
        <ProjectProvider>
          <Router>
            <div className="overflow-hidden">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/eServices" element={<Eservices />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsInfo />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </ProjectProvider>
      </UserProvider>
    </DomainProvider>
  );
};

export default App;