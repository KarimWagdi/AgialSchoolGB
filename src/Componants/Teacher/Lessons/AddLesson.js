

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Sidebar from '../sidebar/sidebar.js'

export default function AddLesson() {

  return (
<>
<Sidebar/>
     <div className="position-relative mt-5"> 

 <div className="row row-cols-2 row-cols-md-3 g-4 w-50 m-auto  my-3 ">
            {/* Upload Image */}
         <Form.Group controlId="formFile" className="w-100">
         <Form.Label>Upload Vedio</Form.Label>
         <Form.Control type="file" />
     </Form.Group>
        
        {/* Event Title */}
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Lesson Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter Event Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
     <button type="button" class="btn btn-warning d-grid gap-2 col-6 mx-auto">Add Lesson</button>

      </div>

   </div>
    </>
  );
};
