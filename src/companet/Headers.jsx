import { useState } from "react";
import { Link, NavLink } from "react-router-dom";



function Header() {
  const [showActionDropdown, setShowActionDropdown] = useState('hidden');
  function showActionDropdownHandler(){
  
    console.log("clicked")
    
    if(showActionDropdown=='hidden')
      setShowActionDropdown('show')
    else
      setShowActionDropdown('hidden')
  
  }
 
    return (
      <>
       
<nav className="bg-white  border-b border-gray-400  dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4">
    <Link to={'/homepage'} className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </Link>
    <button onClick={() => showActionDropdownHandler()}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    
    <div className={`${showActionDropdown}  w-full md:block md:w-auto`} id="navbar-default">
      <ul className=" font-medium  text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink  to={"/homepage"} className={({ isActive }) => isActive ? " md:text-blue-800" : ""  + "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to={'/products'} className={({ isActive }) => isActive ? " md:text-blue-800" : ""  + "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Urunlerimiz</NavLink>
        </li>
        <li>
          <NavLink to={'/contacts'} className={({ isActive }) => isActive ? " md:text-blue-800" : ""  + "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Iletisim</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</>
    )
  }
  
  export default Header
  
