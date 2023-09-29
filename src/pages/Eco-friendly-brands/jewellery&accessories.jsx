import React from "react";
import EcoNav from "./EcoNav";
import { toggle } from "../index.js";



const EfSubSectionOne = () => {

    return (<>
        <EcoNav />

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
                            <h3>Mara Paris</h3>
                            <span>⬎</span>
                        </div>
                        <div className="answer">
                        <p>Mara Paris offers sustainable luxury handbags made from vegan and eco-friendly materials, combining style with environmental consciousness.</p>
                        <a href="#">Visit their website →</a>
                    </div>
                    </div>
                    
                    <div className="borders">
                            <div className="Title">
                                <h3>Mejuri</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Mejuri focuses on sustainable and ethically made fine jewellery, offering a wide range of elegant and timeless pieces. </p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Monique Péan</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Monique Péan offers high-end sustainable jewelry, featuring ethically sourced materials and a focus on environmental responsibility.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>So Just Shop</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>So Just Shop collaborates with female artisans from around the world to create sustainable jewellery and accessories, promoting fair trade and empowering women.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>SOKO</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>SOKO is a sustainable jewellery brand that collaborates with artisans in Kenya to create handcrafted jewelry using eco-friendly materials.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                </div>
        </div>

        
    
    </>)
}

export default EfSubSectionOne;