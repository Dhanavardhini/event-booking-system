
import './Dbmain.css'
import Navbar from './Nav'
import Dashboard from './Dashboard'
import "./Nav.css"
import { Route, Routes,useLocation } from 'react-router-dom'
import Addandmanage from './Addandmanage'
import Addandmanage2 from './Addandmanage2'
import Userslist from './Userslist'
import Twobook from './Twobook'
import Fourbook from './Fourbook'
import Logout from './Logout'
import Edittwowheel from './Edittwowheel'
import Editfourwheel from './Editfourwheel'
import Allbooking from './Allbooking'
import Userlogin from './Userlogin'
import Addtwowheel from './Addtwowheel'
import Addfourwheel from './Addfourwheel'
import Newbooking from './Newbooking'
import BookForm from '../Userpanel/Bookfrom'
import Bookings from '../Userpanel/Fourbook'
import Userslist2 from './Userlist2'
import Rentlanding from './Rentlanding'
import Register from './R'


export default function Dbmain() {
  const location = useLocation();

 
  const hideNavbarRoutes = ['/fourbook', '/bookform','/register'];

 
  const shouldHideNavbar = hideNavbarRoutes.some(route =>
    location.pathname.startsWith(route)
  );
  
  

  return (
   <>
      <div className="db-main">
      {!shouldHideNavbar && <Navbar />}
        <Routes>
        <Route path={"/"} element={<Rentlanding/>} />
        <Route path={"/dash"} element={<Dashboard />} />
        <Route path={"/two"} element={<Addandmanage />} />
        <Route path={"/managetwo"} element={<Edittwowheel />} />
        <Route path={"/managefour"} element={<Editfourwheel />} />
        <Route path={"/four"} element={<Addandmanage2 />} />
        <Route path={"/bookform/:id"} element={<BookForm />} />
        <Route path={"/fourbook/:id"} element={<Bookings />} />
        <Route path={"/addtwo"} element={<Addtwowheel/>} />
        <Route path={"/addfour"} element={<Addfourwheel />} />
        <Route path={"/userd"} element={<Userslist />} />
        <Route path={"/users"} element={<Userslist2 />} />
        <Route path={"/twobook"} element={<Twobook />} />
        <Route path={"/twobook"} element={<Fourbook />} />
        <Route path={"/allbook1"} element={<Allbooking />} />
        <Route path={"/newbook"} element={<Newbooking />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={'/user'} element={<Userlogin />} />
        </Routes>   
    </div>   
   </>
  )
}
