import React, { useEffect, useState } from "react";
import "./Timeline.css";
import ExploreButton from "./Explore-button/explore-button";

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
        
        <div className="container" style={{ top: "2%" }}>
          <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "3%" }}>
        <p className="glitch" data-text="03 MARCH 2025">03 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>
        

        <div className="point" style={{ top: "16%", backgroundColor: scrollProgress >= 0.17 ? "red" : "white" }}></div>
        
        <div className="container" style={{ top: "13%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "14%" }}>
        <p className="glitch" data-text="04 MARCH 2025">04 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>


        <div className="point" style={{ top: "27%", backgroundColor: scrollProgress >= 0.27 ? "red" : "white" }}></div>
        
        <div className="container" style={{ top: "24%" }}>
        <div className="poster-box">
          <img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "25%" }}>
        <p className="glitch" data-text="03 MARCH 2025">05 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "39%", backgroundColor: scrollProgress >= 0.37 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "36%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "37%" }}>
        <p className="glitch" data-text="03 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "50%", backgroundColor: scrollProgress >= 0.47 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "47%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "48%" }}>
        <p className="glitch" data-text="03 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "61%", backgroundColor: scrollProgress >= 0.57 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "58%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "59%" }}>
        <p className="glitch" data-text="03 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "72%", backgroundColor: scrollProgress >= 0.67 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "69%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "70%" }}>
        <p className="glitch" data-text="03 MARCH 2025">09 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "84%", backgroundColor: scrollProgress >= 0.77 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "81%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "82%" }}>
        <p className="glitch" data-text="03 MARCH 2025">10 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "95%", backgroundColor: scrollProgress >= 0.87 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "92%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BEAST GAMES" style={{ fontSize: "27px", fontWeight: "bold" }}>BEAST GAMES</p>
          <p className="glitch" data-text="BY ISTE" style={{ fontSize: "14px" }}>BY ISTE</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "93%" }}>
        <p className="glitch" data-text="03 MARCH 2025">11 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

      </div>

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>
    </div>
  );
};

export default Timeline;
