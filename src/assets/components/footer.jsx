import logo from "../img/logo.png"
import twitter from "../img/twitter.png"
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"


const Footer =() => {
    return(
        <div className="footer">
            <div className="lists">
                <img src={logo} alt="" />
                <ul>
                    <li className="header">Get Started</li>
                    <li>Documentation</li>
                    <li>Pricing</li>
                    <li>Tutorials</li>
                    <li>Guides</li>
                </ul>
                <ul>
                    <li className="header">Platforms</li>
                    <li>Available on IOS</li>
                    <li>Available on Android</li>
                    <li>Available on Web</li>
                </ul>
                <ul>
                    <li className="header">Newsletter</li>
                    <li>Get curated content and design inspiration delivered straight to your inbox. <span className="orange"><a href="">Learn more</a></span></li>
                    <li className="form">
                        <input type="email" name="email" id="email" placeholder="Your email"/>
                        <button>Submit</button>
                    </li>
                </ul>
            </div>
            <div className="icons">
                <a href="www.instagram.com"><img src={instagram} alt="" /></a>
                <a href="https://twitter.com"><img src={twitter} alt="" /></a>
                <a href="www.facebook.com"><img src={facebook} alt="" /></a>
            </div>
            <footer>
                Copyright 2018. <span className="orange">Gravii</span>.ng. All rights reserved
            </footer>
        </div>
    )
}


export default Footer