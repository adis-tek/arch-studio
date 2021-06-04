import React from 'react';
import './portfolio.scss';
import PageLine from '../../Assets/icons/page-line.png';

function portfolio() {
    return (
        <>
    <div className="page-header-faded">
    <img className="page-line" src={PageLine} />
    <h1 className="current-page">PORTFOLIO</h1>
    </div>

    <div className="portfolio-main">

    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Frontend Mentor | Arch Studio Website Challenge</title>
    </head>
<body className="portfolio-body">
<div className="container">

    <div className="three-cards-container1">
        <div className="card1">
            <div className="featured-text-container">
                <p className="featured-card-header">Seraph Station</p>
                <p className="p-body">September 2019</p>
            </div>
        </div>

        <div className="card2">
            <div className="featured-text-container">
                <p className="featured-card-header">Eebox Building</p>
                <p className="p-body">August 2017</p>
            </div>
        </div>

        <div className="card3">
            <div className="featured-text-container">
                <p className="featured-card-header">Federal II Tower</p>
                <p className="p-body">March 2017</p>
            </div>
        </div>
    </div>

    <div className="three-cards-container2">
        <div className="card1">
            <div className="featured-text-container">
                <p className="featured-card-header">Project Del Sol</p>
                <p className="p-body">January 2016</p>
            </div>
        </div>

        <div className="card2">
            <div className="featured-text-container">
                <p className="featured-card-header">Le Prototype</p>
                <p className="p-body">October 2015</p>
            </div>
        </div>

        <div className="card3">
            <div className="featured-text-container">
                <p className="featured-card-header">228B Tower</p>
                <p className="p-body">April 2015</p>
            </div>
        </div>
    </div>

    <div className="three-cards-container3">
        <div className="card1">
            <div className="featured-text-container">
                <p className="featured-card-header">Grand Edelweiss Hotel</p>
                <p className="p-body">December 2013</p>
            </div>
        </div>

        <div className="card2">
            <div className="featured-text-container">
                <p className="featured-card-header">Netcry Tower</p>
                <p className="p-body">August 2012</p>
            </div>
        </div>

        <div className="card3">
            <div className="featured-text-container">
                <p className="featured-card-header">Hypers</p>
                <p className="p-body">January 2012</p>
            </div>
        </div>
    </div>

    <div className="three-cards-container4">
        <div className="card1">
            <div className="featured-text-container">
                <p className="featured-card-header">SXIV Tower</p>
                <p className="p-body">March 2011</p>
            </div>
        </div>

        <div className="card2">
            <div className="featured-text-container">
                <p className="featured-card-header">Trinity Bank Tower</p>
                <p className="p-body">September 2010</p>
            </div>
        </div>

        <div className="card3">
            <div className="featured-text-container">
                <p className="featured-card-header">Project Paramour</p>
                <p className="p-body">February 2008</p>
            </div>
        </div>
    </div>

        </div>
        </body>
    </div>
    </>
    )
}

export default portfolio;