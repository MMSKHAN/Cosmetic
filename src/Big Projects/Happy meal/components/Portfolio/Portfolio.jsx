import React from 'react'
import "./Portfolio.css"
import {ArrowDownRightCircleFill } from "react-bootstrap-icons"
function Portfolio() {
  return (
    <div className="container-fluid mt-5"id='PortFolio' style={{width:"97vw"}} >
        <div className="row"  >
            <div className="col-sm-6 p1" ></div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-4 p2"  ></div>
                    <div className="col-sm-4 p3"></div>
                    <div className="col-sm-4 p4"></div>
                </div>
            </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 p5"></div>
            <div className="col-sm-4 p6"></div>
            <div className="col-sm-4 p7"></div>
          </div>
          </div>
          
            <div className="col-sm-6 p8"></div>

          </div>
          <div className="row" style={{backgroundColor: "blanchedalmond"}}>
            <span className='text-center col' >Find More</span>
            <ArrowDownRightCircleFill className='cole' style={{fontSize:"3rem",color:"#d59a9a",margin:"3" }} />
          </div>
          
    </div>
  )
}

export default Portfolio