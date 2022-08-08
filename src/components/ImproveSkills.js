import React from "react";

const ImproveSkills = () => {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/food/landing.png" alt="skills" />
      </div>
      <div className="col typography">
        <h className="title">Improve Your Culinary Skills</h>
        {list.map((item,index)=>(
            <p key={index} className="skill-item">{item}</p>
        ))}
        <button className="btn">signup now</button>
      </div>
    </div>
  );
};

export default ImproveSkills;
