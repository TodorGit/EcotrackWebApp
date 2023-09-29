import React from "react";
import accImgOne from "../../images/settings.png"
import accImgTwo from "../../images/bell.png"
import accImgThree from "../../images/lock.png"
import accImgFour from "../../images/log-out.png"
import profileImg from "../../images/profileImg.jpg"
import FooterTwo from "../../components/footerTwo";
import eduGarden from "../../images/edContentImg.png"
import solarPower from "../../images/solarPower.png"
import { toggleMenu } from "../index.js";


const EducationalContent = () => {

    return (
        <>

            <div className="NavContainer" >
                <a className="logo" href="Dashboard"><h1>Ecotrack</h1></a>
                <ul className="navLinks">
                    <a href="Dashboard"><li>Dashboard</li></a>
                    <a href="carbonFootprint"><li>Carbon footprint</li></a>
                    <a href="ecoFriendlybrands"><li>Eco-friendly brands</li></a>
                    <a href="Educationalcontent"><li>Educational content</li></a>
                </ul>
                <img src={profileImg} alt="profImage" className="profImage" onClick={toggleMenu} />

                <div className="sub-menu-wrap" id="subMenu" >
                    <div className="sub-menu" >
                        <div className="user-info">
                            <div className="InnerProfileImg"></div>
                            <h2>Sarah Goldberg</h2>
                        </div>
                        <hr />

                        <a href="#" className="sub-menu-link">
                            <img src={accImgOne} alt="settings" />
                            <p>Account settings</p>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src={accImgTwo} alt="notifications" />
                            <p>Notifications</p>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src={accImgThree} alt="privacy" />
                            <p>Privacy</p>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src={accImgFour} alt="log out" />
                            <p>Log out</p>
                        </a>

                    </div>
                </div>
            </div>

            <>
                <div className="eduHeader">
                    <h3>Educational Content</h3>
                    <img src={eduGarden} />
                </div>

                <div className="edInfo">
                    <div className="edHeader">
                        <h3>Community Spotlight: “From Waste to Wonder Garden”</h3>
                        <p>Read more →</p>
                    </div>
                    <div className="ed-subInfo">
                        <div className="subInfoLeft">
                            <img src={solarPower} alt="solarPower" />
                        </div>
                        <div className="subInfoRight">
                            <h2>Article</h2>
                            <h3>The Power of Solar Energy: A Sustainable Solution for a Brighter Future</h3>
                            <p>Read more →</p>
                        </div>

                    </div>

                    <div className="edu-content">
                        <div className="top-line"></div>
                        <div className="ed-tips">
                            <div className="tip">
                                <p>Practical tips</p>
                                <h3>Sustainable Living Made Simple: Small Changes, Big Impact</h3>
                                <span>Read more →</span>
                            </div>
                            <div className="border"></div>
                            <div className="tip">
                                <p>In-depth analysis</p>
                                <h3>The Renewable Energy Revolution: Progress & Potential</h3>
                                <span>Read more →</span>
                            </div>
                            <div className="border"></div>
                            <div className="tip">
                                <p>In-depth analysis</p>
                                <h3>Unravelling Plastic Pollution: Causes, Consequences, and Solutions</h3>
                                <span>Read more →</span>
                            </div>
                        </div>
                        <div className="bottom-line"></div>
                    </div>
                </div>

            </>
            <FooterTwo />
        </>
    )
}

export default EducationalContent;