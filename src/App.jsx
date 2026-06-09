import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Homepage from "./pages/Homepage.jsx";
import News from "./pages/News.jsx";
import OurPackages from "./pages/OurPackages.jsx";
import Testimonies from "./pages/Testimonies.jsx";
import Flight from "./pages/Flight.jsx";
import Customized from "./pages/Customized.jsx";
import Hotel from "./pages/Hotel.jsx";
import Travel from "./pages/Travel.jsx";
import Vacation from "./pages/Vacation.jsx";
import Visa from "./pages/Visa.jsx";


function App() {
  return (
    <Router>
    

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/packages" element={<OurPackages />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/customized" element={<Customized />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/vacation" element={<Vacation />} />
        <Route path="/visa" element={<Visa />} />
      </Routes>

    </Router>
  );
}

export default App;