import Banner from "../Banner";
import image from "../../../src/Media/Arts.jpg";
import Head from "../../../src/Media/Head.jpg";

function Arts() {
    return (
        <>
            <Banner
                head="JUNIOR SCHOOL"
                title="LEARN THROUGH DISCOVERY "
                img={image}
            />
            <div className="container">
                <p>
                    At ALS, a great deal of importance is given to co-curricular
                    activities. Students are encouraged to develop their talents,
                    interests, hobbies, skills and techniques through participation in
                    physical, academic, scientific and artistic pursuits. The school
                    organizes different activities for students throughout an academic
                    year to emphasize the importance of co-curricular activities. All
                    activities are to be sent regularly through the Student’s Diary.
                    Behavior of others visiting school on their behalf, e.g another family
                    member collecting pupils.
                </p>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">ART</h1>
                                <p class="card-text">
                                    Art students at Agial begin a journey of innovative thinking
                                    as they explore new media, skills, techniques, and
                                    creative concepts that help refine their unique voice and
                                    vision. The school has an Art Room fully-equipped with all the
                                    materials that may help the learners innovate and create. It
                                    has a wide display space with white boards to let the students
                                    create their own gallery. As a school, we make yearly
                                    competitions for Art, Crafts and recycling products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">Music</h1>
                                <p class="card-text">
                                    Music is an important aspect of learning at Agial. Music is
                                    taught academically to all students of the school. The Music
                                    department runs a busy schedule of weekly rehearsals
                                    including: Bands, Junior and Senior musicians, and choirs.
                                    Instrumental music actively promoted and all pupils are
                                    encouraged to learn an instrument.
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

export default Arts;
