import React from "react";
import { HomeStyle } from "./HomeStyle";
import bgimage from "../../assets/imgs/imageHome.jpg"
import { NavTab } from "../../components/NavTab/NavTab";
import { Footer } from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <HomeStyle>
        
        <body>
            <NavTab/>
            <section>
                <div className="welcome">
                    <h1>Welcome to Drive-Experience</h1>
                    <h2>Rent our car and drive happy</h2>
                    <div className="Introduction">
                        <FontAwesomeIcon icon={faCarSide} bounce size="xl" />
                        <p>We are a startup that seeks to improve the way of renting cars, our goal is to bring practicality to your trips in a completely professional way</p>
                    </div>
                    <Link to="/signup" className="getStarted">Get Started</Link>
                </div>
                <div className="bgimage">
                    <img src={bgimage} alt="" />
                </div>
            </section>
        </body>
        <Footer/>
        </HomeStyle>
    )
}

export default Home;