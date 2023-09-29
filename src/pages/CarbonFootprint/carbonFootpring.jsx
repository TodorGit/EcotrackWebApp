import React from "react";
import accImgOne from "../../images/settings.png"
import accImgTwo from "../../images/bell.png"
import accImgThree from "../../images/lock.png"
import accImgFour from "../../images/log-out.png"
import profileImg from "../../images/profileImg.jpg"
import { toggleMenu } from "../index.js";
import foodImg from '../../images/ci-food.png'
import FooterTwo from "../../components/footerTwo";

const CarbonFootprint = () => {

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

            <div className="dash-header">
                <h1><span>Hello, Sarah!</span> Did you know that by unplugging electronics when they're not in use, you can achieve a 10% reduction in your carbon footprint within a month.</h1>
            </div>

            <div className="cb-image"></div>

            <div className="ci-container">
                <div className="ci-header">Let's break it down</div>
                <div className="ci-info">
                    <img className="ci-img" src={foodImg} />
                    <div className="ci-info-group">

                        <h3>Your food consumption is equal to 2 tonnes.
                            To reduce this score you could eat less meat and diary or get more products that are sustainably sourced and in season.</h3>
                        <div className="ci-btn-group">
                            <ul>
                                <li><button>Food</button></li>
                                <li><button>Travel</button></li>
                                <li><button>Home</button></li>
                                <li><button>Shopping</button></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <FooterTwo />

        </>
    )

}

export default CarbonFootprint;