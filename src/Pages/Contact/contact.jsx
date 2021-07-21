import React, { useState, useEffect} from 'react';
import './contact.scss';
import PageLine from '../../Assets/icons/page-line.png';
import Hero from '../../Assets/contact/desktop/image-hero.jpg';
import HeaderLine from '../../Assets/icons/header-line.svg';
import BlackArrow from '../../Assets/icons/icon-arrow-black.svg';
import Arrow from '../../Assets/icons/icon-arrow.svg';
import MapImage from '../../Assets/contact/desktop/image-map.png';

function Contact() {
    const [errorTextName, setErrorTextName] = useState("error-text-initialized");
    const [errorTextEmail, setErrorTextEmail] = useState("error-text-initialized");
    const [errorTextPhone, setErrorTextPhone] = useState("error-text-initialized");
    const [errorTextMessage, setErrorTextMessage] = useState("error-text-initialized");
    {/* */}
    const [inputName, setInputName] = useState("input-initialized");
    const [inputEmail, setInputEmail] = useState("input-initialized");
    const [inputPhone, setInputPhone] = useState("input-initialized");
    const [inputMessage, setInputMessage] = useState("input-initialized");
    {/* */}
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    {/* */}
    const [formSuccess, setFormSuccess] = useState("");

    const toggleNameError = () => {
        setErrorTextName("error-text");
        setInputName("input-error");
    }

    const toggleEmailError = () => {
        setErrorTextEmail("error-text");
        setInputEmail("input-error");
    }

    const togglePhoneError = () => {
        setErrorTextPhone("error-text");
        setInputPhone("input-error");
    }

    const toggleMessageError = () => {
        setErrorTextMessage("error-text-message");
        setInputMessage("input-error");
    }

    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    const checkInputs = (e) => { 
        let formChecks = 0;


        if (name === "") {
            console.log("Name Error");
        } else if (name.trim().length < 3){
            console.log("name is too short")
            setErrorTextName("name-format-error");
            setInputName("name-format-error-sign");
        } else {
            formChecks++;
        }
        if (email === "") {
            console.log("Email Error");
        } else if (isEmail(email) === false) {
            console.log("invalid email format")
            setErrorTextEmail("email-format-error");
            setInputEmail("input-error");
        } else {
            formChecks++;
        }
        if (phone === "") {
            console.log("Phone Error");
        } else if (phone.trim().length < 10){
            console.log("phone number is invalid")
            setErrorTextPhone("phone-format-error");
            setInputPhone("input-error");
        } else {
            formChecks++;
        }
        if (text === "") {
            console.log("Text Error");
        } else {
            formChecks++;
        }

        if (formChecks === 4) {
            console.log("FORM SUBMITTED SUCCESSFULLY",
            {
                Name: {name},
                Email: {email},
                Phone: {phone},
                Text: {text},
            })
            setFormSuccess("Your message was sent successfully! We'll get back to you soon.")
            return true;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = checkInputs();
    }
    return (
    <>
    <div className="page-header-faded">
    <img className="page-line" src={PageLine} />
    <h1 className="current-page">CONTACT</h1>
  </div>
<div className="contact-main"> 
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
  
  <title>Frontend Mentor | Arch Studio Website Challenge</title>
</head>
    <body className="contact-body">

        <div className="container">
            <div className="hero-container">
            <h1 className="contact">Contact</h1>
            <img className="hero-image" src={Hero} />
            <div className="hero-text-container">
            <div className="hero-inner-text-container">
            <img className="header-line" src={HeaderLine} />
                <h2 className="h2">Tell us about your project</h2>
                <p className="p-body">We’d love to hear more about your project. 
                Please, leave a message below or give us a call. 
                We have two offices, one in Texas and one in Tennessee. 
                If you find yourself nearby, come say hello!</p>
                </div>
            </div>
        </div>
        <div className="line-and-contact-info-container">
            <div className="inner-container">
        <div className="contact-info-line-container">
        <img className="header-line" src={HeaderLine} />
        </div>
        </div>
        
        <div className="contact-info-container">
            <div className="contact-info-section1">
                <div className="header-container">
                    <h1 className="contact-info-header">Contact<br></br>Details</h1>
                </div>
            </div>
            <div className="contact-info-section2">
                <p className="place">Main Office</p>
                <p className="mail">Mail:	archone@mail.com</p>
                <p className="address">Address: 1892 Chenoweth Drive TN</p>
                <p className="phone">Phone: 123-456-3451</p>
                <button className="view-on-map">
                    <p className="text">View on Map</p>
                    <img className="black-arrow" src={BlackArrow} />
                </button>
            </div>
            <div className="contact-info-section3">
            <p className="place">Office II</p>
                <p className="mail">Mail: archtwo@mail.com</p>
                <p className="address">Address: 3399 Wines Lane TX</p>
                <p className="phone">Phone: 832-123-4321</p>
                <button className="view-on-map">
                    <p className="text">View on Map</p>
                    <img className="black-arrow" src={BlackArrow} />
                </button>
            </div>
        </div>
    </div>

        <div className="map-container">
            <img className="map" src={MapImage} />
        </div>

        <div className="contact-form-container">
            <div className="contact-form-section">
                    <div className="header-container">
                        <h1 className="contact-form-header">Connect<br></br>With Us</h1>
                    </div>
            </div>
            <form className="form" onSubmit={onSubmit}>
                <label className="name-label"></label><br></br>
                <input className="name-input" type="text" name="name" placeholder="Name" required onClick={toggleNameError}></input><br></br>
                <span class={errorTextName}></span>
                <label className="email-label"></label><br></br>
                <input className={inputEmail} type="text" name="email" placeholder="Email" required onClick={toggleEmailError}></input><br></br>
                <span class={errorTextEmail}></span>
                <label className="message-label"></label><br></br>
                <input className={inputMessage} type="text" name="text" required onClick={toggleMessageError} placeholder="Message"></input><br></br>
                <span class={errorTextMessage}></span>
                <div className="form-button-container">
                <button className="button">
                    <img className="button-arrow" src={Arrow} />
                </button>
                </div>
            </form>

        </div>

</div>

</body>

</div>
    </>
    )
}

//   Connect with us

//   Name
//   Email
//   Message


export default Contact;