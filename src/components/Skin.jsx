import { useState, useEffect } from "react";
import '../css/Champion.css';
import { useParams } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Skin() {
    const [SkinArray, setTotalSkinArray] = useState(0)
    const { championName } = useParams()
    const [currentSkinIndex, setCurrentSkinIndex] = useState(0)
    const [totalSkinindex, setTotalSkinIndex] = useState()
    const [skinNames, setSkinNames] = useState([])

    useEffect(() => {
        fetch(`http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${championName}.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log(championName)
                setTotalSkinArray(() => {
                    const SkinArray = data.data[championName].skins.map(a => a.num)
                    setTotalSkinIndex(SkinArray.length)
                    return SkinArray
                })

                setSkinNames(() => {
                    const skinNames = data.data[championName].skins.map(a => a.name)
                    console.log(skinNames)
                    return skinNames
                })

            })
            .catch((e) => {
            });
    }, [])


    const nextSkin = () => {
        if (currentSkinIndex >= 0 && currentSkinIndex < totalSkinindex - 1) {
            setCurrentSkinIndex(oldValue => {
                const newValue = oldValue + 1
                return newValue
            })
        } else {
            setCurrentSkinIndex(0)
        }
    }

    return (
        <div className="skin" >
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon " onClick={() => nextSkin()} />
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${SkinArray[currentSkinIndex]}.jpg`} style={{ height: "100%", width: "100%", objectFit: "scale-down", position: "absolute" }} />
            <p >{skinNames[currentSkinIndex]}</p>
        </div>
    )
}

export default Skin