import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Login = () => {
  useEffect(()=>{
    document.title='login'
   },[])
  return (
   <>
   <div className=" md:md-0 mb-5 ">
      <Navbar/>
    </div>
      <div className='w-full flex justify-center items-center md:pt-28 pt-16 '>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80] md:w-[25%]'>
       <h1 className='text-xl font-bold  text-left '>Login in to your account</h1>
       <input className='w-full px-4 py-2 border-2 border-black outline-0 ' type='email' placeholder='Enter your email'/>
       <input className='w-full px-4 py-2 border-2 border-black outline-0  ' type='password' placeholder='Enter your Password'/>
        <button className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'> Sign in</button>
        <div className="flex items-center justify-center space-x-4" >
         <p>New Here?</p> 
         <p className='text-gray-500 hover:text-black'><Link to='/register'>Sign Up</Link></p> 

        </div>
      </div> 
      </div>
      <Footer/>
   </>
  )
}

export default Login;