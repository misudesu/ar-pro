import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

const RouterContext = createContext(null);
const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(RouterContext);
};

const AuthProvider = ({ children }) => {

    const [publics, setPublics] = useState();
  const updateDemo=(id)=>{
setPublics(id);

  }
    return (
      <RouterContext.Provider value={{ publics,updateDemo,setPublics }}>
        {children}
      </RouterContext.Provider>
    );
  };
export  { AuthProvider, useContext };