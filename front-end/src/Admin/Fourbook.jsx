import React from 'react'
import "./twobook.css"
import { Link } from 'react-router-dom'
function Fourbook() {
  return (
   
    <>
        <div className="two-book">
       
        <div className="btn-container1">
            
            <Link to={"/newbook"} ><a href="#" className="btn1 btn-primary1">New Booking</a></Link>
            <Link to={"/allbook1"}><a href="#" className="btn1 btn-secondary2">All booking</a></Link>
            </div>
        </div>
    </>
  )
}

export default Fourbook