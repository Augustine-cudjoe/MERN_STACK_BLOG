
import { useState } from 'react';
import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

const Comment = ({postComment, onDeleteComent, onChangeComment}) => {
  return (
    <ul>
      {
        postComment.map(comment=>(
          <li className='px-2 py-2 bg-gray-200 rounded-lg my-2' key={comment.id}>
             <CommentDisplay 
             comment={comment} 
             onComment={onChangeComment} 
              onDelete={onDeleteComent} />

          </li>
        ))
      }
    </ul>
  )
}

export default Comment;

function CommentDisplay({comment, onComment, onDelete}){
   
  const [isEdit, setIsEdit]=useState(false)

  const handleCom=(e)=>{
     onComment((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
     }))
     
  }

  let commentContent;
  if(isEdit){
    commentContent=(
      <div className=' '>
        <input value={comment.name} 
         name='name'
        onChange={handleCom}/>
       <textarea rows={3}
       cols={50}
       value={comment.comment}
       name='comment'
       onChange={handleCom}
       />
 
      <button onClick={() => setIsEdit(false)} className='text-white w-[100px] text-center text-lg flex justify-center items-center mb-5'>
          update
         </button>
 
      </div>
     )

  }else{
    commentContent = (
      <>
      {comment.comment}
      <button onClick={() => setIsEdit(true)} className='flex items-center gap-2'>
      <BiEdit className='text-blue-600 text-2xl me-2'/>  Edit
      </button>
      </>
      )
  }
  
   

  return(
    < div className='flex justify-between '>
    
    <div className=''> 
      <label>
     
      {commentContent}
      <button onClick={() => onDelete(comment.id)} className='flex items-center gap-2'>
        <MdDelete className='text-rose-600 text-2xl '/> Delete
      </button>
    </label>
    </div>

    </div>
  )

}