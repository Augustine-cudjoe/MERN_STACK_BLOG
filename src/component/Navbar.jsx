 import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";

import {BsSearch} from 'react-icons/bs';
import { IoMdMenu ,IoMdClose} from "react-icons/io";

const Navbar = ({query,onQueryChange}) => {
const [open, setOpen]=useState(false)
    const menuItem=[
      {
      id:0,
      item:'Home',
      link:'/'
    },
    {
      id:1,
      item:'Post',
      link:'/createpost'
    },
    {
      id:2,
      item:'Profile',
      link:'/profile'
    },
    {
      id:3,
      item:'Login',
      link:'/login'
    }
  ]

  return (
   
    <nav className="px-5 ">
      <div >
      {/* mobile view */}
    
     <div className="  bg-white md:hidden block  ">
        
          <div className="flex  ">
            <div className="flex items-center justify-between gap-10 w-80 fixed py-2 px-0 z-[150]  w-100">
            <div className=" ">
            <Link className="flex items-center text-2xl font-normal" to="/">
               <span className=" text-2xl font-[Poppins] cursor-pointer flex items-center ">
                <img className="h-10 w-10 inline rounded-full me-2" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800" />
                 Blog
               </span>
                </Link>
                
            </div>
            <div onClick={()=>setOpen(!open)} className="text-2xl">
             {
              open?( <IoMdClose/>):(<IoMdMenu/>)
             }
            </div>
            </div>

            <div >
                 <ul  className={`${open?('transition-all duration-300 w-full fixed  h-screen right-100 left-0 top-[50px]   bg-gray-300' ):('w-0 h-0')} `}>
                 
                    <li className="flex flex-col hover:text-white  text-white items-start pt-5  ps-5 space-y-5 ">
                    {menuItem.map((item) => (
                      <NavLink 
                        key={item.id}
                        to={item.link}
                       
                       
                          
                      >
                        {item.item}
                      </NavLink>
                    ))}
                    
                  </li>
                  
                 
                 </ul>
                   
                 </div>
          </div>
       
    </div>
      {/* mobile view */}
      
    </div>
    <div className="  bg-white shadow hidden  md:flex md:items-center md:justify-between md:px-[50px] fixed z-[100] w-full top-0 py-2" id="desktop">

<div className=" flex justify-between md:items-center w-full">
 <Link to="/">
 <span className=" text-2xl font-[Poppins] cursor-pointer flex items-center">
   <img className="h-10 w-10 inline rounded-full mx-1" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800" />
   Blog
 </span>
  </Link>

</div>
<div className="w-[40%] md:w-full  md:flex justify-center items-center space-x-0 hidden">
 <p> <BsSearch/></p>
 <input className=" outline-none px-3" placeholder="Search a post" type="text" value={query} onChange={(e)=>onQueryChange(e.target.value)}/>
</div>
  
 
    <ul className='hidden md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in '>
   <li className="mx-4 my-6 md:my-0"> <Link  className=" text-xl hover:text-gray-300 duration-500 " to='/createpost'>Post</Link> </li>
   <li className="mx-4 my-6 md:my-0">  <Link  className=" text-xl hover:text-gray-300 duration-500 " to='/login'>Login</Link></li>
   <li className="mx-4 my-6 md:my-0">  <Link  className=" text-xl hover:text-gray-300 duration-500 " to='/profile'>Profile</Link></li>
  </ul>
   
 
 
    </div>
    </nav>
    
  )
}

export default Navbar;