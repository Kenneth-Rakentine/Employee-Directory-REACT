import { useState, createContext } from "react";
import employeedata from "../models/employeedata";

//create global state management
export const AppContext=createContext();

const AppContextProvider = (props) => {
//global state:
const [selected, setSelected] = useState(employeedata[0])
    return (
        <AppContext.Provider value={{
            employeedata,
            selected,
            setSelected,
        }}> 
        {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;