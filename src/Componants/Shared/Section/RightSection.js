import "./section.scss"
import {useEffect} from "react";
import AOS from 'aos';

import "../../../../node_modules/aos/dist/aos.css"


function RightSection(props) {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <section id="Section">
                <div className="container">
                    <div className="row">
                     
                        <section className="sectionImg col-md-6" data-aos="fade-right">
                            <img src={props.img}>
                            </img>
                        </section>

                        <article className=" RightSection sectionArticle col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <span className="title" data-aos="fade-up" data-aos-delay="250">
                                {props.title}
                            </span>
                            <span className="paragraph" data-aos="fade-up" data-aos-delay="350" data-aos-anchor-placement="center-bottom" >
                                {props.paragraph}
                            </span>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RightSection;