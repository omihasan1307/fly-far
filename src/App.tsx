import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { HeroSection } from "./components/HeroSection";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import theme from "./theme";
import SliderSections from "./components/SliderSections";
import Flight from "./components/Flight";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SliderSections />
              </>
            }
          />
          <Route path="/flights" element={<Flight />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
