import React, { useState,useEffect } from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import {ImCross} from 'react-icons/im';
import { useParams } from 'react-router-dom';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const EditPost = () => {
   
   const { id } = useParams();
   const [file, setFile] = useState(null);
   const [update,setUpdate]=useState({
      id:id,
      name:'',
      title:'',
      date:'',
      time:''
   })
   const [editorState, setEditorState] = useState(EditorState.createEmpty());
   const navigate=useNavigate()
   const handleFileUpdate = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result); 
      };
      reader.readAsDataURL(file);
    };
    useEffect(() => {
      document.title="edit"
     
     axios.get(`http://localhost:3000/blog/${id}`)
      .then(res=>{setUpdate({...update, name:res.data.name, title:res.data.title, date:res.data.date, time:res.data.time})})
      .catch(err=>console.log(err))
    }, [id]);
   
  
    const publishUpdate =(e)=> {
      e.preventDefault();
   
      const contentState = convertToRaw(editorState.getCurrentContent());
      const content = contentState.blocks.map(block => block.text).join('\n'); 
      const newPost = {...update, message:content, img:file };
        axios.put(`http://localhost:3000/blog/${id}`, newPost )
        .then(res=>{navigate('/')})
        .catch (err=> console.error('There is an error:', err)) 
       
      
    };
     
  return (
    <div className='min-h-screen'  >
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8 w-full md:pt-5 pt-16'>
           <h1 className="font-bold md:text-2xl text-xl mt-8">Update a post</h1>
           <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4" id="form"
            onSubmit={publishUpdate}>
          <div className="flex flex-col md:justify-between items-center">
            <div className="mb-3 flex flex-col items-start gap-2 w-full">
              <label htmlFor="title" className="flex items-center">
                Title
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" fill="currentColor" className="bi bi-asterisk text-rose-600 ms-2" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                  </svg>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter post title"
                className="md:px-4 py-2 border-b-2 border-black w-full outline-none hover:border-b-2 hover:border-gray-300"
                name="title"
                value={update.title}
                onChange={(e) => setUpdate({ ...update, title: e.target.value })}
                id="title"
              />
            </div>
            <div className="mb-3 flex flex-col items-start gap-2 w-full">
              <label htmlFor="date" className="flex items-center">
                Date
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" fill="currentColor" className="bi bi-asterisk text-rose-600 ms-2" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                  </svg>
                </span>
              </label>
              <input
                type="date"
                placeholder="Enter date"
                className="md:px-4 py-2 border-b-2 border-black hover:border-gray-300 hover:border-b-2 w-full outline-none"
                name="date"
                value={update.date}
                onChange={(e) => setUpdate({ ...update, date:e.target.value })}
                id="date"
              />
            </div>
          </div>
          <div className="flex flex-col md:justify-between items-center">
            <div className="mb-3 flex flex-col gap-2 w-full">
              <label htmlFor="time" className="flex items-center">
                Time
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" fill="currentColor" className="bi bi-asterisk text-rose-600 ms-2" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                  </svg>
                </span>
              </label>
              <input
                type="time"
                placeholder="Enter time"
                className="md:px-4 py-2 border-b-2 border-black border-black hover:border-gray-300 hover:border-b-2 w-full outline-none"
                name="time"
                value={update.time}
                onChange={(e) => setUpdate({ ...update, time:e.target.value })}
                id="time"
              />
            </div>
            <div className="mb-3 flex flex-col items-start gap-2 w-full">
              <label htmlFor="name" className="flex items-center">
                Name
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="0.6em" height="0.6em" fill="currentColor" className="bi bi-asterisk text-rose-600 ms-2" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
                  </svg>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="md:px-4 py-2 border-b-2 border-black w-full border-black hover:border-gray-300 hover:border-b-2 outline-none"
                name="name"
                value={update.name}
                onChange={(e) => setUpdate({ ...update, name:e.target.value })}
                id="person"
              />
            </div>
          </div>
          <div className="mb-3 w-full">
            <input type="file" className="my-3" name="img"
             onChange={ handleFileUpdate} />
          </div>
          <div className="px-4 py-2 border-b-2 border-black hover:border-gray-300 hover:border-b-2 outline-none w-full md:w-full">
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              
              wrapperClassName="wrapper-class"
              editorClassName="editor-class bg-gray-300 h-[200px] pt-[10px]"
              toolbarClassName="toolbar-class"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-gray-300 hover:bg-black items-center text-center text-white w-[200px] rounded-md font-semibold px-4 py-2 md:text-xl text-lg">
              Update
            </button>
          </div>
        </form>
        </div>


        <Footer/>
    </div>
  )
}

export default EditPost;