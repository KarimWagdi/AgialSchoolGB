import Banner from "../Banner"

import image from "../../../src/Media/SchoolPolicy.jpg";


function SchoolPolicy() {

    return (
        <>
            <Banner
                head="Policy"
                title="Agial School language policy "
                img={image}
            />


            {/* //////////////////the cover//////////////////// */}
            <div><img src="../../dummy_900x400_ffffff_cccccc.png" alt=""></img></div>
            {/* //////////////////SchoolPolicy//////////////////// */}
            <div>

                <h1>School language policy</h1>
                <p>A policy based on integrated systems that are applied in the best international schools, Applying the latest educational technology to make our school the best school ever, the school policy continues from the kindergarten stage till the secondary stage, selecting highly-qualified teachers who have experience and team work spirit, the school applies strict discipline for both its staff and students from the very beginning of the academic year to its end, Creating a quiet, friendly and safe atmosphere to make the students happy, treating the students in a fair way as well as helping them to develop their moral and religious aspects. Implanting in the students love for their school and loyalty for their community and home country.
                </p>
                <h2>Agial School language policy is the following:</h2>

                <ol>
                    <li>
                        <h3>Factors considered</h3>
                        <h4>In drafting this policy, the following factors have been considered:</h4>
                        <ul>
                            <li>The capacity of the school</li>
                            <li>The resources and staff available to the school</li>
                            <li>interests of the learners</li>
                            <li>interests of the school community</li>
                            <li>interests of the community in which the school is located</li>
                            <p>International best practice with regard to class sizes and language in education, with specific reference to the importance of mother tongue education</p>
                        </ul>
                    </li>
                    <li>
                        <h3>Teaching and examination</h3>
                        <p>All teaching and the taking of tests and examinations shall occur in the schools medium/media of instruction</p>
                    </li>
                    <li>
                        <h3>Policy on medium of instruction</h3>
                        <ul>
                            <li>The medium of instruction is English from pre-school to Grade 2</li>
                            <li>This Policy may be amended, supplemented, modified or altered from time to time by the SGB</li>
                        </ul>
                    </li>
                </ol>
            </div>

        </>

    )

}

export default SchoolPolicy
