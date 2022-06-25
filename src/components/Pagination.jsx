import React from "react";
import { useGlobalContext } from "../context/Context";

const Pagination = () => {
  const { ApiURL, articles, handleSports } = useGlobalContext();
  const handleHadline = () => {
    console.log("hadline...");
  };
  // const handleHadline = async () => {
  //   const res = await fetch(
  //     "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d3c5d20cb4ca4b2f8e84402bdd8e8be1"
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // };

  // console.log(articles);
  console.log(articles);
  return (
    <div>
      <button onClick={handleHadline}>Headlines</button>
      <button onClick={handleSports}>Sports</button>
      <button>Entertainment</button>
    </div>
  );
};

export default Pagination;
