import axios from "axios";
import {axiosWithToken} from '../../axiosWithToken'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ArticlesByAuthor.css";
import { useNavigate, redirect, Outlet } from "react-router-dom";

function ArticlesByAuthor() {
  const [articlesList, setArticlesList] = useState([]);
  let navigate = useNavigate();
  let { currentUser } = useSelector(
    (state) => state.userAuthoruserAuthorLoginReducer
  );

  const getArticlesOfCurrentAuthor=async()=>{
    let res=await axiosWithToken.get(`http://localhost:4000/author-api/articles/${currentUser.username}`)
    console.log(res)
    setArticlesList(res.data.payload)
  }


  const readArticleByArticleId=(articleObj)=>{
    navigate(`../article/${articleObj.articleId}`,{state:articleObj})
  }


    useEffect(()=>{
      getArticlesOfCurrentAuthor()
    },[])

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
        {articlesList.map((article) => (
          <div className="col" key={article.articleId}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{article.title}</h3>
                <hr />
                <p className="card-text">
                  {article.content.substring(0, 100) + "...."}
                </p>
                <button className=" btn  btn-4 text-white" style={{backgroundColor:"#7a33f4"}} onClick={()=>readArticleByArticleId(article)}>
                  Read More
                </button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated on {article.dateOfModification}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ArticlesByAuthor;
