import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './event.css'
function Event() {
  return (
    // <div className="container">
     
    // </div>
    
     <>
     <div className="position-relative m-4"> 
      <span className="text-center fs-1"> Event List</span><span className="fs-2"><button className='position-absolute top-50 start-50 translate-middle btn btn-sm mb-5 btn-primary'>Add New Event</button></span>
    </div>
       <div className="row row-cols-2 row-cols-md-3 g-4 w-80 m-auto">
        
        <Card style={{ width: '18rem' ,margin:'5px'}}>
        <Card.Img className="Cardimg" variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className="text-center">Event Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <br />
            <h5>Date:</h5><span>14/11/2022</span>
            <br />
            <h5>Location: </h5><span>Cairo</span>
            <br />
            <h5>level: </h5><span>class4</span>
          </Card.Text>
          <Button variant="danger" className="btn btn-center">Remove</Button>
        </Card.Body>
      </Card><Card style={{ width: '18rem' ,margin:'5px'}}>
        <Card.Img className="Cardimg" variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className="text-center">Event Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <br />
            <h5>Date:</h5><span>14/11/2022</span>
            <br />
            <h5>Location: </h5><span>Cairo</span>
            <br />
            <h5>level: </h5><span>class4</span>
          </Card.Text>
          <Button variant="danger" className="btn btn-center">Remove</Button>
        </Card.Body>
      </Card>
       </div>

      
      </>
  );
}

export default Event;