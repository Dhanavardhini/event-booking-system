import React from 'react'
import "./userlanding.css"
import { Link } from 'react-router-dom'
function Userlanding() {
  return (
    <>
    <div className="user1-main">
    <nav className="navbar-user">
        <div className="navbar-container">
            <div className="logo">Event Booking System</div>
            <ul className="nav-links">
               <li><a href="#">Home</a></li>
               
                <Link to={"/mybooking"}><li><a href="#">My booking</a></li></Link>
                <Link to={"/userlogin"}><li><a href="#">Logout</a></li></Link>
            </ul>
        </div>
    </nav>

    <div className="hero-image1">
        <div className="hero-text">
            <h1>Reserve your spot, enjoy the moment.</h1>
            <p>Experience excellence in every event</p>
            <Link to={"/booktwo"}><a href="#" class="cta-button">Entertainment Events</a>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to={"/bookfour"}><a href="#" class="cta-button">Function Events</a></Link>
        </div>
    </div>

    <main className="main-content1">
        <div className="card-container1">
            <div className="card">
                <h2>Entertainment Events</h2>
                <p>An event is not just about what happens, but about how it makes you feel.</p>
               
                <Link to={"/booktwo"}><a href="#" className="btnu">book</a></Link>
            </div>
            <div className="card">
                <h2>Function Events</h2>
                <p>The purpose of any function is to bring people together to share moments that matter.</p>
                <Link to={"/bookfour"}><a href="#" className="btnu">book</a></Link>
            </div>
           
        </div>
    </main>
    <footer className="footer">
        <div className="footer-container">
            <p>&copy; 2023 Event Booking System. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Userlanding