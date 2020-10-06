import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import "./Experience.css";

function Experiences() {
  // const [exper, setExper] = React.useState(null);
  // async function fetchData(){
  //   const res = await axios.get(
  //     'https://api.airtable.com/v0/appilpGaWxnIC6sfT/Experiences',
  //     {
  //       headers: {
  //         authorization: 'Bearer '
  //       }
  //     }
  //   )
  // }

  return (
    <div className="experiences-section" id="experiences">
      <div className="title">experiences</div>
      <div class="extra-text">
        {" "}
        let me tell you about my experiences and education
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F9F9F9", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
          date="Summer 2021"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Amazon</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Amazon Future Engineer Internship
          </h4>
          <p>
            Embedded on a software engineering team at Amazon and worked with
            fellow interns to build products that have a real impact on Amazon
            customers
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F9F9F9", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
          date="July 2020"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Google</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science Summer Institute: Online
          </h4>
          <p>
            Participated in an intensive four-week programming institute
            learning from Google Engineers how to develop web applications in
            HTML, CSS, Javascript, Python and Google AppEngine
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F9F9F9", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
          date="October 2017 - March 2020"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Palisades Charter High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Paid Tutor</h4>
          <p>
            Instructed high school students in the application of mathematics
            and chemistry to homework assignments and test preparations
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F9F9F9", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
          date="June - August 2019"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Riot Games</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Girls Who Code Summer Immersion Program
          </h4>
          <p>
            Participated in a seven-week programming introduction to Python,
            HTML, CSS, Javascript, Scratch, and adopted mentors at the Riot
            Games facility
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="education">Education</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F9F9F9", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #F9F9F9" }}
          date="August 2020 - May 2024"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            University of California, Berkeley
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science Bachelor of Arts
          </h4>
          <p>
            Participant in Computer Science Kickstart, member of Codebase,
            member of AWE, Vice President of Communications for Unit 2
            Residential Complex Hall Association
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
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
