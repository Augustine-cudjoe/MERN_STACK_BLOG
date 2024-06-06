
import React from "react"
import moment from "moment"
const fect=[{
  id:0,
  img:' https://blog.hubspot.com/hs-fs/hubfs/social-media-content-calendar.png?width=1190&height=800&name=social-media-content-calendar.png',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')

},
{
  id:1,
  img:' https://blog.hubspot.com/hs-fs/hubfs/social-media-content-calendar.png?width=1190&height=800&name=social-media-content-calendar.png',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
{
  id:2,
  img:' https://blog.hubspot.com/hs-fs/hubfs/social-media-content-calendar.png?width=1190&height=800&name=social-media-content-calendar.png',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
{
  id:3,
  img:' https://blog.hubspot.com/hs-fs/hubfs/social-media-content-calendar.png?width=1190&height=800&name=social-media-content-calendar.png',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
{
  id:4,
  img:' https://blog.hubspot.com/hs-fs/hubfs/social-media-content-calendar.png?width=1190&height=800&name=social-media-content-calendar.png',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
]
const latest=[{
  id:0,
  img:'https://blog.hubspot.com/hs-fs/hubfs/PharmaceuticalAdvertising.webp?width=1190&height=800&name=PharmaceuticalAdvertising.webp',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')

},
{
  id:1,
  img:'https://blog.hubspot.com/hs-fs/hubfs/PharmaceuticalAdvertising.webp?width=1190&height=800&name=PharmaceuticalAdvertising.webp',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
{
  id:2,
  img:'https://blog.hubspot.com/hs-fs/hubfs/PharmaceuticalAdvertising.webp?width=1190&height=800&name=PharmaceuticalAdvertising.webp',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
{
  id:3,
  img:'https://blog.hubspot.com/hs-fs/hubfs/PharmaceuticalAdvertising.webp?width=1190&height=800&name=PharmaceuticalAdvertising.webp',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
{
  id:4,
  img:'https://blog.hubspot.com/hs-fs/hubfs/PharmaceuticalAdvertising.webp?width=1190&height=800&name=PharmaceuticalAdvertising.webp',
  name:'Bright Normal',
  post:' The Social Media Content Calendar Template Every Marketer Needs',
  date:moment().format('LL')
},
]

const HomePost = ({postMessage}) => {
  const date=moment().format('LL');

  return (
    
      <div className="flex flex-col md:flex-row w-full md:mt-8 md:space-x-4 mb-3  md:pt-10  border border-gray-300 rounded-lg ">
   {/*left */}
   <div className="w-full md:w-[35%] h-[200px]  flex  justify-center items-center border-b  border-gray-300 p-2">
    <img src={postMessage.img} alt="" className="w-full h-full md:h-[150px] object-cover"/>
   </div>


   {/*right */}
   <div className="flex flex-col w-full  md:w-[65%]  p-2">
     <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl ">
        {postMessage.title}
     </h1>
     < div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
      <p className="flex items-center gap-2"> <span> {postMessage.post}</span> {postMessage.name}</p>
      <div className="flex space-x-4 text-sm">
        <p>{date}</p>
       
    </div>
     </div>
     <p className="text-sm md:text-lg">
        {postMessage.message}
      </p>
      
   </div>
    </div>
    

    
  )
}

export default HomePost


export function Feacture(){

  return(
    <div className="flex flex-col  px-2">
        <h4 className="text-2xl font-bold  border-b-2 border-red-500 mb-5 ">Featured Articles </h4>
         <div>
          {
            fect.map((items)=>(
              <div className="flex items-center justify-between mb-5" key={items.id}>
               <div  className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <img src={items.img} className=" w-full md:w-[40%] "/>
                <div className="">
                  <p className="text-sm font-bold mb-2 hover:underline"> {items.post}</p>
                  <p className="flex items-center justify-between text-xs">

                    <span>{items.name} </span>
                    <span>{items.date} </span>

                  </p>
                </div>
                </div>
                
              </div>
            ))
          }
         </div>

         <div className="pt-10">
         <h4 className="text-2xl font-bold  border-b-2 border-red-500 mb-5 ">Latest Articles </h4>
         
           <div>
           {
            latest.map((items)=>(
              <div className="flex items-center justify-between mb-5" key={items.id}>
               <div  className="flex   flex-col lg:flex-row lg:justify-between items-center gap-10">
                <img src={items.img} className="w-full md:w-[40%]  "/>
                <div className="">
                  <p className="text-sm font-bold mb-2 hover:underline"> {items.post}</p>
                  <p className="flex items-center justify-between text-xs">

                    <span>{items.name} </span>
                    <span>{items.date} </span>

                  </p>
                </div>
                </div>
                
              </div>
            ))
          }
           </div>
         </div>
    </div>
  )

}