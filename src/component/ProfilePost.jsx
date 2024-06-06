
import React from 'react'
import moment from 'moment';

const ProfilePost = () => {
  let datetime= moment().format('LLL')
  return (
    <div className="flex flex-col  md:flex-row  w-full mt-8 space-x-4 ">
    {/*left */}
    <div className="w-full md:w-[35%] h-[200px] flex justify-center items-center md:mb-0 mb-3">
     <img src="https://i.pinimg.com/474x/fe/5c/f3/fe5cf30aec2b23cea36355320b809ba4.jpg" alt="" className="w-full h-full object-cover"/>
    </div>
 
 
    {/*right */}
    <div className="flex flex-col md:w-[95%] lg:w-[85%] w-full ">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl ">
         10 importance of Exercises
      </h1>
      < div className="flex mb-2 gap-3 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p> @Augustine</p>
       <div className="flex space-x-4 text-sm">
         <p>{datetime}</p>
         
     </div>
      </div>
      <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam!</p>
    </div>
     </div>
  )
}

export default ProfilePost;