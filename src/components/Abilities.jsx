import { useState, useEffect } from "react";
import './SearchChampions.css';
import { useParams } from "react-router-dom";
import './Champion.css';
import Slayer from "./Slayer_icon.png";
import Assassin from "./Assassin_icon.png";
import Mage from "./Mage_icon.png";

import Support from "./Support_icon.png";
import Fighter from "./Fighter_icon.png";
import Marksman from "./Marksman_icon.png";



function Abilities() {
    const [championDetail, setChampionDetail] = useState({})
    const { championName } = useParams()
    const [championTags, setChampionTag] = useState([])
    const [championInfo, setChampionInfo] = useState([])
    const [championAllayTips, setChampionAllayTips] = useState([])
    const [championEnemyTips, setChampionEnemyTips] = useState([])
    const [abilities, setAbilities] = useState([])
    const [passive, setPassive] = useState([])
    const [passiveInfo, setPassiveInfo] = useState([])
    const [selectedAbility, setSelectedAbility] = useState('p')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${championName}.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log(championName)
                setChampionDetail(() => {
                    const e = data.data[championName]
                    console.log(e)
                    setChampionTag(e.tags)
                    setAbilities(e.spells)
                    setPassive(e.passive.image.full)
                    setPassiveInfo(e.passive)
                    setChampionInfo(e.info)
                    setChampionAllayTips(e.allytips)
                    setChampionEnemyTips(e.enemytips)
                    setIsLoading(false)
                    return e
                })
            })
            .catch((e) => {
            });
    }, []);


    console.log(championTags)
    console.log(passiveInfo.name)

    let abilityNames = abilities.map(a => a.name);
    console.log()
    let imageNames = abilities.map(a => a.image.full);
    console.log(imageNames[0])
    let abilityDescription = abilities.map(a => a.description);
    console.log(abilityDescription)

    return (
        <div className="abilities">
            { isLoading ? (<div class="lds-ring" style={{ position: "absolute", right: "50%", zIndex: "+10" }}><div></div><div></div><div></div><div></div></div>) : (<div></div>)}
            <div className="icon">{championTags.map(tag => (<img src={`/${tag}_icon.png`} />))}</div>
            <h2 className="name">{championDetail.name}</h2>
            <p className="title">{championDetail.title}</p>

            <div className="ability-sprite-container">
                <div className="p" onClick={() => setSelectedAbility("p")} >
                    <img className={selectedAbility === "p" ? 'border' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/passive/${passive}`} alt="" />
                    <p>P</p>
                </div>
                <div className="q" onClick={() => setSelectedAbility("q")}>
                    <img className={selectedAbility === "q" ? 'border' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${imageNames[0]}`} alt="" />
                    <p>Q</p>
                </div>
                <div className="w" onClick={() => setSelectedAbility("w")}>
                    <img className={selectedAbility === "w" ? 'border' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${imageNames[1]}`} alt="" />
                    <p>W</p>
                </div>
                <div className="e" onClick={() => setSelectedAbility("e")}>
                    <img className={selectedAbility === "e" ? 'border' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${imageNames[2]}`} alt="" />
                    <p>E</p>
                </div>
                <div className="r" onClick={() => setSelectedAbility("r")}>
                    <img className={selectedAbility === "r" ? 'border' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${imageNames[3]}`} alt="" />
                    <p>R</p>
                </div>
            </div>


            <div className="ability-description">
                <h3 className={selectedAbility === "" ? 'fadeIn' : 'fadeOut'}></h3>
                <h3 className={selectedAbility === "p" ? 'fadeIn' : 'fadeOut'}>{passiveInfo.name}</h3>
                <p className={selectedAbility === "p" ? 'fadeIn' : 'fadeOut'}>{passiveInfo.description}</p>
                <h3 className={selectedAbility === "q" ? 'fadeIn' : 'fadeOut'}>{abilityNames[0]}</h3>
                <p className={selectedAbility === "q" ? 'fadeIn' : 'fadeOut'}>{abilityDescription[0]}</p>
                <h3 className={selectedAbility === "w" ? 'fadeIn' : 'fadeOut'}>{abilityNames[1]}</h3>
                <p className={selectedAbility === "w" ? 'fadeIn' : 'fadeOut'}>{abilityDescription[1]}</p>
                <h3 className={selectedAbility === "e" ? 'fadeIn' : 'fadeOut'}>{abilityNames[2]}</h3>
                <p className={selectedAbility === "e" ? 'fadeIn' : 'fadeOut'}>{abilityDescription[2]}</p>
                <h3 className={selectedAbility === "r" ? 'fadeIn' : 'fadeOut'}>{abilityNames[3]}</h3>
                <p className={selectedAbility === "r" ? 'fadeIn' : 'fadeOut'}>{abilityDescription[3]}</p>
            </div>

        </div>
    )
}

export default Abilities


