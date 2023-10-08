import HomePost from "../component/HomePost"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Home = () => {
  return (
   <>
     <Navbar/>
    <div className="px-8 md:px[200px]">
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
    </div>
    <Footer/>
   </>
  )
}

export default Home