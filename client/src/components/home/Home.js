import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpg";
import blog_img from '../../assets/blog_img.avif'
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate=useNavigate()
  return (
    <div className='articleHome '>
      <div className="d-flex justify-content-center align-items-center">
        <div>      <img src={blog_img} alt="" className="w-100 float-lg-start" />
        </div>
      <div className="mx-auto  mt-1 " style={{color:"#6b21e0"}}>
        <h1 className=" fw-bold blog" style={{fontSize:"4rem"}}>Blog App</h1>
        <h5 className="fs-2">Transform Your Ideas into Impactful Stories with BlogApp.</h5>
        <button className="btn rounded-2 w-50 text-white mt-3" onClick={()=>navigate('/signin')} style={{backgroundColor:"#4b189a"}}>Get Started</button>
      </div>
      </div>
    </div>
  );
}

export default Home;
