import React, { useEffect, createContext, useState } from "react";


const LayoutContext = createContext();
function LayoutProvider({ children }) {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    useEffect(() => {
        const handleWidth = () => {
            const width =document.body.clientWidth
            return (width <= 768)
        }
        
        setIsMobileScreen(handleWidth())
    })
    const value = [isMobileScreen, setIsMobileScreen]
    return (
        <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
    )
}
function useLayout() {
    const context = React.useContext(LayoutContext)
    if (context === undefined) {
        throw new Error('useLayout must be used within a LayoutProvider')
    }
    return context
}
export { LayoutProvider, useLayout }