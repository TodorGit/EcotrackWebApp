import React from "react";
import shoppingImg from "../../images/shoppingImg.png"
import { Link } from "react-router-dom";


const CarbonInfoShopping = () => {
    return (
        <>
            <div className="ci-container">
                <div className="ci-header">Let's break it down</div>
                <div className="ci-info">
                <img className="ci-img" src={shoppingImg} />
                    <div className="ci-info-group">

                        <h3>Your shopping consumption is equal to 2 tonnes.
                            To reduce this score you could buy second hand or reduce your fast fashion purchasing.</h3>
                        <div className="ci-btn-group">
                            <ul>
                                <Link to ='food'><li><button>Food</button></li></Link>
                                <Link to = 'travel'><li><button>Travel</button></li></Link>
                                <Link to = 'home'><li><button>Home</button></li></Link>
                                <Link to = 'shopping'><li><button>Shopping</button></li></Link>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CarbonInfoShopping;