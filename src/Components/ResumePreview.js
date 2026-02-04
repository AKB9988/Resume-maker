import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./CSS/Resume.css";

function ResumePreview(props) {
  const handleDownloadPDF = () => {
    const input = document.getElementById("resumeDiv");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };


  return (
    <div className="container box" >
      <h1>Resume Preview</h1>
      <div id="resumeDiv" className="outer" style={{ marginTop: "30px" }}>
        <div className="intro-box">
          <div className="img-box">
            <img
              src={props.data.imageURL||"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
              alt="Profile"
            />
          </div>
          <div className="info">
            <h1 id="name">{props.data.name||"Your Name"}</h1>
            <h2 id="jobTitle">{props.data.jobTitle ||"Job Title"}</h2><br />
            <h4 id="address">{props.data.address||"Address"}</h4>
            <h5 id="phoneEmail">
  {props.data.phone || ""} {props.data.phone && props.data.eMail ? " • " : ""}
  {props.data.eMail || ""}
</h5>

          </div>
        </div>

        <div className="resume-body">
          <div className="worksNskills">
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                {props.data.skills.map((skill, index) => <li key={index}>{skill}</li>)}

              </ul>
            </div>

            <div className="projects">
              <h3>Projects</h3>
              <ul>
                {props.data.projects.map((project, index) => <li key={index}>{project}</li>)}
              </ul>
            </div>

            <div className="languages">
              <h3>Languages</h3>
              <ul>
                {props.data.languages.map((language, index) => <li key={index}>{language}</li>)}
              </ul>
            </div>
          </div>

          <div className="details">
            <div className="profile">
              <h3>Profile</h3>
              <p>
                {props.data.profile}
              </p>
            </div>

            <div className="employmentHistory">
              <h3>Professional Experience</h3>

              {props.data.experience.map((exp, index) => (
                <div key={index}>
                  <h5>
  {exp.job || ""}{exp.job && exp.companyName ? " at " : ""}
  {exp.companyName || ""}
</h5>

                  <p>{exp.duration}</p>
                  <p>{exp.achievement}</p>
                </div>
              ))}
            </div>


            <div className="education">
              <h3>Education</h3>
              {props.data.education.map((edu, index) => (
                <div key={index}>
                  <h5>
  {edu.degree || ""}
  {edu.degree && edu.schoolName ? " from " : ""}
  {edu.schoolName || ""}
</h5>

                  <p>{edu.year}</p>
                  <p>{edu.achievement}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
      <button className="btn my-5" onClick={handleDownloadPDF}>
        Save as PDF
      </button>
    </div>
  );
}

export default ResumePreview;
