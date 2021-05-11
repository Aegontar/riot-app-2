import { useState, useEffect } from "react";
import './SearchChampions.css';
import { useParams } from "react-router-dom";
import './Champion.css';

function Champion({ }) {
    const [championDetail, setChampionDetail] = useState({})
    const { championName } = useParams()

    useEffect(() => {
        fetch(`http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${championName}.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log(championName)
               setChampionDetail(() => data.data[championName])
               })
            .catch((e) => {
            });
    }, []);
  

    console.log(championDetail)
  

    return (
        <div className="overview">
        
            <h2 className="name">{championDetail.name}</h2>
            <p className="title">{championDetail.title}</p>
            <p className="lore">{championDetail.lore}</p>
           
        </div>
    )
}

export default Champion


