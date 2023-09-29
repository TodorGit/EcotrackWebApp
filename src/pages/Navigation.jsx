import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {


    return(
        <div className="NavContainer">
            <a className="logo" href="/"><h1>Ecotrack</h1></a>
                <ul className="navLinks">
                    <a><li>{props.nh1}</li></a>
                    <a><li>{props.nh2}</li></a>
                    <a><li>{props.nh3}</li></a>
                    <a><li>{props.nh4}</li></a>
                </ul>
            <div className="joinButton">
                <Link to = "CreateAccount"><button>Join us</button></Link>
            </div>
        </div>
    )
}

export default Navigation;




