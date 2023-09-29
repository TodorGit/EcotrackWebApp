import React from "react";
import travelImg from "../../images/travelImg.png";
import { Link } from "react-router-dom";

const CarbonInfoTravel = () => {
    return (
        <>
            <div className="ci-container">
                <div className="ci-header">Let's break it down</div>
                <div className="ci-info">
                    <img className="ci-img" src={travelImg} />
                    <div className="ci-info-group">

                    <h3>Your travel consumption is equal to 5 tonnes. 
                        To reduce this score you could use public transport, travel on bike or drive your car a little slower.</h3>
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

export default CarbonInfoTravel;