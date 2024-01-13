import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavigateContext from "../Context/NavigateContext";


const Layout = () => {
    return (
        
        <NavigateContext>
                    <NavBar/>
                    
            <main className="mt-8">

                <Outlet some="some"/>
                
            </main>
    
            
        </NavigateContext>
        
        
    );
};

export default Layout;