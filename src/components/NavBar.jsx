import { CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";
const NavBar = () => {

    const menuItems = [
        {path:"/", item:"Home"},
        {path:"/", item:"About"},
        {path:"/", item:"Research"},
        {path:"/", item:"Publications"},
        {path:"/", item:"Conference"},
        {path:"/", item:"Contact"},
    ]

    return (
        <header className="navbar bg-slate-900 text-white section shadow-2xl  border-b-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              
              {
                menuItems.map(menu => <li key={menu.item}><Link>{menu.item}</Link></li>)
              }
              
             
            </ul>
          </div>
          <a className="font-semibold text-xl ">S. M. Imtiaz</a>
        </div>
        <div className="navbar-center md:mx-0 ml-auto hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {
                menuItems.map(menu => <li key={menu.item}><Link>{menu.item}</Link></li>)
              }
          </ul>
        </div>
        <div className="md:ml-0 ml-auto ">
        <CiDark className="w-6 h-6"/>
        </div>
      </header>
    );
};

export default NavBar;