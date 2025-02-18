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
        
        <div className="point" style={{ top: "5%", backgroundColor: scrollProgress >= 0.05 ? "red" : "white" }}></div>
        
        <div className="container" style={{ top: "2%" }}>
          
          <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "3%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 AM - 7:00 PM</p>
        </div>
        

        <div className="point" style={{ top: "16%", backgroundColor: scrollProgress >= 0.17 ? "red" : "white" }}></div>
        
        <div className="container" style={{ top: "13%" }}>
        
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "14%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 AM - 7:00 PM</p>
        </div>


        <div className="point" style={{ top: "27%", backgroundColor: scrollProgress >= 0.27 ? "red" : "white" }}></div>
        
        <div className="container" style={{ top: "24%" }}>
        
        <div className="poster-box">
          <img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "25%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>

        <div className="point" style={{ top: "39%", backgroundColor: scrollProgress >= 0.37 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "36%" }}>
        
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "27px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "37%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>

        <div className="point" style={{ top: "50%", backgroundColor: scrollProgress >= 0.47 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "47%" }}>
        
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "27px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "48%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "61%", backgroundColor: scrollProgress >= 0.57 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "58%" }}>
        
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "59%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 7:00 PM">9:00 AM - 11:00 AM</p>
        </div>

        <div className="point" style={{ top: "72%", backgroundColor: scrollProgress >= 0.67 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "69%" }}>
        
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="ACTION REPLAY" style={{ fontSize: "24px", fontWeight: "bold" }}>ACTION REPLAY</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "70%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 12:00 PM">10:00 AM - 1:00 PM</p>
        </div>

        <div className="point" style={{ top: "84%", backgroundColor: scrollProgress >= 0.77 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "81%" }}>
        
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="MASTERCHEF UI" style={{ fontSize: "24px", fontWeight: "bold" }}>MASTERCHEF UI</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          
          </div>
        </div>

        <div className="date-box" style={{ top: "82%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</p>
        </div>

        <div className="point" style={{ top: "95%", backgroundColor: scrollProgress >= 0.87 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "92%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BYTE ME " style={{ fontSize: "27px", fontWeight: "bold" }}>BYTE ME</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>

        <div className="date-box" style={{ top: "93%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="11:00 AM - 1:00 PM">9:00 AM - 11:00 AM</p>
        </div>
      </div>


      

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>
    </div>
  );
};

export default Timeline;
