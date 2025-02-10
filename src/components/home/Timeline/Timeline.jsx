import React, { useEffect } from "react";
import "./Timeline.css";

const Timeline = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(".line");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    lines.forEach((line) => observer.observe(line));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <div className="line">
        
      </div>

      <div className="line">
      <div className="point" style={{ top: "7%" }}></div>
        <div className="point" style={{ top: "17%" }}></div>
        <div className="point" style={{ top: "27%" }}></div>
        <div className="point" style={{ top: "37%" }}></div>
        <div className="point" style={{ top: "47%" }}></div>
        <div className="point" style={{ top: "57%" }}></div>
        <div className="point" style={{ top: "67%" }}></div>
        <div className="point" style={{ top: "77%" }}></div>
        <div className="point" style={{ top: "87%" }}></div>
      </div>

      <div className="line">
        
      </div>
    </div>
  );
};

export default Timeline;
