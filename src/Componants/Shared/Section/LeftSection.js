import "./section.scss"

import {useEffect} from "react";
import AOS from 'aos';
import "../../../../node_modules/aos/dist/aos.css"


function LeftSection(props) {

    useEffect(() => {
        AOS.init();
      }, [])

// Section Props: 
//           *title 
//           *paragraph
//           *img
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <article className="leftSection sectionArticle col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <span className="title" data-aos="fade-up" data-aos-delay="250">
                                {props.title}
                            </span>
                            <span data-aos="fade-up" data-aos-delay="350" data-aos-anchor-placement="center-bottom" >
                                {props.paragraph}
                            </span>

                        </article>

                        <section className="sectionImg col-md-6" data-aos="fade-left">
                            <img src={props.img}>
                            </img>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LeftSection;