import { createContext } from "react";

export const shopContext = createContext();

const shopContextProvider = (props)=>{

    const value = {
            
    }

    return(
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}