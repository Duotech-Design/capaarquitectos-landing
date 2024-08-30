import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Team from "./components/team/Team";
import ContactUs from "./components/contactUs/ContactUs";
import { Footer } from "./components/footer/Footer";
import Philosophy from "./components/philosophy/philosophy";
import "./styles/main.css";

function App() {
  return (
    <Router>
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
