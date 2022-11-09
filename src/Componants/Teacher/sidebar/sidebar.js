import './sidbar.css'

import {  NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Masgs from '../../../assets/photos/email (1).png';
import note from '../../../assets/photos/bell-ring.png';
import quotes from '../../../assets/photos/quotes.png';
import graduation from '../../../assets/photos/graduation-cap.png';
import logo from "../../../assets/whitelogo.png"

function Sidebar() {
  return (
    <>
   
      {[false].map((expand) => (
 <Navbar key={expand} bg="light" expand={expand} className="mb-3">
  <Container fluid>
     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
              style={{width:"15em",padding: "0"}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
              
              <Offcanvas.Body 
              className="OffcanvasList" >
                <div className="logo">
                  <img src={logo} alt="Agial Logo"/>

                </div>
                <Nav className=" nav justify-content-end flex-grow-1  w-100">

                  <NavLink active ClassName="text-danger" className={"nav-link lists"} aria-current="page" to="/Peofile">
                   <img className="img m-2" src={quotes} alt="quotes" /> <h>My Profile</h>
                   </NavLink>
                  <NavLink active ClassName="text-danger" className={"nav-link lists"} aria-current="page" to="/Lessons">
                    <img className="img m-2" src={graduation} alt="graduation" /><h>Lessons</h>
                    </NavLink>
                  
                  <NavLink active ClassName="text-danger" className={"nav-link lists"} aria-current="page" to="/Events">

                    <img className="img m-2" src={Masgs} alt="setting" /><h>Events</h>
                    </NavLink>

                    <NavLink active ClassName="text-danger" className={"nav-link lists"} aria-current="page" to="/Feedback">

                    <img className="img m-2" src={note} alt="setting" /><h>Feedback</h>
                    </NavLink>

                    <NavLink active ClassName="text-danger" className={"nav-link lists"} aria-current="page" to="/TimeTabel">

                    <img className="img m-2" src={quotes} alt="setting" /><h>Time Tabel</h>
                    </NavLink>           
                                   
                </Nav>
                
              </Offcanvas.Body>

      </Navbar.Offcanvas>


    {/* <Navbar bg="light" expand="lg" style={{color: "red", width: "95%"}}>
      <Container fluid >
         <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" ><span><img className="img " src={Masgs} alt="Masgs" /></span> </Nav.Link>
            <Nav.Link href="#action2" ><span><img className="img  " src={note} alt="note" /></span> </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" className="me-5">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#action2"> <span><img className="img" src={Avatar} alt="Avatar" /></span> </Nav.Link>            
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
     
  </Container>
  </Navbar>
      ))}
      
    </>
  );
}

export default Sidebar;