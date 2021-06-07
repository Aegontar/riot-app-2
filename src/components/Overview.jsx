import { useState, useEffect } from "react";
import '../css/SearchChampions.css';
import { useParams } from "react-router-dom";
import '../css/Champion.css';

function Champion() {
  const [championDetail, setChampionDetail] = useState({})
  const { championName } = useParams()
  const [championTags, setChampionTag] = useState([])
  const [championInfo, setChampionInfo] = useState([])
  const [championAllayTips, setChampionAllayTips] = useState([])
  const [championEnemyTips, setChampionEnemyTips] = useState([])
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
          setChampionInfo(e.info)
          setChampionAllayTips(e.allytips)
          setChampionEnemyTips(e.enemytips)
          setIsLoading(false)
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

  return (
    <div className="overview">
      { isLoading ? (<div class="lds-ring" style={{ position: "absolute", right: "50%", zIndex: "+10" }}><div></div><div></div><div></div><div></div></div>) : (<div></div>)}
      <div className="icon">{championTags.map(tag => (<img src={`../icons/${tag}_icon.png`} />))}</div>
      <h2 className="name">{championDetail.name}</h2>
      <p className="title">{championDetail.title}</p>
      <p className="lore">{championDetail.lore}</p>
      <div className="stats" style={{ height: "50px" }}>
        <div className="attack"> <img src="../icons/Attack.png" style={{ height: "19px", width: "16px" }} /> <div className="bar" style={{ display: "inline-block", background: "#0097AA", width: `${championInfo.attack * 20}px`, height: "10px" }}></div> {championInfo.attack}</div>
        <div className="defence"> <img src="../icons/Defence.png" /> <div style={{ display: "inline-block", width: `${championInfo.defense * 20}px`, height: "10px", background: "#0097AA", }}></div> {championInfo.defense}</div>
        <div className="magic"> <img src="../icons/Magic2.png" style={{}} /> <div style={{ display: "inline-block", width: `${championInfo.magic * 20}px`, height: "10px", background: "#0097AA" }}></div> {championInfo.magic}</div>
      </div>
      <div className="ally-tips">
        <h3>Ally Tips</h3>
        <p>{championAllayTips.map(tip => (<p>{tip}</p>))}</p>
      </div>
      <div className="enemy-tips">
        <h3>Enemy Tips</h3>
        <p> {championEnemyTips.map(tip => (<p>{tip}</p>))}</p>
      </div>
    </div>
  )
}

export default Champion


