import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

const RouterContext = createContext(null);


const AuthProvider = ({ children }) => {

  const {id}=useParams();
    const [publics, setPublic] = useState(id);
  
    return (
      <RouterContext.Provider value={{ publics }}>
        {children}
      </RouterContext.Provider>
    );
  };
export  { AuthProvider, useContext };