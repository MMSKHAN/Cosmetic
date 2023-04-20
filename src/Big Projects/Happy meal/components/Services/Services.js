import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import ServicesArray from './ServicesArray'
import "./Services.css"
function Services(props) {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
    Aos.refresh()
  })
  return (
    <>
    <div className="container-fluid mt-5 "id='Services'>
      <div className="row">
      <div className="col-sm-2 parent "  data-aos="fade-right " data-aos-easing="linear">
        <h1 className='tetleed' > Services</h1>
        </div>
        <div className="col-sm-10">
          <div className="row mt-5 "data-aos="zoom-in-down"  data-aos-easing="linear">
          
{ServicesArray.map( (item)=>{
  return(
            <div className="col-sm-4 mt-1">        
            <div className="card border-0 bg-white"style={{height:"-1"}}>
               <div className="card-header big border-0 bg-white"> <img src={item.pic} className="responsive" alt="blow img" /> </div>
               <div className="card-body border-0"  ><p>{item.id}</p> <h4 style={{color:"#d59a9a"}} >{item.title}</h4> <p style={{fontFamily:"cursive",lineHeight: "23px"}}>{item.text}</p> </div>
               <div className="card-footer center border-0 bg-white  ">{item.icon}  <span style={{cursor:"pointer  "}} className="butgra p-3 rounded">{item.btn} </span> </div>
</div>
            </div>
)})}
          
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Services