
import React from "react";
import "./headerVideo.scss"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"
import Vid1 from "../../../Media/headerVideo.mp4"

function HeaderVideo() {
  const sliderVideos = document.querySelectorAll(".slider-video");
  const handler = () => {
    sliderVideos.forEach((video, key) => {
      video.pause();
      video.currentTime = 0;
      video.load();
    });
  };

  return (
    <>
      <section id="headerVideo">
        <div className="overFlow">
          <article>
            <h1>Agial International schools</h1>
            <p>Our school is an institute with ambitious expectations, aims at creating a new generation of great thinkers who are able to solve problems. It’s a place for the ambitious parents who want to provide high quality education for their children.</p>
          <button className="primaryBtn"> <Link to="/aboutus" className="link" >About Us</Link></button>
          
          </article>

        </div>
        <div >
          <Carousel
            controls={false}
            fade={true}
            interval={10000}
            pause={false}
            className="hero-slider"
            onSlid={handler}
          >
            <Carousel.Item>
              <video
                className="slider-video"
                src={Vid1}
                loop
                autoPlay
                muted
                loading="lazy"
              ></video>
            </Carousel.Item>
            {/* <Carousel.Item>
              <video
                className="slider-video"
                src={Vid2}
                loop
                autoPlay
                muted
                loading="lazy"
              ></video>
            </Carousel.Item>
            <Carousel.Item>
              <video
                className="slider-video"
                src={Vid3}
                loop
                autoPlay
                muted
                loading="lazy"
              ></video>
            </Carousel.Item> */}
          </Carousel>
        </div>
      </section>

    </>

  );
}


export default HeaderVideo;