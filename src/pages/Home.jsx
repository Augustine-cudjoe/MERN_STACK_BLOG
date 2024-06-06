import React,{useState, useEffect} from "react"

import HomePost, { Feacture } from "../component/HomePost"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import { Link } from "react-router-dom"
import axios from "axios"



const Home = ({postMessage}) => {

  const [data,setData]=useState([])
  const [query,setQuery]=useState("")
  
  

  const filterPost= data.filter(posts=>{
    return(
      
      posts.title.toLowerCase().includes(query.toLowerCase())

    )
  })
 

  useEffect(() => {
    document.title='home'
     axios.get("http://localhost:3000/blog")
    .then(res => setData(res.data))
  
    .catch(err=>console.log(err))
  }, []);

  

  return (
   <div className="min-h-screen">
     <Navbar query={query} onQueryChange={myquery=>setQuery(myquery)}/>
       
    
    <div className='px-8 md:px-[50px] flex flex-col  grow min-h-screen pb-10 md:pt-24 pt-20  '  id="home">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
           <div className="  md:col-span-2">
           {
         filterPost.map(postMessage=>(
         
          <Link to={`/posts/${postMessage.id}`} key={postMessage.id}>
          <HomePost   postMessage={postMessage}/>
          </Link>
         
          
        )) 
        }
           </div>
           <div>
            <Feacture/>
           </div>
        </div> 
       
      <Footer/>
    </div>
   
   </div>
  )
}

export default Home