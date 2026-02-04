import React, { useState } from 'react'
import ResumeInput from './ResumeInput'
import ResumePreview from './ResumePreview'
function ResumeApp(props) {

    const [data,setData]=useState({
        imgageURL:"",
        name:"",
        jobTitle:"",
        address:"",
        phone:"",
        eMail:"",
        skills:[],
        projects:[],
        languages:[],
        profile:"",
        education:[{
            schoolName:"",
            degree:"",
            year:"",
            achievement:""
        }],
        experience:[{
            companyName:"",
            job:"",
            duration:"",
            acheivement:""
        }]
    })
  return (
   <div className='resumeBox'>
      <ResumeInput data={data} setData={setData} mode={props.mode}/>
      <ResumePreview data={data}/>
      </div>
  )
}

export default ResumeApp
