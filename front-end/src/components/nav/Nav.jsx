import "./Nav.css"

import { useState } from "react"

const Nav = ({ searchResults }) => {

  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchResults({ title: searchInput})
  }

  return (
    <nav>
      <img src="/icons/bounty-huntr-logo.svg" alt="" />
      <h1>Bounty Huntr</h1>
      <form className="input-wrapper" onSubmit={handleSearchSubmit}>
        <button type="submit"></button>
        <input type="search" name="search" placeholder="Get Hunting" value={searchInput} onChange={handleSearchChange} />
      </form>
      
    </nav>
  )
}

export default Nav