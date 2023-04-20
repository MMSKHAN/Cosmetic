import React from 'react'
import "./styled.css"
// import { HashLink as Link } from 'react-router-hash-link'
import { Link } from 'react-scroll'
function NavLinks({to,text,onClick,active=" "}) {
  return (
    <li className="nav-item">
            <Link  className={`nav-link ${active}  hov`} aria-current="page" to={to} onClick={onClick} >{text} </Link>
          </li>
  )
}

export default NavLinks