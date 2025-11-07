import { useState } from 'react'

import Nav from "./components/nav/Nav.jsx"
import BountyList from './components/bountyList/BountyList.jsx'

const App = () => {

  return (
    <>
      <Nav />
      <BountyList />
    </>
    
  )
}

export default App;