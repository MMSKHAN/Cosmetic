import React, { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
import "./Scroll.css"
function Scroll() {
    const [visible,setvesible]=useState(false);
    window.addEventListener("scroll",()=>{
        window.pageYOffset> 100? setvesible(true) :setvesible(false)
    })
  return (
    <div className="din">
    <Link to='#' className={`${visible ?"block":"none"}`}>
        <FaChevronUp className='text-white' onClick={()=>{
          scroll.scrollToTop()
        }} />
    </Link>
    </div>
  )
}

export default Scroll