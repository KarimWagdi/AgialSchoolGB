import Banner from "../Banner";
import image from "../../../src/Media/welcomeLetter.jpg";
import Head from "../../../src/Media/Head.jpg";

function WelcomeLetter() {
    return (
        <>
            <Banner
                head="Mr.mmm"
                title="A WELCOME FROM OUR HEAD OF JUNIOR SCHOOL"
                img={image}
            />

            <h1> Welcome Letter</h1>
            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">
                                    Welcome Letter
                                </h1>
                                <p class="card-text">
                                    Agial School opened in 2015 as a language school in the road
                                    between Tala and Tanta. Located in the city of Tala, the
                                    school currently serves about 900 students. The school has two
                                    large academic four-storey buildings with ground floors
                                    including a gymnasium, an administrative building, that has an
                                    auditorium and Art room, a theatre, a music hall, and multiple
                                    athletic facilities including a playground for soccer, and
                                    school media center. Other facilities include tennis courts,
                                    outside basketball courts, and an area for track and events.
                                    The school includes a swimming pool, and a well-equipped kid’s
                                    area. For the educational services, the school has 2 computer
                                    laboratories, 2 science laboratories and a phonetics
                                    laboratory. The school has two clinics in different places
                                    because we take the safety of the students seriously. Our
                                    school has Fireproofed cables, and the buildings are equipped
                                    with an extensive smoke detection system and our evacuation
                                    policy is practiced by the whole staff, all is in place to
                                    protect your child in the unlikely event of an incident. Built
                                    on a 4575.73 square meter plot in the road between Tala and
                                    Tanta, Agial School is creatively designed to engage your
                                    child’s curiosity while encouraging a love of learning.
                                    Designed to be a secured, quiet and a healthy place for
                                    living a full day happily. The building incorporates the
                                    latest philosophy in building design and technology. All
                                    classrooms have been fitted with fresh air sources to reduce
                                    the transmission of disease. Our focus on health in the
                                    building extends to the flooring and furniture. Our PreK and
                                    Kindergarten building is designed with interactive spaces
                                    inside, as well as outside playing areas. This was an
                                    intentional design plan to encourage students to learn through
                                    play. This space provides an environment for young children to
                                    learn to take appropriate risks, practice cooperation, learn
                                    teamwork, and further develop their fine and gross motor
                                    skills, all done while playing in this purpose-built space.
                                    Our classrooms are well-equipped to satisfy the learners’
                                    needs and passion, and each classroom is equipped with a
                                    smartboard. We have a spacious library that has a reading
                                    corner designed to foster a love of books. Children are
                                    encouraged to spend time there each day. There are special
                                    rooms for cooking, and music that are designed to encourage
                                    young children to widen their interests and develop new
                                    talents.
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

export default WelcomeLetter;
