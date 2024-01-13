import { useContext, useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { NavigateContxt } from "../Context/NavigateContext";
const NavBar = () => {
    const {aboutref,contacthref,researchref} = useContext(NavigateContxt)
    
    const menuItems = [
        {path:"", item:"Home"},
        {path:"", item:"About",ref:aboutref},
        {path:"", item:"Research",ref:researchref},
        {path:"/publications", item:"Publications"},
        {path:"/conference", item:"Conference"},
        {path:"", item:"Contact",ref:contacthref},
    ]
    const scrollToSection = (elehref) =>{
      console.log("click")
      window.scrollTo({
        top:elehref?.current?.offsetTop,
        behavior:"instant"
      })
    }
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;
   
    const [darkMood,setDarkMood] = useState(darkThemeMq)

    useEffect(()=>{
     const htmlTag =  document.querySelector("html")
      if(darkMood){
        htmlTag.setAttribute("data-theme", "dark")
      }else{
        htmlTag.setAttribute("data-theme", "light")
      }

    },[darkMood])

      

    return (
        <header className="navbar bg-slate-900 text-white section shadow-2xl  border-b-1">
         
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-base-100  rounded-box w-52">
              
              {
                menuItems.map(menu => <li key={menu.item}><Link to={menu.path} className="text-black  " onClick={menu?.ref ? ()=>scrollToSection(menu.ref): ()=>console.log("")}>{menu.item}</Link></li>)
              }
              
             
            </ul>
          </div>
          <a className="font-semibold text-xl ">S. M. Imtiaz</a>
        </div>
        <div className="navbar-center md:mx-0 ml-auto hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {
                menuItems.map(menu => <li key={menu.item}><Link to={menu.path} onClick={menu?.ref ? ()=>scrollToSection(menu.ref): ()=>console.log("")}>{menu.item}</Link></li>)
              }
          </ul>
        </div>
        <div className="md:ml-0 ml-auto ">
                {
                 darkMood ?  <CiLight className="w-6 h-6 cursor-pointer" onClick={()=> setDarkMood(false)}/> : <CiDark className="w-6 h-6 cursor-pointer" onClick={()=> setDarkMood(true)}/>
                }
        </div>
      </header>
    );
};

export default NavBar;