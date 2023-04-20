import { CupHot, StarFill, PieChartFill } from 'react-bootstrap-icons'
import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
// import pics from "./img/cir.jpg"
import "./Status.css"
function Statues() {
    useEffect(()=>{
        Aos.init({
          duration:2000
        });
        Aos.refresh()
      })
    const arry=[
        {
        pic:<CupHot style={{fontSize:"3rem", color:"white", marginTop:"23px"}}/>,
        title:"CLINT SERVED",
        review:"1000+"
    },
        {
        pic:<PieChartFill style={{fontSize:"3rem", color:"white", marginTop:"23px"}} />,
        title:"OFF RAW DATA ",
        review:"2.5M"
    },
        {
        pic:<StarFill style={{fontSize:"3rem", color:"white", marginTop:"23px"}} />,
        title:"REVIEWS",
        review:"6.5M"
    },
]
  return (
 
    <>
    <div className=".container-fluid  back" >
        {/* <img src={pics} alt="pics" /> */}
        <div className="row  justify-content-center align-items-center text-center" data-aos="zoom-in-down"  data-aos-easing="linear" style={{height:"100vh", width:"99vw"}} >
{
    arry.map((item)=>{
        return(
            <div className="col-sm-4 " > 
            
            <p style={{fontSize: "2rem",
    fontWeight: "800"}} >{item.review}</p>
            <small> {item.title}  </small>
            <p style={{    fontStyle: "oblique",
    fontfamily:"emoji"}} >{item.pic}</p>

            </div>
        )
    })
}

    </div>
    </div>
    </>
  )
}

export default Statues