import { useState, useEffect } from "react";
import './SearchChampions.css';
import Overview from './Overview'
import Abilities from './Abilities'
import Skin from './Skin'
import { useParams } from "react-router-dom";
import './Champion.css';

function Champion({ }) {
    const [currentComponent, setCurrentComponent] = useState("Overview")
    const { championName } = useParams()

    return (
        <div className="champion-page-container" style={{
            backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg")`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'
        }}>
            <div className="button-div">
                <div className="nav-bar">
                    <div onClick={e => setCurrentComponent("Overview")} >Champion</div>
                    <div onClick={e => setCurrentComponent("Abilities")} >Abilities</div>
                    <div onClick={e => setCurrentComponent("Skin")} >Skin</div>
                    <a href="http://localhost:3000/"><div >Home</div></a>
                </div>

            </div>
            <div className="image-gradient">

                {currentComponent === 'Abilities' && (
                    <Abilities />
                )}

                {currentComponent === 'Overview' && (
                    <Overview />
                )}

                {currentComponent === 'Skin' && (
                    <Skin />
                )}

            </div>
        </div>

    )
}

export default Champion


