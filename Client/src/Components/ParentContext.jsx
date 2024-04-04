import React, {createContext, useState} from "react"
export const AppContext=createContext()


const ParentContext=({children}) =>{ 
  const [id,setId]=useState("")
  
  return <AppContext.Provider value={{id,setId}}>
  
    {children}
      
 </AppContext.Provider>
  
}

export default ParentContext;

