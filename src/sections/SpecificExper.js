import React from "react";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./Experience.css";

export default function SpecificExper({ info }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#F9F9F9", color: "#000000" }}
      contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
      date={info.Date}
      iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{info.Company}</h3>
      <h4 className="vertical-timeline-element-subtitle">{info.Role}</h4>
      <p>{info.Description}</p>
    </VerticalTimelineElement>
  );
}
