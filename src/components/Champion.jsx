import { useState, useEffect } from "react";
import './SearchChampions.css';
import  Overview from './Overview'
import { useParams } from "react-router-dom";
import './Champion.css';

function Champion({ }) {
/*     const [championDetail, setChampionDetail] = useState({})
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
  

    console.log(championDetail) */
  
    const { championName } = useParams()

    return (
        <div className="champion-page-container" style={{
            backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg")`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
   <div className="image-gradient">
            <Overview/>
          
            </div>
        </div> 
    
    )
}

export default Champion


