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
        


        <div className="point" style={{ top: "2%", backgroundColor: scrollProgress >= 0.02 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "1%" }}>
          <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "1.5%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</p>
        </div>
        



        <div className="point" style={{ top: "6%", backgroundColor: scrollProgress >= 0.06 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "5%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "5.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 7:00 PM">8:00 AM - 7:00 PM</p>
        </div>




        <div className="point" style={{ top: "10%", backgroundColor: scrollProgress >= 0.10 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "9%" }}>
        <div className="poster-box">
          <img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "9.5%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</p>
        </div>



        <div className="point" style={{ top: "14%", backgroundColor: scrollProgress >= 0.14 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "13%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "13.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>



        <div className="point" style={{ top: "18%", backgroundColor: scrollProgress >= 0.18 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "17%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "27px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "17.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>



        <div className="point" style={{ top: "22%", backgroundColor: scrollProgress >= 0.22 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "21%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "27px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "21.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</p>
        </div>



        <div className="point" style={{ top: "26%", backgroundColor: scrollProgress >= 0.26 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "25%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "24px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "25.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</p>
        </div>




        <div className="point" style={{ top: "30%", backgroundColor: scrollProgress >= 0.30 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "29%" }}> 
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "24px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "29.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>



        <div className="point" style={{ top: "34%", backgroundColor: scrollProgress >= 0.34 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "33%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "27px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "33.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM</p>
        </div>



        <div className="point" style={{ top: "38%", backgroundColor: scrollProgress >= 0.38 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "37%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "24px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "37.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</p>
        </div>



        <div className="point" style={{ top: "42%", backgroundColor: scrollProgress >= 0.42 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "41%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="ACTION REPLAY" style={{ fontSize: "24px", fontWeight: "bold" }}>ACTION REPLAY</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "41.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</p>
        </div>




        <div className="point" style={{ top: "46%", backgroundColor: scrollProgress >= 0.46 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "45%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="ACTION REPLAY" style={{ fontSize: "24px", fontWeight: "bold" }}>ACTION REPLAY</p>
          <p className="glitch" data-text="ROUND 3, 4" style={{ fontSize: "14px" }}>ROUND 3, 4</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "45.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 2:00 PM">10:00 AM - 2:00 PM</p>
        </div>



        <div className="point" style={{ top: "50%", backgroundColor: scrollProgress >= 0.50 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "49%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="MASTERCHEF UI" style={{ fontSize: "24px", fontWeight: "bold" }}>MASTERCHEF UI</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "49.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "54%", backgroundColor: scrollProgress >= 0.54 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "53%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="MASTERCHEF UI" style={{ fontSize: "24px", fontWeight: "bold" }}>MASTERCHEF UI</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "53.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 7:00 PM">4:00 PM - 7:00 PM</p>
        </div>


        <div className="point" style={{ top: "58%", backgroundColor: scrollProgress >= 0.58 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "57%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="MASTERCHEF UI" style={{ fontSize: "24px", fontWeight: "bold" }}>MASTERCHEF UI</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "57.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</p>
        </div>



        <div className="point" style={{ top: "62%", backgroundColor: scrollProgress >= 0.62 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "61%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BYTE ME" style={{ fontSize: "27px", fontWeight: "bold" }}>BYTE ME</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "61.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "66%", backgroundColor: scrollProgress >= 0.66 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "65%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BYTE ME" style={{ fontSize: "27px", fontWeight: "bold" }}>BYTE ME</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "65.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="3:00 PM - 7:00 PM">3:00 PM - 7:00 PM</p>
        </div>



        <div className="point" style={{ top: "70%", backgroundColor: scrollProgress >= 0.70 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "69%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS" style={{ fontSize: "22px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "69.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</p>
        </div>



        <div className="point" style={{ top: "74%", backgroundColor: scrollProgress >= 0.74 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "73%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS" style={{ fontSize: "22px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "73.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "78%", backgroundColor: scrollProgress >= 0.78 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "77%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS" style={{ fontSize: "22px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "77.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>




        <div className="point" style={{ top: "82%", backgroundColor: scrollProgress >= 0.82 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "81%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="INNOVATE X" style={{ fontSize: "27px", fontWeight: "bold" }}>INNOVATE X</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "81.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 1:00 PM">9:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "86%", backgroundColor: scrollProgress >= 0.86 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "85%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="SHE SOLVES" style={{ fontSize: "27px", fontWeight: "bold" }}>SHE SOLVES</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "85.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 2:00 PM">8:00 AM - 2:00 PM</p>
        </div>



        <div className="point" style={{ top: "90%", backgroundColor: scrollProgress >= 0.90 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "89%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="SHERLOCK" style={{ fontSize: "27px", fontWeight: "bold" }}>SHERLOCK</p>
          <p className="glitch" data-text="ROUND 2, 3" style={{ fontSize: "14px" }}>ROUND 2, 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "89.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 1:00 PM">8:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "94%", backgroundColor: scrollProgress >= 0.94 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "93%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODIGO" style={{ fontSize: "27px", fontWeight: "bold" }}>CODIGO</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "93.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</p>
        </div>



        <div className="point" style={{ top: "98%", backgroundColor: scrollProgress >= 0.98 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "97%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODIGO" style={{ fontSize: "27px", fontWeight: "bold" }}>CODIGO</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "97.5%" }}>
        <p className="glitch" data-text="08 MARCH 2025">08 MARCH 2025</p>
        <p className="glitch" data-text="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</p>
        </div>
      
      </div>






      


      

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>
    </div>
  );
};

export default Timeline;
