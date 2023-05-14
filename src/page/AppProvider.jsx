import React, { Children, createContext, useContext, useState } from 'react'
const Authcontext=createContext(null)
export const useAuth=()=>{
    return useContext(Authcontext)
}
const AppProvider=({Children})=> {
 const [lading,setLanding]=useState(null);
const Onlanding=(haveLanding)=>{
    setLanding(haveLanding);
 }

  return (
   <Authcontext.Provider value={{lading,setLanding,Onlanding}}>
    {Children}
   </Authcontext.Provider>
  )
}

export default AppProvider