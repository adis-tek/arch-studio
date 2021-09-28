import React from 'react';
import './about.scss';
import PageLine from '../../Assets/icons/page-line.png';
import Hero from '../../Assets/about/desktop/image-hero.jpg';
import HeroTablet from '../../Assets/about/tablet/image-hero.jpg';
import HeroMobile from '../../Assets/about/mobile/image-hero.jpg';
import Heritage from '../../Assets/about/desktop/image-heritage.jpg';
import HeaderLine from '../../Assets/icons/header-line.svg';
import LinkedIn from '../../Assets/icons/icon-linkedin.svg';
import TwitterWhite from '../../Assets/icons/icon-twitter-white.svg';
import LinkedInWhite from '../../Assets/icons/icon-linkedin-white.svg';
import Twitter from '../../Assets/icons/icon-twitter.svg';
import Jake from '../../Assets/about/desktop/avatar-jake.jpg';
import Thompson from '../../Assets/about/desktop/avatar-thompson.jpg';
import Jackson from '../../Assets/about/desktop/avatar-jackson.jpg';
import Maria from '../../Assets/about/desktop/avatar-maria.jpg';
 
function about() {
    return ( 
<>
<div className="page-header-faded-about">
    <div className="element-container">
    <img className="page-line" src={PageLine} />
    <h1 className="current-page">ABOUT</h1>
    </div>
  </div>
<div className="about-main">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Frontend Mentor | Arch Studio Website Challenge</title>
    </head>
<body className="about-body">
<div className="mobile-hero-container">
<img className="hero-image-tablet-outer" src={HeroTablet} />
<img className="hero-image-mobile-outer" src={HeroMobile} />
<div className="white-block-mobile" />
</div>
     <div className="container">
        <div className="hero-container">
        <h1 className="about">About</h1>
            <img className="hero-image" src={Hero} />
            <img className="hero-image-mobile" src={HeroMobile} />
            <div className="hero-text-container">
                <div className="hero-inner-text-container">
                <img className="header-line" src={HeaderLine} />
                <h2 className="h2">Your team of professionals</h2>
                <p className="p-body">Our small team of world-class professionals will work with you every step of the way. 
                Strong relationships are at the core of everything we do. This extends to the 
                relationship our projects have with their surroundings.</p>
            </div>
        </div>
    </div>

    <div className="heritage-container">
        <div className="heritage-text-container">
            <img className="header-line" src={HeaderLine} />
            <h2 className="h2">Our<br></br>Heritage</h2>
            <p className="p-body">Founded in 2007, we started as a trio of architects. Our complimentary skills and 
            relentless attention to detail turned Arch into one of the most sought after boutique 
            firms in the country.</p>
            <p className="p-body">Speciliazing in Urban Design allowed us to focus on creating exceptional structures that 
            live in harmony with their surroundings. We consider every detail from every surrounding 
            element to inform our designs.</p>
            <p className="p-body">Our small team of world-class professionals provides input on every project.</p>
        </div>
        <img className="heritage" src={Heritage} />
    </div>

    <div className="leaders-container">
        <div className="header-container">
        <h2 className="h2">The<br></br>Leaders</h2>
        </div>

        <div className="quad-container">

        <div className="couple-container">
        <div className="architect-profile-jake">
        <img className="linkedin" src={LinkedInWhite} />
        <img className="twitter" src={TwitterWhite} />
        </div>
        <div className="description">
        <p className="name">Jake Richards</p>
        <p className="title">Chief Architect</p> 
        <div className="social-icon-container-mobile">
        <img className="linkedin" src={LinkedIn} />
        <img className="twitter" src={Twitter} />
        </div>
        </div>

        <div className="spacing" />

        <div className="architect-profile-thompson">
        <img className="linkedin" src={LinkedInWhite} />
        <img className="twitter" src={TwitterWhite} />
        </div>
        <div className="description">
        <p className="name">Thompson Smith</p>
        <p className="title">Head of Finance</p>
        <div className="social-icon-container-mobile">
        <img className="linkedin" src={LinkedIn} />
        <img className="twitter" src={Twitter} />
        </div>
        </div>
        </div>

        <div className="couple-container">
        <div className="architect-profile-jackson">
        <img className="linkedin" src={LinkedInWhite} />
        <img className="twitter" src={TwitterWhite} />
        </div>
        <div className="description">
        <p className="name">Jackson Rourke</p>
        <p className="title">Lead Designer</p>
        <div className="social-icon-container-mobile">
        <img className="linkedin" src={LinkedIn} />
        <img className="twitter" src={Twitter} />
        </div>
        </div>

        <div className="spacing" />

        <div className="architect-profile-maria">
        <img className="linkedin" src={LinkedInWhite} />
        <img className="twitter" src={TwitterWhite} />
        </div>
        <div className="description">
        <p className="name">Maria Simpson</p>
        <p className="title">Senior Architect</p>
        <div className="social-icon-container-mobile">
        <img className="linkedin" src={LinkedIn} />
        <img className="twitter" src={Twitter} />
        </div>
        </div>
        </div>
        </div>
    </div>

    </div>

</body>
</div>
</>
    )
}

export default about