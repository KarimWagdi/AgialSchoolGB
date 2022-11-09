import Card from 'react-bootstrap/Card';
import Vid1 from "../../../Media/headerVideo.mp4"
import './lesson.css'
function Lessons() {
  return (
    <>
    <div className="position-relative m-4"> 
      <span className="text-center fs-1"> Lessons List</span><span className="fs-2"><button className='position-absolute top-50 start-50 translate-middle btn btn-sm mb-5 btn-primary'>Add Lesson</button></span>
    </div>
    <div className="row row-cols-2 row-cols-md-3 mx-auto  gap={2} w-80 ">
      <Card style={{ width: '18rem', padding:0 , margin:'auto'}}>  
          <video variant="top" src={Vid1} controls></video> 
        <Card.Body>
          <Card.Title className='text-center '>Lesson Title</Card.Title>
        </Card.Body>
        
      </Card>

        <Card style={{ width: '18rem' , padding:0 ,margin:'auto'}}>  
          <video variant="top" src={Vid1} controls></video> 
        <Card.Body>
          <Card.Title className='text-center '>Lesson Title</Card.Title>
        </Card.Body>
        
      </Card>
       <Card style={{ width: '18rem' , padding:0 ,margin:'auto'}}>  
          <video variant="top" src={Vid1} controls></video> 
        <Card.Body>
          <Card.Title className='text-center '>Lesson Title</Card.Title>
        </Card.Body>
        
      </Card>
    </div>
    </>
  );
}

export default Lessons;