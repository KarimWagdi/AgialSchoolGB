import Table from 'react-bootstrap/Table';
import './tabel.css'
import Sidebar from '../sidebar/sidebar.js'
import {Link } from "react-router-dom";

function TimeTabel() {
  return (
  <>
  <Sidebar/>
     <div className="position-relative mt-5"> 

<div className="row row-cols-2 row-cols-md-5 my-5 g-4 w-80 m-auto w-50 bg-info p-2 text-dark bg-opacity-10 rounded-5">
<h2 className='text-center w-100'>Time Tabel</h2>
    <Table table table-hover  bordered   >
      <thead >
        <tr>
          <th>#</th>
          <th>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Class1</td>
          <td></td>
          <td>Done</td>
          <td></td>
          <td></td>
          <td>Done</td>
          
        </tr>
        <tr>
          <td>Class2</td>
          <td>Done</td>
          <td></td>
          <td></td>
          <td>Done</td>
          <td></td>
        </tr>
        <tr>
          <td>Class3</td>
          <td></td>
          <td></td>
          <td>Done</td>
          <td></td>
          <td>Done</td>
        </tr>
      </tbody>
    </Table>
         <button type="button" class="btn btn-warning d-grid gap-2 col-6 mx-auto">
          <Link style={{color:"black", textDecoration:"none"}} to='/Report'>
          Report
          </Link>
          </button>

</div>
</div>
</>
  );
}

export default TimeTabel;