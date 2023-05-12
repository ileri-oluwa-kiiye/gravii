import first from "../img/pencil-case.png"
import second from "../img/vector.png"
import third from "../img/fingerprint.png"

const Features = () =>{
    return(
        <div className="features">
            <h3><span className="orange">Features</span></h3>
            <h2>Designed with everyone in mind</h2>

            <section>
                <li>
                    <img src={first} alt="" />
                    <h4>Designed with Users in Mind</h4>
                    <p>
                        Get curated content and design inspiration delivered straight to your inbox.
                    </p>
                    <a href="">Learn More</a>
                </li>
                <li>
                    <img src={second} alt="" />
                    <h4>Scalability</h4>
                    <p>
                        Get curated content and design inspiration delivered straight to your inbox.
                    </p>
                    <a href="">Learn More</a>
                </li>
                <li>
                    <img src={third} alt="" />
                    <h4>Security </h4>
                    <p>
                        Get curated content and design inspiration delivered straight to your inbox.
                    </p>
                    <a href="">Learn More</a>
                </li>
            </section>
        </div>
    )
}


export default Features