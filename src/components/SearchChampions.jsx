import { useState, useEffect } from "react";
import './SearchChampions.css';
import SearchIcon from '../icons/SearchIcon';
import {Link} from 'react-router-dom';

function SearchChampions({clickedChampion, setClickedChampion}) {
    const [championNames, setChampionNames] = useState([])
    const [filteredChampionNames, setfilteredChampionNames] = useState([])
    const [championSearchInput, setChampionSearchInput] = useState("")
    
    /* 6.24.1 */
    

    useEffect(() => {
        fetch('http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json')
            .then((response) => response.json())
            .then((data) => {
                const champNames = Object.keys(data.data)
                setChampionNames(() => champNames)
                setfilteredChampionNames(() => champNames)

            })
            .catch((e) => {
            });
    }, []);




    useEffect(() => {

        setfilteredChampionNames(() => {
            if (championSearchInput === "") {
                const fullChampionList = championNames
                console.log(fullChampionList)
                return fullChampionList
            } else {
                const upperCaseChampionNames = championSearchInput.charAt(0).toUpperCase() + championSearchInput.slice(1)
                const newValues = championNames.filter(champ => champ.includes(upperCaseChampionNames))
                console.log(newValues)
                return newValues

            }
        })


    }, [championSearchInput])

    return (

        <div className="page-container">



            <div className="search-area">

                <div className="search-area-content">
                    <p className="champions">CHAMPIONS</p>
                    <div className="mastery-score-box">
                        <div className="mastery-score">
                            <p>0</p>
                            <p>TOTAL MASTERY SCORE</p>
                        </div>
                        <div className="milestones-passed">
                            <p>0</p>
                            <p>MILESTONES PASSED</p>
                        </div>
                    </div>
                    <div className="input-container">
                        <SearchIcon />
                        <input type="text" onChange={(e) => setChampionSearchInput(e.target.value)} />
                    </div>
                    <p>{championSearchInput}</p>
                </div>


            </div>
            <div className="result-area">
                <ul>
                    {filteredChampionNames.map(championName => (
                   <Link to={`/champion/${championName}`} style={{ textDecoration: 'none' }}>     <li><div style={{
                            backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg")`, backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div> <div className="champion-name">  <p className="p">{championName}</p></div></li> </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
};



export default SearchChampions

/*
{championSearchInput ? filteredChampionNames.map(element => (
    <li>{element}</li>
)): championNames.map(element => (
    <li>{element}</li>
)) } */