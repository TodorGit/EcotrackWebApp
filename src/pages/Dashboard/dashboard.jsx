import React from "react";
import accImgOne from "../../images/settings.png"
import accImgTwo from "../../images/bell.png"
import accImgThree from "../../images/lock.png"
import accImgFour from "../../images/log-out.png"
import profileImg from "../../images/profileImg.jpg"
import Footer from "../footer";
import { toggleMenu } from "../index.js";
import { Link } from "react-router-dom";




const Dashboard = () => {

    return (
        <>

            <div className="NavContainer">
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
                <h1><span>Keep up the great work, Sarah!</span> The path to a greener future is brigther, thanks to you. Keep up the positive momentum</h1>
            </div>

            <div className="cb-container">
                <div className="cb-header">
                    <h1>Carbon footprint</h1>
                    <p>By unplugging electronics when they're not in use, you can achieve a 10% reduction in your carbon footpring within a month. <span>Discover more →</span></p>
                </div>
                <div className="cb-sub-headers">
                </div>
                <div className="cb-image"></div>
            </div>

            <div className="efb-background-container">
                <div className="efb-container">
                    <div className="efb-header">
                        <h3>Eco-friendly brands</h3>
                    </div>
                    <div className="splitter">
                        <div className="efb-left">
                            <p>A brand to know</p>
                            <h3>GeenGear Outdoors</h3>

                            <ul>
                                <li>Recycled Apparel</li>
                                <li>Outdoor Accessories</li>
                                <li>Sustainable Camping Gear</li>
                            </ul>

                            <a href="Ecofriendlybrands" style={{textDecoration: 'none'}}><span>DIscover more brands →</span></a>
                        </div>

                        <div className="efb-right">
                            <div className="efb-img"></div>
                            <p>We're thrilled to feature GreenGear Outdoors, a brand that perfectly embodies
                                the spirit of sustainable adventure. At EcoTrack, we believe that exploring
                                the great outdoors shouldn't come at the expense of our planet.</p>
                            <p>Join us in supporting this brand as they redefine outdoor adventure through
                                sustainable practices. Explore the selection and gear up for a future where
                                every adventure is an opportunity to make a difference.</p>
                            <Link to = "Ecofriendlybrands" style={{textDecoration: 'none'}}><button>Shop the brand</button></Link>
                        </div>
                    </div>

                </div>
            </div>


            <div className="ed-backgrdound">
                <div className="ed-content-container">
                    <h1>Educational content</h1>
                    <div className="ed-img">
                    </div>
                    <p>Inspiring Stories</p>
                    <h2>Community Spotlight: “From Waste to Wonder Garden”</h2>
                    <a href="https://www.rd.com/article/sustainable-living/" style={{textDecoration: 'none'}}><span>Read more →</span></a>
                </div>

                <div className="ed-content">
                    <div className="top-line"></div>
                    <div className="ed-tips">
                        <div className="tip">
                            <p>Practical tips</p>
                            <h3>Sustainable Living Made Simple: Small Changes, Big Impact</h3>
                            <a href="https://www.rd.com/article/sustainable-living/" style={{textDecoration: 'none'}}><span>Read more →</span></a>
                        </div>
                        <div className="border"></div>
                        <div className="tip">
                            <p>In-depth analysis</p>
                            <h3>The Renewable Energy Revolution: Progress & Potential</h3>
                            <a href="https://www.rd.com/article/sustainable-living/" style={{textDecoration: 'none'}}><span>Read more →</span></a>
                        </div>
                        <div className="border"></div>
                        <div className="tip">
                            <p>In-depth analysis</p>
                            <h3>Unravelling Plastic Pollution: Causes, Consequences, and Solutions</h3>
                            <a href="https://www.rd.com/article/sustainable-living/" style={{textDecoration: 'none'}}><span>Read more →</span></a>
                        </div>
                    </div>
                    <div className="bottom-line"></div>
                </div>
            </div>
            <Footer />
        </>


    )

}

export default Dashboard;


