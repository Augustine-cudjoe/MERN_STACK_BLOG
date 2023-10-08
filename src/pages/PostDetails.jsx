import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';
import Comment from '../component/Comment';
const PostDetails = () => {
  return (
    <div>
    <Navbar/>
     <div className='px-8 md:px-[200px] mt-8'>
     <div className="flex justify-between items-center">
     <h1 className="text-2xl font-bold text-black md:text-3xl">10 uses of Ai in our life</h1>
        <div className="flex items-center justify-center space-x-2" >
        <p><BiEdit/></p>
        <p> <MdDelete/></p>
        </div>
        
        </div>
        <div className="flex items-center mt-2 md:mt-4 ">
        <p> @snehasishdev</p>
      <div className="flex space-x-4 text-sm">
        <p>15/40/2020</p>
        <p>16:45</p>
    </div>
        </div>
        <img src="https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.jpg?s=1024x1024&w=is&k=20&c=vKnJb_tlENfrcT5jSWRugaJv-ESAlBkTcDgiNGgFPW0="  className='w-full mx-auto mt-8'/>
       <p className='mx-auto mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas vero adipisci? Neque, dolores ab sed rerum repellat et eius inventore odit esse hic dolorem ut earum? Commodi, eos voluptatum?</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
            </div>
            
        </div>
        <div className='flex flex-col mt-4'>
            <h3 className='mt-6  mb-4 font-semibold'>Comment</h3>
             {/*Comments */}
         
          <Comment/>
        </div>
        {/*Write a comment */}
        <div className="flex  w-full flex-col mt-3 md:flex-row">
            <input type='text' placeholder='Write a comment' className='md:w-[80%] outline-none px-4 mt-4 md:mt-0'/>
         
         <button className='bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0 '>Add Comment</button>
        </div>
      </div>



    <Footer/>
    </div>
  )
}

export default PostDetails;