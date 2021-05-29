import { createContext, useState } from "react";

export const AppContext = createContext({});

const ContextProvider = ({children}) => {
    const [showInfoText, setShowInfoText] = useState(false);

    return(
        <AppContext.Provider value={{
            showInfoText, setShowInfoText
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;