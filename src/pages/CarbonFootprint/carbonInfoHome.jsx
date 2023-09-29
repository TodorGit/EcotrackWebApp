import React from "react";
import homeImg from '../../images/homeImg.png'
import { Link } from "react-router-dom";

const CarbonInfoHome = () => {
    return (
        <>
            <div className="ci-container">
                <div className="ci-header">Let's break it down</div>
                <div className="ci-info">
                    <img className="ci-img" src={homeImg} />
                    <div className="ci-info-group">

                        <h3>Your home consupmtion is less than 1 tonne.
                            To reduce this score you could lower the temperature or switch your energy provider to a renewable energy company.</h3>
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

export default CarbonInfoHome;