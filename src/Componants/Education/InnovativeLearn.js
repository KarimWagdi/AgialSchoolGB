import Banner from "../Banner";

import image from "../../../src/Media/junior.jpg";
import Head from "../../../src/Media/Head.jpg";

function InnovativeLearn() {
  return (
    <>
      <Banner
        head="Innovative Learning"
        title="LEARN THROUGH DISCOVERY "
        img={image}
      />
      <div className="container">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Head} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">Innovative Learning</h1>
                <p class="card-text">
                  The Junior School classrooms are designed around a central
                  learning courtyard where pupils can engage, discover, and
                  collaborate. The concept revolves around all learning spaces
                  having physical and visual access to the outdoors. The aim is
                  to support and promote the sensory, cognitive, physical, and
                  emotional development of our pupils through innovative
                  learning techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
}

export default InnovativeLearn;
