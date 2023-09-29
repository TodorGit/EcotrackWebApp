import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import SmallHeader from "../components/SmallHeader";
import BuzzVideo from "../images/buzzVideo.mp4";
import imgOne from "../images/imgOne.jpg";
import imgTwo from "../images/imgTwo.jpg";
import imgThree from "../images/imgThree.jpg";
import imgFour from "../images/imgFour.jpg";
import { toggle } from ".";
import Footer from "./footer";
import { useRef } from "react";

const Home = () => {

    const ref = useRef(null);
    const refOne = useRef(null);
    const refTwo = useRef(null);


    const handleClick = () => {
        ref.current?.scrollIntoView({behaviour: "smooth"})
    }

    const handleClickOne = () => {
        refOne.current?.scrollIntoView({behaviour: "smooth"})
    }
    const handleClickTwo = () => {
        refTwo.current?.scrollIntoView({behaviour: "smooth"})
    }
    const handleClickThree = () => {
        refTwo.current?.scrollIntoView({behaviour: "smooth"})
    }
    

    return (
        <>
            <div className="NavContainer">
                <a className="logo" href="/"><h1>Ecotrack</h1></a>
                <ul className="navLinks">
                    <a onClick={handleClick}><li>About us</li></a>
                    <a onClick={handleClickOne}><li>How we differ</li></a>
                    <a onClick={handleClickTwo}><li>Our services</li></a>
                    <a onClick={handleClickThree}><li>Contact us</li></a>
                </ul>
                <div  className="joinButton">
                    <Link to="CreateAccount"><button>Join us</button></Link>
                </div>
            </div>

            <div ref={ref} className="aboutUsContainer">
                <div className="headerContainer">
                    <h1><span>Ecotrack is your ultimate green companion.</span> Calculate your carbon footprint, explore eco-friendly brands,
                        and receive valuable advice for a sustainable lifestyle. We take care of the details, so you can focus on the things that truly matter.</h1></div>
                <div className="createAccountContainer">
                    <p>We have brought together all the essential tools and information in one convenient place. <br /><span>Join us and experience the difference. <Link to="CreateAccount"><a href="/">Create an account. →</a></Link></span></p>
                </div>
                <div className="intriguedContainer">
                    <p>Intrigued? Discover more about us.</p>
                </div>
            </div>

            <Slider />

            <div ref={refOne}>
                <SmallHeader header="How we differ" />
                <div className="hwdContainer">
                    <div className="hwdHeader">
                        <h3>It is easy being green. No daunting tasks or exclusive clubs —sustainability is for everyone. <span>We delivers tips on s...</span></h3>
                    </div>
                    <div className="videoWall">
                        <div className="textOnTop">
                            <h3>Quiz your way to a wealth of eco-friendly possibilities</h3>
                            <Link to="Quiz"><button>Take the quiz</button></Link>
                        </div>
                        <video loop autoPlay muted className="videoContainer" >
                            <source src={BuzzVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="sponsors">
                        <p>Ae seen in:</p>
                        <ul>
                            <li><img src={imgOne} alt="FastcompaniImg" /></li>
                            <li><img src={imgTwo} alt="bloombergImg" /></li>
                            <li><img src={imgThree} alt="WSJImg" /></li>
                            <li><img src={imgFour} alt="WallpaperImg" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div ref={refTwo}>
                <SmallHeader header="Our Services" />

                <div className="servicesWrapper" onClick={toggle} >
                    <div className="borders" >
                        <div className="Title" >
                            <h3>Calculate your carbon footprint</h3>
                            <span>⬎</span>
                        </div>
                        <div className="answer">
                            <p>Measure and monitor your carbon footprint with ease using our intuitive calculator.
                                Input data on transportation, energy usage, and consumption patterns to quantify your carbon emissions.</p>
                        </div>
                    </div>

                    <div className="borders">
                        <div className="Title">
                            <h3>Explore our eco-friendly brands</h3>
                            <span>⬎</span>
                        </div>
                        <div className="answer">
                            <p>Discover a world of eco-friendly brands in our curated directory.
                                Find ethical and sustainable options across fashion, skincare, home goods, and more.</p>
                        </div>
                    </div>

                    <div className="borders">
                        <div className="Title">
                            <h3>Uncover educational contents &nbsp;</h3>
                            <span>⬎</span>
                        </div>
                        <div className="answer">
                            <p>Learn about the latest trends and innovations in eco-conscious living.
                                Stay informed with practical tips, inspiring stories, and in-depth explorations of environmental topics. </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer ref={refTwo} />

        </>
    )
}

export default Home;