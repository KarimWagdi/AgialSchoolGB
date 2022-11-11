import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
 

function Addevent () {
    return(
        <>
        <div className="row row-cols-2 row-cols-md-3 g-4 w-50 m-auto  my-3 ">
            {/* Upload Image */}
        <Form.Group controlId="formFile" className="w-100">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
        
        {/* Event Title */}
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Event Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter Event Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {/* Event Discription */}
        <InputGroup>
        <InputGroup.Text>Discription</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      {/* Date */}
      <InputGroup>
        <InputGroup.Text>Date</InputGroup.Text>
        <Form.Control type="date" aria-label="Date" />
      </InputGroup>
      {/* Location */}
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
        <Form.Control
          placeholder="Enter Event Location"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {/* level */}
       <InputGroup className="mb-3">
      <Form.Select aria-label="Default select example">
      <option>Select level</option>
      <option value="1">class 1</option>
      <option value="2">class 2</option>
      <option value="3">class 3</option>
    </Form.Select>
      </InputGroup>
     <button type="button" class="btn btn-warning d-grid gap-2 col-6 mx-auto">Add Event</button>
         </div>
        </>
    )
}

export default Addevent