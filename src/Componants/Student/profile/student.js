import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './student.css';
import Sidebar from '../sidebar/sidebar.js'
import {Link } from "react-router-dom";
import Avatar from "../../../assets/photos/user.png";
function Student() {
  return (
    
    
     <>
     <Sidebar/>
     <div className=" main position-relative mt-5"> 
     
     <div className="info ">
      <span>Student Name</span>

      <img className=" " src={Avatar} alt="Avatar"/>
     </div>


      <div className="links">
        {/* <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul> */}
</div>     
    </div>
    
      </>
  );
}

export default Student;