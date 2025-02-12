import React from "react";
import "./desc-box.css";
import Calendar from "./calendar/calendar.jsx";

const DescBox = () => {
  return <div className="desc-box">
    <Calendar />

    <div className="desc-box-info">
      <div className="sub-desc-box-info">
    <p 
  className="glitch" 
  data-text="Mark your calendars!" 
  style={{ fontSize: "50px", fontWeight: "bold", textAlign: "left", marginBottom: "20px", background: "transparent", margin: "20px"}}
>
  Mark your calendars!
</p>

<p 
  className="glitch" 
  data-text="event desc" 
  style={{ fontSize: "16px", textAlign: "left", background: "transparent", margin: "20px" }}
>
  event desc
</p>
</div>
    </div>
  </div>;

  
};

export default DescBox;
