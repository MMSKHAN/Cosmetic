import React,{useEffect} from 'react'
// import "./Portfolio.css"
import Aos from 'aos';
import "./Pricing.css"
function Pricing() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
    Aos.refresh()
  })
  return (
    <div className='.container mt-5'style={{height:"100%"}} > 
    <div className="circles">
    <div className="circle1"></div>
    {/* <div className="circle2"></div> */}
    </div>
    <div className="header tmove">
      <h6>FIND YOUR PRICING PLAN</h6>
      <h1>Finding the best salons in your city could be time consuming</h1>
    </div>
    <div className="row" style={{width:"99vw"}} >
      <div className="col-sm-2">
        </div>

        <div className="col-sm-3 colum">
           {/* <div className="colum"> */}
          <div className="pri text-center"> <h3>Basic</h3>
          <sup>$</sup><span>19</span>
            </div>
          <div className=" bodycard bor">
            <p>Full face Rs.250</p>
            <p>Cheeks Rs.100</p>
            <p>Jawline Rs.25</p>
            <p>Lower Lip Rs.50</p>
            <p className='cut'>Uppwer Lip Rs.20</p>
            <p className='cut'>Under arms Rs.2</p>
            <p className='cut'>Full Legs Rs.120</p>
            <p className='cut'>Half Leg Rs.56</p>
          </div>
          <div className="card-footer"><p style={{width: "9rem",
    textAlign: "center",marginTop:"10px"}} >Order Now</p> </div>
          
          </div>
        <div className="col-sm-3 colum ">
           
          <div className="pri text-center"> <h3>Pro</h3>
          <sup>$</sup><span>40</span>
            </div>
          <div className=" bodycard bor" >
            <p>Full face Rs.260</p>
            <p>Cheeks Rs.100</p>
            <p>Jawline Rs.250</p>
            <p>Lower Lip Rs.504</p>
            <p >Uppwer Lip Rs.20</p>
            <p >Under arms Rs.298</p>
            <p >Full Legs Rs.120</p>
            <p className='cut'>Half Leg Rs.56</p>
          </div>
          <div className="card-footer"><p style={{width: "9rem",
    textAlign: "center",marginTop:"10px"}} >Order Now</p> </div>
          </div>
        <div className="col-sm-3  colum ">
           
          <div className="pri text-center"> <h3>Expert</h3>
          <sup>$</sup><span>100</span>
            </div>
          <div className=" bodycard" style={{borderRight:"3px solid b;ack"}}>
            <p>Full face Rs.2502</p>
            <p>Cheeks Rs.1010</p>
            <p>Jawline Rs.2543</p>
            <p>Lower Lip Rs.504</p>
            <p>Uppwer Lip Rs.20</p>
            <p >Under arms Rs.2</p>
            <p >Full Legs Rs.120</p>
            <p >Half Leg Rs.56</p>
          </div>
          <div className="card-footer"><p style={{width: "9rem",
    textAlign: "center",marginTop:"10px"}} >Order Now</p> </div>
          </div>
      
        </div>
    </div>
  )
}

export default Pricing