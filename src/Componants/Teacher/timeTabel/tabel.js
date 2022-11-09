import Table from 'react-bootstrap/Table';
import './tabel.css'
function TimeTabel() {
  return (
<div className="row row-cols-2 row-cols-md-5 my-5 g-4 w-80 m-auto w-50">

    <Table striped bordered hover>
      <thead>
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
</div>
  );
}

export default TimeTabel;