import React from "react";
import { useGlobalContext } from "../context/Context";
import "./card.css";

const Card = (item) => {
  // const { articles, isLoading } = useGlobalContext();
  // const { title, author, urlToImage, url } = articles;
  // console.log(title, author);
  // console.log(articles);
  console.log(item.title);
  return (
    <h3>{item.title}</h3>
    // <div className="card">
    //   <div className="imgBx">
    //     <img src={urlToImage} alt="logo" />
    //   </div>
    //   <div className="content">
    //     <div className="details">
    //       <h2>
    //         {title}
    //         <br /> <span>{author}</span>
    //       </h2>
    //       <div className="data">
    //         <h3>
    //           321
    //           <br />
    //           <span>Posts</span>
    //         </h3>
    //         <h3>
    //           120k
    //           <br />
    //           <span>Follwers</span>
    //         </h3>
    //         <h3>
    //           42
    //           <br />
    //           <span>Following</span>
    //         </h3>
    //       </div>
    //       <div className="actionBtn">
    //         <a href={url}>Read More</a>
    //         <a>Message</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
