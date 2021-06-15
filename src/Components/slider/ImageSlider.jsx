import React, { useState } from 'react';
import { ImageSliderData } from './ImageSliderData';
import './ImageSlider.scss';


const  ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const button1 = () => {
        setCurrent(0);
    }

    const button2 = () => {
        setCurrent(1);
    }
    
    const button3 = () => {
        setCurrent(2);
    }

    const button4 = () => {
        setCurrent(3);
    }

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className="sliderContainer">
        <section className="slider">
        {ImageSliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt='A Building' className='image' />)}
                </div>
            )
        })}
        </section>
        <div className="buttons-container">
        {ImageSliderData.map((index) => {
<button className={index === current ? 'button active' : 'button'} key={index}><p className="buttonNumber" onClick={button1}>1</p></button>
})}
</div>
        </div>
    )
}

export default ImageSlider;
