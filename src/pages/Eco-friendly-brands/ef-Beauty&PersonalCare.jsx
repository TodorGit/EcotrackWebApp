import React from "react";
import EcoNav from "./EcoNav";
import { toggle } from "../index.js";



const EfSubSectionTwo = () => {

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
                            <h3>Burt's Bees</h3>
                            <span>⬎</span>
                        </div>
                        <div className="answer">
                        <p>Burt's Bees offers natural skincare and personal care products, focusing on sustainability and eco-friendly packaging.</p>
                        <a href="#">Visit their website →</a>
                    </div>
                    </div>
                    
                    <div className="borders">
                            <div className="Title">
                                <h3>EcoTools</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>EcoTools specializes in eco-friendly and sustainable makeup brushes and accessories, using bamboo and recycled materials. </p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Kjaer Weis</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Kjaer Weis offers luxury organic and sustainable makeup, featuring refillable metal compacts.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Pai Skincare</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Pai Skincare offers clean and sustainable skincare products for sensitive skin, emphasizing natural and organic ingredients.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Weleda</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Weleda specializes in organic and natural skincare and personal care products, with a strong commitment to sustainability and ethical sourcing.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                </div>
        </div>

        
    
    </>)
}

export default EfSubSectionTwo;