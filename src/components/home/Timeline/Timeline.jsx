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
        


        <div className="point" style={{ top: "3.8%", backgroundColor: scrollProgress >= 0.038 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "2.8%" }}>
          <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "3.2%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 AM - 7:00 PM</p>
        </div>
        



        <div className="point" style={{ top: "7.6%", backgroundColor: scrollProgress >= 0.076 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "6.6%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "7%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 AM - 7:00 PM</p>
        </div>




        <div className="point" style={{ top: "11.4%", backgroundColor: scrollProgress >= 0.114 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "10.4%" }}>
        <div className="poster-box">
          <img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "10.8%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>



        <div className="point" style={{ top: "15.2%", backgroundColor: scrollProgress >= 0.152 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "14.2%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "27px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "14.6%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>



        <div className="point" style={{ top: "19%", backgroundColor: scrollProgress >= 0.19 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "18%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "27px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "18.4%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>



        <div className="point" style={{ top: "22.8%", backgroundColor: scrollProgress >= 0.228 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "21.8%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "22.2%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 7:00 PM">9:00 AM - 11:00 AM</p>
        </div>



        <div className="point" style={{ top: "26.6%", backgroundColor: scrollProgress >= 0.266 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "25.6%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="ACTION REPLAY" style={{ fontSize: "24px", fontWeight: "bold" }}>ACTION REPLAY</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "26%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 12:00 PM">10:00 AM - 1:00 PM</p>
        </div>




        <div className="point" style={{ top: "30.4%", backgroundColor: scrollProgress >= 0.304 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "29.4%" }}> 
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="MASTERCHEF UI" style={{ fontSize: "24px", fontWeight: "bold" }}>MASTERCHEF UI</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "29.8%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "34.2%", backgroundColor: scrollProgress >= 0.342 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "33.2%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BYTE ME " style={{ fontSize: "27px", fontWeight: "bold" }}>BYTE ME</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "33.6%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "38%", backgroundColor: scrollProgress >= 0.380 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "37%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "24px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "37.4%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</p>
        </div>



        <div className="point" style={{ top: "41.8%", backgroundColor: scrollProgress >= 0.418 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "40.8%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "27px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "41.2%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</p>
        </div>




        <div className="point" style={{ top: "45.6%", backgroundColor: scrollProgress >= 0.456 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "44.6%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "27px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "45%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM</p>
        </div>



        <div className="point" style={{ top: "49.4%", backgroundColor: scrollProgress >= 0.494 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "48.4%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BYTE ME" style={{ fontSize: "27px", fontWeight: "bold" }}>BYTE ME</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "48.8%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="3:00 PM - 7:00 PM">3:00 PM - 7:00 PM</p>
        </div>



        <div className="point" style={{ top: "53.2%", backgroundColor: scrollProgress >= 0.532 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "52.2%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "52.6%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>


        <div className="point" style={{ top: "57%", backgroundColor: scrollProgress >= 0.570 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "56%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "56.4%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "60.8%", backgroundColor: scrollProgress >= 0.608 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "59.8%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "60.2%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "64.6%", backgroundColor: scrollProgress >= 0.646 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "63.6%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "64%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "68.4%", backgroundColor: scrollProgress >= 0.684 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "67.4%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "67.8%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "72.2%", backgroundColor: scrollProgress >= 0.722 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "71.2%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "71.6%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "76%", backgroundColor: scrollProgress >= 0.760 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "75%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "75.4%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "79.8%", backgroundColor: scrollProgress >= 0.798 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "78.8%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "79.2%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "83.6%", backgroundColor: scrollProgress >= 0.836 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "82.6%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "83%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "87.4%", backgroundColor: scrollProgress >= 0.874 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "86.4%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "86.8%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "91.2%", backgroundColor: scrollProgress >= 0.912 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "90.2%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "90.6%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "95%", backgroundColor: scrollProgress >= 0.950 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "94%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "94.4%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>
      
      </div>






      


      

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>
    </div>
  );
};

export default Timeline;
