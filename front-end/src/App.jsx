import { useState } from 'react'

import "./App.css"

import Nav from "./components/nav/Nav.jsx"
import BountyList from './components/bountyList/BountyList.jsx'


const App = () => {

  return (
    <>
      <Nav />
      <section className="primary-content">
        <BountyList />
      </section>
      
    </>
    
  )
}

export default App;