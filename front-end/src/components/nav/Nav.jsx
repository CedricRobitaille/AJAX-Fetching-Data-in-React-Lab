import "./Nav.css"

const Nav = () => {

  return (
    <nav>
      <img src="/icons/bounty-huntr-logo.svg" alt="" />
      <h1>Bounty Huntr</h1>
      <form className="input-wrapper" onSubmit={(e) => { e.preventDefault();}}>
        <button type="submit"></button>
        <input type="search" placeholder="Get Hunting" />
      </form>
      
    </nav>
  )
}

export default Nav