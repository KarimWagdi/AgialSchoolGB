import Banner from "../Banner";
import image from "../../../src/Media/Club.jpg";
import Head from "../../../src/Media/Head.jpg";

function Club() {
    return (
        <>
            <Banner head="Agial CLUB" title="OUR DOORS ARE ALWAYS OPEN" img={image} />
            <h1>Our Club</h1>

            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Head} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">
                                    Our school is open for pupils and families{" "}
                                </h1>
                                <p class="card-text">
                                    Pupils and families have a secure and safe environment with a
                                    wide range of sport and entertainment facilities. This
                                    contributes to the development, in pupils, of personal
                                    responsibility, moral values, cooperation, emotional maturity,
                                    self-discipline, social competence, individuality, leadership,
                                    and a realisation of the value of group goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Club;
