import React,{useEffect} from 'react'
import "./Blog.css"
import Aos from 'aos'
import "aos/dist/aos.css";
import BlogArray from './BlogArray'
function Blobs() {
  
 
    useEffect(()=>{
      Aos.init({
        duration:2000
      });
      Aos.refresh()
    })
  return (
    <>
    <div className="container mt-5 "id='Blogs' style={{height:"100%"}}  >
      <div className="row">
      <div className="col-sm-2 parentp" data-aos="fade-right "data-aos-easing="linear">
        <h1 className='tetleblo' >Blogs</h1>
        </div>
        <div className="col-sm-10" data-aos="zoom-in-right "data-aos-easing="linear">
          <div className="row">
          
{BlogArray.map( (item)=>{
  return(
            <div className="col-sm-4 mt-2">        
            <div className="card border-0 bg-white"style={{height:"-1"}}   >
               <div className="card-header border-0 bg-white"> <img src={item.pic} className="responsiveimg" alt="blow img" /> </div>
               <div className="card-body border-0"  ><p>{item.subtext}</p> <h4 style={{color:"#d59a9a"}} >{item.title}</h4> <p style={{fontFamily:"cursive",lineHeight: "23px"}}>{item.text}</p> </div>
               <div className="card-footer border-0 bg-white col"> {item.icon} <span className='text-primary cole ' >Read More</span> </div>
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

export default Blobs