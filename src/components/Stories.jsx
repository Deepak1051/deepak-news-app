import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Context";
import "../app.css";
import "../pages/card.css";
const Stories = () => {
  const { articles, isLoading, q } = useGlobalContext();

  // console.log(articles);
  // console.log(articles.length);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  // if (1) {
  //   return <h1>hello world</h1>;
  // }
  // if (1) {
  //   return <h2>jello world</h2>;
  // }

  if (articles !== null) {
    return (
      <>
        <h2>Latest Tech News </h2>

        <div className="news-container container">
          {articles.map((item, index) => {
            const { title, author, url, num_comments, urlToImage } = item;
            return (
              <div className="card-wrapper" key={index}>
                <div className="card">
                  <div className="imgBx">
                    <img
                      src={urlToImage}
                      alt="logo"
                      style={{ loading: "lazy" }}
                    />
                  </div>
                  <div className="content">
                    <div className="details">
                      <h2>
                        {title}
                        <br /> <span>{author}</span>
                      </h2>

                      <div className="actionBtn">
                        <a href={url} target="_blank">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
            // return (
            //   <div className="card" key={index}>
            //     <img
            //       src={urlToImage}
            //       style={{ loading: "lazy", width: "100px" }}
            //     />
            //     <h2>{title}</h2>
            //     <p>
            //       By {author} | <span>{author}</span> comments
            //     </p>
            //     <div className="card-button">
            //       <a href={url} target="_blank">
            //         Read More
            //       </a>
            //       <a href="#" onClick={() => console.log("deleted")}>
            //         Remove
            //       </a>
            //     </div>
            //   </div>
            // );
          })}
        </div>
      </>
    );
  } else {
    return <h1>No Result Found...</h1>;
  }
};

export default Stories;
