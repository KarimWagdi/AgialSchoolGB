
import InputGroup from 'react-bootstrap/InputGroup';
import Sidebar from '../sidebar/sidebar.js'

function Report() {
    return(
        <>
        <Sidebar/>
     <div className="position-relative mt-5"> 

<div className="row row-cols-2 row-cols-md-3 g-4 w-50 m-auto  my-3 ">

        <InputGroup>
        <InputGroup.Text>Report</InputGroup.Text>
         <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
        
      </InputGroup>
           <button type="button" class="btn btn-warning d-grid gap-2 col-6 mx-auto">Send</button>

</div>
</div>
        </>
    )
  }

  export default Report