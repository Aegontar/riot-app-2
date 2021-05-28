import { useState, useEffect } from "react";
import './Champion.css';
import { useParams } from "react-router-dom";


function Skin()  {
    const [SkinArray, setTotalSkinArray] = useState(0)
    const [championDetail, setChampionDetail] = useState({})
    const { championName } = useParams()
    const [currentSkinIndex, setCurrentSkinIndex] = useState(0) 
    const [totalSkinindex, setTotalSkinIndex] = useState()



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
  
            })
            .catch((e) => {
            });
 }, [])

 console.log(SkinArray)
    
const nextSkin = () => {
    
       if(currentSkinIndex>=0 && currentSkinIndex<totalSkinindex -1){
        setCurrentSkinIndex(oldValue => {
            const newValue = oldValue + 1
            return newValue
        }) 
      } else {
        setCurrentSkinIndex(0)
      }    

      console.log(SkinArray[currentSkinIndex]) 
} 


  

return (
    <div style={{
        backgroundImage: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${SkinArray[currentSkinIndex]}.jpg")`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    }}> <button onClick={() => nextSkin()}></button> </div>

    
)

}

export default Skin 