import React from 'react'
import { Link } from 'react-router-dom';
// import SearchForm from '../partials/SearchForm';

const Header = () => {
  return (
    <div>
      {/* <h1>Header</h1> */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/archive">Archive</Link></li>
      </ul>
      {/* <SearchForm /> */}
    </div>
  )
}

export default Header
