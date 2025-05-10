import Adminlogin from './Admin/Adminlogin'
import Rentlanding from './Admin/Rentlanding'
import Userlogin from './Admin/Userlogin'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Register from './Admin/R'
import Userlanding from './Userpanel/Userlanding'
import Twobooking from './Userpanel/Twobooking'
import Fourbooking from './Userpanel/Fourbooking'
import Mybooking from './Userpanel/Mybooking'
import Bookfrom from './Userpanel/Bookfrom'
import Dbmain from './Admin/Dbmain'
import Fourbooks from "./Userpanel/Fourbook"
import { Component } from 'react'

function App() {
const location = useLocation()
  console.log(location.pathname);
  const route = [
    {
      path:'/',
      Component:Rentlanding
    },
    {
      path:'/ad',
      Component:Adminlogin
    },
    {
      path:'/userlogin',
      Component:Userlogin
    },
    {
      path:'/register',
      Component:Register
    },
    
   
    {
      path:'/userlanding',
      Component:Userlanding
    },
   
    {
      path:"/booktwo",
      Component:Twobooking
    },
    {
      path:"/bookfour",
      Component:Fourbooking
    },
    {
      path:'/bookform',
      Component:Bookfrom
    },
    {
      path:'/backfour',
      Component:Fourbooking
    },
    {
      path:'/backtwo',
      Component:Twobooking
    },
    {
      path:'/fourdetail',
      Component:Fourbooking
    },
   
    {
      path:'/mybooking',
      Component:Mybooking
    },
    {
      path:'/fourbook',
      Component:Fourbooks 
    },
    
    {
      path:'/user',
      Component:Userlogin
    }
  ]

  const routePaths = route.map((r) => r.path);
  console.log(!routePaths.includes(location.pathname));
  
  return (
    <>
      <Routes>
        {
          route.map((data,index)=>(
            <Route key={index} path={data.path} element={<data.Component/>}/>
          ))
        }
        </Routes>

    {routePaths.includes(location.pathname) ? null : <Dbmain />}

    </>
    
    )
  }

  

export default App
