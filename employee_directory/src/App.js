import React, {useState, useEffect} from "react";
import Main from "./pages/Index";
import Table from "./components/Table";
import SearchBar from "./components/search";

import "./App.css";

import api from "./utils/API";

function App() {
  const[users, setUsers]=useState();
  const[search, setSearch]=useState();

  return (
    <div className="App">
      <Main/>
      <SearchBar users={users} search={search}/>
      <Table users={users} search={search} handleInputChange={handleInputChange}/>
    </div>
  );
}

export default App;