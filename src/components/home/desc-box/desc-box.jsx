import React from "react";
import "./desc-box.css";
import Calendar from "./calendar/calendar.jsx";

const DescBox = () => {
  return <div className="desc-box">
    <Calendar />

    <div className="desc-box-info">
    <p className="glitch" data-text="Mark your calendars! 🚀 Anantya 25 is on the horizon – a tech fest packed with thrilling competitions and epic rewards! Don’t miss out on the action!">Mark your calendars! 🚀 Anantya 25 is on the horizon – a tech fest packed with thrilling competitions and epic rewards! Don’t miss out on the action!</p>
    </div>
  </div>;

  
};

export default DescBox;
