import heroimg from "../img/hero_mobile.png"
import icon from "../img/banking.png"


const Hero =()=>{
    return(
        <div className="hero">
            <div className="mobileimg">
                <img src={heroimg} alt="" />
            </div>
            <div className="header_text">
                <img src={icon} alt="" />
                <h1>
                    Guaranteed to give you
                    the best experience in <span className="orange">banking</span>
                </h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <a href="">Get Started</a>
            </div>
        </div>
    )
}


export default Hero