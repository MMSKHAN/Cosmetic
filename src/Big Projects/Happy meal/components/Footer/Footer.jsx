import React from 'react'
import { Facebook,Twitter,Instagram,Wechat } from 'react-bootstrap-icons'
function Footer() {
  return (
   <>
<div className="container-fluid mt-3" style={{backgroundColor:"#895889",height:"20vh"}} >
  <div className="row">
    <div className="col col-sm-12 ">
      <div className="row "style={{    padding: "3rem"}}>
        <div className="col-sm-8 text-light text-center"> <p><b className='col' > Ⓒ All Right Reservs</b></p> </div>
        <div className="col-sm-4">
          <Facebook
   style={{    fontSize: "2rem", cursor:"pointer" ,
    color:"blue",
    marginRight: "1rem"}} />
          <Twitter style={{    fontSize: "2rem",cursor:"pointer",
    color:"blue",
    marginRight: "1rem"}} />
          <Instagram style={{    fontSize: "2rem",cursor:"pointer",
    color:"red",
    marginRight: "1rem"}} />
          <Wechat style={{    fontSize: "2rem",cursor:"pointer",
    color:"green",
    marginRight: "1rem"}} />
        </div>
      </div>
    </div>
  </div>
  </div>   
   </>
  )
}

export default Footer