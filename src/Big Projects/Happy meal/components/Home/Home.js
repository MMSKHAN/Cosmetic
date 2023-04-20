import React, { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css";

import "aos/dist/aos.css";

import Navbar from '../Navbar/Navbar'
import { ArrowDownRightCircleFill } from 'react-bootstrap-icons'
// import home from "./home.jpg"
import "./Home.css"

function Home() {
useEffect(()=>{
  Aos.init({
    duration:2000
  });
  Aos.refresh()
})
  return (
    <>
    <div  className=" Section container-fluid "  style={{height:"100%"}}>
      
      <Navbar/>
      <div className=" row content" >
        <div data-aos={"fade-right"} className="col-sm-12">
      <div className="title">
        <h1 data-aos="fade-zoom-in" >Cosmetics Arena</h1>
        </div>
        <div className="subtitle">
          <p><b>Dont't let anyone with bad eyebrows</b> tell you anything about life</p>
          <ArrowDownRightCircleFill className='col' style={{fontSize:"3rem",color:"#d59a9a",margin:"3" }} />
          </div>
        </div>
      </div>
      <div className="info  "data-aos="zoom-in">
        <div className="row" data-aos="fade-left" >
          <div className="col-sm-4 per "> <strong> Brand</strong> <p>  Cosmetics Arena</p> </div>
          <div className="col-sm-4  per" style={{display:"flex",flexDirection:"column"}} > <strong>Email</strong> <div className='d-flex' ><p>Jhon18@gmail</p><p>.com</p></div>  </div>
          <div className="col-sm-4 per"> <strong>Mobile</strong><p>+923218304691</p> </div>
        </div>
        <div className="row  justify-content-between text-center "data-aos="fade-left">
          <div className="col-sm-4"> <strong> Address</strong> <p>Mns University Multan</p> </div>
          <div className="col-sm-4"> <strong>Services</strong> <p>Excillent</p> </div>
          <div className="col-sm-4"> <strong>Working Hours</strong><p>Monday to Friday</p> </div>
        </div>
      </div>
    </div>
    </> 
  )
}
// const Section = styled.section`
// background:url(${home}) no-repeat center;
// min-height:100vh;
// background-size:cover;
// position:relative;
// .home{
//   height:100%;
//   .content{
//     display:flex;
//     flex-direction:column;
//     width:60%;
//     color:#fff;
//     gap:1.2rem;
//     margin-top:8rem;
//     padding-left:18rem
//   }
// }
// ` 

export default Home