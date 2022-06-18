import React, { createContext } from "react";

export const AutheContext = createContext();


const AutheContextProvider = ({children}) => {
   
        const jwt = localStorage.getItem('auth-token')
        const userId = localStorage.getItem('id')
    
       

    const authValues = {
        jwt,
        userId,
    }
    return(
        <AutheContext.Provider value={authValues}>
            {
                children
            }
        </AutheContext.Provider>
        )
}

export default AutheContextProvider;