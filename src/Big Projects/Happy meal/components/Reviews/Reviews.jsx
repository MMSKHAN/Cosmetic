import React,{useState} from 'react'
import Reviewsarray from './Reviewsarray'
import "./Reviews.css";
function Reviews(props) {
  const[selected,setSelected]=useState(0);
    return (
    <div className="container-fluid mt-5 " style={{backgroundColor:"#bea8c080",height:"100%"}} >
<h1 className=' cole' >Reviews</h1>
<div className="row d-flex justify-content-center align-items-center text-center ">
    <div className="col-sm-3">
        {
            Reviewsarray.map((items ,index)=>{
                return(
                    <div className={`card ${selected===index ?"active":"hidden"} border-0 mt-5 `}  key={index} style={{backgroundColor:"#bea8c080"}}  >
                        <div className="card-header border-0 "style={{backgroundColor:"#bea8c080"}}>
                            <img src={items.pic} className="img-thumbnail border-0" alt="" style={{height:"20vh",width:"100%"}} />

                        </div>
                        <div className="card-body  ">
<p>{items.serive}</p>
<h1>{items.name}</h1>
<p>{items.text}</p>
                        </div>
                    </div>
                )
            })
            
        }
     
    </div>
    <div className="controlls d-flex justify-content-center">
    <div class="custom-control"  >
  <button type="button" id="customRadio1"className={selected===0 ? "active":""}onClick={()=>{
                setSelected(0)}}  />
</div>
    <div class="custom-control"  >
  <button type="button" id="customRadio1"className={selected===1 ? "active":" "}onClick={()=>{
                setSelected(1)}}  />
</div>
    <div class="custom-control"  >
  <button type="button" id="customRadio1"className={selected===2 ? "active":" "}onClick={()=>{
                setSelected(2)}}  />
</div>
</div>
</div>
    </div>
  )
}

export default Reviews