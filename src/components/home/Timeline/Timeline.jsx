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
        


        <div className="point" style={{ top: "4%", backgroundColor: scrollProgress >= 0.04 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "3%" }}>
          <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "3.5%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 AM - 7:00 PM</p>
        </div>
        



        <div className="point" style={{ top: "8%", backgroundColor: scrollProgress >= 0.08 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "7%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "7.5%" }}>
        <p className="glitch" data-text="06 MARCH 2025">06 MARCH 2025</p>
        <p className="glitch" data-text="5:00 PM - 7:00 PM">5:00 AM - 7:00 PM</p>
        </div>




        <div className="point" style={{ top: "12%", backgroundColor: scrollProgress >= 0.12 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "11%" }}>
        <div className="poster-box">
          <img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
          <div className="event-name-box">
          <p className="glitch" data-text="BLIND CODING" style={{ fontSize: "27px", fontWeight: "bold" }}>BLIND CODING</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "11.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>



        <div className="point" style={{ top: "16%", backgroundColor: scrollProgress >= 0.16 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "15%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "27px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "15.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</p>
        </div>



        <div className="point" style={{ top: "20%", backgroundColor: scrollProgress >= 0.20 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "19%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "27px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "19.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</p>
        </div>



        <div className="point" style={{ top: "24%", backgroundColor: scrollProgress >= 0.24 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "23%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="IPL AUCTION" style={{ fontSize: "27px", fontWeight: "bold" }}>IPL AUCTION</p>
          <p className="glitch" data-text="ROUND 3" style={{ fontSize: "14px" }}>ROUND 3</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "23.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="8:00 AM - 7:00 PM">9:00 AM - 11:00 AM</p>
        </div>



        <div className="point" style={{ top: "28%", backgroundColor: scrollProgress >= 0.28 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "27%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="ACTION REPLAY" style={{ fontSize: "24px", fontWeight: "bold" }}>ACTION REPLAY</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "27.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 12:00 PM">10:00 AM - 1:00 PM</p>
        </div>




        <div className="point" style={{ top: "32%", backgroundColor: scrollProgress >= 0.32 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "31%" }}> 
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="MASTERCHEF UI" style={{ fontSize: "24px", fontWeight: "bold" }}>MASTERCHEF UI</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "31.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "36%", backgroundColor: scrollProgress >= 0.36 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "35%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BYTE ME " style={{ fontSize: "27px", fontWeight: "bold" }}>BYTE ME</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "35.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</p>
        </div>



        <div className="point" style={{ top: "40%", backgroundColor: scrollProgress >= 0.40 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "39%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "24px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "39.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</p>
        </div>



        <div className="point" style={{ top: "44%", backgroundColor: scrollProgress >= 0.44 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "43%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CAT" style={{ fontSize: "27px", fontWeight: "bold" }}>CAT</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "43.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</p>
        </div>




        <div className="point" style={{ top: "48%", backgroundColor: scrollProgress >= 0.48 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "47%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODE RELAY" style={{ fontSize: "27px", fontWeight: "bold" }}>CODE RELAY</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "47.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="2:00 PM - 5:00 PM">2:00 PM - 5:00 PM</p>
        </div>



        <div className="point" style={{ top: "52%", backgroundColor: scrollProgress >= 0.52 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "51%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="BYTE ME" style={{ fontSize: "27px", fontWeight: "bold" }}>BYTE ME</p>
          <p className="glitch" data-text="ROUND 2" style={{ fontSize: "14px" }}>ROUND 2</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "51.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="3:00 PM - 7:00 PM">3:00 PM - 7:00 PM</p>
        </div>



        <div className="point" style={{ top: "56%", backgroundColor: scrollProgress >= 0.56 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "55%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "55.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>


        <div className="point" style={{ top: "60%", backgroundColor: scrollProgress >= 0.60 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "59%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "59.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "64%", backgroundColor: scrollProgress >= 0.64 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "63%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "63.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "68%", backgroundColor: scrollProgress >= 0.68 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "67%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "67.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "72%", backgroundColor: scrollProgress >= 0.72 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "71%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "71.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "76%", backgroundColor: scrollProgress >= 0.76 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "75%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "75.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "80%", backgroundColor: scrollProgress >= 0.80 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "79%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "79.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "84%", backgroundColor: scrollProgress >= 0.84 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "83%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "83.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "88%", backgroundColor: scrollProgress >= 0.88 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "87%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "87.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "92%", backgroundColor: scrollProgress >= 0.92 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "91%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "91.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "96%", backgroundColor: scrollProgress >= 0.96 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "95%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "95.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>



        <div className="point" style={{ top: "99%", backgroundColor: scrollProgress >= 0.99 ? "red" : "white" }}></div>
        <div className="container" style={{ top: "98%" }}>
        <div className="poster-box"><img src="src/assets/demo_pic.jpg" alt="Event Poster" /></div>
        <div className="event-name-box">
          <p className="glitch" data-text="CODING OLYMPICS " style={{ fontSize: "23px", fontWeight: "bold" }}>CODING OLYMPICS</p>
          <p className="glitch" data-text="ROUND 1" style={{ fontSize: "14px" }}>ROUND 1</p>
          <div className="explore"><ExploreButton /></div>
          </div>
        </div>
        <div className="date-box" style={{ top: "98.5%" }}>
        <p className="glitch" data-text="07 MARCH 2025">07 MARCH 2025</p>
        <p className="glitch" data-text="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</p>
        </div>
      
      </div>






      


      

      <div className="line" style={{ background: `linear-gradient(to bottom, red ${scrollProgress * 100}%, white 0%)` }}></div>
    </div>
  );
};

export default Timeline;
