import React from "react";
import axios from "axios";

import "./Projects.css";
import IndividProject from "./individ-project.js";

import insta from "./pics/insta.png";
import ecoasis from "./pics/ecoasis.png";
import cofed from "./pics/cofed.png";

function Projects() {
  const [proj, setProj] = React.useState(null);
  async function fetchData() {
    const res = await axios.get(
      "https://api.airtable.com/v0/appilpGaWxnIC6sfT/Projects?sort%5B0%5D%5Bfield%5D=Name&sort%5B0%5D%5Bdirection%5D=asc",
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    console.log(res.data);
    setProj(res.data.records);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!proj) {
    return <div>Loading...</div>;
  }

  return (
    <div className="projects-section" id="projects">
      <div className="title">projects</div>
      <div className="project-container">
        {proj.map((record) => (
          <IndividProject key={record.id} info={record.fields} />
        ))}
        {/* <IndividProject
          src={ecoasis}
          link="https://github.com/Claire-Thib/ecoasis"
          text="Ecoasis"
          label="Website, Environmental, Educational"
          languages="Javascript, HTML, CSS"
        />
        <IndividProject
          src={cofed}
          link="https://www.cofed.coop/"
          text="CoFED"
          label="Web, Co-op"
          languages="React"
        /> */}
      </div>
    </div>
  );
}

export default Projects;
