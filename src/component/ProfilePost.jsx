
import React from 'react'

const ProfilePost = () => {
  return (
    <div className="flex w-full mt-8 space-x-4 ">
    {/*left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
     <img src="https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.jpg?s=1024x1024&w=is&k=20&c=vKnJb_tlENfrcT5jSWRugaJv-ESAlBkTcDgiNGgFPW0=" alt="" className="w-full h-full object-cover"/>
    </div>
 
 
    {/*right */}
    <div className="flex flex-col w-[65%] ">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl ">
         10 uses of AI in our day life
      </h1>
      < div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p> @snehasishdev</p>
       <div className="flex space-x-4 text-sm">
         <p>15/40/2020</p>
         <p>16:45</p>
     </div>
      </div>
      <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam!</p>
    </div>
     </div>
  )
}

export default ProfilePost;