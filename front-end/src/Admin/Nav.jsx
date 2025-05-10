import React from 'react'
import './Nav.css'
import { MdDashboard, MdTwoWheeler } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import FlightClassIcon from '@mui/icons-material/FlightClass';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FunctionsIcon from '@mui/icons-material/Functions';
function Navbar() {

  return (
    <>
<nav className="sidebar">
        <div className="logo"> Event Ticket Booking System</div>
        <div className="nav-links1">
            <Link to={"/dash"}><a href="#" ><MdDashboard /> Dashboard</a></Link>
            <Link to={"/two"}><a href="#">< MovieCreationIcon/> Entertainment tickets</a></Link>
            <Link to={"/four"}><a href="#">< FunctionsIcon/> Function tickets</a>  </Link>
            <Link to={"/userd"}><a href="#">< MovieCreationIcon/>Entertainment Users</a></Link>
            <Link to={"/users"}><a href="#"><FunctionsIcon />Function Users</a></Link>
            <Link to={"/logout"}><a href="#"><GrLogout />Logout</a></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar