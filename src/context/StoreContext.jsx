import {  createContext, useState } from "react";
import { restaurant_list  } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const contextValue = {
        restaurant_list 
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}  {/* Correct way to render children */}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;