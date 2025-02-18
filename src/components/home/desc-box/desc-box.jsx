import React from "react";
import "./desc-box.css";
import Calendar from "./calendar/calendar.jsx";
import DownloadButton from "./download-button/download-button.jsx";



const DescBox = () => {
  return <div className="desc-box">
    <Calendar />

    <div className="desc-box-info">
    
  
  <p 
  className="glitch" 
  data-text="🚀Anantya '25 is here !! " 
  style={{ fontSize: "50px", fontWeight: "bold", textAlign: "left", marginBottom: "4%", background: "transparent", marginLeft: "10%", color: "white" }}
>
🚀Anantya '25 is here !! 

</p>

<p 
  className="glitch" 
  data-text="Mark your Calendars! 🗓️" 
  style={{ fontSize: "28px", textAlign: "left", background: "transparent", marginInline: "10%"}}
>
Mark your Calendars! 🗓️
</p>
  <DownloadButton />
    </div>
  </div>;

  
};

export default DescBox;
