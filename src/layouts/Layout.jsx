import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const Layout = () => {
    return (
        <div className="">
                    <NavBar/>
                    
            <main className="mt-8">

                <Outlet/>

            </main>
    
            
        </div>
    );
};

export default Layout;