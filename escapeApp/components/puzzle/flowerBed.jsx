
import { useUserContext } from "../../context/nameContext";
import './puzzle.css';
import Cards from "./cards";
import { Grid } from "@mui/material";




export function Flowerbed() {

    const {currentUser, handleUpdateUser} = useUserContext();



    const gardenStyle = {
        borderColor: `${currentUser.color}`
    }

    return(
        <div className="gardenStyle" style={gardenStyle}>
               <Cards /> 
        </div>
    )
}