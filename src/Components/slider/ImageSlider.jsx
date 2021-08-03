import React, { useState } from 'react';
import './image-slider.scss';
import { ImageSliderData } from './ImageSliderData.js';
import FooterArrow from '../../Assets/icons/icon-arrow.svg';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // };
    const firstSlide = () => {
        setCurrent(0)
    };

    const secondSlide = () => {
        setCurrent(1)
    };

    const thirdSlide = () => {
        setCurrent(2)
    };

    const fourthSlide = () => {
        setCurrent(3)
    };

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // };



    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <div className={current == 0 ? "slide-button-one active" : "slide-button-one"} onClick={firstSlide}>1</div>
            <div className={current == 0 ? "slide-info" : "slide-info off"} >
                <h1 className="slide-header">Project <br></br>Paramour</h1>
                <p className="slide-paragraph">Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
                <button className="slider-button">
                    <p className="slider-button-text">See Our Portfolio</p>
                    <img className="slider-button-arrow" src={FooterArrow} />
                    </button>
            </div>
            <div className={current == 1 ? "slide-button-two active" : "slide-button-two"} onClick={secondSlide}>2</div>
            <div className={current == 1 ? "slide-info" : "slide-info off"} >
                <h1 className="slide-header">Seraph Station</h1>
                <p className="slide-paragraph">The Seraph Station project challenged us to design a unique station that would 
                transport people through time. The result is a fresh and futuristic model 
                inspired by space stations.</p>
                <button className="slider-button">
                <p className="slider-button-text">See Our Portfolio</p>
                <img className="slider-button-arrow" src={FooterArrow} />
                </button>
            </div>
            <div className={current == 2 ? "slide-button-three active" : "slide-button-three"} onClick={thirdSlide}>3</div>
            <div className={current == 2 ? "slide-info" : "slide-info off"} >
                <h1 className="slide-header">Federal II Tower</h1>
                <p className="slide-paragraph">A sequel theme project for a tower originally built in the 1800s. We achieved 
                this with a striking look of brutal minimalism with modern touches.</p>
                <button className="slider-button">
                <p className="slider-button-text">See Our Portfolio</p>
                <img className="slider-button-arrow" src={FooterArrow} />
                </button>
            </div>
            <div className={current == 3 ? "slide-button-four active" : "slide-button-four"} onClick={fourthSlide}>4</div>
            <div className={current == 3 ? "slide-info" : "slide-info off"} >
                <h1 className="slide-header">Trinity Bank Tower</h1>
                <p className="slide-paragraph">Trinity Bank challenged us to make a concept for a 84 story building located 
                in the middle of a city with a high earthquake frequency. For this project we 
                used curves to blend design and stability to meet our objectives.</p>
                <button className="slider-button">
                <p className="slider-button-text">See Our Portfolio</p>
                <img className="slider-button-arrow" src={FooterArrow} />
                </button>
            </div>
        {ImageSliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide.image} alt='travel image' className='image' />)}
                </div>
            
            )
        })}
        </section>
    )
}

export default ImageSlider;