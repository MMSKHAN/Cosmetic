// import { transform } from 'framer-motion';
// import { transform } from 'framer-motion';
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skill.css"
function Skills(props) {
const percentage1=75
const percentage2=50
const percentage3=70
const percentage4=90
const percentage5=85
        

    

  return (
    <div className="container-fluid " style={{backgroundColor:"pink", height:"100%" }} id="Skills">
        <p style={{marginTop:"30px"}} >Our Skills</p>
            <h1 className='cole'
            style={{fontSize:" revert",
            fontWeight:" bold",
            color:"white",
            marginBottom: "30px"}}
            
            
            >Check our super awesome skills</h1>
        <div className="row d-flex justify-content-center aligns-items-center  text-center  gap">
            
        <div className="col-sm-2  responsive">
    <CircularProgressbar value={percentage1}  text={`${percentage1}%`} styles={{
        trail:{
            strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center"
          
        },
path:{
    strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center",
            stroke:"brown"

},text:{
fill:"red"
}
    }} />
    <h6  >Facial</h6>
    </div>           
{/* .............2nd........... */}
<div className="col-sm-2   responsive">











    <CircularProgressbar value={percentage2}  text={`${percentage2}%`} styles={{
        trail:{
            strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center"
          
        },
path:{
    strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center",
            stroke:"green"

},text:{
fill:"red"
}
    }} />
    <h6>Skin</h6>
    </div>
{/* ..................3rd............ */}
<div className="col-sm-2  responsive">
    <CircularProgressbar value={percentage3}  text={`${percentage3}%`} styles={{
        trail:{
            strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center"
          
        },
path:{
    strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center",
            stroke:"orange"

},text:{
fill:"red"
}
    }} />
    <h6>SPA</h6>
    </div>
    {/* ...........4rd................. */}
    <div className="col-sm-2  responsive">
    <CircularProgressbar value={percentage4}  text={`${percentage4}%`} styles={{
        trail:{
            strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center"
          
        },
path:{
    strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center",
            stroke:"blue"

},text:{
fill:"red"
}
    }} />
    <h6>cosmetic</h6>
    </div>
    {/* ...................5th................ */}
    <div className="col-sm-2  responsive">
    <CircularProgressbar value={percentage5}  text={`${percentage5}%`} styles={{
        trail:{
            strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center"
          
        },
path:{
    strokeLinecap:"butt",
            transform:"rotate(-126deg)",
            transformOrigin:"center center",
            stroke:"gray"

},text:{
fill:"red"
}
    }} />
    <h6>Salon</h6>
    </div>
    </div>
    <div className="row text-center justify-content-center mt-4 ">
        <div className="sec" style={{width:"18rem"}} >
        <p className='mt-5 mb-3 text-danger' >Beauty Services and products</p>
        <p>To be a successfyll beautician, you should have a wide rage of skills in beauty services, good communicaton,and work for clint satisfaction.</p>
    </div>
    </div>
    </div>
 )
}

export default Skills