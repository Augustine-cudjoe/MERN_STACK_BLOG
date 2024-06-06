import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Comment from '../component/Comment';
import { Link } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';
import AddComment from '../component/AddComment';
import Mycomments from '../component/Mycomments';
import moment from 'moment';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Feacture } from '../component/HomePost';

let nextId = 3;
const comments =[
  {id:0,
    person:'evans',
   comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam'},
   {id:1,
    person:'evans',
    comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam'},
    {id:2,
      person:'evans',
      comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis blanditiis, placeat debitis vero possimus earum dicta perferendis nisi, mollitia et velit? Id vitae non rem suscipit! Necessitatibus, aliquam aperiam'}
  
  ]

const PostDetails = () => {
  const { id } = useParams();
  const [postde, setPostDe] = useState(null);
  const [postComment, setPosComment] = useState(comments);
  const navigate=useNavigate()
   console.log("This is my "+id)

   const fetchPost = async () => {
    fetch('http://localhost:3000/blog')
    .then(res=>res.json())
    .then(data=>setPostDe(data.find(post=>post.id==id)))
    .catch (error=>console.error('Error fetching post:', error)) 
    
    
  };
  useEffect(() => {
  

    fetchPost();
  }, [id]);
 
  const onDeletePost = () => {
      axios.delete(`http://localhost:3000/blog/${id}`)
       .then(()=>{
        alert('post is deleted') 
        navigate('/')

       })
   
  };

  function handleComment(comment){
    setPosComment([
      ...postComment,
      {
        id: nextId++,
        comment:comment,
        persone:person,
        done: false
      }
    ]);
  }
  function handleChangeComment(nextComment){
    setPosComment(postComment.map(comment => {
      if (comment.id === nextComment.id) {
        return nextComment;
      } else {
        return comment;
      }
    }));
  }

  function handleDeleteComment(commentId) {
    setPosComment(
      postComment.filter(comment => comment.id !== commentId)
    );
  }
  const datetime = moment().format('LLL')
  return (
    <div className='min-h-screen '>
      <Navbar />
       <div className="grid grid-cols-1 md:grid-cols-3 items-start pt-[100px] gap-[20px] px-8 md:px-[50px]">
        <div className="col-span-2">
        <div className='px-8  '>
      {
        postde?( <div>
            <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">{postde.title}</h1>
          <div className="flex items-center justify-center space-x-2">
            <p> <Link to={`/edit/${postde.id}`}> <BiEdit className='text-blue-600' /></Link></p>
            <button onClick={() => onDeletePost(postde.id)}> <MdDelete  className='text-rose-600'/> </button>
          </div>
           </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p> {postde.name}</p>
          <div className="flex space-x-4 text-sm">
            <p>{datetime}</p>
            
          </div>
        </div>
        {/* Other content */}
         <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="col-span-2">
        
        <p className='mx-auto mt-8'>{postde.message}</p>
       
          </div>
          <div>
          <img src={postde.img} className='md:w-[400px] md:h-[200px] w-full h-[300px] mx-auto my-8' alt="Post Image" />
        
          </div>
         </div>
        {/* Categories 
        
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2">
            {postde.categories.map((category, index) => (
              <div key={index} className="bg-gray-300 rounded-lg px-3 py-1">{category}</div>
            ))}
          </div>
        </div>
        */}
         
        {/* Comments */}
        <div className='flex flex-col mt-4 hidden'>
          <h3 className='mt-6 mb-4 font-semibold'>Comments</h3>
           <AddComment  onAddComment={handleComment}/>
          <Comment  postComment={postComment}
          onChangeComment={handleChangeComment}
          onDeleteComent={handleDeleteComment}/>
        </div>
        {/* Write a comment */}
        
          </div>) : (<div>No post found for ID: {id}</div>)
      }
       <Mycomments/>
      </div>
        </div>
        <div>
          <Feacture/>
        </div>
       </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
