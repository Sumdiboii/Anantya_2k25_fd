import React from "react";
import "./desc-box.css";
import Calendar from "./calendar/calendar.jsx";




const DescBox = () => {
  return <div className="desc-box">
    <Calendar />

    <div className="desc-box-info">
    
  
  <p 
  className="glitch" 
  data-text="🚀Anantya '25 is here !! " 
  style={{ fontSize: "50px", fontWeight: "bold", textAlign: "left", marginBottom: "4%", background: "transparent", marginLeft: "12%", color: "white" }}
>
🚀Anantya '25 is here !! 

</p>

<p 
  className="glitch" 
  data-text="Mark your Calendars! 🗓️" 
  style={{ fontSize: "25px", textAlign: "left", background: "transparent", marginInline: "12%"}}
>
Mark your Calendars! 🗓️ 
</p>

<p 
  className="glitch" 
  data-text="The most awaited event of the year is here! 🤩" 
  style={{ fontSize: "25px", textAlign: "left", background: "transparent", marginInline: "12%"}}
>
The most awaited event of the year is here! 🤩
</p>




    </div>
  </div>;

  
};

export default DescBox;
