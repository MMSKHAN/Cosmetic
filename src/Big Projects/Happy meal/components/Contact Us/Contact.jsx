import React from 'react'

import "./Contact.css"
function Contact() {
  
  return (
    <div className="container-fluid mt-5 "style={{height:"100%"}} id="Contect" >
      <div className="row"style={{height:"100%",width:"100%"}} >
      <div className="col-sm-2 parentcon"style={{height:"100%"}}  >
        <h1 className='tetleed'  > Contact</h1>
        </div>
          <div className="col-sm-4 mt-5"style={{height:"100%"}}  >
            <p className='mb-0' >STAY IN TOUCH WITH US</p>
            <h2 className='mt-1 mb-5' >Quick Contact</h2>
            <h6 className='mb-5'><b>Just To Say hi!!</b></h6>
          <p className='mb-3' > <small> if you have any questions simply use the following contact details</small></p>
          <p className='mb-3' > <small> Business Owners to take there online presence to the next level. We are in the business of Bulk SmS </small></p>
          <p><b>ADDRESS:</b><small> Khan House Alipur</small></p>
          <p><b>EMAIL:</b><small>msaudkhan18@gmail.com</small></p>
          <p><b>WEBSITE:</b><small>www.Cosmetics arena.com</small></p>
          </div>
          <div className="col-sm-4 mt-5 " >

            <div className="name">
            <label for="fname">Name</label>
              <input type="text" style={{width:"208px" }} />
            </div>
            <div className="email" >
            <label for="email">Email:</label>
              <input type="email" style={{width:"208px" }} />
            </div>
            <div className="message">
              Message:
              <textarea name="" id="" cols="25" rows="10"></textarea>
            </div>
            <button className="bt"> Send message</button>
          </div>
        </div>
      </div>
 
  )
}

export default Contact