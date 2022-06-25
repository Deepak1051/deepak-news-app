import React, { useContext, useReducer, useEffect } from "react";

// let ApiURL = "http://hn.algolia.com/api/v1/search?";
let ApiURL =
  "https://newsapi.org/v2/everything?apiKey=d3c5d20cb4ca4b2f8e84402bdd8e8be1";

const AppContext = React.createContext();
const initialState = {
  q: "bbc",
  nbPages: 0,
  page: 0,
  articles: [],
  isLoading: true,
  ApiURL: ApiURL,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        articles: action.payload.articles,
        isLoading: false,
      };
    case "ROMOVE_POST":
      return {
        ...state,
        articles: state.articles.filter((item) => {
          return item.objectID !== action.payload;
        }),
      };
    case "GET_SEARCH":
      return {
        ...state,
        q: action.payload,
      };
    case "GET_SPORTS":
      return {
        ...state,
        ApiURL: `https://newsapi.org/v2/top-headlines?country=in&apiKey=8f90ab4efe8043d7b7a9c3f0f2f70638`,
        articles: action.payload.articles,
      };
    default:
      return 3;
  }
  // return state;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    // dispatch({ type: "GET_SEARCH" });

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          articles: data.articles,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  // to romove post
  // const removePost = (post_ID) => {
  //   dispatch({ type: "ROMOVE_POST", payload: post_ID });
  // };
  const searchHandler = (searchQuery) => {
    dispatch({ type: "GET_SEARCH", payload: searchQuery });
    console.log(state);
  };

  // custom buttons
  const handleSports = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=d3c5d20cb4ca4b2f8e84402bdd8e8be1"
    );
    const data = await res.json();
    console.log(data);
    // console.log("hello world...");
    dispatch({ type: "GET_SPORTS", payload: { articles: data.articles } });
  };

  const handleEnter = () => {};

  useEffect(() => {
    if (state.q !== "") {
      fetchApiData(`${ApiURL}&q=${state.q}`);
    }
  }, [state.q]);

  return (
    <AppContext.Provider value={{ ...state, searchHandler, handleSports }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
