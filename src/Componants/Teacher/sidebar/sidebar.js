import './sidbar.css'
// import './sidebar.scss'
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
// import "./sidebar.scss"
function Sidebar() {
  return (
    <>
   
      {[false].map((expand) => (
 <Navbar key={expand} bg="light" expand={expand} className="mb-3">
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
      
    </>
  );




{/* <input type="checkbox" id="navcheck" role="button" title="menu"/>
<label for="navcheck" aria-hidden="true" title="menu">
	<span class="burger">
		<span class="bar">
			<span class="visuallyhidden">Menu</span>
		</span>
	</span>
</label>
<nav id="menu">
	<a href="#">Lorem.</a>
	<a href="#">Nesciunt!</a>
	<a href="#">Magnam.</a>
	<a href="#">Ipsum.</a>
	<a href="#">Voluptatem.</a>
	<a href="#">Quibusdam.</a>
</nav>

	
			<h1>UI with UX improvement with only awesome CSS</h1>
		<p><strong>Burger icon, animated nav background and off-trigger area (outside nav opened) made width pseudo-elements. No JS at all :)</strong></p>
		<p><strong>No repaint, no reflow, no JS, but the blur effect may be a little laggy, particularly on mobile devices.</strong></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum asperiores, minima obcaecati ex iusto alias minus excepturi sunt! Asperiores quibusdam iure numquam quis dicta at quisquam debitis minima perspiciatis modi?</p>
		<p>Asperiores impedit neque porro, minus cum. Nesciunt blanditiis, dolorum explicabo esse voluptates voluptas doloribus, vero voluptate veniam impedit nam doloremque unde inventore ipsum iste magnam perferendis assumenda in sunt deleniti.</p>
		<p>Cum quidem eum quos provident placeat aut tempore rem voluptates eveniet? Eos impedit aspernatur hic tenetur ipsum tempora exercitationem libero voluptas numquam necessitatibus. Error quisquam quaerat debitis suscipit velit dolore.</p>
		<p>Atque, ab libero! Cum quae cumque voluptate culpa accusantium iste aliquam illum quos facere quisquam, delectus, magnam neque dicta quibusdam libero itaque dolorem, tenetur vel dolores laudantium ratione asperiores voluptatibus.</p>
		<p>Fugiat praesentium omnis maiores atque sed perspiciatis quia laboriosam! Eius mollitia iusto quia libero, voluptate laborum labore ducimus beatae, quisquam, dicta laboriosam culpa voluptatem impedit maxime, a ex pariatur dignissimos.</p>
		<p>Dolores odio dolore quo? Autem iure dolorem ratione, odit reiciendis. Non pariatur voluptates, explicabo vitae, rem molestias in. Voluptates expedita iusto blanditiis commodi numquam. Hic atque natus dolore cupiditate velit.</p>
		<p>Ipsam ipsum quos, quibusdam nulla commodi dolorem impedit soluta odio natus. Ullam dolor consequatur tenetur similique cupiditate debitis natus tempore molestiae quo, inventore in quia earum explicabo eaque qui facilis.</p>
		<p>Iure, natus. Ipsam officia nostrum minima ut blanditiis asperiores neque esse itaque reprehenderit, et, porro ea nemo eligendi cum soluta fuga similique? Soluta, nam odio praesentium quas officia repellendus dicta.</p>
		<p>Modi voluptates, doloremque aliquam. Magnam numquam fugit aliquam veniam officiis iusto et assumenda cupiditate aspernatur voluptas expedita quo voluptatibus repudiandae, sapiente molestias, culpa eos placeat possimus quae! Aliquid dicta, atque?</p>
		<p>Laborum magni ipsam iure iste blanditiis saepe. Optio obcaecati quaerat soluta, vitae. Asperiores reiciendis minima, quidem iusto explicabo culpa quaerat atque! Cum nesciunt nam ducimus mollitia iste sapiente sit, eos.</p>  */}
	

}

export default Sidebar;