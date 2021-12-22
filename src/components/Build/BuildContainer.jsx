import {useState } from 'react';
import {Build} from './Build.jsx';

export const BuildContainer = ({eatBanana, count}) => {
    const [isToggle, setIsToggle] = useState(false);
    const [unit, setUnit] = useState([]);
    const [unitId, setUnitId] = useState(null);
    const units = [{id: 0, Title: "Knight", Attack: 10, Defense: 10, Health: 5, Cost: 100},
                   {id: 1, Title: "Archer", Attack: 15, Defense: 5, Health: 5, Cost: 150},
                   {id: 2, Title: "Mage", Attack: 20, Defense: 1, Health: 5, Cost: 200}]

    const addUnit = () => {
        let unitData = {...units[unitId]};
        let unitCost = parseInt(unitData.Cost, 10);
        
        if (!unitId) {
            alert("Choise your unit");
        }
        else if (count < unitCost) {
            alert ("You dont have enough bananas");
        }
        else {   
            eatBanana(unitCost);
            setUnit(prevUnits => [...prevUnits, units[unitId]]);
            setIsToggle(true);
        }
    }
    const handleChange =(event) => {
        return setUnitId(event.target.value);
      }
    console.log(unit);
    return (
        <>
        <Build units={units} addUnit={addUnit} handleChange={handleChange} unit={unit} isToggle={isToggle}/>
        </>
    )
}