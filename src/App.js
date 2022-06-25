import { AppContext } from "./context/Context"
import { useState } from "react";
import './app.css'
import Pagination from './components/Pagination';
import Search from './components/Search';
import Stories from './components/Stories';

function App() {

  return (
    <>
      <h1>Welcome to Deepak  News Application</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;




