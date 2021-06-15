import React from 'react';
import './home.scss';
import { NavLink } from 'react-router-dom';
import PageLine from '../../Assets/icons/page-line.png';
import FooterArrow from '../../Assets/icons/icon-arrow.svg';
import WelcomeImage from '../../Assets/home/desktop/image-welcome.jpg';
import Slider from '../../Components/slider/ImageSlider';
import { ImageSliderData } from '../../Components/slider/ImageSliderData';

function home() {
  return (
    <>
    <div className="page-header-faded">
    <img className="page-line" src={PageLine} />
    <h1 className="current-page">HOME</h1>
  </div>
<div className="home-main">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
  <title>Frontend Mentor | Arch Studio Website Challenge</title>
  </head>
  <Slider slides={ImageSliderData} />
  <body className="home-body">
    <div className="container">

    <div className="home-slide">
    <h1 className="h1-small">Project Paramour</h1>

    <p className="p-body">Project made for an art museum near Southwest London. Project Paramour is 
    a statement of bold, modern architecture.</p>

    <button className="button">
      <NavLink exact activeClassName="active" to="/portfolio">
          <p className="button-text">See Our Portfolio</p>
      </NavLink>
          <img className="button-arrow" src={FooterArrow} />
    </button>

    <h1 className="h1-small">Seraph Station</h1>

    <p className="p-body">The Seraph Station project challenged us to design a unique station that would 
    transport people through time. The result is a fresh and futuristic model 
    inspired by space stations.</p>

    <button className="button">
      <NavLink exact activeClassName="active" to="/portfolio">
          <p className="button-text">See Our Portfolio</p>
      </NavLink>
          <img className="button-arrow" src={FooterArrow} />
    </button>

    <h1 className="h1-small">Federal II Tower</h1>

    <p className="p-body">A sequel theme project for a tower originally built in the 1800s. We achieved 
    this with a striking look of brutal minimalism with modern touches.</p>
    
    <button className="button">
      <NavLink exact activeClassName="active" to="/portfolio">
          <p className="button-text">See Our Portfolio</p>
      </NavLink>
          <img className="button-arrow" src={FooterArrow} />
    </button>

    <h1 className="h1-small">Trinity Bank Tower</h1>

    <p className="p-body">Trinity Bank challenged us to make a concept for a 84 story building located 
    in the middle of a city with a high earthquake frequency. For this project we 
    used curves to blend design and stability to meet our objectives.</p>

    <button className="button">
      <NavLink exact activeClassName="active" to="/portfolio">
          <p className="button-text">See Our Portfolio</p>
      </NavLink>
          <img className="button-arrow" src={FooterArrow} />
    </button>

<div className="slide-nav-container">
    <button className="slide-nav-block">01</button>
    <button className="slide-nav-block">02</button>
    <button className="slide-nav-block">03</button>
    <button className="slide-nav-block">04</button>
</div>
</div>

  <div className="welcome">
  <h1 className="h1-large">Welcome</h1>
      <div className="welcome-text-image-container">
      <div className="welcome-text">
        <h1 className="h1-small">Welcome to Arch Studio</h1>

        <p className="p-body">We have a unique network and skillset to help bring your projects to life. Our 
        small team of highly skilled individuals combined with our large network put us 
        in a strong position to deliver exceptional results.</p>

        <p className="p-body">Over the past 10 years, we have worked on all kinds of projects. From stations 
        to high-rise buildings, we create spaces that inspire and delight.</p>

        <p className="p-body">We work closely with our clients so that we understand the intricacies of each 
        project. This allows us to work in harmony the surrounding area to create truly 
        stunning projects that will stand the test of time.</p>
        </div>
        <img className="welcome-image" src={WelcomeImage} />
      </div>
  </div>

  <div className="small-team-container">
    <div className="text-button-container">
    <h2 className="h2">Small team,<br></br>big ideas</h2>
    <button className="button">
      <p className="button-text">About Us</p>
      <img className="button-arrow" src={FooterArrow} />
    </button>
    </div>
  </div>

  <div className="featured-and-button">
      <h2 className="h2">Featured</h2>
      <NavLink exact activeClassName="active" to="/portfolio">
      <button className="button">
      <p className="button-text">See All</p>
      <img className="button-arrow" src={FooterArrow} />
      </button>
      </NavLink>
    </div>

    <div className="cards-container">
    <div className="featured-card-container1">
      <h1 className="featured-card-number">1</h1>
      <div className="featured-text-container">
      <p className="featured-card-header">Project Del Sol</p>
      <NavLink exact activeClassName="active" to="/portfolio">
      <p className="p-body">View All Projects</p>
      </NavLink>
      </div>
    </div>

    <div className="featured-card-container2">
    <h1 className="featured-card-number">2</h1>
    <div className="featured-text-container">
    <p className="featured-card-header">228B Tower</p>
    <NavLink exact activeClassName="active" to="/portfolio">
      <p className="p-body">View All Projects</p>
      </NavLink>
    </div>
    </div>

    <div className="featured-card-container3">
    <h1 className="featured-card-number">3</h1>
    <div className="featured-text-container">
    <p className="featured-card-header">Le Prototype</p>
    <NavLink exact activeClassName="active" to="/portfolio">
      <p className="p-body">View All Projects</p>
      </NavLink>
    </div>
    </div>
  </div>

  </div>
  </body>
</div>
</>
  )
}

export default home;