import React from 'react'
import "./twobook.css"
import "./Rent.css"
import { Link } from 'react-router-dom'
function Twobook() {
  return (
    <>
        
        <div className="two-book">
        {/* <h1>Two Wheelers Booking</h1> */}
        <div className="btn-container1">
            
            <Link to={"/newbook"}><a href="#" className="btn1 btn-primary1">New Booking</a></Link>
            <Link to={"/allbook1"}><a href="#" className="btn1 btn-secondary2">All booking</a></Link>
            </div>
        </div>
    </>
  )
}

export default Twobook