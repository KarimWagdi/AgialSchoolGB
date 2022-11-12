import './sidebar.css'
import {Link,  NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Masgs from '../../../assets/photos/email (1).png';
import note from '../../../assets/photos/bell-ring.png';
import quotes from '../../../assets/photos/quotes.png';
import graduation from '../../../assets/photos/graduation-cap.png';
import logo from '../../../assets/whitelogo.png'
function Sidebar() {
  return (
    <>
   
     <div className="Navbar">
       {[false].map((expand) => (
 <Navbar key={expand} bg="light"  expand={expand} >
  <Container fluid> 
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
              style={{width:"18em",padding: "0"}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
              
              <Offcanvas.Body 
              className=" bg-dark text-center text-white p-4" >
                <div className="logo"> 
                   <Link to="/home">
                  <img src={logo} alt="Agial Logo"/>
                  </Link>
                </div>
                 
                <Nav className=" nav justify-content-end flex-grow-1  ">

                  <NavLink active ClassName="text-danger" className={"nav-link lists text-start"} aria-current="page" to="/Peofile">
                   <img className="img m-2" src={quotes} alt="quotes" /> <h>My Profile</h>
                   </NavLink>
                  <NavLink active ClassName="text-danger" className={"nav-link lists text-start"} aria-current="page" to="/Lessons">
                    <img className="img m-2" src={graduation} alt="graduation" /><h>Lessons</h>
                    </NavLink>
                  
                  <NavLink active ClassName="text-danger" className={"nav-link lists text-start"} aria-current="page" to="/Events">

                    <img className="img m-2" src={Masgs} alt="setting" /><h>Events</h>
                    </NavLink>

                    <NavLink active ClassName="text-danger" className={"nav-link lists text-start"} aria-current="page" to="/Feedback">

                    <img className="img m-2" src={note} alt="setting" /><h>Feedback</h>
                    </NavLink>

                    <NavLink active ClassName="text-danger" className={"nav-link lists text-start"} aria-current="page" to="/TimeTabel">

                    <img className="img m-2" src={quotes} alt="setting" /><h>Time Tabel</h>
                    </NavLink>           
                                   
                </Nav>
                
              </Offcanvas.Body>

      </Navbar.Offcanvas>


     
  </Container>
  </Navbar>
      ))}
     </div>
      
    </>
  );



}

export default Sidebar;