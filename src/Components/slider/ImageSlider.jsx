import React, { useState } from 'react';
import { ImageSliderData } from './ImageSliderData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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
            <div className={current == 0 ? "slide-info-one" : "slide-info-one off"} >
                <h1 className="slide-header">Project <br></br>Paramour</h1>
                <p className="slide-paragraph">Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
                <button>Button test</button>
            </div>
            <div className={current == 1 ? "slide-button-two active" : "slide-button-two"} onClick={secondSlide}>2</div>
            <div className={current == 1 ? "slide-info-two" : "slide-info-two off"} >
                <h1>Testing H1</h1>
                <p>Testing H1</p>
                <button>Button test</button>
            </div>
            <div className={current == 2 ? "slide-button-three active" : "slide-button-three"} onClick={thirdSlide}>3</div>
            <div className={current == 2 ? "slide-info-three" : "slide-info-three off"} >
                <h1>Testing H1</h1>
                <p>Testing H1</p>
                <button>Button test</button>
            </div>
            <div className={current == 3 ? "slide-button-four active" : "slide-button-four"} onClick={fourthSlide}>4</div>
            <div className={current == 3 ? "slide-info-four" : "slide-info-four off"} >
                <h1>Testing H1</h1>
                <p>Testing H1</p>
                <button>Button test</button>
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