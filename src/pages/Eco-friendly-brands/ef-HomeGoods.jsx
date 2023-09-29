import React from "react";
import EcoNav from "./EcoNav";
import { toggle } from "../index.js";



const EfSubSectionThree = () => {

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
                            <h3>Bambeco</h3>
                            <span>⬎</span>
                        </div>
                        <div className="answer">
                        <p>Bambeco specializes in eco-friendly home goods, including furniture, decor, and kitchenware, using sustainable and recycled materials.</p>
                        <a href="#">Visit their website →</a>
                    </div>
                    </div>
                    
                    <div className="borders">
                            <div className="Title">
                                <h3>Blueland</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Blueland provides sustainable cleaning products in tablet form to reduce single-use plastic packaging.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>Crate & Barrel</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>Crate & Barrel offers eco-friendly home goods and furniture, including products made from sustainable materials and responsible sourcing.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>IKEA</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>IKEA is known for its affordable and sustainable home furnishings, with a commitment to renewable materials and energy-efficient products.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                    <div className="borders">
                            <div className="Title">
                                <h3>West Elm</h3>
                                <span>⬎</span>
                            </div>
                            <div className="answer">
                            <p>West Elm offers sustainable and ethically made furniture and home decor items, featuring Fair Trade and handcrafted collections.</p>
                            <a href="#">Visit their website →</a>
                        </div>
                    </div>

                </div>
        </div>

        
    
    </>)
}

export default EfSubSectionThree;