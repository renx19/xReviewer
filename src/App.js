import React, { useState, useEffect } from "react";
import Navbar from "./Pages/Navbar";
import DotGroup from "./Pages/DotGroup";
import Home from "./Pages/Home"; // Updated import path
import ToDoApp from "./Pages/ToDoApp"; // Updated import path
import Notes from "./Pages/Notes"; // Updated import path
import Flashcards from "./Pages/Flashcards"; // Updated import path
import Footer from "./Pages/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Quiz from "./Pages/Quiz";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className={`app`} style={{ overflowY: "auto", maxHeight: "100vh" }}>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full mb-10 ">
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/ToDoApp" element={<ToDoApp />} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/Quiz" element={<Quiz />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
