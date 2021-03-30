import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'

export default function ParkPong() {
  return <section className="hero is-fullheight parkpong-image" id="parkpong">
    <div className="hero-body is-justify-content-center">
      <div className="box">
        <div className="columns">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src="../images/parkpongHome.png" />
                <div className="carouselItem" data-src="../images/parkpongMap.png" />
                <div className="carouselItem" data-src="../images/parkpongEvents.png" />
                <div className="carouselItem" data-src="../images/parkpongLogin.png" />
              </AwesomeSlider>
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">Park Pong</p><br></br>
              <p>Park Pong was a week long project built in the Mern Stack. If we keep adding content to this paragraph what happens</p>
            </div>
            <div className="has-text-centered">
              <a href="https://github.com/JSchenk8/project-3" target="blank"><button className="button m-2"><DiGithubBadge /></button></a>
              <a href="https://park-pong.herokuapp.com/" target="blank"><button className="button m-2"><GoLink /></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}