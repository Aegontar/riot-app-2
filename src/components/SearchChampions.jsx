import { useState, useEffect } from "react";
import './SearchChampions.css'
import SearchIcon from '../icons/SearchIcon'

function SearchChampions() {
    const [championNames, setChampionNames] = useState([])
    const [filteredChampionNames, setfilteredChampionNames] = useState([])
    const [championSearchInput, setChampionSearchInput] = useState("")

    useEffect(() => {
        fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
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


        /*      setfilteredChampionNames(() => {
                 const upperCaseChampionNames = championSearchInput.charAt(0).toUpperCase() + championSearchInput.slice(1)
                 const newValues = championNames.filter(champ => champ.includes(upperCaseChampionNames))
                 const fullChampionList = championNames
                 if (championSearchInput === "") {
                     console.log(fullChampionList)
                     return fullChampionList
                 } else if (championSearchInput !== "") {
                     return newValues
                 }
             }) */



    }, [championSearchInput])


    return (

        <div id="page-container">

  

            <div id="search-area">
            
            <div id="search-area-content">
                <p className="champions">CHAMPIONS</p>
                <div id="mastery-score-box">
                    <div id="mastery-score">
                    <p>0</p>
                    <p>TOTAL MASTERY SCORE</p>
                    </div>
                    <div id="milestones-passed">
                     <p>0</p>
                     <p>MILESTONES PASSED</p>
                     </div>
                </div>
                <div id="input-container">
                <SearchIcon />
                <input type="text" onChange={(e) => setChampionSearchInput(e.target.value)} />
                </div>
                <p>{championSearchInput}</p>
            </div>
           
            
            </div>
            <div id="result-area">
                <ul>
                    {filteredChampionNames.map(championName => (
                        <li style={{ backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg")`,  backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}><p>{championName}</p></li>
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