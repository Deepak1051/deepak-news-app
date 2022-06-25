import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/Context";

const Search = () => {
  const { q, searchHandler } = useGlobalContext();
  // const [newsVal, setNewsVal] = useState("css");
  // const searchHandler = (e) => {
  //   setNewsVal(e.target.value);
  // };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => searchHandler(e.target.value)}
        value={q}
      />
    </div>
  );
};

export default Search;
