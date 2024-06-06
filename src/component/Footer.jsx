
const Footer = () => {
  return (
   <div className="md:mb-0 mt-5 lg:mb-0  h-[300px]   bg-gray-300"  id="footer">
    <div className=" mt-8 w-full px-8 mb-2  border-t border-black border-b   flex md:flex-row flex-col items-start md:items-center space-y-4 md:space-y-0 justify-around text-sm  md:text-medium py-8 ">
     
       <div>
        <p className=" font-bold uppercase leading-10"> Subscribe</p>
       <div className="flex items-center flex-row">
       <input type="text" className="border bordder-b w-full h-10 outline-none p-2" placeholder="Enter your email"/>
         <button className="bg-black text-white w-[100px] h-10 font-bold"> Submit</button>
       </div>
       </div>
      <div className="flex flex-col text-black   md:mx-5 space-y-3  md:border-l md:border-black p-2 ">
       <p className="  text-base font-normal">Services</p>
        <ul>
          <li><p className=" text-base font-semibold">Shipping</p> </li>
          <li><p className="  text-base font-semibold">Blogging</p> </li>
          
       
        </ul>
      </div>
      <div className="flex flex-col text-black  md:mx-5 space-y-3  md:border-l md:border-black p-2">
       <p className=" text-base font-normal" >Account</p>
        <ul>
          <li> <p className="  text-base font-semibold">Login</p></li>
          <li> <p className="  text-base font-semibold">Signup</p></li>
        </ul>
      </div>
      <div className="flex flex-col text-black  md:mx-5 space-y-3 md:border-l md:border-black p-2 ">
       <p className=" text-base  font-normal" >Information</p>
       <ul>
        <li> <p  className=" text-base  font-semibold"> Our Story </p></li>
        <li> <p  className=" text-base  font-semibold"> Twitter</p></li>
       
       </ul>
      </div>
      <div className="flex flex-col text-black  md:mx-5 space-y-3 md:border-l md:border-black p-2 ">
       <p className=" text-base  font-normal" >Connect</p>
       <ul>
        <li> <p  className=" text-base  font-semibold"> Facebook </p></li>
        <li> <p  className=" text-base  font-semibold"> Twitter</p></li>
       
       </ul>
      </div>
      
    </div>
    <p className="py-2 pb-2 text-black    text-center">All rights reserved @log Market 2023</p>
   
   </div>
  )
}

export default Footer;