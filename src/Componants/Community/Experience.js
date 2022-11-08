import Banner from "../Banner";
import image from "../../../src/Media/Experince.jpg";
import Head from "../../../src/Media/Head.jpg";

function Experience() {
    return (
        <>
            <Banner
                head="Agial EXPERIENCE"
                title="A UNIQUE LIFELONG JOURNEY "
                img={image}
            />

            <h1>Experience</h1>
            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">
                                    We nurture competence and confidence, and develop an
                                    individual’s skills and moral compass.{" "}
                                </h1>
                                <p class="card-text">
                                    receive an education designed to help them thrive and
                                    contribute long after their years at school. Learning takes a
                                    variety of forms and extends beyond the confines of the
                                    classroom. We are committed to helping our pupils engage with
                                    the wider world both physically and intellectually.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">
                                    The value of charity and community service is instilled in our
                                    children alongside an appreciation of the need to care for the
                                    environment.{" "}
                                </h1>
                                <p class="card-text">
                                    Opportunities for the development of physical and mental
                                    resilience are built into the outdoor and adventurous
                                    activities program along with school camps that play a vital
                                    and enjoyable part in our Outdoor Learning Program.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
