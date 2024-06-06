import React,{useState} from 'react'

function AddComment({onAddComment}) {
    const [holdcomment, setHoldcomment]=useState('')
    console.log("This is my value:"+ holdcomment)
  return (
    <div className='addComment'>
        <div className="flex w-full flex-col mt-3 md:flex-row">
          <input type='text' className='border-2 border-rose-600' name='person'  value={holdcomment.person} onChange={(e)=>setHoldcomment(e.target.value)}  />
          <textarea type='text' placeholder='Write a comment' 
          className='md:w-[80%] outline-none px-4 mt-4 md:mt-0'
           name='comment'
           value={holdcomment.comment} onChange={(e)=>setHoldcomment(e.target.value)} />
          <button className=' bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0' 
          onClick={()=>{
            setHoldcomment('')
            onAddComment(holdcomment)
          }}>Add Comment</button>
        </div>
    </div>
  )
}

export default AddComment;