import Banner from "../Banner";
import image from "../../../src/Media/AboutBanner.jpg";
import Head from "../../../src/Media/Head.jpg";
import RightSection from "../Shared/Section/RightSection";
import visionImg from "../../assets/photos/vision.jpg"
import misionImg from "../../assets/photos/mission.jpg";
import LeftSection from "../Shared/Section/LeftSection";
function Overview() {

    const visionTitle = <h3>Our Vision</h3>;
    const visionParagraph = <> <p>  Our school is an institute with ambitious expectations, aims
        at creating a new generation of great thinkers who are able to
        solve problems. It’s a place for the ambitious parents who
        want to provide high quality education for their children.
    </p>
    </>
    const missionTitle = <> <h3>Our Mission</h3></>
    const missionparagraph = <>
        <p>
            A policy based on integrated systems that are applied in the
            best international schools, Applying educational technology to
            prepare our school to be an ISO certified school,The school
            policy continues from the kindergarten stage till the
            secondary stage,Selecting highly qualified teachers who have
            experience and team work spirit, The school applies strict
            discipline for both its staff and students from the very
            beginning of the academic year to its end, Creating a quiet,
            friendly and safe atmosphere to make the students
            happy,Treating the students in a fair way as well as helping
            them to develop their moral and religious aspects. Implanting
            in the students love for their school and loyalty for their
            country.
        </p>
    </>
    return (
        <>

            <Banner head="EDUCATION" title="NURTURE, INSPIRE, EDUCATE" img={image} />

            <RightSection img={visionImg} title={visionTitle} paragraph={visionParagraph} />
            <LeftSection img={misionImg} title={missionTitle} paragraph={missionparagraph} />

        </>
    );
}

export default Overview;
