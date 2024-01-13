import { createContext, useRef } from "react";

export const NavigateContxt = createContext({})


const NavigateContext = ({children}) => {
    const aboutref = useRef(null) 
    const researchref = useRef(null)
    const contacthref = useRef(null)

    const allhref = {aboutref,researchref,contacthref}
    return (
        <NavigateContxt.Provider value={allhref}>
            {children}
        </NavigateContxt.Provider>
    );
};

export default NavigateContext;