import React,{useState} from 'react'
import axios from 'axios'
import CommentHolder from './CommentHolder'
import { comment } from 'postcss'
export default function Mycomments() {
    const comments =[
        {id:0,
          person:'evans',
          days:'10 days ago',
          likes:10,
          dislike:0,
          img:'https://i.pinimg.com/474x/39/92/db/3992db3db9d4eeac0c0f24ebb1c1d3b2.jpg',
         comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam'},
         {id:1,
          person:'Wills',
          days:'1 days ago',
          likes:10,
          dislike:2,
          img:'https://i.pinimg.com/474x/39/92/db/3992db3db9d4eeac0c0f24ebb1c1d3b2.jpg ',
          comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam'},
          {id:2,
            person:'Shalom',
            days:'20 days ago',
            likes:50,
            dislike:4,
            img:'https://i.pinimg.com/474x/39/92/db/3992db3db9d4eeac0c0f24ebb1c1d3b2.jpg',
            comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam'
          },
          {id:3,
            person:'Shalo',
            days:'20 days ago',
            likes:10,
            dislike:1,
            img:'https://i.pinimg.com/474x/39/92/db/3992db3db9d4eeac0c0f24ebb1c1d3b2.jpg',
            comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam'
          }
        
        ]

    
    const [commentpost,setCommentpost]=useState(comments)


    const handleLikes = (id, action) => {
      setCommentpost((prev) =>
      prev.map((item) =>
          item.id === id
              ? { ...item, likes: action === 'up' ? item.likes + 1 : item.likes - 1  }
              : item
      )
  );
  };




  return (
    <div className='mycomments w-full '>
        <p className="text-2xl font-bold text-black my-8">Comments</p>
     {
        commentpost.map(comment=>(
          <div className="comments w-full bg-gray-300 rounded-lg mb-3" key={comment.id}>
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
          <div className="flex  items-center space-x-3 p-5">
                                 <button className='bg-light rounded-full flex items-center gap-5 justify-between'>
                                 <span className='flex items-center text-xs md:text-base' onClick={() => handleLikes(comment.id, 'up')} > {comment.likes} 
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em] text-xs md:text-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                 </svg></span>
                                  <span  className={`flex items-center text-xs md:text-base `}
                            onClick={comment.likes > 0 ? () => handleLikes(comment.id, 'down') : 0}> 
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em] text-xs md:text-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                            </svg></span>
                                 </button>
                               <p className='text-xs  md:text-base'>Reply </p>
          </div>
          </div>
        ))
     }
     
     <div className=' flex flex-col border-2 border-gray-300  p-5 space-y-5 rounded-lg'>
    <div className="flex items-center  space-x-3  ">
        <img className=' w-10 h-10 rounded-full'  src='https://i.pinimg.com/564x/6e/58/47/6e584718e75889b879160d69fea23dd6.jpg'/>
        <p className='font-bold text-lg '>Augustine </p>
    </div>
       <div className='   ' >
       <textarea  rows={5} cols={10}  className='p-5 bg-gray-300  active:bg-gray-300 w-full outline-none' />
       </div>
       <div className="flex justify-end">
        <button type='submit' className=' w-[100px] h-[50px] bg-black text-white text-bold'> Submit</button>
       </div>
     </div>
    </div>
  )
}

