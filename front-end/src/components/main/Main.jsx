import { useState, useEffect } from "react"

import "./Main.css"

import BountyList from '../bountyList/BountyList.jsx'
import BountyResults from "../bountyResults/BountyResults.jsx"

const Main = ({ criminalList }) => {

  const [currentBounty, setCurrentBounty] = useState()  

  const handleBountySelection = async (bounty) => {
    setCurrentBounty(bounty);
  }

  return (
    <section className="primary-content">
      <BountyList criminalList={criminalList} handleBountySelection={handleBountySelection} />
      {currentBounty && <BountyResults currentBounty={currentBounty}/>}
      
    </section>
  )
}

export default Main;