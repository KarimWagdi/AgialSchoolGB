// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
 

// function  AddLesson() { 
//     return(
//         <>
//        <div className="row row-cols-2 row-cols-md-3 g-4 w-50 m-auto  my-3 ">
//             {/* Upload Image */}
//         <Form.Group controlId="formFile" className="w-100">
//         <Form.Label>Upload Vedio</Form.Label>
//         <Form.Control type="file" />
//       </Form.Group>
        
//         {/* Event Title */}
//           <InputGroup className="mb-3">
//         <InputGroup.Text id="basic-addon1">Lesson Title</InputGroup.Text>
//         <Form.Control
//           placeholder="Enter Event Title"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>
//      <button type="button" class="btn btn-warning d-grid gap-2 col-6 mx-auto">Add Lesson</button>

//       </div>
//         </>
//     )
//  }
//  export default AddLesson

// import "node_modules/video-react/dist/video-react.css";

import { Player } from "video-react";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AddLesson() {

  return (
<>
{/* <link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/> */}
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

    {/* <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /> */}
    </>
  );
};
