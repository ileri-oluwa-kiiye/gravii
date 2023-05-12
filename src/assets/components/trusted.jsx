import one from "../img/one.png"
import two from "../img/two.png"
import three from "../img/three.png"
import four from "../img/four.png"
import five from "../img/five.png"
import six from "../img/six.png"
import seven from "../img/seven.png"


const Trusted = () =>{
    return(
        <div className="trusted">
            <p>Trusted By</p>
            <div>
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                <img src={five} alt="" />
                <img src={six} alt="" />
                <img src={seven} alt="" />
            </div>
        </div>
    )
}


export default Trusted