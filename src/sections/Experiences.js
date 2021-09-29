import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import "./Experience.css";
import SpecificExper from "./SpecificExper.js";

function Experiences() {
  const [exper, setExper] = React.useState(null);
  async function fetchData() {
    const res = await axios.get(
      "https://api.airtable.com/v0/appilpGaWxnIC6sfT/Experiences?sort%5B0%5D%5Bfield%5D=Order&sort%5B0%5D%5Bdirection%5D=desc",
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    console.log(res.data);
    setExper(res.data.records);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!exper) {
    return <div>Loading...</div>;
  }

  return (
    <div className="experiences-section" id="experiences">
      <div className="exper-title">experiences</div>
      <div class="exper-text">
        {" "}
        let me tell you about my experiences and education
      </div>

      <VerticalTimeline className= "vert-timeline" mode="alternate">
        {exper.map((record) => (
          <SpecificExper key={record.id} info={record.fields} />
        ))}
      </VerticalTimeline>

      <div className="education">Education</div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#F9F9F9", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
          date="August 2020 - May 2023"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
          
        >
          <h3 className="vertical-timeline-element-title">
            University of California, Berkeley
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science Bachelor of Arts
          </h4>
          <p>
            Participant in Computer Science Kickstart, Software Developer in Codebase,
            Member of AWE, Vice President of Communications for Unit 2
            Residential Complex Hall Association
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#F9F9F9", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
          date="August 2016 - June 2020"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Palisades Charter High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            High School Degree
          </h4>
          <p>
            President and Founder of the TreePeople Club, Secretary of
            Envirothon, Vice President of Girls Who Code Club, California
            Sealbearer
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  );
}

export default Experiences;
