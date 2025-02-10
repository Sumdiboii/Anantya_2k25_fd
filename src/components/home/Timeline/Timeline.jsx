import React, { useEffect, useState } from "react";
import "./Timeline.css";

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1); // Normalize between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}>
        <div className="point" style={{ top: "5%", backgroundColor: scrollProgress >= 0.07 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "2%" }}></div>
        <div className="date-container" style={{ top: "2%" }}></div>

        <div className="point" style={{ top: "16%", backgroundColor: scrollProgress >= 0.17 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "13%" }}></div>
        <div className="date-container" style={{ top: "13%" }}></div>

        <div className="point" style={{ top: "27%", backgroundColor: scrollProgress >= 0.27 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "24%" }}></div>
        <div className="date-container" style={{ top: "24%" }}></div>

        <div className="point" style={{ top: "39%", backgroundColor: scrollProgress >= 0.37 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "36%" }}></div>
        <div className="date-container" style={{ top: "36%" }}></div>

        <div className="point" style={{ top: "50%", backgroundColor: scrollProgress >= 0.47 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "47%" }}></div>
        <div className="date-container" style={{ top: "47%" }}></div>

        <div className="point" style={{ top: "61%", backgroundColor: scrollProgress >= 0.57 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "58%" }}></div>
        <div className="date-container" style={{ top: "58%" }}></div>

        <div className="point" style={{ top: "72%", backgroundColor: scrollProgress >= 0.67 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "69%" }}></div>
        <div className="date-container" style={{ top: "69%" }}></div>

        <div className="point" style={{ top: "84%", backgroundColor: scrollProgress >= 0.77 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "81%" }}></div>
        <div className="date-container" style={{ top: "81%" }}></div>

        <div className="point" style={{ top: "95%", backgroundColor: scrollProgress >= 0.87 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "92%" }}></div>
        <div className="date-container" style={{ top: "92%" }}></div>

      </div>

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>
    </div>
  );
};

export default Timeline;
