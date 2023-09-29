import React from "react";
import accImgOne from "../../images/settings.png"
import accImgTwo from "../../images/bell.png"
import accImgThree from "../../images/lock.png"
import accImgFour from "../../images/log-out.png"
import profileImg from "../../images/profileImg.jpg"
import Footer from "../footer";
import { toggleMenu } from "../index.js";
import { toggle } from "..";

const EcoFriendlyBrands = () => {

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

            <div className="efHeader">
            <h3>Explore our list of eco-friendly brands</h3>
            <p>Discover a world of eco-friendly brands in our curated directory. 
             Find ethical and sustainable options across fashion, skincare, home goods, and more. </p>
        </div>
        <div className="ef-border"></div>

        <div className="ef-brands-wrapper">

        <div className="ef-buttons-wrapper">
            <p>Filters</p>
            <div className="ef-button-group">
                <button>Fashion</button>
                <button>Jewellery & Accessories</button>
                <button>Beauty & Personal care</button>
                <button>Home goods</button>
            </div>
        </div>

        <div className="servicesWrapper" onClick={toggle} >
                    <p>Brands</p>
                    <div className="borders" >
                        <div className="Title" >
                            <h3>KOTN &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</h3>
                            <span>⬎</span>
                        </div>
                        <div className="answer">
                        <p>KOTN focuses on ethically made, high-quality basics like T-shirts and loungewear, using sustainably grown Egyptian cotton.</p>
                        <a href="#">Visit their website →</a>
                    </div>
                    </div>
                    
                    <div className="borders">
                            <div className="Title">
                                <h3>Nudie Jeans &nbsp;</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Nudie Jeans is a Swedish denim brand committed to ethical and sustainable denim production, including repair and recycle programs. </p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Organic Basic</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Organic Basics specializes in sustainable and ethical basics, including underwear, activewear, and essentials made from organic cotton and Tencel.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Pangaia&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Pangaia is known for its innovative approach to sustainability, incorporating materials like seaweed fibers and recycled plastics into their clothing.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Patagonia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Known for its commitment to environmental and social responsibility, Patagonia produces outdoor clothing using recycled materials and ethical manufacturing processes.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>People Tree&nbsp;&nbsp;&nbsp;</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>People Tree is a pioneer in ethical and sustainable fashion, offering fair trade and organic clothing with a focus on transparency and ethical practices.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Re/Done&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Re/Done specializes in upcycled and vintage-inspired denim, reducing waste and promoting sustainable fashion.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Reformation&nbsp;&nbsp;&nbsp;</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Reformation is a popular brand for sustainable and stylish women's clothing. They emphasize eco-friendly fabrics and ethical manufacturing.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Veja&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Veja is a French brand that produces sustainable sneakers using organic materials and fair labour practices.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>
        
                </div>
        </div>

        <Footer />
        </>
    )
}

export default EcoFriendlyBrands;