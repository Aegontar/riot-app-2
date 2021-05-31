import { useState, useEffect } from "react";
import './Champion.css';
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

    console.log(SkinArray)

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
    const nextName = () => {
        alert('hi')

    }

    return (

        <div className="skin" >
            <p>{skinNames[currentSkinIndex]}</p>  <FontAwesomeIcon icon={faChevronRight} className="arrow-icon " onClick={() => nextSkin()} />
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${SkinArray[currentSkinIndex]}.jpg`} style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: '+10' }} />
        </div>
    )
}

export default Skin