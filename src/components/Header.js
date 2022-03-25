import React from 'react'
import {Link} from 'react-router-dom'
import JSONPretty from 'react-json-pretty';


function Header() {



      return ( 

      <header className="header">
        <div className='header__screen'>
          <Link to="/Calculator" >  
            <button className='header__screen--calc'>Calculator</button>
          </Link>
          <Link to="/Todolist" >  
            <button className='header__screen--todo'>To Do List</button>
          </Link>
          <Link to="/RandomQuote" >  
            <button className='header__screen--quote'>Random Quote</button>
          </Link>
          </div>
      </header>
    )
}

export default Header
