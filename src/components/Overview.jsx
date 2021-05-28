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



function Champion() {
    const [championDetail, setChampionDetail] = useState({})
    const { championName } = useParams()
    const [championTags, setChampionTag] = useState([])
    const [championInfo, setChampionInfo] = useState([])
    const [championAllayTips, setChampionAllayTips] = useState([])
    const [championEnemyTips, setChampionEnemyTips] = useState([])

    useEffect(() => {
        fetch(`http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${championName}.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log(championName)
                setChampionDetail(() => {
                    const e = data.data[championName]
                    console.log(e)
                    setChampionTag(e.tags)
                    setChampionInfo(e.info)
                    setChampionAllayTips(e.allytips)
                    setChampionEnemyTips(e.enemytips)
                    return e
                })
            })
            .catch((e) => {
            });

            //animation for attack bar
            document.querySelector(".attack div").animate([
                // keyframes
                { width: '0px' },
                { width: `${championInfo.attack * 20}px` }

              ], { 
                // timing options
                duration: 1500,
                iterations: 1
              });
              
              //animation for defence bar
              document.querySelector(".defence div").animate([
                // keyframes
                { width: '0px' },
                { width: `${championInfo.defence * 20}px` },
              

              ], { 
                // timing options
                duration: 1500,
                iterations: 1
              });

             //animation for magic bar
              document.querySelector(".magic div").animate([
                // keyframes
                { width: '0px' },
                { width: `${championInfo.magic * 20}px` }

              ], { 
                // timing options
                duration: 1500,
                iterations: 1,
                easing: "ease-in",
              });



    }, []);


    console.log(championTags)
    console.log(championEnemyTips)

    return (
        <div className="overview">
            <div className="icon">{championTags.map(tag => (<img src={`/${tag}_icon.png`} />))                                 /* <img src={slayerIcon}  alt="slayer icon"/><img src={marksmanIcon}  alt="slayer icon"/> <img src={supportIcon}  alt="slayer icon"/> */}</div>

            <h2 className="name">{championDetail.name}</h2>
            <p className="title">{championDetail.title}</p>
            <p className="lore">{championDetail.lore}</p>
            <div className="stats" style={{height:"50px"}}>
                <div className="attack"> <img src="/Attack.png" style={{height:"19px", width:"16px"}}/> <div className="bar" style={{ display: "inline-block", background: "#0097AA",  width: `${championInfo.attack * 20}px`,  height: "10px" }}></div> {championInfo.attack}</div>
                <div className="defence"> <img src="/Defence.png"/> <div style={{ display: "inline-block", width: `${championInfo.defense * 20}px`, height: "10px", background: "#0097AA", }}></div> {championInfo.defense}</div>
                <div className="magic"> <img src="/Magic2.png" style={{}}/> <div style={{ display: "inline-block", width: `${championInfo.magic * 20}px`,  height: "10px", background: "#0097AA" }}></div> {championInfo.magic}</div>
            </div>
            <div className="ally-tips">
              <h3>Ally Tips</h3>
              {championAllayTips.map(tip =>( <p>{tip}</p>))}
            </div>
            <div className="enemy-tips">
              <h3>Enemy Tips</h3>
              {championEnemyTips.map(tip =>( <p>{tip}</p>))}
            </div>
        </div>
    )
}

export default Champion


