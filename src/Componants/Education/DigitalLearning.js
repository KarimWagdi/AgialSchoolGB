import Banner from "../Banner";
import image from "../../../src/Media/Degital.jpg";
import Head from "../../../src/Media/Head.jpg";

function DigitalLearning() {
    return (
        <>
            <Banner
                head="DIGITAL LEARNING"
                title="INTERACTIVE BLENDED LEARNING"
                img={image}
            />
            <h1>Digital Learning </h1>
            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">Digital Learning </h1>
                                <p class="card-text">
                                    Classrooms are equipped with interactive whiteboards the
                                    school has an active platform (LMS) that is daily provided
                                    with material and resources. Technology is fully integrated
                                    across the curriculum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DigitalLearning;
