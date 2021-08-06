import React, { useState, useEffect} from 'react';
import './contact.scss';
import HeroMobile from '../../Assets/contact/mobile/image-hero.jpg';
import PageLine from '../../Assets/icons/page-line.png';
import Hero from '../../Assets/contact/desktop/image-hero.jpg';
import HeaderLine from '../../Assets/icons/header-line.svg';
import BlackArrow from '../../Assets/icons/icon-arrow-black.svg';
import Arrow from '../../Assets/icons/icon-arrow.svg';
import MapImage from '../../Assets/contact/desktop/image-map.png';
import MapImageMobile from '../../Assets/contact/mobile/image-map.png';

function Contact() {
    const [nameInitialized, setNameInitialized] = useState(0);
    const [emailInitialized, setEmailInitialized] = useState(0);
    const [textInitialized, setTextInitialized] = useState(0);
    const [errorTextName, setErrorTextName] = useState("");
    const [errorTextEmail, setErrorTextEmail] = useState("");
    const [errorTextMessage, setErrorTextMessage] = useState("");
    {/* */}
    const [nameInput, setNameInput] = useState("input-initialized");
    const [emailInput, setEmailInput] = useState("input-initialized");
    const [messageInput, setMessageInput] = useState("textarea-initialized");
    {/* */}
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    {/* */}
    const [formSuccess, setFormSuccess] = useState("");

    const toggleNameError = () => {
        if (name === "" && nameInitialized > 0) {
            setErrorTextName("error-text-name");
            setNameInput("name-input-error");
        } else {
            setErrorTextName("");
            setNameInput("input-initialized");
        }
    }

    // useEffect(() => {
    //     setNameInput("input-initialized");
    //     setEmailInput("email-initialized");
    // }, [])

    useEffect(() => {
        setNameInitialized(1);
        if (name === "" && nameInitialized < 0) {
            console.log("name empty");
        } else if (name.trim().length < 3 && nameInitialized > 0) {
            setErrorTextName("name-error");
            setNameInput("name-input-error");
        } else if (name === "" && nameInitialized > 0) {
            setErrorTextName("error-text-name");
        } else if (name.length > 0) {
            setErrorTextName("");
            setNameInput("input-initialized");
        } else {
            console.log("name empty");
            setNameInput("input-initialized");
        }
    }, [name]);


    const toggleEmailError = () => {
        if (email === "" && emailInitialized > 0) {
        setEmailInput("email-input-error");
        setErrorTextEmail("error-text-email");
        } else {
            setErrorTextEmail("");
            setEmailInput("input-initialized");
        }
    }

    useEffect(() => {
        setEmailInitialized(1);
        if (email === "" && emailInitialized < 0) {
            console.log("email empty");
        } else if (isEmail(email) == false && emailInitialized > 0) {
            setErrorTextEmail("email-error");
            setEmailInput("email-input-error");
        } else if (email === "" && emailInitialized > 0) {
            setErrorTextEmail("error-text-email");
        } else if (email.length > 0) {
            setErrorTextEmail("");
            setEmailInput("input-initialized");
        } else {
            setErrorTextEmail("");
            setEmailInput("input-initialized");
        }
    }, [email]);

    useEffect(() => {
        setTextInitialized(1);
        if (text === "" && textInitialized < 0) {
            console.log("text empty");
        } else if (text === "" && textInitialized > 0) {
            setErrorTextMessage("error-text-email");
        } else if (text.length > 0) {
            setErrorTextMessage("");
            setMessageInput("input-initialized");
        } else {
            setErrorTextMessage("");
            setMessageInput("input-initialized");
        }
    }, [text]);

    const toggleMessageError = () => {
        if (text === "" && emailInitialized > 0) {
        setMessageInput("message-input-error");
        setErrorTextMessage("error-text-message");
        } else {
            setErrorTextEmail("");
            setMessageInput("input-initialized");
        }
    }

    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    console.log(nameInitialized);
    console.log(emailInitialized);

    const checkInputs = (e) => { 
        let formChecks = 0;


        if (name === "") {
            console.log("Name Error");
        } else if (name.trim().length < 3){
            console.log("name is too short")
            setErrorTextName("name-format-error");
        } else {
            formChecks++;
        }
        if (email === "") {
            console.log("Email Error");
        } else if (isEmail(email) === false) {
            console.log("invalid email format")
            setErrorTextEmail("email-format-error");
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

    // useEffect(() => {
    //     if (name === "") {
    //         setErrorTextName("error-text-name");
    //     } else {
    //         setErrorTextName("valid-text-name");
    //     }
    // }, [name]);

    // useEffect(() => {
    //     if (email === "") {
    //         setErrorTextEmail("error-text-email");
    //     } else {
    //         setErrorTextEmail("valid-text-email");
    //     }
    // }, [email]);

    // useEffect(() => {
    //     if (text === "") {
    //         setErrorTextMessage("error-text-message1");
    //     } else {
    //         setErrorTextMessage("valid-text-message");
    //     }
    // }, [text]);

    return (
    <>
    <div className="page-header-faded">
    <img className="page-line" src={PageLine} />
    <h1 className="current-page">CONTACT</h1>
  </div>
<div className="contact-main"> 
    <body className="contact-body">
    <div className="mobile-hero-container">
    <img className="hero-image-mobile-outer" src={HeroMobile} />
    <div className="white-block-mobile" />
    </div>
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

        <img className="header-line-mobile" src={HeaderLine} />

        <div className="line-and-contact-info-container-mobile">
            <div className="inner-container">
        <div className="contact-info-line-container">
        <img className="header-line" src={HeaderLine} />
        <h1 className="contact-info-header">Contact<br></br>Details</h1>
        </div>
        </div>
        <div className="contact-info-container">
            <div className="contact-info-section2">
            <div className="inner-container">
                <p className="place">Main Office</p>
                <p className="mail">Mail:	archone@mail.com</p>
                <p className="address">Address: 1892 Chenoweth Drive TN</p>
                <p className="phone">Phone: 123-456-3451</p>
                </div>
                <button className="view-on-map">
                    <p className="text">View on Map</p>
                    <img className="black-arrow" src={BlackArrow} />
                </button>
            </div>
            <div className="contact-info-section3">
            <div className="inner-container">
            <p className="place">Office II</p>
                <p className="mail">Mail: archtwo@mail.com</p>
                <p className="address">Address: 3399 Wines Lane TX</p>
                <p className="phone">Phone: 832-123-4321</p>
             </div>
             <button className="view-on-map">
                    <p className="text">View on Map</p>
                    <img className="black-arrow" src={BlackArrow} />
            </button>
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
            <img className="map-mobile" src={MapImageMobile} />
        </div>

        <div className="contact-form-container">
            <div className="contact-form-section">
                    <div className="header-container">
                        <h1 className="contact-form-header">Connect<br></br>With Us</h1>
                        <h1 className="contact-form-header-mobile">Connect With<br></br>Us</h1>
                    </div>
            </div>
            <form className="form" onSubmit={onSubmit}>
                <div className="input-container">
                <input className={nameInput} type="text" name="name" placeholder="Name" required onChange={(e) => {setName(e.target.value)}} onClick={toggleNameError}></input><br></br>
                <span class={errorTextName}></span>
                </div>
                <div className="input-container">
                <input className={emailInput} type="text" name="email" placeholder="Email" required onChange={(e) => {setEmail(e.target.value)}} onClick={toggleEmailError}></input><br></br>
                <span class={errorTextEmail}></span>
                </div>
                <div className="input-container">
                <textarea className={messageInput} type="text" name="text" placeholder="Message" required onChange={(e) => {setText(e.target.value)}} onClick={toggleMessageError}></textarea><br></br>
                <span class={errorTextMessage}></span>
                </div>
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