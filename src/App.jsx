import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
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
            </Routes>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </DomainProvider>
  );
};

export default App;