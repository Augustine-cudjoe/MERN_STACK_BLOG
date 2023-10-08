
const Footer = () => {
  return (
   <>
    <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col items-start space-y-4 md:space-y-0 justify-between text-sm  md:text-md py-8 ">
      <div className="flex flex-col text-white mx-5 md:mx-5 ">
       <p>Feature Blogs</p>
       <p>Most viewed</p>
       <p>Readers choice</p>
      </div>
      <div className="flex flex-col text-white mx-5 md:mx-5">
       <p>Forum</p>
       <p>Support</p>
       <p>Recent Posts</p>
      </div>
      <div className="flex flex-col text-white mx-5 md:mx-5">
       <p>Privacy   Policy</p>
       <p>About Us</p>
       <p>Terms & Conditions</p>
       <p>Terms & Services</p>
      </div>

    </div>
    <p className="py-2 pb-2 text-white bg-black  text-center">All rights reserved @log Market 2023</p>
   </>
  )
}

export default Footer;