import { useState } from "react";
import '../css/SearchChampions.css';
import Overview from './Overview'
import Abilities from './Abilities'
import Skin from './Skin'
import { useParams } from "react-router-dom";
import '../css/Champion.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Champion({ }) {
    const [currentComponent, setCurrentComponent] = useState("Overview")
    const [showMobileNav, setShowMobileNav] = useState(false)
    const { championName } = useParams()

    return (
        <div name="viewport" content="width=device-width, initial-scale=1.0" className="champion-page-container" style={{
            backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg")`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundRepeat: 'no-repeat',
           
        }}>
            <div className="button-div">
                <div className="nav-bar">
                    <div onClick={() => setCurrentComponent("Overview")} >Champion</div>
                    <div onClick={() => setCurrentComponent("Abilities")} >Abilities</div>
                    <div onClick={() => setCurrentComponent("Skin")} >Skin</div>
                    <a href="http://localhost:3000/"><div >Home</div></a>
                </div>
            </div>
            <FontAwesomeIcon icon={faBars} className="bars-icon" onClick={() => setShowMobileNav(oldValue => !oldValue)} />
            {showMobileNav ? (
                <div className="mobile-nav-bar">
                    <div onClick={e => setCurrentComponent("Overview")} >Champion</div>
                    <div onClick={e => setCurrentComponent("Abilities")} >Abilities</div>
                    <div onClick={e => setCurrentComponent("Skin")} >Skin</div>
                    <a href="http://localhost:3000/"><div >Home</div></a>
                </div>
            ) : (null)}
            <div className="image-gradient">
                {currentComponent === 'Abilities' && (<Abilities />)}
                {currentComponent === 'Overview' && (<Overview />)}
                {currentComponent === 'Skin' && (<Skin />)}
            </div>
        </div>
    )
}

export default Champion


