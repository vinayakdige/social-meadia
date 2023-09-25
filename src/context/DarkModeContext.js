import { createContext, useEffect, useState } from "react";
import {json } from "react-router-dom";


export const DarModeContext = createContext()

export const  DarModeContextProvider =({children})=>{
    const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(()=>{
        localStorage.setItem("darMode",darkMode)
    },[darkMode])

        const toggle =()=>{
            setDarkMode(!darkMode)
        }
        return(
            <DarModeContext.Provider value={{darkMode, toggle}}>{children}</DarModeContext.Provider>  
        )
}

