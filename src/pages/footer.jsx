import React from "react";

const Footer = () =>{

    return(
        <div className="footer">
            <div className="fu-header">
                <h3>Contact us.</h3>
                <h3>Find answers to your questions*</h3>
            </div>
            <div className="fu-form">
                <input type="text" name="Full name*" placeholder="Full name*" required/>
                <input type="email" name="E-mail*" placeholder="E-mail*" required/>
                <textarea name="text" placeholder="Your question*" required></textarea>
                <button>Submit</button>
            </div>

            <div className="fu-navigation">
                <div className="joinUs">
                    <ul>
                        <li>Join Us</li>
                        <li>Create a profile</li>
                        <li>Log in</li>
                        <li>Cookie settings</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="Ecotrack">
                    <ul>
                        <li>Ecotrack</li>
                        <li>About Us</li>
                        <li>How are we different</li>
                        <li>What we offer</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="Social">
                    <ul>
                        <li>Social</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Footer;