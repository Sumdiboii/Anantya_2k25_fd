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
        <div className="point" style={{ top: "7%", backgroundColor: scrollProgress >= 0.07 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "17%", backgroundColor: scrollProgress >= 0.17 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "27%", backgroundColor: scrollProgress >= 0.27 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "37%", backgroundColor: scrollProgress >= 0.37 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "47%", backgroundColor: scrollProgress >= 0.47 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "57%", backgroundColor: scrollProgress >= 0.57 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "67%", backgroundColor: scrollProgress >= 0.67 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "77%", backgroundColor: scrollProgress >= 0.77 ? "red" : "white" }}></div>
        <div className="point" style={{ top: "87%", backgroundColor: scrollProgress >= 0.87 ? "red" : "white" }}></div>
      </div>

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>
    </div>
  );
};

export default Timeline;
