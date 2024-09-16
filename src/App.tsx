import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import ContactUs from "./components/contactUs/ContactUs";
import { Footer } from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Philosophy from "./components/philosophy/Philosophy";
import Projects from "./components/projects/Projects";
import ProjectsDetails from "./components/projects/ProjectsDetails";
import Team from "./components/team/Team";
import { useEffect } from "react";
import "./styles/main.css";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Projects />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectsDetails />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
