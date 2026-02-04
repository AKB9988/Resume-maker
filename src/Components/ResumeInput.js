import React, { useState } from 'react'
import "./CSS/Resume.css";
function ResumeInput(props) {
  const iniEdu={
  schoolName: "",
  degree: "",
  year: "",
  achievement: "",
}
const iniJob={
  companyName: "",
  job: "",
  duration: "",
  acheivement: "",
}
const [eduInput, setEduInput] = useState(iniEdu);

const [jobInput, setJobInput] = useState(iniJob);
  const [inputValues, setInputValues] = useState({
  skills: "",
  projects: "",
  languages: ""
});

  const changeValue = (place, value) => {
    props.setData(prev => ({
      ...prev,
      [place]: value
    }));
  }
  const addToArray = (place, value) => {
    if(value==="") return;
    const prevArr = props.data[place] || [];
    const newArr = [...prevArr, value];
    changeValue(place, newArr);
    setInputValues(prev=>({...prev,[place]:""}));
  };

  const delFromArray = (place, value) => {
    if(value==="") return;
    const prevArr = props.data[place] || [];
    const newArr = prevArr.filter(item => item !== value);
    changeValue(place, newArr);
  };
    const handleKeyDown = (e, place) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addToArray(place, inputValues[place]);

    }
  };


  const addNewObject=(parent,value,callBack,initial)=>{
    
      const prevArr=props.data[parent];
      const newArr=[...prevArr,value];
      changeValue(parent,newArr);
    callBack(initial);
  }



  return (
    <div className={`container my-4 ${props.mode === 'dark' ? 'dark-mode' : ''}`} style={{ borderRight: "3px solid" }}>

      <h2 className="mb-3">Personal Info</h2>
      <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">
            Upload Profile Image
          </label>
          <input
            type="file"
            className="form-control"
            id="profileImage"
            accept="image/*"
            onChange={(e)=>{
              const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
    changeValue("imageURL", imageUrl);
    }
  
            }}
          />
        </div>

        <input type="text" className="form-control mb-2" placeholder="Full Name" name="name" value={props.data.name || ""} onChange={(e) => { changeValue("name", e.target.value) }} />
        <input type="text" className="form-control mb-2" placeholder="Job Title" name="jobTitle" value={props.data.jobTitle || ""} onChange={(e) => { changeValue("jobTitle", e.target.value) }} />
        <input type="text" className="form-control mb-2" placeholder="Address" name="address" value={props.data.address || ""} onChange={(e) => { changeValue("address", e.target.value) }} />
        <input type="text" className="form-control mb-2" placeholder="Phone" name="contact" value={props.data.phone || ""} onChange={(e) => { changeValue("phone", e.target.value) }} />
        <input type="text" className="form-control" placeholder="Email" name="email" value={props.data.eMail || ""} onChange={(e) => { changeValue("eMail", e.target.value) }} />
      </div>

     
      <h2 className="mb-3">Skills</h2>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder={inputValues.skills ? "Type more skills" : "Type skills one by one"} value={inputValues.skills} onChange={(e) => setInputValues(prev => ({ ...prev, skills: e.target.value }))} onKeyDown={(e) => handleKeyDown(e, "skills")} />
        <ul className="mt-2">
          {props.data.skills?.map((skill, idx) => (
            <li key={idx}>{skill} <span style={{ cursor: "pointer" }} onClick={() => delFromArray("skills", skill)}>❌</span></li>
          ))}
        </ul>
      </div>

      <h2 className="mb-3">Projects</h2>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder={inputValues.projects ? "Type more projects" : "Type projects one by one"} value={inputValues.projects} onChange={(e) => setInputValues(prev => ({ ...prev, projects: e.target.value }))} onKeyDown={(e) => handleKeyDown(e, "projects")} />
        <ul className="mt-2">
          {props.data.projects?.map((proj, idx) => (
            <li key={idx}>{proj} <span style={{ cursor: "pointer" }} onClick={() => delFromArray("projects", proj)}>❌</span></li>
          ))}
        </ul>
      </div>

      <h2 className="mb-3">Languages</h2>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder={inputValues.languages ? "Type more languages" : "Type languages one by one"} value={inputValues.languages} onChange={(e) => setInputValues(prev => ({ ...prev, languages: e.target.value }))} onKeyDown={(e) => handleKeyDown(e, "languages")} />
        <ul className="mt-2">
          {props.data.languages?.map((lang, idx) => (
            <li key={idx}>{lang} <span style={{ cursor: "pointer" }} onClick={() => delFromArray("languages", lang)}>❌</span></li>
          ))}
        </ul>
      </div>

      <h2 className="mb-3">Profile</h2>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Write a short profile..." rows="3" onChange={(e) => changeValue("profile", e.target.value)}></textarea>
      </div>
      <h2 className="mb-3">Employment History</h2>
      <div className="mb-3 border p-3 rounded">
        <input type="text" className="form-control mb-2" placeholder="Company Name" value={jobInput.companyName} onChange={(e)=>setJobInput({...jobInput, companyName:e.target.value})}/>
<input type="text" className="form-control mb-2" placeholder="Job Title" value={jobInput.job} onChange={(e)=>setJobInput({...jobInput, job:e.target.value})}/>
<input type="text" className="form-control mb-2" placeholder="Month, Year - Month, Year" value={jobInput.duration} onChange={(e)=>setJobInput({...jobInput, duration:e.target.value})}/>
<textarea className="form-control" placeholder="Responsibilities / Achievements" rows="3" value={jobInput.acheivement} onChange={(e)=>setJobInput({...jobInput, acheivement:e.target.value})}></textarea>
<button className="btn mt-2" type="button" onClick={()=>addNewObject("experience", jobInput, setJobInput,iniJob)}>Add Another Job</button>

      </div>

      <h2 className="mb-3">Education</h2>
      <div className="mb-3 border p-3 rounded">
        <input type="text" className="form-control mb-2" placeholder="School / College Name" value={eduInput.schoolName} onChange={(e)=>setEduInput({...eduInput, schoolName:e.target.value})}/>
<input type="text" className="form-control mb-2" placeholder="Degree / Course" value={eduInput.degree} onChange={(e)=>setEduInput({...eduInput, degree:e.target.value})}/>
<input type="text" className="form-control mb-2" placeholder="Month, Year - Month, Year" value={eduInput.year} onChange={(e)=>setEduInput({...eduInput, year:e.target.value})}/>
<textarea className="form-control" placeholder="Achievements / Notes" rows="3" value={eduInput.achievement} onChange={(e)=>setEduInput({...eduInput, achievement:e.target.value})}></textarea>
<button className="btn mt-2" type="button" onClick={()=>addNewObject("education", eduInput, setEduInput,iniEdu)}>Add Another Education</button>
      </div>
    </div>
  )
}

export default ResumeInput
