
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const Feedback = () =>{
    return (
    <div className="row row-cols-2 row-cols-md-5 my-5 g-4 w-80 m-auto w-50">
        {/* <input type='text' placeholder='Enter Student Name'/> */}
        <InputGroup className="mb-1">
        <InputGroup.Text id="inputGroup-sizing-default">
         Student Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <FloatingLabel className="mb-1 w-100" controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <button className="btn btn-warning btn-center">Send</button>
    </div>

        
    )
}
export default Feedback;
