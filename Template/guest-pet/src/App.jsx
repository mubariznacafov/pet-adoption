import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Blog from "./components/Blog";
import ZooShop from "./components/ZooShop";
import Adoption from "./components/Adoption";
import Veterinary from "./components/Veterinary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import YourPet from "./components/YourPet";
// import Adoption from "./components/Adoption";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/adoption" element={<Adoption />} /> */}
          <Route path="/veterinary" element={<Veterinary />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/zoo-shop" element={<ZooShop />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/your-pet" element={<YourPet />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
