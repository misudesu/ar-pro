import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {  message, Space } from 'antd';
const RouterContext = createContext(null);
const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(RouterContext);
};

const AuthProvider = ({ children }) => {
  const [openSeting,setSeting]=useState(false)
  const [visibleCMenu,SetVisible]=useState(false);
    const [publics, setPublics] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    const notif = (type,message) => {
      messageApi.open({
        type: type,
        content: message,
        
      });
    };
  const updateDemo=(id)=>{
setPublics(id);

  }
    return (
      <RouterContext.Provider value={{ publics,notif,updateDemo,setPublics,visibleCMenu,SetVisible,setSeting,openSeting,contextHolder }}>
        {children}
      </RouterContext.Provider>
    );
  };
export  { AuthProvider, useContext };