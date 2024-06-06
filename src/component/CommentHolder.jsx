import React from 'react'

function CommentHolder({onLikes,onDislike,comment}) {
  return (
    <div className="comments w-full bg-gray-300 rounded-lg mb-3" >
    <div className="flex flex-col ">
       <div className="flex  items-center justify-between  w-full p-5">
           <div className="images-content ">
               <div className="flex justify-start items-start space-x-3">
                    <div>
                    <img className='w-7 h-7 md:w-10 md:h-10 rounded-full ' src={comment.img}/>
                  
                    </div>
                   <div className='flex flex-col'>
                   <p className=' text-lg font-bold'> {comment.person}</p>
                       <p className='text-[10px] md:text-base font-normal text-slate-600'>{comment.days} </p>
                       
                   </div>
               </div>
               
           </div>
            <div>
            
            </div>
       </div>
       <p className='text-base font-normal leading-7 px-14 py-5'> 
         {comment.comment}
      </p>
    </div>
    <div className="flex  items-center space-x-3">
                           <p className='flex items-center text-xs md:text-base' onClick={()=>onLikes('up')} > {comment.likes} 
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em] text-xs md:text-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                           </svg></p>
                            <p className='flex items-center text-xs md:text-base' onClick={onLikes('down')}>{comment.dislikes} 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em] text-xs md:text-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg></p>
                         <p className='text-xs  md:text-base'>Reply </p>
    </div>
    </div>
  )
}

export default CommentHolder