import React,{useState} from "react";
import {Routes,Route, Router} from 'react-router-dom'
import { useAuth0, User } from '@auth0/auth0-react';
import style from "./css/main.css";
import {Users} from "./api/users"
import Table from "./api/table";




function App() {
  const [query, setQuery]= useState('');
  const keys = ['first_name','last_name','email']

  const search = (data) => {
    return data.filter(item=>
      keys.some((key)=> 
        item[key].toLowerCase().includes(query)
      )
      );
  }
  // console.log(query);
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes(query)));
  return (
    <div className="App">
      <input type='text' 
      onChange= {e=> setQuery(e.target.value)}
      placeholder="Search...">
      </input>
      {/* <ul className="list"> */}
        {/* {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user) => (
        <li className="listItem" key={user.id}>{user.first_name}</li>
        ))} */}
      {/* </ul> */}
        <Table 
        data={search(Users)}
        />
    </div>
  );
}

export default App;
