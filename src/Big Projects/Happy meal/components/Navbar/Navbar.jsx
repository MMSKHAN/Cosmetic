import React from 'react'
import "./styled.css"
import NavLinks from './NavLinks'
// import { Link} from 'react-router-dom'

import logo from "./imgs/logo.png"
function Navbar() {
  const HandleActive=(e)=>{
    document.querySelectorAll('.nav-link').forEach((navLink)=>navLink.classList.remove("active") );
    e.target.classList.add("active");
  }
  return( 
    <nav className="navbar navbar-expand-lg" style={{ backdropFilter: "blur(10px)"}} >
    <div className="container-fluid d-flex justify-content-between ">
      <a className="navbar-brand  mov" href="/"><img src={logo} alt="logo" style={{width:"100%",height:"13vh",borderRadius:"10rem"}} /></a>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
      </button>
      <div className="collapse navbar-collapse text-center mb-5  " id="navbarSupportedContent" style={{z
      :"1"}} >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-primary ">
          <NavLinks  to={"Home"} text={"Home"} className={"active"}  onClick={HandleActive} />
          <NavLinks  to={"Services"} text={"Services"} className={"active"}  onClick={HandleActive} />
          <NavLinks  to={"PortFolio"}  text={"PortFolio"} onClick={HandleActive}/>
          <NavLinks  to={"Blogs"}  text={"Blogs"} onClick={HandleActive}/>
          <NavLinks  to={"Contect"}  text={"Contact"} onClick={HandleActive}/>
          <NavLinks  to={"Skills"}  text={"Skills"} onClick={HandleActive}/>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar