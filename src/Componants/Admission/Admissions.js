import Banner from "../Banner"
import image from "../../../src/Media/Admissions.jpg";




function Admissions() {



    return (
        <>
            <Banner
                head="ADMISSION PROCESS"
                title="JOIN THE REPTON FAMILY"
                img={image}
            />
            <h1>Enrollment steps</h1>
            <p>A filled admission form signed by the parent.</p>
            <p>Interview with the school principal and the head of stage.</p>
            <p>A second interview with the school principal. </p>
            <p>Based on the two interviews, the school principal and the head of stage choose the accepted students.  </p>
            <h2> Upon acceptance, the documents required for admission are:  </h2>
            <p>10 recent color passport photographs </p>
            <p>Applicant’s Birth certificate</p>
            <p>Copy of identification for both parents</p>
            <p>Copy of parents’ qualification certificates</p>
            <p>An attested Sequence of Years Certificate</p>
            <p>A recent bill for water, gas, or electricity</p>

        </>
    )

}

export default Admissions